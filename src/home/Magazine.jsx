

const Magazine = () => {
    return (
        <div>
            <h1 className="text-xl font-serif text-center">You Start a Magazine in Your City?</h1>
            <div className="flex items-center min-h-screen bg-gray-50">
                <div
                    className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl"
                >
                    <div className="flex flex-col md:flex-row">
                        <div className="h-32 md:h-auto md:w-1/2">
                            <img
                                className="object-cover w-full h-full"
                                src="https://cdn.pixabay.com/photo/2021/01/15/17/01/green-5919790__340.jpg"
                                alt="img"
                            />
                        </div>
                        <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                            <div className="w-full">
                                <h3 className="mb-4 text-xl font-bold text-blue-600">Submit</h3>

                                <div className="w-full bg-gray-200 rounded-full">
                                    <div
                                        className="
                    w-40
                    p-1
                    text-xs
                    font-medium
                    leading-none
                    text-center text-blue-100
                    bg-blue-600
                    rounded-full
                  "
                                    >
                                        Step1
                                    </div>
                                </div>

                                <div className="mt-4 mb-4">
                                    <label className="block text-sm"> What is the population of your city? </label>
                                    <input
                                        type="text"
                                        className="
                    w-full
                    px-4
                    py-2
                    text-sm
                    border
                    rounded-md
                    focus:border-blue-400
                    focus:outline-none
                    focus:ring-1
                    focus:ring-blue-600
                  "
                                        placeholder="Please write here"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm">How many competitors do you have? </label>
                                    <input
                                        type="text"
                                        className="
                    w-full
                    px-4
                    py-2
                    text-sm
                    border
                    rounded-md
                    focus:border-blue-400
                    focus:outline-none
                    focus:ring-1
                    focus:ring-blue-600
                  "
                                        placeholder="Please write here"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm"> How much time do you have to commit to starting your magazine per week? </label>
                                    <input
                                        className="
                    w-full
                    px-4
                    py-2
                    text-sm
                    border
                    rounded-md
                    focus:border-blue-400
                    focus:outline-none
                    focus:ring-1
                    focus:ring-blue-600
                  "
                                        placeholder="Please write here"
                                        type="text"
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        className="
                    px-6
                    py-2
                    mt-4
                    text-sm
                    font-medium
                    leading-5
                    text-center text-white
                    transition-colors
                    duration-150
                    bg-blue-600
                    border border-transparent
                    rounded-lg
                    hover:bg-blue-700
                    focus:outline-none
                  "
                                        href="#"
                                    >
                                        Next
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Magazine;