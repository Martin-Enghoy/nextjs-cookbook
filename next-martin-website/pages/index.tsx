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
  return <div>About Me</div>;
}
