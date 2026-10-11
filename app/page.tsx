import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Gear for slow mornings</h1>
      <p>A small shop that exists so QAdence has pull requests to check.</p>
      <p>
        <Link href="/products">Browse the products</Link>
      </p>
    </>
  );
}
