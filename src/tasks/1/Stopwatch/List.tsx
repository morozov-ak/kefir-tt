import React from "react";
import {IListProps} from "./interfaces"

const List: React.FC<IListProps>=({list,getUnits})=> {

    if(list.length){
        return(
            <ul>
                {
                    list.map((item)=>{
                        return(
                            <li key={item.key}>
                                {getUnits(item.time)}
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
    return(
        <p>no laps</p>
    )
}

export default List;
