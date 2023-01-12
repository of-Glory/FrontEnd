import './ColorList.css';

const ColorList = ({ setColorImgUrl }) => {
    const onClick = (e) => {
        setColorImgUrl(e.target.src)
    }
    return (
        <div className="colorList" onClick={onClick}>
            <ul>
                <li>
                    <img src={`${process.env.PUBLIC_URL}/img/none.png`} alt="none" />
                </li>
                <li>
                    <img src={`${process.env.PUBLIC_URL}/img/red.png`} alt="red" />
                </li>
                <li>
                    <img src={`${process.env.PUBLIC_URL}/img/pink.png`} alt="pink" />
                </li>
                <li>
                    <img src={`${process.env.PUBLIC_URL}/img/blue.png`} alt="blue" />
                </li>
                <li>
                    <img src={`${process.env.PUBLIC_URL}/img/mint.png`} alt="mint" />
                </li>
                <li>
                    <img src={`${process.env.PUBLIC_URL}/img/green.png`} alt="green" />
                </li>
                <li>
                    <img src={`${process.env.PUBLIC_URL}/img/yellow.png`} alt="yellow" />
                </li>
            </ul>
        </div>
    )
}

export default ColorList;