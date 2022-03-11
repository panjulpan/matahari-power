import "./App.css";
import logo from "./images/logo-company.jpeg";
import money from "./images/coin.png";
import BarChart from "./component/BarChart";
import { SimpleGuageChart } from "simple-react-d3-guage-chart";
import "simple-react-d3-guage-chart/dist/index.css";
import { useMediaQuery } from "react-responsive";
import AreaChart from "./component/AreaChart";
import IQAir from "./images/iqair_logo.png";
import face from "./images/face-shadow.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import MyVerticallyCenteredModal from "./component/Modal";
import { Button } from "react-bootstrap";

const App = () => {
  const [modalShow, setModalShow] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 576px)" });

  return (
    <div className="contain">
      <Button
        variant="primary"
        onClick={() => setModalShow(true)}
        style={{ marginTop: 15, marginBottom: 15, alignSelf: "flex-end" }}
      >
        Download
      </Button>
      <div className="top-content">
        <div className="inner-content-left">
          <div className="first">
            <div className="card-first">
              <img src={logo} alt="Logo" className="logo" />
              <div className="logo-title-container">
                <p className="logo-title">WISMA MATAHARI POWER</p>
              </div>
            </div>
          </div>
          <div className="second">
            <div className="card-second">
              <p className="card-second-title">Kebayoran Lama</p>
              <p className="degree">32°</p>
              <p className="card-second-content">Partly Cloudy</p>
              <div className="humidity-container">
                <p className="card-second-content">H:33°</p>
                <p className="card-second-content">L:24°</p>
              </div>
            </div>
          </div>
        </div>
        <div className="inner-content-right">
          <div className="inner-top-content">
            <div className="card-two">
              <div className="icon-container">
                <img src={money} alt="Money" className="icon" />
              </div>
              <div className="content-container">
                <p className="content">Reimbursement</p>
                <div className="inner-content-container">
                  <p className="content-two">312,254.00</p>
                  <p className="sub-content">Rp Today</p>
                </div>
                <div className="inner-content-container">
                  <p className="content-two">198,346,527.00</p>
                  <p className="sub-content">Rp Total</p>
                </div>
              </div>
            </div>
            <div className="card-two">
              <div className="icon-container">
                <img src={money} alt="Money" className="icon" />
              </div>
              <div className="inner-content-tree">
                <p className="content-tree">18,763</p>
                <p className="sub-content-tree">Trees Saved</p>
              </div>
            </div>
          </div>
          <div className="inner-top-content">
            <div className="card-two">
              <div className="icon-container">
                <img src={money} alt="Money" className="icon" />
              </div>
              <div className="content-container">
                <p className="content-power">WMP PV Capacity</p>
                <div className="inner-content-power">
                  <p className="sub-content-power">140</p>
                  <p className="sub-content-power-two">kWp</p>
                </div>
              </div>
            </div>
            <div className="card-two">
              <div className="icon-container">
                <img src={money} alt="Money" className="icon" />
              </div>
              <div className="content-container">
                <p className="content-eco">CO2 Avoidance</p>
                <div className="inner-content-eco">
                  <p className="sub-content-eco">73.58</p>
                  <p className="sub-content-eco-two">Metric Tons</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-content">
        <div className="card-bottom">
          <div className="big-container">
            <p className="big-container-title">PV ENERGY (kW)</p>
            {isDesktop && (
              <SimpleGuageChart
                id={"test-3"}
                value={92.47}
                minAngle={-90}
                maxAngle={90}
                minValue={0}
                maxValue={140}
                pointerWidth={4}
                majorTicks={8}
                ticksRingWidth={10}
                mainRingWidth={5}
                tickColors={["#FFF", "#FFF"]}
                arcColor="#FFF"
                tickFontColor="#FFF"
                fontColor="#f3c321"
                pointerColor="#192c92"
                size={450}
              />
            )}
            {isMobile && (
              <SimpleGuageChart
                id={"test-3"}
                value={92.47}
                minAngle={-90}
                maxAngle={90}
                minValue={0}
                maxValue={140}
                pointerWidth={4}
                majorTicks={8}
                ticksRingWidth={10}
                mainRingWidth={5}
                tickColors={["#FFF", "#FFF"]}
                arcColor="#FFF"
                tickFontColor="#FFF"
                fontColor="#f3c321"
                pointerColor="#192c92"
                size={50}
              />
            )}
          </div>
          <div className="small-container">
            <img src={IQAir} alt="IQAir" className="iqAir" />
            <div className="status-container">
              <p className="status">Moderate</p>
            </div>
            <div className="value-container">
              <p className="value">37.7</p>
              <p className="sub-value">PM2.5 ug/m3</p>
            </div>
            <img src={face} alt="Face" className="face" />
            <div className="value-bottom-container">
              <p className="value-bottom">58</p>
              <p className="sub-value-bottom">US AQI</p>
            </div>
          </div>
          <div className="big-container-chart">
            <div className="chart-container">
              <div className="chart">
                <AreaChart />
                <p className="label-text">Today</p>
              </div>
              <div className="label">
                <p className="label-text">label</p>
              </div>
            </div>
            <div className="chart-container">
              <div className="chart">
                <BarChart type="month" />
                <p className="label-text">Current Month</p>
              </div>
              <div className="label">
                <p className="label-text">label</p>
              </div>
            </div>
            <div className="chart-container">
              <div className="chart">
                <BarChart type="year" />
                <p className="label-text">Current Year</p>
              </div>
              <div className="label">
                <p className="label-text">label</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default App;
