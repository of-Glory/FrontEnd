import CloseBtn from "../CloseBtn/CloseBtn";
import Next from "./Next/Next";

const Page1 = ({ setIsHelpClick, setPage }) => {
    return (
        <div className="firstPage">
            <div className="guideGroup">
                <div className="guide">
                    <h2>ON&nbsp;</h2>
                    <h3><span>:</span> 검지와 중지를 모으고 천천히 위로 움직이세요.</h3>
                </div>
                <div className="guide">
                    <h2>OFF&nbsp;</h2>
                    <h3><span>:</span> 검지와 중지를 모으고 천천히 아래로 움직이세요.</h3>
                </div>
                <div className="guide">
                    <h2>WHITE / COLOR&nbsp;</h2>
                    <h3><span>:</span> 검지와 중지를 모은 상태로 검지와 엄지를 닿았다 뗄 때마다 모드가 바뀝니다.</h3>
                </div>
                <div className="guide">
                    <h2>COLOR Change&nbsp;</h2>
                    <h3><span>:</span> 검지와 중지를 모은 상태로 좌우로 움직이면 색이 전환됩니다.</h3>
                </div>
                <Next onClick={setPage} />
            </div>
            <div className="manual__nav">
                <CloseBtn onClick={setIsHelpClick} />
            </div>
        </div>
    );
}

export default Page1;