"use client";

import { usePathname } from "next/navigation"; //only works in client side mode
function NotFound() {
  const pathname = usePathname();
  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];
  return (
    <div>
      <h1>
        Review {reviewId} Not Found for product {productId}
      </h1>
      <p>Could not find requested resource</p>
    </div>
  );
}

export default NotFound;
