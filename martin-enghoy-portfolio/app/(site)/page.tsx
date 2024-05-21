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
              <p className="text-lg text-justify mb-4">
                {`Front-Q is my first freelance project that I worked on back in April 2023.
                The purpose of the web app is to be a Software-as-a-Service (SaaS) that focuses around minimizing the time it takes for 
                the service crew to respond to a customer's request, be it in a hotel, b&b or food establishment.`}{" "}
              </p>
              <p className="text-lg text-justify mb-4">
                {`Given Front-Q's main purpose, its core functions revolve around having a real-time view and management of requests
                that each table / room sends to the service crew. In the management part of the requests, the service crew are able to exchange
                messages with the customers at the table / room via a real-time chat window redirected from a request card getting clicked.`}
              </p>
              <p className="text-lg text-justify">
                {`The main tech stack that this app uses is the Next.js 13.5 stack that utilizes the /app router. Mainly in TypeScript, styled using TailwindCSS, also utilizing shadcn-ui 
                for some of its UI components. Its backend is mainly comprised of NoSQL with MongoDB as the third-party database and Prisma for modelling the data.
                The app also utilized Axios for its API calls, as well as Pusher for its real-time functionality that fits well in refreshing the virtual DOM in React to fully simulate
                the real-time functionalities.`}
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
              <p className="text-lg text-justify mb-4">
                {`Similar to Front-Q, IECEP Journal was one of my first freelance projects I had the chance to work on while
                I worked on finishing my degree. The Institution of Electronics Engineering of the Philippines, IECEP for short,
                is an organization that represents professionals in Electronics Engineering and its allied fields. The main purpose of the web application
                is to be able to publish research journals that comprised mainly papers that were submitted and reviewed within the website itself. 
                That and also digitizing the traditional review process of papers that ran through email threads for years. 
                `}
              </p>
              <p className="text-lg text-justify">
                {`Likewise, IECEP Journal's tech stack comprised of the Next.js 13.5 stack with MongoDB as its backend. Compared to Front-Q that mainly required
                more real-time functionalities, IECEP Journal's main requirement was its digitization of the traditional review process. Pages upon pages of different
                roles within an Editorial Board. From the editorial chief, their secretary, the associate editors, down to the reviewers and authors, each had a different
                set of data tables and data inputs. All of this along with having an email bot attached to each API success call to confirm each of the website users' actions.
                I mainly used react-email and Resend to develop this email bot.
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
            their advice.`}{" "}
            {``}
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
