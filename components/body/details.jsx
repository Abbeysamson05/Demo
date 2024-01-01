import { Country, SampleChat } from "@/dummyData";
import Image from "next/image";

export default function Details() {
  return (
    <div className="demo-container">
      <div className="flex mb-[37px] mt-[3rem] justify-between">
        <div className="items-center gap-2 flex">
          <Image
            src="/images/logo.png"
            height={41}
            width={41}
            alt="company logo"
          />
          <p className="font-semibold">Name</p>
        </div>
        <div className="bg-[#EAECF04A] p-3 md:flex items-center gap-2 rounded-[10px] hidden">
          <p
            className="text-[#36BA15] text-center"
            style={{
              width: "26.5px",
              height: "26.5px",
              padding: "5.04px, 5.04px, 5.04px, 5.04px",
              borderRadius: "83.93px",
              border: "1.68px solid #36BA15",
            }}
          >
            A
          </p>
          <p className="text-[#333333] font-medium">James Blunt</p>
        </div>
      </div>
      <div className="md:flex text-[34333E] lg:gap-10 md:gap-5">
        <div className=" w-full">
          <div className="flex items-center mb-5 md:border-b-2 pb-5 lg:me-10 md:me-5 me-0">
            <div className="me-auto">
              <Image
                src="/images/back-arr.png"
                height={24}
                width={24}
                alt="back arrow icon"
              />
            </div>
            <div className="flex">
              <button
                className="py-1 px-5 rounded-[5px] text-[#34334E] me-1 flex items-center gap-2"
                style={{ border: "0.87px solid #34333E" }}
              >
                <Image
                  src="/images/copy.png"
                  width={18}
                  height={18}
                  alt="copy icon"
                />
                <span>Save</span>
              </button>
              <button
                className="py-1 px-5 rounded-[5px] text-white bg-[#34333E]"
                style={{ border: "0.87px solid #34333E" }}
              >
                Button
              </button>
            </div>
          </div>
          <div className="lg:pe-10 md:pe-5 md:border-r-2 pe-0">
            <h5 className="font-semibold text-[#34333E] mb-2">Happy Dogs</h5>
            <p className="text-[#585858] mb-2">Madrid Spain</p>
            <div className="bg-[#FAFAFB] py-2 px-4 rounded-[10px] flex mb-4">
              <div className="w-full">
                <p className="mb-2">Price </p>
                <h6 className="font-medium">€1100</h6>
              </div>
              <div className="w-full">
                <p className="mb-2">Number </p>
                <h6 className="font-medium">2</h6>
              </div>
              <div className="w-full">
                <p className="mb-2">Number </p>
                <h6 className="font-medium">1</h6>
              </div>
            </div>
            <div className="flex justify-between mb-4">
              <Image
                src="/images/doggie.png"
                width={155.93}
                height={153.69}
                alt="Picture of a dog"
              />
              <Image
                src="/images/doggie.png"
                width={155.93}
                height={153.69}
                alt="Picture of a dog"
              />
              <div
                className="rounded-[22.4px] bg-[#FAFAFB] flex items-center justify-center"
                style={{ width: "9.75rem" }}
              >
                <p>+5 more</p>
              </div>
            </div>
            <p className="font-medium">Description</p>
            <p className="mb-2">
              The notion of dogs laughing is often associated with the
              infectious joy and playfulness they bring into our lives. While
              dogs don `&lsquo;`t express laughter in the same way humans do,
              their happiness manifests through various behaviors like wagging
              tails, barks, and exuberant play.
            </p>
            <p className="font-medium">Date Taken</p>
            <p className="mb-2">1 year ago (12 April 2023 - 11 April 2024)</p>

            <p className="font-medium mb-4">Locations</p>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-y-4">
              {Country.map((country) => (
                <div className="flex gap-2" key={country.id}>
                  <Image
                    src="/images/marker.png"
                    width={24}
                    height={24}
                    alt="marker icon"
                  />
                  <p>{country.country}</p>
                </div>
              ))}
            </div>
            <button className="w-full bg-[#34333E] text-white py-[18px] my-[18px] rounded-[5px] md:hidden">
              Submit
            </button>
            <div className="flex justify-center">
              <button className="mb-[18px] md:hidden border-b-2 pb-1 mx-auto">
                Save & Publish Later
              </button>
            </div>
          </div>
        </div>
        <div className="w-full mt-[4.8rem] flex flex-col justify-between h-screen">
          <div className="">
            <div className="flex items-center mb-5 md:hidden">
              <div className="me-auto">
                <Image
                  src="/images/back-arr.png"
                  height={24}
                  width={24}
                  alt="Back arrow icon"
                />
              </div>
              <div className="flex">
                <button
                  className="py-1 px-5 rounded-[5px] bg-[#34333E] me-1 flex items-center gap-2"
                  style={{ border: "0.87px solid #34333E" }}
                >
                  <Image
                    src="/images/eye.png"
                    width={18}
                    height={18}
                    alt="Eye icon"
                  />
                  <span className="text-white">Preview</span>
                </button>
              </div>
            </div>
            {SampleChat.map((chat) => (
              <div
                className={`${
                  chat.id === 1 ? "bg-[#FAFAFB]" : "bg-white"
                } rounded-[10px] flex gap-4 py-3 px-4`}
                key={chat.id}
              >
                {chat.id === 1 ? (
                  <div className="bg-[#34333E] p-2 rounded-[3.54px]">
                    <Image
                      src="/images/logo.png"
                      width={13.05}
                      height={21.75}
                      alt="Company logo"
                    />
                  </div>
                ) : (
                  <div className="bg-[#F3FFEB] py-1 px-3 rounded-[3.54px]">
                    <p className="text-[]">J</p>
                  </div>
                )}
                <p>{chat.text}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center p-2 border-2 rounded-[4px]">
            <button className="bg-[#E8E8E8] py-1 px-3 rounded-full">+</button>
            <input type="text" className="w-full" />
            <button className="bg-[#34333E] p-2 rounded-[5.7px]">
              <Image
                src="/images/send.png"
                width={17.1}
                height={17.1}
                alt="Send icon"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
