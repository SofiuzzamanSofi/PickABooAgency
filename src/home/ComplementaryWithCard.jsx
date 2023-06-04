
import ComplementaryWithCardUpBg from "../assets/ComplementaryWithCardUpBg.jpg"
import box1 from "../assets/box1.jpg"
import box2 from "../assets/box2.jpg"
import box3 from "../assets/box3.jpg"

function ComplementaryWithCard() {
    return (
        <div>
            <div
                className="my-10 flex flex-col items-center border"
            >
                <div
                    // className="w-full mx-auto h-full mt-auto bg-gray-700"
                    // className="bg-no-repeat bg-cover bg-gray-700 min-w-[120px] max-w-[420px] min-h-[550px]"
                    className="bg-no-repeat bg-center bg-contain bg-gray-700 p-10"
                    style={{
                        backgroundImage: `url(${ComplementaryWithCardUpBg})`
                    }}
                >


                    <div
                        className="max-w-[320px] text-white"
                    >
                        <h1
                            className="text-6xl"
                        >
                            PickABoo: Unveil Love's Hidden Treasure

                        </h1>
                        <p
                            className="text-xl py-8 text-justify"
                        >
                            Thank you for choosing PickABoo as your preferred dating platform. We understand that the search for love can be a transformative and sometimes challenging journey. That's why we are here, ready to support you every step of the way.
                        </p>
                    </div>

                </div>
                <div
                    className="my-10 flex flex-col md:flex-row items-center gap-4 border"
                >

                    <div
                        // className="w-full mx-auto h-full mt-auto bg-gray-700"
                        // className="bg-no-repeat bg-cover bg-gray-700 min-w-[120px] max-w-[420px] min-h-[550px]"
                        className="bg-no-repeat bg-center bg-contain bg-gray-700 p-10"
                        style={{
                            backgroundImage: `url(${box1})`
                        }}
                    >


                        <div
                            className="max-w-[320px] text-white"
                        >
                            <h1
                                className="text-6xl"
                            >
                                PickABoo: Unveil Love's Hidden Treasure

                            </h1>
                            <p
                                className="text-xl py-8 text-justify"
                            >
                                Thank you for choosing PickABoo as your preferred dating platform. We understand that the search for love can be a transformative and sometimes challenging journey. That's why we are here, ready to support you every step of the way.
                            </p>
                        </div>

                    </div>
                    <div
                        // className="w-full mx-auto h-full mt-auto bg-gray-700"
                        // className="bg-no-repeat bg-cover bg-gray-700 min-w-[120px] max-w-[420px] min-h-[550px]"
                        className="bg-no-repeat bg-center bg-contain bg-gray-700 p-10"
                        style={{
                            backgroundImage: `url(${box2})`
                        }}
                    >


                        <div
                            className="max-w-[320px] text-white"
                        >
                            <h1
                                className="text-6xl"
                            >
                                PickABoo: Unveil Love's Hidden Treasure

                            </h1>
                            <p
                                className="text-xl py-8 text-justify"
                            >
                                Thank you for choosing PickABoo as your preferred dating platform. We understand that the search for love can be a transformative and sometimes challenging journey. That's why we are here, ready to support you every step of the way.
                            </p>
                        </div>

                    </div>
                    <div
                        // className="w-full mx-auto h-full mt-auto bg-gray-700"
                        // className="bg-no-repeat bg-cover bg-gray-700 min-w-[120px] max-w-[420px] min-h-[550px]"
                        className="bg-no-repeat bg-center bg-contain bg-gray-700 p-10"
                        style={{
                            backgroundImage: `url(${box3})`
                        }}
                    >


                        <div
                            className="max-w-[320px] text-white"
                        >
                            <h1
                                className="text-6xl"
                            >
                                PickABoo: Unveil Love's Hidden Treasure

                            </h1>
                            <p
                                className="text-xl py-8 text-justify"
                            >
                                Thank you for choosing PickABoo as your preferred dating platform. We understand that the search for love can be a transformative and sometimes challenging journey. That's why we are here, ready to support you every step of the way.
                            </p>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default ComplementaryWithCard