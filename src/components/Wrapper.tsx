import {
  FaCode,
  FaEnvelope,
  FaFile,
  FaGraduationCap,
  FaHome,
} from 'react-icons/fa'

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  children?: React.ReactNode
}

export default function Wrapper({ children, ...extraProps }: Props) {
  return (
    <div
      className="mx-auto my-0 flex snap-x snap-mandatory flex-col"
      {...extraProps}
    >
      <NavBar>
        <div className="grow"></div>

        <NavBarButton>
          <FaHome className="mr-1 -ml-1 h-4 w-4 text-default" />
          Greeting
        </NavBarButton>

        <NavBarButton>
          <FaCode className="mr-1 -ml-1 h-4 w-4" />
          Projects
        </NavBarButton>

        <NavBarButton>
          <FaGraduationCap className="mr-1 -ml-1 h-4 w-4" />
          Education
        </NavBarButton>

        <NavBarButton>
          <FaEnvelope className="mr-1 -ml-1 h-4 w-4" />
          Contact
        </NavBarButton>

        <NavBarButton>
          <FaFile className="mr-1 -ml-1 h-4 w-4" />
          Resume
        </NavBarButton>
      </NavBar>
      {children}
    </div>
  )
}

type NavBarProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  children?: React.ReactNode
}

function NavBar({ children, ...extraProps }: NavBarProps) {
  return (
    <nav
      className="fixed top-0 mx-auto my-0 flex w-full p-1 text-default backdrop-blur-lg sm:w-[600px]"
      {...extraProps}
    >
      {children}
    </nav>
  )
}

type NavBarButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children?: React.ReactNode
}

function NavBarButton({ children, ...extraProps }: NavBarButtonProps) {
  return (
    <button
      className="mr-3 inline-flex items-center border-b-2 border-transparent font-bold transition duration-150 hover:border-purple-500"
      {...extraProps}
    >
      {children}
    </button>
  )
}
