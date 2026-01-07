async function page({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  return (
    <div>
      Review {reviewId} for product {productId}
    </div>
  );
}

export default page;
