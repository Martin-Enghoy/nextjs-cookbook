"use client";

import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

// UX
import { Element } from "react-scroll";

import { ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-row">
      <Navbar />
      <div className="h-[200rem]">
        {/* Who Are You? */}
        <Element
          name="#who-are-you"
          className="w-[40rem] px-4 py-16 h-auto border-4 border-primary rounded-lg"
        >
          <h1 className="text-3xl font-bold text-center">Who are you?</h1>
          <hr className="w-2/3 mx-auto border my-4" />
          <p className="text-lg text-justify my-2">
            {`My name is Martin Adrian Enghoy. Most people call me Martin, or
            Marts for short. I am a Computer Engineering Graduate from De La
            Salle University - Manila. I am ID 118, which basically translates to me starting 
            my freshman year in 2018. I graduated February 2024, about a year after the pandemic has fully eased off.`}
          </p>
          <p className="text-lg text-justify my-2">
            {`I was born in Quezon City, Philippines, and now live in the southern part of Metro Manila.
            `}
          </p>
        </Element>

        {/* Experience */}
        <Element
          name="#experience"
          className="w-[40rem] my-16 px-4 py-16 h-auto border-4 border-primary rounded-lg"
        >
          <h1 className="text-3xl font-bold text-center">
            How has my Professional Journey been?
          </h1>
          <hr className="w-2/3 mx-auto border my-4 mb-8" />
          <p className="text-lg text-justify">
            {`Well, as of May 11, 2024, I am currently working on two (2) freelance projects that both have their uniqueness in function.
          The first one that I got back in April 2023 is Front-Q. The second one I got back in August 2023 is IECEP Journal.
          I can't be more thankful enough that I already have some form of work right now as a start, especially as I push further
          to find my first full-time position.
          `}
          </p>
          <Element name="#front-q" className="py-16">
            <div>
              <hr />
              <h1 className="my-4 text-center font-semibold text-xl">
                <Link
                  href={`https://front-q.com/`}
                  target="_blank"
                  className="flex flex-row justify-center items-center hover:underline hover:text-primary transition duration-300"
                >
                  Front-Q
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Link>
              </h1>
              <hr className="mb-8" />
              <p className="text-lg text-justify">
                {`Front-Q is my first freelance project that I worked on back in April 2023.
                The purpose of the web app focused around minimizing the the time it takes for 
                the service crew to respond to a customer's request, be it in a hotel, b&b or food establishment.`}
              </p>
            </div>
          </Element>
          <Element name="#iecep-journal" className="py-16">
            <div>
              <hr />
              <h1 className="my-4 text-center font-semibold text-xl">
                <Link
                  href={`https://iecepjournal.com/`}
                  target="_blank"
                  className="flex flex-row justify-center items-center hover:underline hover:text-primary transition duration-300"
                >
                  IECEP Journal
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Link>
              </h1>
              <hr className="mb-8" />
              <p className="text-lg text-justify">
                {`Similar to Front-Q, IECEP Journal was one of my first freelance projects I had the chance to work on while
                I worked on finishing my degree. The Institution of Electronics Engineering of the Philippines, IECEP for short,
                is an organization that represents professionals in Electronics Engineering and its allied fields.
                `}
              </p>
            </div>
          </Element>
        </Element>

        {/* Communities and Influences */}
        <Element
          name="#communities"
          className="w-[40rem] my-16 px-4 py-16 h-auto border-4 border-primary rounded-lg"
        >
          <h1 className="text-3xl font-bold text-center">
            The Communities I love and
          </h1>
          <h1 className="text-3xl font-bold text-center">
            The People I look up to
          </h1>
          <hr className="w-2/3 mx-auto border my-4 mb-8" />
          <p className="text-lg text-justify">
            {`In my life, I have gone from community to community, listened to people's lives and molded my life according to
            their advice.`}
          </p>
          <Element name="#freecodecamp" className="py-16">
            <div>
              <hr />
              <h1 className="my-4 text-center font-semibold text-xl">
                <Link
                  href={`https://freecodecamp.org/`}
                  target="_blank"
                  className="flex flex-row justify-center items-center hover:underline hover:text-primary transition duration-300"
                >
                  freeCodeCamp
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Link>
              </h1>
              <hr className="mb-8" />
              <p className="text-lg text-justify">
                {`Once I realized the career path I wanted to mainly take, freeCodeCamp is the first community
                that I found and had falled in love fully.`}
              </p>
            </div>
          </Element>
          <Element name="#piratesoftware" className="py-16">
            <div>
              <hr />
              <h1 className="my-4 text-center font-semibold text-xl">
                <Link
                  href={`https://twitch.tv/piratesoftware`}
                  target="_blank"
                  className="flex flex-row justify-center items-center hover:underline hover:text-primary transition duration-300"
                >
                  PirateSoftware
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Link>
              </h1>
              <hr className="mb-8" />
              <p className="text-lg text-justify">{``}</p>
            </div>
          </Element>
        </Element>
      </div>
    </main>
  );
}
