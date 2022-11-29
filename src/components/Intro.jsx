import React from "react";

function Intro(){
    return(
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl md-1 md:mb-3 font-bold">
                Hải Anh
            </h1>
            <p className="text-base md:text-xl md-3 font-medium">
                Software Engineer
            </p>
            <p className="text-sm max-w-xl mb-6">
                This is my entire bio :)
            </p>
        </div>
    )
}

export default Intro;