import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mis recetas</title>
      </Head>

      <h1>Mis recetas</h1>
      <Link href="/primeros">
        <a>Primeros</a>
      </Link>
      <Link href="/segundos">
        <a>Segundos</a>
      </Link>
      <Link href="/postres">
        <a>Postres</a>
      </Link>
      <Link href="/salsas">
        <a>Salsas</a>
      </Link>
    </div>
  );
}
