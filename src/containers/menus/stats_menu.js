import React from "react";
import { Button } from "reactstrap";
import { colors, fonts, fontSizes } from "../../lib/theme";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import * as firebase from "firebase";

var LineChart = require("react-chartjs").Line;
var DoughnutChart = require("react-chartjs").Doughnut;

var lineData = {
  labels: ["1990", "1995", "2000", "2005", "2010", "2015"],
  datasets: [
    {
      label: "Store Opening",
      fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: "Store Closings",
      fillColor: "rgba(151,187,205,0.2)",
      strokeColor: "rgba(151,187,205,1)",
      pointColor: "rgba(151,187,205,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(151,187,205,1)",
      data: [28, 48, 40, 19, 86, 27, 90]
    }
  ]
};

var donutData = [
  {
    value: 300,
    color: "#F7464A",
    highlight: "#FF5A5E",
    label: "Restaurants"
  },
  {
    value: 50,
    color: "#46BFBD",
    highlight: "#5AD3D1",
    label: "Supermarkets"
  },
  {
    value: 100,
    color: "#FDB45C",
    highlight: "#FFC870",
    label: "Hotels"
  }
];

export default class StatsMenu extends React.Component {
  render() {
    return (
      <div style={{ marginLeft: "30px" }}>
        <div
          style={{
            paddingTop: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <p
            style={{
              color: `${colors.brown}`,
              fontSize: `${fontSizes.large}`,
              fontFamily: `${fonts.lato}, sans-serif`
            }}
          >
            {" "}
            Openings vs Closings{" "}
          </p>
          <LineChart data={lineData} width="250" height="250" />
        </div>
        <div
          style={{
            paddingTop: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <p
            style={{
              color: `${colors.brown}`,
              fontSize: `${fontSizes.large}`,
              fontFamily: `${fonts.lato}, sans-serif`
            }}
          >
            {" "}
            Store Breakdown{" "}
          </p>
          <DoughnutChart data={donutData} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            paddingTop: "50px"
          }}
        >
          <Button
            style={{
              color: `${colors.white}`,
              backgroundColor: `${colors.brown}`,
              width: "150px",
              marginRight: `50px`
            }}
          >
            <PlayArrowIcon src={{ paddingLeft: "20px" }} />
            Play Timelapse
          </Button>
        </div>
      </div>
    );
  }
}
