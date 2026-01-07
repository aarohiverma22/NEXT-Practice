async function page({ params }: { params: Promise<{ slugs: string[] }> }) {
  const { slugs } = await params;
  if (slugs?.length === 2) {
    return (
      <h1>
        Viewing docs for feature {slugs[0]} and concept {slugs[1]}
      </h1>
    );
  } else if (slugs?.length === 1) {
    return <h1>Viewing docs for feature {slugs[0]}</h1>;
  } else {
    return <h1>Viewing all docs</h1>;
  }
}

export default page;
