import Image, { StaticImageData } from "next/image";

// Static Image URLs
import imageFrontQ_2 from "../public/images/FrontQ_2.png";

export async function getStaticProps() {
  return {
    props: {
      pageId: "projects",
      metadata: {
        title: "Projects",
        description: "Check out Martin's Projects on all things tech.",
        openGraph: {
          url: "https://example.com",
        },
      },
    },
  };
}

type ProjectItemProps = {
  name: string;
  url: string;
  urlDisplay: string;
  imageSrc: StaticImageData;
};

function ProjectItem({
  name,
  url,
  urlDisplay,
  imageSrc: image,
}: ProjectItemProps) {
  return (
    <li>
      <a href={url} target="_blank">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Image className="w-1/2 mx-auto" src={image} alt={name} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>
          </div>
          <div className="px-6 pb-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              🔗{urlDisplay}
            </span>
          </div>
        </div>
      </a>
    </li>
  );
}

export default function Projects() {
  return (
    <div className="mt-16 px-8">
      <header>
        <h1 className="font-bold text-4xl text-zinc-800">Things I Do</h1>
        <p className="text-base mt-6 text-zinc-600">
          I have been working on a number of small creative projects.
        </p>
      </header>
      <div className="mt-16">
        <h2 className="text-2xl">Apps</h2>
        {/* TODO: Add More Projects here. */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mt-8">
          <ProjectItem
            name={`Front-Q`}
            url={`https://front-q.com/`}
            urlDisplay={`front-q.com`}
            imageSrc={imageFrontQ_2}
          />
        </ul>
      </div>
      <div className="mt-16">
        <h2 className="text-2xl">Books</h2>
      </div>
    </div>
  );
}
