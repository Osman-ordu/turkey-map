import { useState } from "react";
import TurkeyMap from "turkey-map-react";
import coal from "./images/coal.png";
import antimony from "./images/antimony.png";
import iron from "./images/iron.png";
function App() {
  const [city, setCity] = useState("");
  const [img, setImg] = useState("");
  const [mine, setMine] = useState("");

  return (
    <div className="App">
      <div className="header-wrapper">
        <p className="city-p">{city}</p>
        <div>
          {img !== "" && (
            <div className="mine-wrapper">
              <img className="komur-png" src={img} alt={"komur"} />
              <span>{mine}</span>
            </div>
          )}
        </div>
      </div>
      <TurkeyMap
        customStyle={{ idleColor: '#0F1419', hoverColor: "#28DB66" }}
        hoverable={true}
        onHover={({ name }) => {
          setCity(name);
          if (name === "Erzurum" || name === "Manisa") {
            setImg(coal);
          } else if (name === "Kütahya") {
            setImg(antimony);
          } else if (name === "Yozgat") {
            setImg(iron);
          } else {
            setImg("");
            setMine("");
          }
        }}
      />
    </div>
  );
}

export default App;
