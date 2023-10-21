/* eslint-disable react/prop-types */
const SponsorCard = ({ logo, name, website, partner }) => {
  return (
    <a href={website}>
      <div className="h-96 w-80 bg-white bg-opacity-[0.85] rounded-3xl my-3 flex flex-col">
        <div className="h-32 flex justify-center items-center">
          <img src={`./sponsors/` + logo} alt={logo} className="py-8 px-3" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-4xl font-grandstander text-center bg-slate-300 shadow-2xl p-2">
            {name}
          </h1>
          <div className="flex justify-center">
            <h3 className="text-3xl font-semibold font-miso w-3/4 text-center">
              {partner}
            </h3>
          </div>
        </div>
      </div>
    </a>
  );
};

export default SponsorCard;
