const VARIANTS = {
  primary: 'bg-indigo text-white',
  secondary: 'ring-2 ring-dark text-dark',
  footer: 'bg-light text-dark backdrop-blur-xs',
}
interface ButtonProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    'className' | 'children'
  > {
  children?: React.ReactNode
  className?: string
  variant?: keyof typeof VARIANTS
  full?: boolean
}
export default function Button({
  children,
  className = '',
  color = 'none',
  variant,
  full = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        VARIANTS[variant || 'primary'],
        full && 'w-full',
        'inline-flex items-center justify-center rounded-full  transition focus:outline-none enabled:drop-shadow-md hover:enabled:brightness-125 disabled:cursor-not-allowed disabled:bg-opacity-20 disabled:text-opacity-60  ',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}
