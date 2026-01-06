async function page({ params }: { params: Promise<{ reviewId: string }> }) {
  const reviewId = (await params).reviewId;
  return <div>Review {reviewId}</div>;
}

export default page;
