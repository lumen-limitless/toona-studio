export default function Container({
  children,
  className = '',
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  return (
    <div
      className={[className, 'container mx-auto flex px-4 md:px-12 lg:px-36']
        .filter(Boolean)
        .join(' ')}
      id={id}
    >
      {children}
    </div>
  )
}
