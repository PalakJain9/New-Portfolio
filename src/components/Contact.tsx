import { GithubIcon, LinkedinIcon, MailCheckIcon, PenToolIcon } from "lucide-react";
import Link from "next/link";

export default function Contact () {
  return (
    <div
      className="bg-darkBlue glow flex flex-col gap-5 justify-start items-start universalPadding pt-[2rem] pb-[4rem] text-gray-100"
    >
      <h1
        className="text-[3rem] md:text-[5rem] lg:text-[6rem] font-semibold text-gray-500"
        > contact
      </h1>
      <p
        className="text-base md:text-xl"
      > Connect with me if you want to create something extraordinary.⚡
      </p>

      <div
        className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
      >
        <div className="flex flex-row gap-4 justify-start items-center">
          <Link
            href="mailto:palakb188@gmail.com"
          >
            <MailCheckIcon />
          </Link>
          <Link
            href='https://www.linkedin.com/in/palakjain9'
          >
            <LinkedinIcon />
          </Link>
          <Link
            href='https://github.com/PalakJain9'
          >
            <GithubIcon />
          </Link>
          <Link
            href='https://palakjain.hashnode.dev/'
          >
            <PenToolIcon />
          </Link>
        </div>
        <p
          className="text-gray-400 md:text-gray-100"
          > Palak Jain
        </p>
      </div>
    </div>
  )
}