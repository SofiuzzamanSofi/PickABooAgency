import ourPlanBg from "../assets/ourPlanBg.jpg"

function PlanVision() {
    return (
        <div>
            <div
                className="my-10 flex flex-col md:flex-row-reverse justify-center"
            >
                <div>
                    {/* write arrow text */}
                </div>

                <div
                    // className="w-full mx-auto h-full mt-auto bg-gray-700"
                    // className="bg-no-repeat bg-cover bg-gray-700 min-w-[120px] max-w-[420px] min-h-[550px]"
                    className="bg-no-repeat bg-center bg-contain bg-gray-700 p-10"
                    style={{
                        backgroundImage: `url(${ourPlanBg})`
                    }}
                >


                    <div
                        className="max-w-[320px] text-white"
                    >
                        <h1
                            className="text-6xl"
                        >
                            Seek Love And Take A Chance A Love

                        </h1>
                        <p
                            className="text-xl py-8 text-justify"
                        >
                            At PickABoo, we believe that everyone deserves a chance at finding their perfect match. Whether you're searching for a soulmate, a companion for adventures, or someone to share laughter and love with, you've come to the right place.
                        </p>
                    </div>

                </div>

            </div>
            {/* <img src={ourPlanBg} alt="" className /> */}
        </div>
    )
}

export default PlanVision