/* eslint-disable react/no-unescaped-entities */
import { Formik, Form } from "formik";
import { TextInput } from "../components/TextInput";

import * as Yup from "yup";
import InfinityNav from "../components/InfinityNav";

/* eslint-disable react/jsx-no-target-blank */
// eslint-disable-next-line no-shadow-restricted-names
const Infinity = () => {
  return (
    <div className="relative">
      <div className="bg-black h-screen">
        <InfinityNav />
        <div className="flex justify-center p-8 items-center ">
          <img
            src="./images/Infinity_logo.png"
            alt="Infinity Logo"
            width={832}
          />
        </div>
        <div className="text-white flex justify-center text-2xl lg:text-3xl font-miso">
          HOSTED ON &nbsp;
          <span className="font-nightcore">
            <a target="_blank" href="https://www.codechef.com/" rel="noopener">
              CODE <span className="text-red-600">CHEF</span>
            </a>
          </span>{" "}
          &nbsp;
          <a
            target="_blank"
            href="https://www.codechef.com/START105"
            rel="noopener"
          >
            ( AS STARTERS 105 )
          </a>
        </div>
        <div className="text-white flex justify-center text-2xl lg:text-3xl font-miso m-3">
          <div className="flex items-center justify-center h-10 ">
            <img src="./images/Calendar25.png" alt="25 Oct" width={50} />
          </div>
          OCT 25’ 2023 &nbsp;
          <img src="./images/Alarm.png" alt="25 Oct" width={50} />
          20:00 - 22:00
        </div>

        <div className="text-white flex justify-center pt-16">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScAr32xvlkGK7EZxsp3RU0Ix-r2RgiDjX8sWcrX4JoWJ5VYlw/viewform"
            target="_blank"
            rel="noopener"
          >
            <h1 className="border border-1 border-white px-5 lg:px-14 py-2 lg:py-5 rounded-2xl text-2xl lg:text-4xl font-nightcore">
              Register &nbsp; <span className="text-red-600">Now</span>
            </h1>
          </a>
        </div>
      </div>
      <div className="bg-black h-full text-white" id="about">
        <h1 className="flex justify-center font-nightcore text-4xl lg:text-8xl tracking-widest pt-20 pb-8">
          ABOUT THE CO<span className="text-red-600">N</span>TEST
        </h1>
        <div className="flex flex-col gap-6">
          <p className="font-miso text-xl lg:text-3xl px-10 lg:px-32 text-justify">
            Welcome to InfInITy 2k23, the{" "}
            <span className="text-red-600">sixth installment</span> of IIIT
            Pune's flagship annual coding contest! If you have a passion for
            coding and a competitive spirit, this event is tailor-made for you.
          </p>
          <p className="font-miso text-xl lg:text-3xl px-10 lg:px-32 text-justify">
            InfInITy made its debut in 2017 and has since evolved into a
            thrilling coding contest that attracts participants from all over.
            Initially limited to IIIT Pune, it has now become a prestigious
            event open to coding enthusiasts everywhere.
          </p>
          <p className="font-miso text-xl lg:text-3xl px-10 lg:px-32 text-justify">
            InfInITy is a <span className="text-red-600">2-hour coding</span>{" "}
            challenge thatpromises to keep you on the edge of your seat. Whether
            you're a beginner taking your first steps in the world of coding or
            an experienced coder looking for a new challenge, we have problems
            designed to test and elevate your coding skills.
          </p>
          <p className="font-miso text-xl lg:text-3xl px-10 lg:px-32 text-justify">
            Whether you're a student, a professional, or simply someone who
            loves to solve problems through code, you're welcome to join us for
            InfInITy 2k23.
          </p>
          <p className="font-miso text-xl lg:text-3xl px-10 lg:px-32 text-justify">
            Mark your calendars and get ready for an adrenaline-pumping coding
            experience at <span className="text-red-600">InfInITy 2k23!</span>
          </p>
        </div>
        <div>
          <h2 className="flex justify-center font-nightcore text-4xl lg:text-8xl tracking-wider p-5 lg:p-10">
            Register
          </h2>
          <p className="flex justify-center font-miso text-xl px-10 lg:text-2xl">
            Embark on the code cooking journey off in the far lands of
            CodeChef's turf
          </p>

          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              codechefuserID: "",
              email: "",
              country: "",
              organisation: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={Yup.object({
              firstName: Yup.string().required("Required"),
              lastName: Yup.string().required("Required"),
              codechefuserID: Yup.string().required("Required"),
              email: Yup.string().email("Invalid email").required("Required"),
              country: Yup.string().required("Required"),
              organisation: Yup.string().required("Required"),
            })}
          >
            {(isSubmitting) => (
              <Form
                className="flex flex-col justify-center items-center gap-6 p-5 lg:w-full"
                id="register"
              >
                <TextInput
                  name="firstName"
                  type="text"
                  placeholder="FIRST NAME"
                />
                <TextInput
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                />
                <TextInput
                  name="codechefuserID"
                  type="text"
                  placeholder="CODECHEF USERNAME"
                />
                <TextInput name="email" type="email" placeholder="EMAIL" />
                <TextInput name="country" type="text" placeholder="COUNTRY" />
                <TextInput
                  name="organisation"
                  type="text"
                  placeholder="ORGANISATION / UNIVERSITY"
                />
                <div>
                  {isSubmitting && (
                    <button
                      type="submit"
                      className="bg-red-600 py-3 px-10 mt-2 font-nightcore text-3xl tracking-wider rounded-2xl"
                    >
                      Submit
                    </button>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <footer>
        <div className="flex justify-center items-center bg-black h-20 gap-5">
          <a href="#">
            <img
              src="images/github.png"
              alt="Github"
              className="cursor-pointer"
            />
          </a>
          <a href="#">
            <img
              src="images/instagram.png"
              alt="Github"
              className="cursor-pointer"
            />
          </a>
          <a href="#">
            <img
              src="images/linkedin.png"
              alt="Github"
              className="cursor-pointer"
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Infinity;
