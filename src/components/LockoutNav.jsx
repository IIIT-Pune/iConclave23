const LockoutNav = () => {
  return (
    <div>
      <nav className="flex justify-center h-16 items-center">
        <ul className="flex gap-24 text-white font-miso text-3xl  ">
          <li className="hover:text-black border-b-2 border-transparent hover:border-b-2 hover:border-black">
            ABOUT
          </li>
          <li className="hover:text-black border-b-2 border-transparent hover:border-b-2 hover:border-black">
            BIT LEGION
          </li>
          <li className="hover:text-black border-b-2 border-transparent hover:border-b-2 hover:border-black">
            GUIDELINES
          </li>
          <li className="hover:text-black border-b-2 border-transparent hover:border-b-2 hover:border-black">
            TEAM
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LockoutNav;
