import Bulb from "./Bulb/Bulb";
import Option from "./Option/Option";
import './App.css';
import Color from "./Color/Color";
import ColorList from "./Color/ColorList/ColorList";
import { useState } from "react";

function App() {
  const [colorImgUrl, setColorImgUrl] = useState(`${process.env.PUBLIC_URL}/img/none.png`);
  const [isShowColorLs, setIsShowColorLs] = useState(false);
  return (
    <div className="App">
      <div className="container">
        <Bulb />
        <Option text="OFF" style={{ backgroundColor: '#E4CFBC', height: '203px', width: '470px', borderRadius: '60px' }} />
      </div>
      <div className="container">
        <Option text="WHITE" style={{ backgroundColor: '#D9D9D9', height: '131px', width: '488px', borderRadius: '40px' }} />
        <div className="color-container">
          <Option text="COLOR" style={{ backgroundColor: '#D9D9D9', height: '131px', width: '364px', borderRadius: '40px' }} />
          <Color setIsShowColorLs={setIsShowColorLs} colorImgUrl={colorImgUrl} />
        </div>
        {
          isShowColorLs ?
          <ColorList setColorImgUrl={setColorImgUrl} /> : null
        }
      </div>
    </div>
  );
}

export default App;
