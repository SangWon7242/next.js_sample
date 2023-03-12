import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>메인 | 투두</title>
        <meta name="description" content="할일관리서비스 투두입니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>메인 페이지</h1>

      <nav>
        <Link href="/" legacyBehavior>
          <a style={{ color: "red" }}>메인</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a>어바웃</a>
        </Link>
      </nav>
    </>
  );
}
