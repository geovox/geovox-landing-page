import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { Element, Link } from "react-scroll"

const features = [
  {
    media: "/triangle.svg",
    title: "Hunt",
    description: "Find the rarest and limited real-world collections in town",
  },
  {
    media: "/cross.svg",
    title: "Levelling",
    description:
      "As you collect more items, you'll level up and unlock even more fun features!",
  },
  {
    media: "/circle.svg",
    title: "Tradeable",
    description: "All items in this app are tradable in any NFT marketplaces ",
  },
  {
    media: "/rectangle.svg",
    title: "NFT",
    description:
      "We uses NFT technology so all the items authentic and stored digitally.",
  },
]

const meta = {
  title: "Geovox - Find and collect items while you travel",
  description:
    "Collect Items for your greatest adventure. It's a real-world location app that lets you hunt for NFT items while you're out and about.",
  url: "https://geovox.xyz",
  image:
    "https://ipfs.fleek.co/ipfs/bafkreihv7zoj4er3pmsvdciuhhyro6vvcdy6kdvshl4dpnk6m3rt6ifbxy",
}

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black">
      <Head>
        <title>Geovox - Find and collect items while you travel</title>
        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta name="robots" content="index, follow" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={meta.url} />
        <meta property="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:image" content={meta.image} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="w-full max-w-5xl m-auto">
        <div className="px-4 md:px-0 py-4 flex flex-col md:flex-row justify-between items-center">
          <Image src="/logo-g.png" alt="logo-g" width={25} height={25} />
          <div className="flex gap-4 md:gap-6 mt-4 md:mt-0">
            <Link
              activeClass="active"
              to="features"
              spy={true}
              smooth={true}
              duration={500}
            >
              <p className="cursor-pointer">Features</p>
            </Link>
            <Link
              activeClass="active"
              to="apps"
              spy={true}
              smooth={true}
              duration={500}
            >
              <p className="cursor-pointer">Apps</p>
            </Link>
            <Link
              activeClass="active"
              to="download"
              spy={true}
              smooth={true}
              duration={500}
            >
              <p className="cursor-pointer">Download</p>
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex w-full flex-1 flex-col items-center justify-center my-4 md:my-12 p-4 md:p-0">
        <div className="md:flex justify-between my-4 md:my-16 max-w-5xl m-auto">
          <div className="flex-1">
            <p className="font-bold text-4xl whitespace-pre-line">
              {"Find and collect\n items while you travel"}
            </p>
            <p className="my-4 font-normal text-gray-200">
              Are you a traveler, or do you just love to travel?
            </p>
            <p className="my-4 font-normal text-gray-200">
              Collect Items for your greatest adventure. It's a real-world
              location app that lets you hunt for NFT items while you're out and
              about.
            </p>
            <Link
              activeClass="active"
              to="download"
              spy={true}
              smooth={true}
              duration={500}
            >
              <button className="bg-primary-orange px-4 py-2.5 mt-4 rounded-2xl mb-6">
                <div className="flex items-center justify-center gap-2 text-black font-bold">
                  Download App
                </div>
              </button>
            </Link>
          </div>
          <div className="flex-1 flex justify-end">
            <Image
              src="/people-telescope.svg"
              alt="People telescope"
              width={400}
              height={300}
              priority
            />
          </div>
        </div>

        <Element
          id="features"
          className="my-12 max-w-5xl m-auto"
          name="features"
        >
          <p className="font-bold text-2xl text-white text-center">Features</p>
          <div className="m-auto w-16 h-1.5 bg-primary-orange mb-6" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col justify-between items-center bg-primary-gray-150 px-4 py-6 md:px-6 md:py-8 gap-y-2 rounded-2xl"
              >
                <div className="p-8">
                  <Image
                    src={feature.media}
                    alt={feature.title}
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <p className="mt-4 font-bold text-xl text-center">
                    {feature.title}
                  </p>
                  <p className="mt-2 text-center text-gray-200 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Element>

        <Element id="apps" className="my-12 max-w-5xl m-auto" name="apps">
          <p className="font-bold text-2xl text-white">Apps</p>
          <div className="w-16 h-1.5 bg-primary-orange mb-6" />
          <div className="my-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <Image
              src="/screenshot/home.PNG"
              alt="Crossing guy"
              width={300}
              height={300}
            />
            <Image
              src="/screenshot/map.PNG"
              alt="Crossing guy"
              width={300}
              height={300}
            />
            <Image
              src="/screenshot/detail.PNG"
              alt="Crossing guy"
              width={300}
              height={300}
            />
            <Image
              src="/screenshot/profile.PNG"
              alt="Crossing guy"
              width={300}
              height={300}
            />
          </div>
        </Element>

        <Element
          className="my-12 w-full relative py-12 max-w-5xl"
          id="download"
          name="download"
        >
          <div className="absolute inset-0 md:w-2/3 -ml-4 md:ml-0 rounded-tr-2xl rounded-br-2xl bg-primary-orange z-0" />
          <div className="w-full max-w-4xl m-auto relative z-10 md:flex p-4 md:p-0">
            <div className="text-black md:w-1/2">
              <p className="font-bold text-4xl whitespace-pre-line">
                Try our Beta App
              </p>
              <p className="my-4">
                Are you ready to get a first look at the beta release of Geovox?
                We're so excited for you to check it out! we'd love to hear your
                feedback!
              </p>
              <p className="my-4">
                Let us know what you think—and please feel free to let us know
                if there's anything else we can add or any features that are
                missing from our app.
              </p>
              <div className="mt-8 flex gap-4">
                <p className="font-semibold text-xl underline underline-offset-4">
                  Android
                </p>
                <p className="font-semibold text-xl underline underline-offset-4">
                  iOS
                </p>
              </div>
            </div>
            <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
              <Image
                src="/crossing-guy.svg"
                alt="Crossing guy"
                width={300}
                height={300}
              />
            </div>
          </div>
        </Element>
      </main>

      <footer className="flex flex-col p-4 h-24 w-full items-center justify-center my-12 pointer-events-none">
        <Image src="/Geovox.png" alt="Geovox Logo" width={230} height={50} />
        <p className="text-white mt-4">Copyright 2022 Geovox</p>
      </footer>
    </div>
  )
}

export default Home
