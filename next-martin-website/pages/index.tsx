import { Metadata } from "next";
import { Element } from "react-scroll";

// export async function getStaticProps() {
//   return {
//     props: {
//       pageId: "about_me",
//       metadata: {
//         title: "Martin Enghoy",
//         description: "Come see what I've been cooking up as my latest project.",
//         openGraph: {
//           url: "https://example.com",
//         },
//       },
//     },
//   };
// }

export const metadata: Metadata = {
  title: "Martin Enghoy",
  description: "Come see what I've been cooking up as my latest project.",
  openGraph: {
    url: "https://example.com",
  },
};

export default function Home() {
  return (
    <div className="h-[200rem]">
      <Element
        name="#who-are-you"
        className="w-[40rem] px-4 py-4 h-auto border-4 border-primary rounded-lg"
      >
        {/* <div
          id="who-are-you"
          className="w-[40rem] px-4 py-4 h-auto border-4 border-primary rounded-lg"
        > */}
        <h1 className="text-2xl font-bold text-center">Who are you?</h1>
        <hr className="w-2/3 mx-auto border my-4" />
        <p className="text-lg text-justify">
          My name is Martin Adrian Enghoy. Most people call me Martin, or Marts
          for short. I am a Computer Engineering Graduate from De La Salle
          University - Manila.
        </p>
        {/* </div> */}
      </Element>
      <Element
        name="#experience"
        className="w-[40rem] my-16 px-4 py-4 h-auto border-4 border-primary rounded-lg"
      >
        <h1 className="text-2xl font-bold text-center">
          How has my Professional Journey been?
        </h1>
        <hr className="w-2/3 mx-auto border my-4" />
        <p className="text-lg text-justify">
          {`Well, as of May 11, 2024, I am currently working on two (2) freelance projects that both have their uniqueness in function.
          The first one that I got back in April 2023 is Front-Q. The second one I got back in August 2023 is IECEP Journal.
          I can't be more thankful enough that I already have some form of work right now as a start, especially as I push further
          to find my first full-time position.
          `}
        </p>
        <Element name="#front-q">
          <div className="my-8">
            <hr />
            <h1 className="my-4 text-center font-semibold text-xl">Front-Q</h1>
            <hr className="mb-4" />
            <p className="text-lg text-justify">{``}</p>
          </div>
        </Element>
      </Element>
    </div>
  );
}
