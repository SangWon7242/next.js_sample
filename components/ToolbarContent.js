import Link from "next/link";

export default function ToolbarContent() {
  return (
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
  );
}
