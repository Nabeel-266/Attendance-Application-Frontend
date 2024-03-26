import { useState } from "react";

// Import Images
// import SMIT_Logo from "../assets/smit-logo.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import linkedin from "../assets/linkedin.png";

// Import Icons
// import { FaLock, FaUnlock } from "react-icons/fa6";
import { IoMail, IoLockClosed, IoLockOpen } from "react-icons/io5";

const login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const socialIcon = [
    [facebook, "https://www.facebook.com/saylani.smit"],
    [instagram, "https://www.instagram.com/saylani.smit/"],
    [linkedin, "https://www.linkedin.com/company/saylanimassittraining/"],
    [youtube, "https://www.youtube.com/@SaylaniMassITTraining"],
  ];

  return (
    <div className="loginContainer w-[90%] md:w-[90%] lg:w-[1000px] flex flex-col md:flex-row">
      <section className="contSideOne w-full md:w-[55%] flex flex-col justify-center ">
        <div className={`upperTextCont ${utilityStyles.textCont}`}>
          <span className={`highlightText ${utilityStyles.highlightedText}`}>
            Saylani Mass
          </span>
          <span className={`highlightText ${utilityStyles.highlightedText}`}>
            IT Training
          </span>
        </div>

        <div className={`lowerTextCont ${utilityStyles.textCont}`}>
          <span className={`highlightText ${utilityStyles.highlightedText}`}>
            Attendance
          </span>
          <span className={`highlightText ${utilityStyles.highlightedText}`}>
            Portal
          </span>
        </div>

        <p className={`sloganText ${utilityStyles.sloganText}`}>
          Effortless Access - Seamless Engagement <br /> Your Pathway to
          Organized Attendance.
        </p>

        <div className="socialLinks">
          <span className="text-[1.6rem] leading-[2rem] font-medium">
            Join Our Social Platforms
          </span>
          <div className="linkCont flex gap-[1rem] my-[0.5rem]">
            {socialIcon.map(([img, link], index) => {
              return (
                <a
                  key={index}
                  className="hover:scale-110 transition-all"
                  href={link}
                  target="_blank"
                >
                  <img className="w-[3rem]" src={img} alt={`${img}`} />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="contSideTwo w-full md:w-[45%] flex justify-center items-center">
        <div className="formCont w-full border-2 border-gray-800 rounded-[0.5rem]">
          <div className="formHeader w-full pt-[1rem] pb-[1.5rem] bg-[#0a639e] rounded-b-[100%]">
            <h2 className="w-full text-[3.2rem] font-semibold text-white text-center ">
              Sign in to Portal
            </h2>
          </div>

          <form
            action="#"
            className="loginForm py-[2.4rem] flex flex-col gap-[2.5rem]"
          >
            {/* For Email */}
            <div className="formEmailCont w-full px-[1.5rem] flex items-center relative">
              <input
                type="email"
                name="email"
                id="email"
                defaultValue={loginEmail}
                autoComplete="off"
                onChange={(e) => setLoginEmail(e.target.value)}
                className={`formInput ${utilityStyles.formInput}`}
              />

              <label
                htmlFor="email"
                className={`formInputLabel ${utilityStyles.formInputLabel}  ${
                  loginEmail
                    ? "mt-[-3.8rem] text-[1.6rem] text-[#0a639e]"
                    : "mt-[0rem] text-[1.9rem] text-gray-800"
                }`}
              >
                Email Address
              </label>

              <IoMail
                size="3.2rem"
                className={`formInputIcon cursor-text ${utilityStyles.formInputIcon}`}
              />
            </div>

            {/* For Password */}
            <div className="formPasswordCont w-full px-[1.5rem] flex items-center relative">
              <input
                type={isPasswordVisible ? "text" : "password"}
                name="password"
                id="password"
                defaultValue={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className={`formInput ${utilityStyles.formInput}`}
              />

              <label
                htmlFor="password"
                className={`formInputLabel ${utilityStyles.formInputLabel} ${
                  loginPassword
                    ? "mt-[-3.8rem] text-[1.6rem] text-[#0a639e]"
                    : "mt-[0rem] text-[1.9rem] text-gray-800"
                }`}
              >
                Password
              </label>

              {isPasswordVisible ? (
                <IoLockOpen
                  size="3.2rem"
                  onClick={() => setIsPasswordVisible(false)}
                  className={`formInputIcon cursor-pointer ${utilityStyles.formInputIcon}`}
                />
              ) : (
                <IoLockClosed
                  size="3.2rem"
                  onClick={() => setIsPasswordVisible(true)}
                  className={`formInputIcon cursor-pointer ${utilityStyles.formInputIcon}`}
                />
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

const utilityStyles = {
  textCont: "flex flex-row md:flex-col",
  highlightedText: "sm:text-[5rem] leading-[6.5rem] font-bold text-gray-800",
  sloganText:
    "sm:text-[1.8rem] leading-[2.6rem] font-quick font-bold text-gray-800 mt-[0.5rem] mb-[2.5rem]",
  formInput:
    "w-full px-[0.5rem] pt-[1rem] pb-[0.6rem] text-gray-800 text-[1.7rem] leading-[2rem] font-medium font-mont outline-none bg-transparent border-b-2 border-gray-800 focus:border-[#0a639e] peer/input",
  formInputLabel:
    "absolute px-[0.5rem] leading-[2rem] font-semibold cursor-text transition-all peer-focus/input:mt-[-3.8rem] peer-focus/input:text-[1.6rem] peer-focus/input:text-[#0a639e]",
  formInputIcon:
    "p-[0.5rem] absolute right-[1.8rem] bg-[#f6f6f6] text-gray-700 z-10",
};

export default login;

// #0873b9 => Blue
// #0a639e => Blue
// #8ac642 => Green
// #7bb434 => Green2

// https://www.facebook.com/saylani.smit
// https://www.instagram.com/saylani.smit/
// https://www.youtube.com/@SaylaniMassITTraining
// https://www.linkedin.com/company/saylanimassittraining/

{
  /* <img className="w-[9rem]" src={SMIT_Logo} alt="SMIT-Logo" /> */
}
