import Link from "next/link";

export default function NotFound() {
    return(
    <main className="text-center">
      <h2 className="text-3xl">Hubo un problema.</h2>
      <p>No pudimos encontrar la página.</p>
      <p>Volver al <Link href="/">dashboard</Link>.</p>
    </main>
    );
}