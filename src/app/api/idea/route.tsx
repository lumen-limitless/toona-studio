import demographics from './demographics.json'
import nouns from './nouns.json'
import technology from './technology.json'
import { NextRequest, NextResponse } from 'next/server'

async function generateWordFromList(list: string[]): Promise<string> {
  const randomIndex = Math.floor(Math.random() * nouns.length)
  return list[randomIndex]
}

export async function GET(req: NextRequest) {
  if (req.method === 'GET') {
    const msg = await Promise.all([
      generateWordFromList(technology),
      generateWordFromList(nouns),
      generateWordFromList(nouns),
      generateWordFromList(demographics),
    ])

    return NextResponse.json({ message: msg })
  }
}
