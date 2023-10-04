import LockoutNav from "./LockoutNav";
import Footer from "./Footer";

const LockoutGuidelines = () => {
  return (
    <div
      style={{
        background: "url(/images/lockoutbg.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="h-screen w-full overflow-y-auto flex flex-col"
    >
      <LockoutNav />
      <div className="flex-grow">
        <div
          className="font-newshape flex justify-center lg:justify-start pt-12 md:pt-16 md:px-20"
          style={{ fontSize: "7rem" }}
        >
          <img
            src="/images/guidelinesimage.png"
            className="h-12 sm:h-20 md:h-24 lg:h-36"
            alt=""
          />
        </div>
        <div className="text-white text-base sm:text-xl md:text-2xl lg:text-3xl space-y-6  text-justify leading-relaxed px-10 sm:px-20 py-10 lg:py-12 font-miso">
          <p>
            At our 1v1 Elimination Matches Tournament, we want to ensure a
            smooth and enjoyable experience for all participants. Here are some
            important guidelines to follow:
          </p>
          <p>
            <span className="font-bold text-xl sm:text-2xl lg:text-4xl">
              1. Codeforces and Discord Accounts:
            </span>
            <ul
              role="list"
              class="marker:text-white-400 list-disc pl-6 sm:pl-8 md:pl-10"
            >
              <li>Make sure you have an active Codeforces account.</li>
              <li>
                Ensure that your Discord account is registered with the same
                email ID you used for your Codeforces account.
              </li>
            </ul>
          </p>
          <p>
            <span className="font-bold text-xl sm:text-2xl lg:text-4xl">
              2. Laptop Requirement:
            </span>
            <ul
              role="list"
              class="marker:text-white-400 list-disc pl-6 sm:pl-8 md:pl-10"
            >
              <li>Bring your own laptop to the tournament.</li>
              <li>You'll need it for coding challenges.</li>
            </ul>
          </p>
          <p>
            <span className="font-bold text-xl sm:text-2xl lg:text-4xl">
              3. Join Our Discord Server:
            </span>
            <ul
              role="list"
              class="marker:text-white-400 list-disc pl-6 sm:pl-8 md:pl-10"
            >
              <li>Join the designated Discord server provided to you.</li>
              <li>
                {" "}
                Pay special attention to the "Rules" channel for important
                instructions and updates.
              </li>
            </ul>
          </p>
          <p>
            <span className="font-bold text-xl sm:text-2xl lg:text-4xl">
              4. Code Editor:
            </span>
            <ul
              role="list"
              class="marker:text-white-400 list-disc pl-6 sm:pl-8 md:pl-10"
            >
              <li>
                Have a code editor of your choice installed and ready to use on
                your laptop.
              </li>
              <li>
                Make sure you're comfortable coding in your preferred
                programming language.
              </li>
            </ul>
          </p>
          <p>
            <span className="font-bold text-xl sm:text-2xl lg:text-4xl">
              5. Technical Preparedness:
            </span>
            <ul
              role="list"
              class="marker:text-white-400 list-disc pl-6 sm:pl-8 md:pl-10"
            >
              <li>Ensure your laptop is in good working condition.</li>
              <li>
                Charge your laptop fully or bring a charger to avoid
                interruptions during the tournament.
              </li>
            </ul>
          </p>
          <p>
            By following these guidelines, you'll be well-prepared for the 1v1
            Elimination Matches Tournament, and you'll have a competitive
            advantage in the exciting world of problem-solving and coding
            challenges. Get ready to showcase your skills and join us for an
            unforgettable tournament experience!
          </p>
        </div>
      </div>
      <Footer textColor={"white"} />
    </div>
  );
};

export default LockoutGuidelines;
