export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <h1>Header</h1>
        <hr />
      </header>

      <main>{children}</main>

      <footer>
        <hr />
        <h1>Footer</h1>
      </footer>
    </>
  );
}
