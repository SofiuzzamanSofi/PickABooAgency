import InspireDesignQuetBg from "../assets/InspireDesignQuetBg.jpg"

function InspireDesignQuet() {
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
                        backgroundImage: `url(${InspireDesignQuetBg})`
                    }}
                >


                    <div
                        className="max-w-[320px] text-white"
                    >
                        <h1
                            className="text-6xl"
                        >
                            THE ELEMENT OF FUN AND EXCITEMENT

                        </h1>
                        <p
                            className="text-xl py-8 text-justify"
                        >
                            PickABoo dating app stands out by infusing the search for a partner with excitement, fun, and a touch of adventure. With a unique approach to match-making, PickABoo aims to inspire individuals to embrace the journey of love, trust the process, take a chance, and ultimately discover a connection that could last a lifetime.
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

export default InspireDesignQuet