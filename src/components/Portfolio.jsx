import React from "react";
import porfs from "../Data/porfolio";
import PortfolioItem from "./PortfolioItem";

function Portfolio(){
    return(
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {porfs.map(prj=>(
                    <PortfolioItem
                        imgUrl={prj.imgUrl}
                        title={prj.title}
                        stacks={prj.stacks}
                        link={prj.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio;