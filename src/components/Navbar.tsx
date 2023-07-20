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
  let dropdownTextStyke = "text-lg font-normal cursor-pointer hover:underline decoration-gray-100";
  
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
      className={`z-30 fixed top-0 flex flex-row justify-between items-center w-full py-[2rem] universalPadding border-b-[0.05rem] border-gray-700 text-white overflow-hidden
      ${isScreenScrolled ? "bg-darkBlue glow" : "bg-transparent"}
    `}
    >
      <Link
          href="/"
          > <p>Palak Jain</p>
        </Link>

      <div
        className="z-30 flex flex-row gap-4 justify-end items-center"
      >
        <Link
          href="#contact"
          className="hover:underline underline-offset-4"
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
            <Link href='#skills'>
              <DropdownMenuItem 
                className={dropdownTextStyke}
              > Skills
            </DropdownMenuItem>
            </Link>

            <Link href='#blogs'>
            <DropdownMenuItem
              className={dropdownTextStyke}
              > Blogs
            </DropdownMenuItem>
            </Link>

            <Link href='#community'>
            <DropdownMenuItem
               className={dropdownTextStyke}
              > Community
            </DropdownMenuItem>
            </Link>

          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}