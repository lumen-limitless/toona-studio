// pages/api/get_related_words.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import demographics from '@/json/demographics.json'
import { NextRequest, NextResponse } from 'next/server'

async function fetchNouns(word: string): Promise<string[]> {
  try {
    const response = await fetch(
      `https://api.datamuse.com/words?rel_jja=${word}&max=2`
    )
    const data = await response.json()
    return data.map((item: { word: string }) => item.word)
  } catch (error) {
    console.error('Error fetching related words:', error)
    return []
  }
}

async function generateDemographic(): Promise<string> {
  const randomIndex = Math.floor(Math.random() * demographics.length)
  return demographics[randomIndex]
}

export async function GET(req: NextRequest) {
  if (req.method === 'GET') {
    const { word } = await req.json()

    if (typeof word !== 'string') {
      return NextResponse.json({
        message:
          'Bad Request: Word parameter is required and must be a string.',
      })
      return
    }

    const nouns = await fetchNouns(word)

    const demographic = await generateDemographic()

    return NextResponse.json({ message: [...nouns, demographic] })
  }
}
