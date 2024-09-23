import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Geologica:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Geologica:wght@100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" 
        rel="stylesheet"/>
      </Head>
      <Component {...pageProps} />;
    </>
  ) 
}
