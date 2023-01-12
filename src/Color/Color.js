import './Color.css';

const Color = ({ colorImgUrl }) => {

    return (
        <div>
            <div className="colorBtn">
                <img className='color' src={colorImgUrl} />
            </div>
        </div>
    )
}

export default Color;