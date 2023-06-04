import inspiredLivingBg from "../assets/inspiredLivingBg.jpg"

function InspiredLiving() {
    return (
        <div>
            <div
                className="my-10 flex flex-col md:flex-row-reverse justify-center"
            >
                <div
                    // className="w-full mx-auto h-full mt-auto bg-gray-700"
                    // className="bg-no-repeat bg-cover bg-gray-700 min-w-[120px] max-w-[420px] min-h-[550px]"
                    className="bg-no-repeat bg-center bg-contain bg-gray-700 p-10"
                    style={{
                        backgroundImage: `url(${inspiredLivingBg})`
                    }}
                >


                    <div
                        className="max-w-[320px] text-white"
                    >
                        <h1
                            className="text-6xl"
                        >
                            Find The Perfect  Boo That's RIght For You

                        </h1>
                        <p
                            className="text-xl py-8 text-justify"
                        >
                            Our innovative dating platform is designed to make your journey enjoyable and stress-free. With a vast community of like-minded individuals, you'll have the opportunity to explore endless possibilities and discover meaningful connections.
                        </p>
                    </div>

                </div>


                <div>
                    {/* write arrow text */}
                </div>

            </div>
            {/* <img src={inspiredLivingBg} alt="" /> */}
        </div>
    )
}

export default InspiredLiving