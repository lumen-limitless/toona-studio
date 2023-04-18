// components/FlexSection.tsx
import React from 'react'

interface FlexSectionProps {
  children: React.ReactNode
  fullscreen?: boolean
  centered?: boolean
  col?: boolean
  id?: string
  className?: string
}

interface ContainerProps {
  children: React.ReactNode
  col?: boolean
  className?: string
}

const FlexSection: React.FC<FlexSectionProps> & {
  Container: React.FC<ContainerProps>
} = ({ children, className, fullscreen, centered, col, id, ...props }) => {
  const sectionClasses = [
    'relative flex h-full w-full flex-grow items-center',
    col ? 'flex-col' : 'flex-row',
    fullscreen && 'min-h-screen',
    centered ? 'justify-center' : 'justify-start',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section className={sectionClasses} {...props} id={id}>
      {children}
    </section>
  )
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  col,
  ...props
}) => {
  const containerClasses = [
    'container mx-auto flex flex-grow',
    col ? 'flex-col' : 'flex-row',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={containerClasses} {...props}>
      {children}
    </div>
  )
}

FlexSection.Container = Container
FlexSection.displayName = 'FlexSection'

export default FlexSection
