import React from "react";
import "./Card.css";
type Props = {
    src?: string;
    children?: React.ReactNode
}
const Card = {
    Image: function({ src }: Props){
        return(
            <img src={src} alt={src?.split("/")[src?.split("/").length-1]}/>
        )
    },
    Title: function({ children }: Props){
        return(
            <div>{children}</div>
        )
    },
    Container: function({ children }: Props){
        return(
            <div className="card-container">
                {children}
            </div>
        )
    }
}
// const Card = function(){
//     const Title = function({ children }: Props){
//         return(
//             <div>{children}</div>
//         )
//     }
// }

export default Card;