import { Element } from "react-scroll";

export async function getStaticProps() {
  return {
    props: {
      pageId: "about_me",
      metadata: {
        title: "Martin Enghoy",
        description: "Come see what I've been cooking up as my latest project.",
        openGraph: {
          url: "https://example.com",
        },
      },
    },
  };
}

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
    </div>
  );
}
