import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Jost } from "next/font/google"

const jost = Jost({ 
  subsets: ['latin'],
  variable: '--font-jost',
})

export default function Navbar () {
  return (
    <div
      className="absolute top-0 flex flex-row justify-between items-center w-full bg-transparent py-[2rem] universalPadding border-b-[0.05rem] border-gray-700 text-white"
    >
      <p>Palak Jain</p>

      <DropdownMenu>
        <DropdownMenuTrigger
          className="z-30 relative text-2xl font-light"
        > =
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className={`z-30 absolute right-0 bg-darkBlue text-white ${jost.variable} font-sans font-normal border-gray-800`}
        >
          <DropdownMenuItem>Blogs</DropdownMenuItem>
          <DropdownMenuItem>Contact</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

    </div>
  )
}