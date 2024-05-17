"use client";

// Styling Imports
import { cn } from "@/utils/util";

// UX Imports
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

type SubLink = {
  subtitle: string;
  sublink: string;
};

type NavItemProps = {
  title: string;
  url: string;
  sublinks: SubLink[];
};

const urls: NavItemProps[] = [
  { title: "Who are you?", url: "#who-are-you", sublinks: [] },
  {
    title: "Experience",
    url: "#experience",
    sublinks: [
      { subtitle: "Front-Q", sublink: "#front-q" },
      { subtitle: "IECEP Journal", sublink: "#iecep-journal" },
    ],
  },
  { title: "Projects", url: "#projects-prev", sublinks: [] },
  { title: "Write-ups", url: "#writeups-prev", sublinks: [] },
  { title: "Tech Stacks", url: "#tech-stacks", sublinks: [] },
  {
    title: "Communities & Influences",
    url: "#communities",
    sublinks: [
      { subtitle: "freeCodeCamp", sublink: "#freecodecamp" },
      { subtitle: "PirateSoftware", sublink: "#piratesoftware" },
      { subtitle: "TheTheo", sublink: "#theo" },
      { subtitle: "ThePrimeagen", sublink: "#theprimeagen" },
      { subtitle: "CodingInPublic", sublink: "#coding-in-public" },
      { subtitle: "Coding With Antonio", sublink: "#coding-with-antonio" },
      {
        subtitle: "Student Lasallian Animators",
        sublink: "#student-lasallian-animators",
      },
    ],
  },
];

function NavItem({ title, url, sublinks }: NavItemProps) {
  return (
    <li className="text-lg">
      <Link
        to={url}
        spy={true}
        smooth
        offset={-200}
        duration={500}
        className={cn(
          `block transition duration-300 hover:text-primary cursor-pointer`
        )}
      >
        {title}
      </Link>
      {sublinks.length > 0 ? (
        <ul className="my-2">
          {sublinks.map((sublink, idx) => (
            <li key={idx} className="indent-8 text-lg my-2">
              <Link
                to={sublink.sublink}
                spy={true}
                smooth
                offset={-200}
                duration={500}
                className={cn(
                  `block transition duration-300 hover:text-primary cursor-pointer`
                )}
              >
                {sublink.subtitle}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export function Navbar() {
  return (
    <div className="sticky top-20 left-0 w-1/3 px-16 flex justify-start bg-dark-bg text-dark-text gap-4 h-16">
      <nav>
        <ul className="flex flex-col gap-2 text-sm font-medium text-dark-text">
          {urls.map((item, idx) => (
            <NavItem
              key={idx}
              title={item.title}
              url={item.url}
              sublinks={item.sublinks}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
}
