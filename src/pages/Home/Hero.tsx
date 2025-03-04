import photo2 from '../../photos/2.png';
import photo3 from '../../photos/3.png';
import Leo from '../../photos/11.png';

function Hero() {
    return (
        <div className="h-screen w-full overflow-hidden flex items-center justify-center bg-gray-100">
            <section className="w-full flex flex-col justify-center">
                <div className="text-gray-800 flex flex-col justify-center h-full">
                    <div className="container mx-auto flex flex-col md:flex-row items-center h-full mt-4">
                        {/* Left Content */}
                        <div className="flex flex-col w-full lg:w-1/3 justify-center items-center md:items-start p-8 text-center md:text-left">
                            <h1 className="text-3xl md:text-5xl p-2 text-orange-500 tracking-loose font-semibold">
                                Media Leo Tech
                            </h1>
                            <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2 text-gray-900">
                                Startup by your hands
                            </h2>
                            <p className="text-sm md:text-base text-gray-600 mb-4">
                                Get the latest news about Company. Hay Salam
                            </p>
                            <a href="#"
                                className="bg-transparent hover:bg-yellow-500 text-orange-400 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-600 hover:border-transparent">
                                Explore Now
                            </a>
                        </div>

                        {/* Right Image Section */}
                        <div className="sm:mb-4 md:p-8  md:mt-0 lg:w-2/3 flex justify-center items-center">
                        <div className="flex-shrink-0">
                                    <img className="mt-28 hidden xl:block max-w-full h-auto" src={photo2} />
                                </div>
                                <div className="flex-shrink-0">
                                    <img className="xl:mt-24 md:mt-0 p-8 md:p-0 max-w-full h-auto sm: items-center " src={Leo} />
                                </div>
                                <div className="flex-shrink-0">
                                    <img className="mt-28 hidden lg:block max-w-full h-auto" src={photo3} />
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero