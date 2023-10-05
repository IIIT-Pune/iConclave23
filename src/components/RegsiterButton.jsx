import '../index.css';
const RegisterButton = ({fonts}) =>{
  let data =  <div className="flex justify-center items-center mt-72 sm:mt-20 2xl:mt-48">
  <h1 className="text-white  border-2 px-8 py-3 text-4xl lg:text-6xl rounded-2xl tracking-wide hover:bg-white hover:text-black" id="RegisterBtn" style={{fontFamily:fonts}}>
    REGISTER
  </h1>
</div>
    return(data)
};
RegisterButton.defaultProps = {
fonts:"Miso"
};
export default RegisterButton;