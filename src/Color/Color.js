import { useState } from "react";

const Color = ({ setIsShowColorLs, colorImgUrl }) => {
    const onClick = () => {
        setIsShowColorLs(prev => !prev);
    }

    return (
        <div>
            <div className="colorBtn" onClick={onClick}>
                <img src={colorImgUrl} />
            </div>
        </div>
    )
}

export default Color;