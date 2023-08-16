import "../index.css";
import "@/styles/globals.css";
import "@/styles/app.css";
import Head from "next/head";

// Import the environment variable from .env
const GA_TRACKING_ID = process.env.GA_TRACKING_ID;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Change the title to your desired website name */}
        <title>Nosiy | The Next Gen Video Solution </title>

        {/* Change the href to the path of your favicon image */}
        <link rel="icon" href="/favicon.ico" />

        {/* Meta Description */}
        <meta
          name="description"
          content="Next-Gen Video Solution: Seamless Streaming + All-in-One Convenience. Craft Compelling Frontend Experiences with Ease. Join the Evolution!"
        />

        {/* Google tag (gtag.js) */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.GA_TRACKING_ID}');
              `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
