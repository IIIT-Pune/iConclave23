import LockoutNav from "./LockoutNav";
const LockoutAbout = () =>{
    return(
        <div className=" lg:bg-black bg-transparent lg:bg-[url('/images/lockoutbg.png')] lg:bg-cover lg:bg-no-repeat text-white lg:h-screen lg:grid grid-cols-2" id="about">

    <div className="font-newshape px-24 pt-24" style={{"fontSize":"7rem"}}>
        <img src="/images/aboutimage.png" alt="" />
    </div>

    <div className="lg:text-4xl text-justify leading-relaxed  font-miso lg:pt-36 lg:pr-24 p-10">
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto ex veniam quaerat alias temporibus natus, ad dicta, porro cumque aliquid perspiciatis eius voluptatum commodi exercitationem dolorum eaque! Possimus quibusdam earum fuga! Delectus tenetur sint fugiat deserunt, minus reprehenderit quia quam ipsum accusantium unde magnam, aperiam sequi earum eos corrupti totam numquam maiores ipsam labore eligendi quisquam. Id, quae! Distinctio soluta at in et a nostrum, laborum rem beatae culpa delectus, impedit, animi id officia? Ipsam quaerat culpa dolor sed eius at optio voluptatibus non. Corporis voluptates aliquam iure architecto ratione fugiat! Sequi temporibus excepturi harum iste consectetur! Consectetur, sed.
        </p>
    </div>

        
        </div>
    )
}
export default LockoutAbout;