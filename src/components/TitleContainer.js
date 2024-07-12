const TitleContainer = ({title, des}) => {
    return (
        <div className="bg-gradient-to-r flex items-center from-black absolute w-screen aspect-video ">
            <div className="ml-20 text-white w-96">
                <p className="text-4xl font-bold">{title}</p>
                <p className="mt-8 text-sm">{des}</p>
                <div className="mt-5">
                    <button className="bg-white rounded font-bold hover:opacity-80 text-black px-8 py-2 text-xl mr-2" > ▶ Play</button>
                    <button className="bg-white rounded font-bold hover:opacity-80 text-black px-8 py-2 text-xl">MoreInfo</button>
                </div>
            </div>
        </div>
    );
}

export default TitleContainer;