const TitleContainer = ({title, des}) => {
    return (
        <div className="bg-gradient-to-r z-0 absolute flex from-black w-screen h-svh sm:h-auto sm:w-screen  sm:-mt-5 lg:h-auto lg:w-screen  lg:-mt-5 aspect-video ">
            <div className="opacity-65 lg:mt-[14%] mt-[32%] flex flex-col items-center lg:ml-20 lg:justify-start w-full text-white lg:w-96">
                <p className="lg:text-3xl sm:text-2xl font-bold w-40 text-center text-sm">{title}</p>
                <p className="hidden lg:block mt-3 text-xs lg:text-sm">{des}</p>
                <div className="lg:mt-5 mt-1">
                    <button className="bg-white rounded hover:opacity-80 text-black w-14 text-[10px] sm:text-xl lg:text-2xl sm:w-24 lg:w-32 py-1 sm:py-1 lg:py-2 mr-2" >Play</button>
                    <button className="bg-gray-900 opacity-65 rounded hover:opacity-100 text-white w-14 sm:text-xl lg:text-2xl text-[10px] text-xm sm:w-24 lg:w-32 py-1 sm:py-1 lg:py-2">MoreInfo</button>
                </div>
            </div>
        </div>
    );
}

export default TitleContainer;