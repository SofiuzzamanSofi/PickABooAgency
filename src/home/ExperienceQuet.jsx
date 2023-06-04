import experienceQuetBg from "../assets/experienceQuetBg.jpg"

function ExperienceQuet() {
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
                        backgroundImage: `url(${experienceQuetBg})`
                    }}
                >


                    <div
                        className="max-w-[320px] text-white"
                    >
                        <h1
                            className="text-6xl"
                        >
                            You’ve Come To The RIght  Place

                        </h1>
                        <p
                            className="text-xl py-8 text-justify"
                        >
                            PickABoo is not just about swiping through profiles; it's about discovering the depth and beauty of human connections. We encourage authentic interactions and genuine conversations, fostering an environment where you can truly get to know someone beyond their profile picture.
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

export default ExperienceQuet