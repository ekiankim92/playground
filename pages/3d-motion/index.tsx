import Head from "next/head";
import Script from 'next/script'
import styled from "@emotion/styled";

export default function ThreeDimension() {
  return (
    <>
      <h2>3D Motion Page Practice</h2>
      <Head>
        <meta charSet="UTF-8" />
      </Head>
        <Script type="importmap">
          {
            "imports": {
              "three": "https://unpkg.com/three@0.141.0/build...",
              "GLTFLoader": "https://unpkg.com/three@0.141.0/examp..."
            }
          }
        </Script>
    </>
  );
}
