import CloseBtn from "../CloseBtn/CloseBtn";
import Prev from "./Prev/Prev";

const Page2 = ({ setIsHelpClick, setPage }) => {
    return (
        <div className="firstPage">
            <div className="guideGroup">
                <div className="guide">
                    <h2>VOLUME&nbsp;</h2>
                    <h3><span>:</span> 검지를 좌우로 움직이면 소리의 크기가 조절됩니다.<br />(좌 : 작아짐. 우 : 커짐)</h3>
                </div>
                <div className="guide">
                    <h2>MUTE&nbsp;</h2>
                    <h3><span>:</span> 검지와 엄지가 닿으면 음소거가 됩니다.</h3>
                </div>
                <Prev onClick={setPage} />
            </div>
            <div className="manual__nav">
                <CloseBtn onClick={setIsHelpClick} />
            </div>
        </div>
    );
}

export default Page2;