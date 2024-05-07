export async function getStaticProps() {
  return {
    props: {
      pageId: "essays",
      metadata: {
        title: "Essays",
        description:
          "Read about Martin's thoughts on specific topics he came across in his tech journey.",
        openGraph: {
          url: "https://example.com",
        },
      },
    },
  };
}

export default function Essays() {
  return <div>Essays</div>;
}
