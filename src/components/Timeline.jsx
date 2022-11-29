import React from "react";
import timeline from "../Data/timeline";
import TimelineItem from "./TimelineItem";

function Timeline(){
    return(
        <div className="flex flex-col md:flex-row justify-center my-20">
            <div className="w-full md:w-7/12">
                {timeline.map(tl=>(
                    <TimelineItem
                        year={tl.year}
                        title={tl.title}
                        duration={tl.duration}
                        details={tl.details}
                    />
                ))}
            </div>
        </div>
    )
}

export default Timeline;