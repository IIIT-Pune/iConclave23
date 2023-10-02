import AnuragNav from "../components/AnuragNav";
const Anurag = () =>{
    return(
        <div className="bg-[url('/images/saaz_bg.png')] text-white min-h-screen flex flex-col bg-cover bg-center">
            <AnuragNav/>
            <div className="flex flex-col justify-center items-center">
            <h1 className="text-12xl font-smarkan -mt-10">anurag</h1>
            <h1 className="text-7xl font-miso -mt-24"> BATTLE OF BANDS</h1>

            <div className="flex justify-center items-center mt-96">
            <h1 className="font-miso text-white border-2 border-white px-5 py-1 text-6xl rounded-lg">
                <a href="#">

                REGISTER
                </a>
            </h1>
            </div>

            </div>
        </div>
    )
}

export default Anurag;