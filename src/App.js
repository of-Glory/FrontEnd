import Bulb from "./Bulb/Bulb";
import Option from "./Option/Option";
import './App.css';
import Color from "./Color/Color";
import { useState } from "react";

function App() {
  const [isOn, setIsOn] = useState(false);
  const [colorImgUrl, setColorImgUrl] = useState(`${process.env.PUBLIC_URL}/img/none.png`);
  return (
    <div className="App">
      <div className="container">
        <Bulb isOn={isOn} setIsOn={setIsOn} />
        {
          isOn ? <Option text="OFF" style={{ backgroundColor: '#E4CFBC', height: '203px', width: '470px', borderRadius: '60px' }} />
          : <Option text="On" style={{ backgroundColor: '#E4CFBC', height: '203px', width: '470px', borderRadius: '60px' }} />
        }
      </div>
      <div className="container">
        <Option text="WHITE" style={{ backgroundColor: '#D9D9D9', height: '131px', width: '488px', borderRadius: '40px' }} />
        <div className="color-container">
          <Option text="COLOR" style={{ backgroundColor: '#D9D9D9', height: '131px', width: '364px', borderRadius: '40px' }} />
          <Color colorImgUrl={colorImgUrl} />
        </div>
      </div>
    </div>
  );
}

export default App;
