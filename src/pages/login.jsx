import { useState } from "react";

// Import Images
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import linkedin from "../assets/linkedin.png";

// Import Icons
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
    <div className="loginPageCont w-full min-h-dvh px-[4%] flex justify-center items-center backdrop-blur-[5px]">
      <div className="loginPageContWrapper w-full lg:w-[1000px] py-[5rem] flex flex-col gap-[4rem] md:flex-row md:gap-[0rem]">
        <section className="contSideOne w-full md:w-[50%] lg:w-[60%] flex flex-col justify-center">
          {/* Highlighted Text */}
          <div
            className={`highlightedTextCont ${utilityStyles.highlightedTextCont}`}
          >
            <span className={`highlightText ${utilityStyles.highlightedText}`}>
              Saylani Mass
            </span>
            <span className={`highlightText ${utilityStyles.highlightedText}`}>
              IT Training
            </span>
          </div>

          <div
            className={`highlightedTextCont ${utilityStyles.highlightedTextCont}`}
          >
            <span className={`highlightText ${utilityStyles.highlightedText}`}>
              Attendance
            </span>
            <span className={`highlightText ${utilityStyles.highlightedText}`}>
              Portal
            </span>
          </div>

          {/* Slogan Text */}
          <p className={`sloganText ${utilityStyles.sloganText}`}>
            Effortless Access - Seamless Engagement <br /> Your Pathway to
            Organized Attendance.
          </p>

          {/* Social Links */}
          <div className="socialLinks flex flex-col items-center md:items-start">
            <span className="text-[1.6rem] leading-[2rem] font-medium select-none">
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

        <section className="contSideTwo w-full md:w-[50%] lg:[40%] flex justify-center item-center">
          {/* Form Container */}
          <div className="formCont w-[350px] xs:w-[400px] sm:w-[420px] md:w-full bg-[#f6f6f699] shadow-[10px_20px_40px_0px_rgba(0,0,0,0.2)] rounded-[1.5rem] overflow-hidden">
            {/* Form Header */}
            <div className="formHeader w-full pt-[1.2rem] pb-[1.8rem] bg-gray-800 rounded-b-[100%]">
              <h2 className="w-full text-[2.6rem] sm:text-[3rem] font-medium text-white text-center select-none">
                Sign in to Portal
              </h2>
            </div>

            {/* Form Body */}
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
                      ? "mt-[-3.8rem] text-[1.55rem] text-[#0a639e]"
                      : "mt-[0rem] text-[1.75rem] text-gray-800"
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
                      ? "mt-[-3.8rem] text-[1.55rem] text-[#0a639e]"
                      : "mt-[0rem] text-[1.75rem] text-gray-800"
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

              {/* For Role */}
              <div className="formRoleCont w-full pt-[1rem] pb-[0.6rem] px-[2rem] flex justify-between items-center">
                <span className="text-[1.75rem] leading-[2rem] text-gray-800 font-semibold">
                  Please identify your role :
                </span>
                <select
                  name="role"
                  id="role"
                  className="w-[10rem] text-[1.6rem] leading-[1.4rem] text-gray-800 font-semibold bg-transparent cursor-pointer outline-none border-b-2 border-gray-800 focus:border-[#0a639e]"
                >
                  <option className={utilityStyles.formRoleOptions} value="">
                    select
                  </option>
                  <option
                    className={utilityStyles.formRoleOptions}
                    value="student"
                  >
                    Student
                  </option>
                  <option
                    className={utilityStyles.formRoleOptions}
                    value="teacher"
                  >
                    Teacher
                  </option>
                  <option
                    className={utilityStyles.formRoleOptions}
                    value="admin"
                  >
                    Admin
                  </option>
                </select>
              </div>

              {/* For Login & Forget */}
              <div className="formActions w-full px-[2rem] flex flex-col gap-[2.5rem]">
                <button className="appearance-none w-full py-[0.6rem] text-[2.2rem] text-white font-bold font-quick bg-gray-800 active:bg-[#7bb434] rounded-[0.5rem] active:scale-95 transition-all">
                  Login
                </button>

                <h6 className="text-[1.55rem] text-gray-800 font-semibold">
                  Forgot Password?{" "}
                  <span className="font-medium hover:underline hover:cursor-pointer hover:text-[#0a639e]">
                    verify your credentials
                  </span>
                </h6>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

const utilityStyles = {
  highlightedTextCont:
    "flex flex-row gap-[1.4rem] justify-center md:flex-col md:gap-[0rem]",
  highlightedText:
    "text-[3rem] leading-[4rem] xs:text-[3.6rem] xs:leading-[4.6rem] sm:text-[4.2rem] sm:leading-[5.2rem] md:text-[4.8rem] md:leading-[6.2rem] lg:text-[5rem] font-bold text-gray-800 select-none whitespace-nowrap",
  sloganText:
    "text-[1.7rem] leading-[2.4rem] sm:text-[1.8rem] leading-[2.6rem] font-quick font-bold text-gray-800 text-center md:text-start mt-[0.5rem] mb-[2.4rem] select-none",
  formInput:
    "w-full px-[0.5rem] pt-[1rem] pb-[0.6rem] text-gray-800 text-[1.7rem] leading-[2rem] font-medium font-mont outline-none bg-transparent border-b-2 border-gray-800 focus:border-[#0a639e] peer/input",
  formInputLabel:
    "absolute px-[0.5rem] leading-[2rem] font-semibold cursor-text transition-all peer-focus/input:mt-[-3.8rem] peer-focus/input:text-[1.55rem] peer-focus/input:text-[#0a639e]",
  formInputIcon: "p-[0.5rem] absolute right-[1.8rem] text-gray-700 z-10",
  formRoleOptions: "text-[1.4rem] text-[#f6f6f6] font-semibold bg-gray-800",
};

export default login;

// #0873b9 => Blue
// #0a639e => Blue
// #8ac642 => Green
// #7bb434 => Green2

// import SMIT_Logo from "../assets/smit-logo.png"
// <img className="w-[9rem]" src={SMIT_Logo} alt="SMIT-Logo" />
