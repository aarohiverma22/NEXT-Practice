import { ReactNode } from "react";

export default function ProductDetailsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {children}
      <h2>Featured Products</h2>
    </>
  );
}
