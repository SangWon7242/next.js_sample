import "@/styles/globals.css";
import Link from "next/link";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="할일관리서비스 투두입니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="bg-[#afafaf]">
        <ul class="flex">
          <li>
            <Link href="/" legacyBehavior>
              <a className="block p-4 hover:text-white">메인</a>
            </Link>
          </li>
          <li>
            <Link href="/about" legacyBehavior>
              <a className="block p-4 hover:text-white">어바웃</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" legacyBehavior>
              <a className="block p-4 hover:text-white">연락처</a>
            </Link>
          </li>
        </ul>
      </nav>
      <Component {...pageProps} />
    </>
  );
}
