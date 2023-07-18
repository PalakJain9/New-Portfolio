import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

let accordianTextStyle = "flex flex-col justify-center items-start text-lg md:text-xl gap-2"

function Recruitify () {
  return (
    <div
      data-aos="fade-up"
      className="w-full flex gap-5 flex-col justify-start items-start"
    >

    <div
      className="flex gap-5 flex-col lg:flex-row justify-between items-center"
    >
      <div
        className="w-full lg:w-1/3 flex flex-col justify-start items-start gap-2"
      >
        <h2
          className="text-2xl md:text-4xl text-orange"
          > Recruitify
        </h2>

        <p
          className="text-darkBlue text-xl md:text-2xl font-medium"
          > the shopify for universities, built to maximise recruitments&apos; success
        </p>

        <div
          className="py-[1.5rem] w-full flex flex-row gap-5 justify-start items-center"
        >
          <Link 
            href="https://recruitify.vercel.app/"
            className="hover:underline underline-offset-2"
            > View Live Site
          </Link>

          <Link 
            href="https://github.com/PalakJain9/Recruitify"
            className="hover:underline underline-offset-2"
            > GitHub
          </Link>
        </div>
      </div>

      <Image
        data-aos="zoom-in"
        alt="recruitify preview"
        src="/recruitify.PNG"
        width={1440}
        height={1440}
        className="w-full lg:w-2/3 h-full hover:scale-105 transition-all duration-300 ease-in-out border-2 border-gray-100"
      />

    </div>

      <Accordion type="single" collapsible className="w-full text-base lg:text-lg">

        <AccordionItem value="item-1">
          <AccordionTrigger>
            What was the problem?
          </AccordionTrigger>
          <AccordionContent>
            <div className={accordianTextStyle}>
              <p>
                Millions of students with their numerous dreams, sit for placements every year. Every company has its own unique way to recruit students. And universities never share any information regarding placements, or the recruitment procedure. With almost no information and extreme confusion, it becomes difficult for students to focus and perform well.
              </p>
              <p>
                Online resources do help, but only to a certain extent. Procedure at IITs would differ from the one at tier-3 engineering colleges. You need a platform with all verified information about placements at your college to be able to perform well and accomplish your dreams.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>How Recruitify solves the problem?</AccordionTrigger>
          <AccordionContent>
            <div className={accordianTextStyle}>
              <p>
                The biggest concern was that colleges don&apos;t have any placement portal, or don&apos;t share information about placements. Recruitify fixes that!
              </p>
              <p>
                Now colleges can setup their own platform in seconds. Students can access all information regarding placements and internships, including the job description, eligibility criteria, CTC, and locations offered.</p>
              <p>
                Students can share and read experiences to learn about the recruitment procedure, interview process, and resources for preparation. So no need to hop on Medium or any other writing platform to read experiences. You can save any information to your favorites, so you can refer to it anytime and anywhere.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>How I built it?</AccordionTrigger>
          <AccordionContent>
            <div className={accordianTextStyle}>
              <p className="italic font-medium">Tech Stack: Next.js, React, TypeScript, Tailwind CSS, NextAuth, MongoDB, Prisma</p>
              <p>
              &#8594; Reduced setup time of placement portals by 100% by designing and developing Recruitify, a user friendly web application to enable colleges to setup their placement portals in no time. <br />
              &#8594; Implemented CRUD (Create, Read, Update, Delete) operations using Next.js API routes and Prisma. <br />
              &#8594; Implemented secure user authentication and login functionality using NextAuth ensuring that only authorized individuals have access to the placement portal. <br />
              &#8594; Optimized performance using Next.js server-side rendering to provide lightning-fast page load times and improve overall user experience. <br />
              &#8594; Increased search relevance by up to 15% by designing a tag-based filtering UI using React.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

    </div>
  )
}

function Tymely () {
  return (
    <div
      data-aos="fade-up"
      className="w-full flex gap-5 flex-col justify-start items-start"
    >

    <div
      className="flex gap-5 flex-col lg:flex-row justify-between items-center"
    >
      <div
        className="w-full lg:w-1/3 flex flex-col justify-start items-start gap-3"
      >
        <h2
          className="text-2xl md:text-4xl text-orange"
          > Tymely
        </h2>

        <p
          className="text-darkblue text-xl md:text-2xl font-medium"
          > a time-management app to help you manage your deadlines and have less work stress
        </p>

        <Link 
          href="https://tymely.app/"
          className="py-[1.5rem] hover:underline underline-offset-2"
          > View Live Site
        </Link>
      </div>

      <Image
        data-aos="zoom-in"
        alt="tymely preview"
        src="/tymely.PNG"
        width={1440}
        height={1440}
        className="w-full lg:w-2/3 h-full hover:scale-105 transition-all duration-300 ease-in-out border-2 border-gray-100"
      />

    </div>

      <Accordion type="single" collapsible className="w-full text-base lg:text-lg">
        
        <AccordionItem value="item-1">
          <AccordionTrigger>
            What was the problem?
          </AccordionTrigger>
          <AccordionContent>
            <div className={accordianTextStyle}>
              <p>
                Studies show that 41% of employers have fired an employee for missing a deadline. And 58% of workers see deadlines as a major source of work-related stress. Yes. With so much going on, your todo list fails to track deadlines for the coming days.
              </p>
              <p>
                Or what if you remember your deadline but don&apos;t know how to do the task? That&apos;s a major reason why we procrastinate, and eventually accomplishing the deadline becomes difficult. Do we have a solution?</p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>
            How Tymely solves the problem?
            </AccordionTrigger>
          <AccordionContent>
            <div className={accordianTextStyle}>
              <p>
                Tymely keeps track of your deadlines, gives you reminders so that you don&apos;t miss your deadlines. Indeed, all complex tasks can be done easily when broken down into smaller subtasks. Tymely does exactly that. It shares with you a step-by-step roadmap that you can follow to achieve your deadline on time.
              </p>
              <p>
                Not just that, Tymely started with the vision of reducing work-related stress. So you can focus on your work with the fully-customizable Pomodoro timer, app-blocking, and focus sounds. Let&apos;s do it!
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            How I built it?
            </AccordionTrigger>
          <AccordionContent>
            <div className={accordianTextStyle}>
              <p className="italic font-medium">
              Tech Stack: Next.js, React, TypeScript, Tailwind CSS, Figma, Golang, MySQL
              </p>
              <p>
                &#8594; Designed and developed Tymely, a time management web app which is powered by AI and backed by science.<br />
                &#8594; Enhanced user engagement by 31% by building a dynamic priority task list, allowing users to enter, reorder, and delete tasks. <br /> 
                &#8594; Utilized React DND kit for implementing the drag and drop functionality. <br />
                &#8594; Onboarded 280 users within 21 days of deployment by utilizing Next.js 13 server-side rendering (SSR) techniques for better performance.
              </p>
              
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

    </div>
  )
}

export default function Projects () {
  return (
    <div
      className="flex flex-col gap-[5rem] justify-start items-center pt-[5rem] pb-[2.5rem] universalPadding"
    >
      <h1
        className="text-[4rem] md:text-[5.5rem] lg:text-[7rem] font-bold text-gray-300"
        data-aos="fade-up"
        > projects
      </h1>

      <Recruitify />
      <Tymely />

    </div>
  )
}