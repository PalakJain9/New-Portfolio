import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Jost } from "next/font/google"
import Link from "next/link";
import React from "react"

const jost = Jost({ 
  subsets: ['latin'],
  variable: '--font-jost',
})

export default function Navbar () {

  const [isScreenScrolled, setIsScreenScrolled] = React.useState(false);

  function addColorToNav () {
    window.scrollY >=100 ? setIsScreenScrolled(true) : setIsScreenScrolled(false)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', addColorToNav);
    return () => {
      window.removeEventListener('scroll', addColorToNav)
    }
  },[])

  return (
    <div
      className={`z-30 fixed top-0 flex flex-row justify-between items-center w-full py-[2rem] universalPadding border-b-[0.05rem] border-gray-700 text-white
      ${isScreenScrolled ? "bg-darkBlue glow" : "bg-transparent"}
    `}
    >
      <p>Palak Jain</p>

      <div
        className="z-30 flex flex-row gap-4 justify-end items-center"
      >
        <Link
          href="#contact"
          > <p>contact</p>
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger
            className="z-30 relative"
          > &#9776;
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className={`z-30 absolute top-100 right-0 bg-darkBlue text-white ${jost.variable} font-sans border-gray-800`}
          >
            <DropdownMenuItem>Blogs</DropdownMenuItem>
            <DropdownMenuItem>Contact</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}