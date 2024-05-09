import Head from "next/head";
import { Navbar } from "./main-page/Navbar";

import { Ubuntu_Mono } from "next/font/google";
import { cn } from "@/utils/util";
import { Header } from "./Header";

const ubuntuMono = Ubuntu_Mono({ subsets: ["latin"], weight: ["400", "700"] });

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
      <div
        className={cn(
          ubuntuMono.className,
          "flex flex-row flex-wrap bg-dark-bg text-dark-text"
        )}
      >
        <Header />
        <Navbar pageId={children.props.pageId} />
        <main className="min-h-screen w-2/3">{children}</main>
      </div>
    </>
  );
}
