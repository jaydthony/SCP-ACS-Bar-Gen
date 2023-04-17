import { Inter } from "next/font/google";
import Field from "../components/Field";
import { useState } from "react";
import TextInputField from "../components/TextInputFied";
import FieldSelect from "../components/FieldSelect";
import Field2 from "../components/Field2";
import Field3 from "../components/Field3";
import Field4 from "../components/Field4";
import imglogo from "../public/logo.png";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export default function Generate() {
  const [selectedOption, setSelectedOption] = useState("safe");
  const [selectedOption2, setSelectedOption2] = useState("1234");
  const [selectedOption3, setSelectedOption3] = useState("1");
  const [selectedOption4, setSelectedOption4] = useState("apollyon");
  const [selectedOption5, setSelectedOption5] = useState("1");
  const [selectedOption6, setSelectedOption6] = useState("1");
  const [selectedOption7, setSelectedOption7] = useState("0");
  const [selectedOption8, setSelectedOption8] = useState("default");
  const [selectedOption9, setSelectedOption9] = useState("png");
  const router = useRouter();
  const postData = async () => {
    try {
      const url = "http://localhost:3001/imageCreater";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text_item_number: selectedOption2,
          clearance: selectedOption6,
          containment: selectedOption,
          secondary: selectedOption4,
          disruption: selectedOption3,
          risk: selectedOption5,
          theme: selectedOption7,
          type: selectedOption9,
          iconpack: selectedOption8,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      if (data != null) {
        router.push("/display_result");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-16">
      <div className="relative mb-12 flex flex-col place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after: from-red-200 after:via-red-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <Link href={"/"}>
          <Image src={imglogo} width={100} className="imghero2" alt="logo" />
        </Link>
        <h1 id="demotext" className="text-center text-6xl font-bold mb-2">
          Welcome to Ravenhub's
        </h1>
        <h1 id="demotext" className="text-center text-4xl font-bold mb-5">
          SCP ACS Image Generator
        </h1>
        <p className="flex text-center w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Fill the field appropriately to generate ur acs bar image
        </p>
      </div>
      <div className="z-50">
        <div className="p-9 rounded-3xl border-2 border-gray-400">
          <form className="w-full">
            <div className="flex flex-col gap-8 w-60 lg:w-80" id="stepUser1">
              <TextInputField
                id="1"
                type="text"
                placeholder="Please enter a number between 1020-1150"
                setstate={(e) => setSelectedOption2(e)}
                name="Image Title"
              />
              <Field
                name={"Containment Class"}
                op1={"safe"}
                op2={"euclid"}
                op3={"keter"}
                op4={"neutralized"}
                op5={"pending"}
                op6={"explained"}
                op7="esoteric"
                selectedOption={selectedOption}
                setSelectedOption={(e) => setSelectedOption(e)}
              />

              <FieldSelect
                name={"Disruption Class"}
                op1={"1"}
                opN1="1-Dark"
                op2={"2"}
                opN2="2-Vlam"
                op3={"3"}
                opN3="3-Keneq"
                op4={"4"}
                opN4="4-Ehki"
                op5={"5"}
                opN5="5-Amida"
                selectedOption={selectedOption3}
                setSelectedOption={(e) => setSelectedOption3(e)}
              />
              <div
                onClick={() => {
                  const stepUser1 = document.querySelector("#stepUser1");
                  const stepUser2 = document.querySelector("#stepUser2");

                  stepUser1.style.display = "none";
                  stepUser2.style.display = "flex";
                }}
              >
                <span
                  className="text-1xl text-white bg-black px-10 py-2 lg:px-6 lg:py-2 xl:px-8 xl:py-4"
                  aria-label="Next"
                >
                  Next
                </span>
              </div>

              <p className="text-greyLight mt-4 text-center">1/3</p>
            </div>
            <div className=" hidden flex-col gap-8 w-60 lg:w-80" id="stepUser2">
              <Field2
                name={"Secondary Class"}
                op1={"apollyon"}
                op2={"archon"}
                op3={"cernunnos"}
                op4={"decommissioned"}
                op5={"hiemal"}
                op6={"tiamat"}
                op7="ticonderoga"
                op8="thaumiel"
                op9="uncontained"
                selectedOption={selectedOption4}
                setSelectedOption={(e) => setSelectedOption4(e)}
              />
              <FieldSelect
                name={"Risk Level"}
                op1={"1"}
                opN1="1-Notice"
                op2={"2"}
                opN2="2-Caution"
                op3={"3"}
                opN3="3-Warning"
                op4={"4"}
                opN4="4-Danger"
                op5={"5"}
                opN5="5-Critical"
                selectedOption={selectedOption5}
                setSelectedOption={(e) => setSelectedOption5(e)}
              />
              <FieldSelect
                name={"Clearance Level"}
                op1={"1"}
                opN1="1-low"
                op2={"2"}
                opN2="2-high"
                op3={"3"}
                opN3="3-standard"
                op4={"4"}
                opN4="4-quality"
                op5={"5"}
                opN5="5-higher standard"
                selectedOption={selectedOption6}
                setSelectedOption={(e) => setSelectedOption6(e)}
              />
              <div className="flex gap-10 items-center">
                <div
                  onClick={() => {
                    const stepUser1 = document.querySelector("#stepUser1");
                    const stepUser2 = document.querySelector("#stepUser2");
                    const stepUser3 = document.querySelector("#stepUser3");
                    stepUser1.style.display = "flex";
                    stepUser2.style.display = "none";
                    stepUser3.style.display = "none";
                  }}
                >
                  <span
                    className="text-1xl text-white bg-black px-10 py-2 lg:px-6 lg:py-2 xl:px-8 xl:py-4 customBtNewe"
                    aria-label="Next"
                  >
                    Back
                  </span>
                </div>
                <div
                  onClick={() => {
                    const stepUser1 = document.querySelector("#stepUser1");
                    const stepUser2 = document.querySelector("#stepUser2");
                    const stepUser3 = document.querySelector("#stepUser3");
                    stepUser1.style.display = "none";
                    stepUser2.style.display = "none";
                    stepUser3.style.display = "flex";
                  }}
                >
                  <span
                    className="text-1xl text-white bg-black px-10 py-2 lg:px-6 lg:py-2 xl:px-8 xl:py-4 customBtNewe"
                    aria-label="Next"
                  >
                    Next
                  </span>
                </div>
              </div>

              <p className="text-greyLight mt-4 text-center">2/3</p>
            </div>
            <div className=" hidden flex-col gap-8" id="stepUser3">
              <Field3
                name={"Theme"}
                op1={"0"}
                opN1="0-Default"
                op2={"1"}
                opN2="1-Hybrid"
                op3={"2"}
                opN3="2-Textual"
                op4={"3"}
                opN4="3-Splitter"
                selectedOption={selectedOption7}
                setSelectedOption={(e) => setSelectedOption7(e)}
              />
              <Field4
                name={"Icon Pack"}
                op1={"default"}
                op2={"extended_secondary"}
                selectedOption={selectedOption8}
                setSelectedOption={(e) => setSelectedOption8(e)}
              />
              <Field4
                name={"Image Type"}
                op1={"png"}
                op2={"svg"}
                selectedOption={selectedOption9}
                setSelectedOption={(e) => setSelectedOption9(e)}
              />
              <div className="flex flex-col gap-4">
                <div className="flex gap-10 items-center">
                  <div
                    onClick={() => {
                      const stepUser1 = document.querySelector("#stepUser1");
                      const stepUser2 = document.querySelector("#stepUser2");
                      const stepUser3 = document.querySelector("#stepUser3");
                      stepUser1.style.display = "none";
                      stepUser2.style.display = "flex";
                      stepUser3.style.display = "none";
                    }}
                  >
                    <span
                      className="text-1xl text-white bg-black px-10 py-2 lg:px-6 lg:py-2 xl:px-8 xl:py-4 customBtNewe"
                      aria-label="Next"
                    >
                      Back
                    </span>
                  </div>
                  <div onClick={postData}>
                    <span
                      className="text-1xl text-white bg-black px-10 py-2 lg:px-6 lg:py-2 xl:px-8 xl:py-4 customBtNewe"
                      aria-label="Sign_up"
                    >
                      Generate Image
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-greyLight mt-4 text-center">3/3</p>
            </div>
          </form>
        </div>
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
}
