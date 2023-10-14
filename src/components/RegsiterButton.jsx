/* eslint-disable react/prop-types */
import '../index.css';
const RegisterButton = ({fonts, link}) =>{
  let data =  <div className="flex justify-center items-center mt-12 sm:mt-0">
  <a href={link}>
  <h1 className="text-white  border-2 px-8 py-3 text-2xl lg:text-3xl rounded-2xl tracking-wide hover:bg-white hover:text-black" id="RegisterBtn" style={{fontFamily:fonts}}>
    REGISTER
  </h1>
  </a>
</div>
    return(data)
};
RegisterButton.defaultProps = {
fonts:"Miso",
};
export default RegisterButton;