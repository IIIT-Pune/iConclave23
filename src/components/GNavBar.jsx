/* eslint-disable react/prop-types */

const GNavBar = ({club, color, hcolor}) => {
  return (
    <div className="">
      <nav className="flex justify-center h-16 items-center">
        <ul className={`flex gap-24 text-${color} font-miso text-3xl `}>
          <a href="#about">
            <li
              className={`hover:text-${hcolor} border-b-2 border-transparent hover:border-b-2 hover:border-${hcolor} cursor-pointer`}
            >
              ABOUT
            </li>
          </a>
          <a href="#club">
          <li
            className={`hover:text-${hcolor} border-b-2 border-transparent hover:border-b-2 hover:border-${hcolor} cursor-pointer`}
          >
            {club}
          </li>
          </a>
          <li
            className={`hover:text-${hcolor} border-b-2 border-transparent hover:border-b-2 hover:border-${hcolor} cursor-pointer`}
          >
            GUIDELINE
          </li>
          <li
            className={`hover:text-${hcolor} border-b-2 border-transparent hover:border-b-2 hover:border-${hcolor} cursor-pointer`}
          >
            GET IN TOUCH
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default GNavBar
