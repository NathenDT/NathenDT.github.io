import { useEffect } from 'react'

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  children?: React.ReactNode
  className?: string
}

export default function Header({ children, className }: Props) {
  useEffect(() => {
    const onScroll = () => {}
    // clean up code
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`flex h-screen w-screen snap-start flex-col justify-center ${className}`}
      onWheel={() => {}}
    >
      <div className="mx-auto my-0 w-full text-default sm:w-[600px] [&>*]:m-1 [&>*]:font-bold">
        <p className="m-1 text-9xl font-normal">Hi, I'm</p>
        {children}
      </div>
    </div>
  )
}
