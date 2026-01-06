async function page({ params }: { params: Promise<{ productId: string }> }) {
  const productId = (await params).productId;
  return <div>Description of the products {productId}</div>;
}

export default page;
