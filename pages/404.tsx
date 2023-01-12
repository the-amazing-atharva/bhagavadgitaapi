import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import imgSource from "../assets/images/img404.png";

const PageNotFound = () => {
  return (
    <>
      <Head>
        <title>|| Page Not Found ||</title>
        <meta
          name="description"
          content="A free open sorce bhagavad gita portal."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/krishna.ico" />
      </Head>
      <div className="h-screen w-screen bg-gray-200 flex items-center">
        <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
          <div className="max-w-md">
            <div className="text-5xl font-dark font-bold">404</div>
            <p className="text-2xl md:text-3xl font-light leading-normal">
              {"Sorry we couldn't find this page. "}
            </p>
            <p className="mt-8">
              {
                "यो मां पश्यति सर्वत्र सर्वं च मयि पश्यति |\nतस्याहं न प्रणश्यामि स च मे न प्रणश्यति ||"
              }
            </p>
            <p className="mb-8 mt-4">
              {
                "For those who see Me everywhere and see all things in Me,\nI am never lost, nor are they ever lost to Me."
              }
            </p>

            <Link
              className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700"
              href={"./"}
            >
              back to homepage
            </Link>
          </div>
          <div className="max-w-lg">
            <Image width="300" height="100" src={imgSource} alt="img_404" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
