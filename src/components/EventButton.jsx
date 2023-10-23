const EventButton = ({type}) => {
  return (
    <div>
      <a href="#">
        <div className="relative">
          <img
            src="/images/b1img.png"
            alt=""
            className={`w-10 absolute -top-5 -right-7`}
          />
          <img
            src="/images/b2img.png"
            alt=""
            className="w-10 absolute -top-5 -left-7  z-0"
          />
          <h1
            className="text-center"
            style={{
              textShadow: "0 0 20px rgba(255, 255, 255, 0.7)"
            }}
          >
            {type} EVENTS
          </h1>
        </div>
      </a>
    </div>
  );
};

export default EventButton;
