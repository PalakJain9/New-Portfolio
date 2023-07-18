import { CircleDollarSignIcon, EditIcon, FigmaIcon, Globe2Icon, SparklesIcon, ZapIcon } from "lucide-react"
import Link from "next/link"

export default function Skills() {

  let parentContainerStyle = "w-full lg:w-11/12 flex flex-col md:flex-row gap-4 justify-center items-center";
  let containerStyle = "w-full flex flex-col justify-center items-start md:h-[25rem] gap-5 text-base md:text-lg bg-white border border-gray-200 p-[1rem]";
  let headingStyle = "text-xl md:text-2xl lg:text-4xl font-bold text-blue";
  let textStyle="text-lg lg:text-xl";
  let iconStyle = "inline-block pl-[0.5rem] text-base md:text-xl lg:text-2xl font-bold text-orange";

  return (
    <div
      className="pt-[2.5rem] md:pt-[4rem] pb-[4.5rem] flex flex-col gap-4 justify-center items-center w-full h-full bg-white universalPadding polkaDot"
    >
      <p
        className="text-[4rem] md:text-[5.5rem] lg:text-[7rem] font-bold text-gray-300"
        data-aos="fade-up"
      >
        know me
      </p>

      <div className={parentContainerStyle}>
        
        <div
          id="skills"
          className={`${containerStyle} md:w-7/12`}
        >
          <p
            className={headingStyle}
            > my tech stack
              <span className={iconStyle}>
                <ZapIcon />
              </span> 
          </p>
          <p
            className={textStyle}
          >
            <span className="font-medium">Languages</span>: TypeScript, JavaScript, Java, C <br />
            <span className="font-medium">Client-side</span>: Next.js, React, HTML, CSS, Tailwind CSS <br />
            <span className="font-medium">Server-side</span>: Node.js, Next.js, Express, Mongoose, Prisma <br />
            <span className="font-medium">Databases
            </span>: MySQL, MongoDB <br />
            <span className="font-medium">Developer Tools</span>: Git, GitHub, VS Code, MS-365, Figma, Vite, NPM
          </p>
        </div>

        <div className={`${containerStyle} md:w-5/12`}>
          <p className={headingStyle}>
            state level representative of solutions for climatic change
            <span className={iconStyle}>
              <Globe2Icon />
            </span>
          </p>

          <p
            className={textStyle}
          >
            developed a detailed report on climatic change which got recognised among the top 250 projects selected from my state for a national level science competition.
          </p>
        </div>
      </div>

      {/* row2 */}
      <div className={parentContainerStyle}>
        
        <div
          id="blogs"
          className={`${containerStyle} md:w-5/12`}
        >
          <p
            className={headingStyle}
            > blogs
              <span className={iconStyle}>
                <EditIcon />
              </span> 
          </p>

          <Link href="https://palakjain.hashnode.dev/nextjs-13-routing-a-complete-guide-to-mastering-dynamic-and-nested-routes" target="_blank" rel="noopener noreferrer">
            <p className={`underline hover:text-blue ${textStyle}`}
            >
              Next.js 13 Routing: A Complete Guide to Mastering Dynamic and Nested Routes
            </p>
          </Link>

          <Link href="https://palakjain.hashnode.dev/4-linkedin-hacks-you-cant-miss-at-all" target="_blank" rel="noopener noreferrer">
            <p className={`underline hover:text-blue ${textStyle}`}
            >
              {`4 LinkedIn Hacks You Can't Miss At All.`}
            </p>
            </Link>
            <p>and more</p>
        </div>

        <div className={`${containerStyle} md:w-7/12`}>
          <p className={headingStyle}>
            improved growth of a startup by reporting bugs
            <span className={iconStyle}>
              <CircleDollarSignIcon />
            </span> 
          </p>

          <p
            className={textStyle}
          >
            {`contributed significantly to a startup's growth by improving the overall experience of 10,000+ users by reporting 2 bugs and providing 7+ feedback.`}
          </p>
        </div>
      </div>

      {/* row3 */}
      <div className={parentContainerStyle}>
        
        <div
          id="community"
          className={`${containerStyle} md:w-7/12`}
        >
          <p
            className={headingStyle}
            > content head @Google developer student clubs
            <span className={iconStyle}>
              <SparklesIcon />
            </span> 
          </p>

          <p
            className={textStyle}
          >
          strengthened the technical community by 31% by leading a team of 14 women and encouraged 2000+ women to learn new technologies by successfully organizing 6+ mega events. <br /> <br />
          
          Google Developer Student Clubs are university based community groups for students interested in Google developer technologies.
          </p>
        </div>

        <div className={`${containerStyle} md:w-5/12`}>
          <p className={headingStyle}>
            building &#38; growing friends of figma
            <span className={iconStyle}>
              <FigmaIcon />
            </span> 
          </p>

          <p
            className={textStyle}
          >initiated the very first friends of figma chapter in Punjab. stay tuned for more updates.</p>
        </div>
      </div>

    </div>
  )
}