const VARIANTS = {
  primary: 'bg-indigo text-white',
  secondary: 'ring-2 ring-dark text-dark',
  footer: 'bg-light text-dark backdrop-blur-xs',
}

const SIZE = {
  sm: 'py-2 px-3 text-base',
  md: 'py-3 px-4 text-base',
  lg: 'py-5 px-6 text-base',
  compact: 'w-48 h-16',
  main: 'w-72 h-16',
}
interface ButtonProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    'className' | 'children'
  > {
  children?: React.ReactNode
  className?: string
  variant?: keyof typeof VARIANTS
  size?: keyof typeof SIZE
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
        SIZE[props.size || 'md'],
        full && 'w-full',
        'inline-flex items-center justify-center gap-1 rounded-full  transition focus:outline-none enabled:drop-shadow-md hover:enabled:brightness-125 disabled:cursor-not-allowed disabled:bg-opacity-20 disabled:text-opacity-60  ',
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
