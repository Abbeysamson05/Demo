import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex items-center demo-container lg:gap-[6.125rem] md:gap-[2.825rem]">
      <div
        className="bg-[#EFFFEF] lg:ps-[4rem] md:ps-[2rem] pt-[4.93rem] hidden md:block"
        style={{ borderRadius: "0px 0px 0px 100px" }}
      >
        <div>
          <div className="items-center gap-2 flex mb-[37px]">
            <Image
              src="/images/logo.png"
              height={41}
              width={41}
              alt="Company icon"
            />
            <p className="font-semibold">Name</p>
          </div>
          <h3 className="h3 font-bold text-[#0F1824] mb-[16px]">
            Revolutionize your Customer Service Game
          </h3>
          <h6 className="text-sm mb-[85px]">
            Connect authentically with customers through natural, flowing
            conversations.
          </h6>
          <Image
            src="/images/hero-login.png"
            height={310}
            width={497}
            alt="Herp background image"
          />
        </div>
      </div>
      <div className="text-center">
        <div className="items-center gap-2 flex mb-[37px] justify-center md:hidden mt-[3.93rem]">
          <Image
            src="/images/logo.png"
            height={41}
            width={41}
            alt="Company icon"
          />
          <p className="font-semibold">Name</p>
        </div>
        <h3 className="h3 mb-2 hidden md:block">Provide your phone number</h3>
        <h3 className="h3 mb-2 md:hidden">Let’s get Started</h3>
        <p>
          Kindly use an active WhatsApp number, and we `&lsquo;`ll send a
          confirmation message to the provided number.
        </p>
        <div className="flex gap-2 my-5">
          <select className="py-2 px-3 border-2 runded-[8px]">
            <option>+334</option>
            <option>+356</option>
          </select>
          <input
            type="text"
            placeholder="Phone Number"
            className="py-2 px-3 border-2 w-full"
          />
        </div>
        <button className="w-full bg-[#34333E] text-white py-[18px] mb-[18px] rounded-[5px]">
          Continue
        </button>
        <div className="text-[#34333E] py-[18px] text-center border-2 rounded-[5px] border-solid">
          <Link href="#">Have an Account? Login</Link>
        </div>
      </div>
    </div>
  );
}
