const TitleContainer = ({title, des}) => {
    return (
        <div className="bg-gradient-to-r z-0 absolute flex from-black  w-screen -mt-5 aspect-video ">
            <div className="ml-20 mt-[14%] text-white w-96">
                <p className="text-3xl font-bold">{title}</p>
                <p className="mt-3 text-sm">{des}</p>
                <div className="mt-5">
                    <button className="bg-white rounded font-bold hover:opacity-80 text-black w-24 py-2 mr-2" >Play</button>
                    <button className="bg-gray-900 opacity-65 rounded font-bold hover:opacity-100 text-white w-24 py-2">MoreInfo</button>
                </div>
            </div>
        </div>
    );
}

export default TitleContainer;