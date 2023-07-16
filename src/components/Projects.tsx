import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Recruitify () {
  return (
    <div
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
        alt="recruitify preview"
        src="/recruitify.PNG"
        width={1440}
        height={1440}
        className="w-full lg:w-2/3 h-full hover:scale-105 transition-all duration-300 ease-in-out border-2 border-gray-100"
      />

    </div>

      <Accordion type="single" collapsible className="w-full text-base">
        <AccordionItem value="item-1">
          <AccordionTrigger>What was the problem?</AccordionTrigger>
          <AccordionContent>
            <p>hello</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How Recruitify solves the problem?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How I built it?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

    </div>
  )
}

function Tymely () {
  return (
    <div
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
        alt="tymely preview"
        src="/tymely.PNG"
        width={1440}
        height={1440}
        className="w-full lg:w-2/3 h-full hover:scale-105 transition-all duration-300 ease-in-out border-2 border-gray-100"
      />

    </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What was the problem?</AccordionTrigger>
          <AccordionContent>
            <p>hello</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How Tymely solves the problem?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How I built it?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

    </div>
  )
}

export default function Projects () {
  return (
    <div
      className="flex flex-col gap-[5rem] justify-start items-center pt-[5rem] pb-[5rem] universalPadding"
    >
      <h1
        className="text-[4rem] md:text-[5.5rem] lg:text-[7rem] font-bold text-gray-300"
        > projects
      </h1>

      <Recruitify />
      <Tymely />

    </div>
  )
}