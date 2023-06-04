import ourPlanBg from "../assets/ourPlanBg.jpg"

function PlanVision2() {
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
                        backgroundImage: `url(${ourPlanBg})`
                    }}
                >


                    <div
                        className="max-w-[320px] text-white"
                    >
                        <h1
                            className="text-6xl"
                        >
                            Boo [Boo] (noun)

                        </h1>
                        <p
                            className="text-xl py-8 text-justify"
                        >
                            Someone you love, someone you care about, someone who is a lifetime best friend. Someone who is always there for you. Someone who is extremely attractive. Someone who is very important in your life. Someone who can make you laugh. Someone you can never replace. - Urban Dictionary
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

export default PlanVision2