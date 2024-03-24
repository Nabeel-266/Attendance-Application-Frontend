// Import Images
import SMIT_Logo from "../assets/smit-logo.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import linkedin from "../assets/linkedin.png";

const login = () => {
  const socialIcon = [
    [facebook, "https://www.facebook.com/saylani.smit"],
    [instagram, "https://www.instagram.com/saylani.smit/"],
    [linkedin, "https://www.linkedin.com/company/saylanimassittraining/"],
    [youtube, "https://www.youtube.com/@SaylaniMassITTraining"],
  ];

  return (
    <div className="loginContainer w-[90%] md:w-[90%] lg:w-[1000px] flex flex-col md:flex-row">
      <section className="contSideOne w-full md:w-[50%] flex flex-col justify-center">
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

      <section className="contSideTwo w-[50%] border-2 border-gray-800 px-[1.5rem]">
        <div className="formHeader w-full py-[0.8rem] border-b-2 border-gray-800">
          <h2 className="w-full text-[3.2rem] font-semibold text-gray-800 text-center">
            Sign in to Portal
          </h2>
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
};

export default login;

// #0873b9 => Blue
// #8ac642 => Green

// https://www.facebook.com/saylani.smit
// https://www.instagram.com/saylani.smit/
// https://www.youtube.com/@SaylaniMassITTraining
// https://www.linkedin.com/company/saylanimassittraining/

{
  /* <img className="w-[9rem]" src={SMIT_Logo} alt="SMIT-Logo" /> */
}
