import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Tailwind via CDN for now (quickest) */}
        <script src="https://cdn.tailwindcss.com" />
      </Head>
      <body className="bg-zinc-50 text-zinc-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
