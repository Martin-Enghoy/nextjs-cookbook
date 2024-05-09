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

type NavItemProps = {
  title: string;
  url: string;
};

type NavbarProps = {
  pageId: string;
};

const urls: NavItemProps[] = [
  { title: "Who are you?", url: "#who-are-you" },
  { title: "Projects", url: "#projects-prev" },
  { title: "Essays", url: "#essays-prev" },
];

function NavItem({ title, url }: NavItemProps) {
  return (
    <li className="text-xl">
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
    </li>
  );
}

export function Navbar({ pageId }: NavbarProps) {
  return (
    <div className="sticky top-24 left-0 w-1/3 px-16 flex justify-start bg-dark-bg text-dark-text gap-4 h-16">
      <nav>
        <ul className="flex flex-col gap-2 text-sm font-medium text-dark-text">
          {urls.map((item, idx) => (
            <NavItem key={idx} title={item.title} url={item.url} />
          ))}
        </ul>
      </nav>
    </div>
  );
}
