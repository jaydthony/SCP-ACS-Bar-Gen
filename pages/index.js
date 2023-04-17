import React from "react";
import imglogo from "../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
const Index = () => {
  return (
    <main className="flex min-h-screen flex-col items-center py-4 px-8 md:px-16 md:py-4 ">
      <Link href={"/"}>
        <Image src={imglogo} width={100} className="imghero2" alt="logo" />
      </Link>
      <h1 id="demotext" className="text-center text-6xl font-bold mb-2">
        Welcome to Ravenhub's
      </h1>
      <h1 id="demotext" className="text-center text-4xl font-bold mb-5">
        SCP ACS Image Generator
      </h1>
      <p className="text-2xl mb-10">
        Create your own custom ACS Label in just a few seconds
      </p>
      <div className="flex gap-10 items-center mb-12">
        <div>
          <Link href={"/generate_image"}>
            <span
              className="text-1xl text-white bg-black rounded-full px-10 py-2 lg:px-6 lg:py-2 xl:px-8 xl:py-4 customBtNewe"
              aria-label="Generate Acs"
            >
              Generate a Image
            </span>
          </Link>
        </div>
        <div>
          <span
            className="text-1xl rounded-full text-black border-2 border-black  px-10 py-2 lg:px-6 lg:py-2 xl:px-8 xl:py-4 customBtNewe"
            aria-label="Api"
          >
            Check our Api
          </span>
        </div>
      </div>

      <h1 className=" font-bold text-3xl mt-4 mb-8">What is this Website?</h1>
      <div
        className="flex flex-col gap-4
       text-center w-full justify-center border-b p-12 
       border-gray-300 bg-gradient-to-b from-zinc-200  
       backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 
       dark:from-inherit lg:static lg:w-auto  
       rounded-xl lg:border lg:bg-gray-200  
       lg:dark:bg-zinc-800/30 mb-14"
      >
        <p>
          At Ravenhub, we're excited to offer our SCP ACS Image Generator, a
          user-friendly tool that allows you to create custom anomaly
          classification system (ACS) labels quickly and easily.
        </p>
        <p>
          Our generator lets you choose from various options, including icon
          packs and themes, to create unique ACS labels and match the look and
          feel of your content. Whether you're a writer creating labels for your
          SCP Foundation fan fiction or a gamer looking to add some extra detail
          to your tabletop or online roleplaying game, our ACS Image Generator
          can help you create professional-quality labels in just a few clicks.
        </p>
        <p>
          Our generator outputs high-quality PNG and SVG images that you can use
          in various ways, from digital content to print materials. And for
          developers, we offer an API that makes it easy to integrate our
          service into your applications.
        </p>
        <p>
          At Ravenhub, we're committed to providing a top-notch user experience.
          That's why our SCP ACS Image Generator is designed to be easy to use
          and highly customizable, so you can create perfect labels for your
          needs.
        </p>
        <p>
          So why wait? Try our Image Generator today and see how easy it is to
          create stunning custom labels in just a few clicks!
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center customfixed">
        <Link href={"https://github.com/Rabenherz112"} target="blank">
          <AiFillGithub className=" text-4xl" />
        </Link>
        <Link href={"https://discord.gg/ySk5eYrrjG"} target="blank">
          <FaDiscord className="text-4xl" />
        </Link>
      </div>
    </main>
  );
};

export default Index;
