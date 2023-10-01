/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nightcore: ["Nightcore", "sans"],
        miso: ["miso", "sans"],
        newshape: ["NewShape", "sans"],
        captainamerica: ["CaptainAmerica", "sans"],
        silkroad: ["Silkroad", "sans"],
        majormono: ["Major Mono Display", "sans"],
        octobercrow: ["Octobercrow", "sans"],
        veterantypewriter: ["veterantypewriter", "sans"],
        1942: ["oneninefourtwo", "sans"],
        punktypewriter: ["punktypewriter", "sans"],
        liquidism: ["liquidism", "sans"],
        monoton: ["Monoton", "cursive"],
      },
      colors: {
        lockoutred: "#571d20",
        cognitionbg: "#D7D6D7",
        frameflickbg: "#FCE61F",
      },
      width: {
        128: "32rem",
        192: "48rem",
        256: "64rem",
      },
      height: {
        128: "32rem",
      },
      fontSize: {
        "10xl": "10rem",
        "11xl": "12rem",
        "12xl": "14rem",
        "13xl": "16rem",
      },
    },
  },
  plugins: [],
};
