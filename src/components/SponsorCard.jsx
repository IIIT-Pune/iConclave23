/* eslint-disable react/prop-types */
const SponsorCard = ({ logo, name, website, partner }) => {
  return (
    <a href={website}>
      <div className="h-80 w-80 bg-white bg-opacity-[0.30] rounded-3xl my-3 flex flex-col justify-center items-center">
        <div className="h-3/5 flex justify-center items-center">
          <img
            src={`./sponsors/` + logo}
            alt={logo}
            className="w-10/12 max-h-full p-2"
          />
        </div>
        <div className="flex flex-col pb-4 gap-2 w-10/12">
          <h1 className="text-4xl font-normal	font-miso text-center text-gray-900 bg-opacity-[0.60] bg-gray-400	shadow-2xl rounded-xl p-2">
            {name}
          </h1>
          <div className="flex text-gray-300 justify-center">
            <h3 className="text-4xl font-medium	font-miso text-center">
              {partner}
            </h3>
          </div>
        </div>
      </div>
    </a>
  );
};

export default SponsorCard;
