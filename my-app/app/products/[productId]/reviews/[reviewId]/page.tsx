import { notFound } from "next/navigation";
async function page({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      Review {reviewId} for product {productId}
    </div>
  );
}

export default page;
