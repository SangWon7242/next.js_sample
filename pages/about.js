import { Button } from "@mui/material";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>앱소개 | 투두</title>
      </Head>

      <h1 className="mt-3">앱소개 페이지</h1>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </>
  );
}
