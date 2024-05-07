import { cn } from "@/utils/util";

import Head from "next/head";

type NavItemProps = {
  title: string;
  url: string;
  isSelected: boolean;
};

type NavbarProps = {
  pageId: string;
};

function NavItem({ title, url, isSelected }: NavItemProps) {
  return (
    <li className="px-3 py-2 transition hover:text-primary">
      <a
        href={url}
        className={cn(
          `block transition hover:text-primary` &&
            (isSelected ? "text-primary" : "")
        )}
      >
        {title}
      </a>
    </li>
  );
}

function Navbar({ pageId }: NavbarProps) {
  return (
    <div className="w-full flex justify-center bg-dark-bg text-dark-text gap-4 h-16 pt-6">
      <nav>
        <ul className="flex rounded-full  px-3 gap-4 text-sm font-medium text-dark-text shadow-lg shadow-dark-text/10 ring-1 ring-dark-text/10 backdrop-blur">
          <NavItem title="About Me" url="/" isSelected={pageId == "about_me"} />
          <NavItem
            title="Projects"
            url="/projects"
            isSelected={pageId == "projects"}
          />
          <NavItem
            title="Essays"
            url="/essays"
            isSelected={pageId == "essays"}
          />
        </ul>
      </nav>
    </div>
  );
}

export default function Layout({ children }: any) {
  return (
    <>
      <Head>
        <link rel="icon" href="#" />
        <title>{children.props.metadata.title}</title>
        <meta
          name="description"
          content={children.props.metadata.description}
        />
        {/* OpenGraph Tags */}
        <meta name="og:title" content={children.props.metadata.title} />
        <meta
          name="og:description"
          content={children.props.metadata.description}
        />
        <meta name="og:url" content={children.props.metadata.openGraph.url} />
      </Head>
      <Navbar pageId={children.props.pageId} />
      <main className="min-h-screen bg-dark-bg text-dark-text">{children}</main>
    </>
  );
}
