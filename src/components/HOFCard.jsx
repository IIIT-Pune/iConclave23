/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import HOFCardContent from "./HOFCardContent";

const HOFCard = ({ title, bgcolor, ccolor, transy, data }) => {
  return (
    <div>
      <div
        className={`bg-${bgcolor} my-10 w-80 pb-10 lg:mb-24 text-black rounded-3xl ${
          transy ? "-translate-y-5" : 0
        } shadow-lg shadow-gray-700/50 `}
        style={{
          "box-shadow":
            "-12px 15px 14px 0px rgba(0, 0, 0, 0.25), 12px 15px 14px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <h1 className="font-miso text-5xl flex justify-center p-5">{title}</h1>

        {data.map((ele) => {
          return (
            <HOFCardContent
              ccolor={ccolor}
              name={ele.name}
              clg={ele.clg}
              year={ele.year}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HOFCard;
