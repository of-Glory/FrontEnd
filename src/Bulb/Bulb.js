import { useState } from "react"

const Bulb = () => {
    const [isOn, setIsOn] = useState(false);

    return (
        <div>
            { isOn ?
                <img
                    src={`${process.env.PUBLIC_URL}/img/BulbOn.png`}
                /> : <img
                    src={`${process.env.PUBLIC_URL}/img/BulbOff.png`}
                />
            }
        </div>
    )
}

export default Bulb;