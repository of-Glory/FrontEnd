import './Bulb.css';

const Bulb = ({ isOn, setIsOn }) => {
    return (
        <div>
            { isOn ?
                <img className='bulb'
                    src={`${process.env.PUBLIC_URL}/img/BulbOn.png`}
                /> : <img className='bulb'
                    src={`${process.env.PUBLIC_URL}/img/BulbOff.png`}
                />
            }
        </div>
    )
}

export default Bulb;