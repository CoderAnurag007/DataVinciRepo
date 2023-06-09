import React, { useContext, useState } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./DataChart.css";
import { AccountContext } from "../context/AccountContext";
const DataChart = () => {
  const { sidebar, setsidebar } = useContext(AccountContext);
  const initialData = {
    labels: ["Technical", "Comedy", "Sports", "Education", "Music"],
    datasets: [
      {
        label: "Subscribers",
        data: [1200, 1023, 892, 703, 943],
        backgroundColor: "springgreen",
        borderColor: "springgreen",
        borderWidth: 2,
      },
      {
        label: "Views",
        data: [11230, 3203, 2192, 203, 9043],
        backgroundColor: "aqua",
        borderColor: "aqua",
        borderWidth: 2,
      },
      {
        label: "Followers",
        data: [100, 1809, 33, 55, 22],
        backgroundColor: "red",
        borderColor: "red",
        borderWidth: 2,
      },
    ],
  };

  const [chartData, setChartData] = useState(initialData);

  const handleFilter = () => {
    const filteredData = {
      ...initialData,
      datasets: [
        {
          ...initialData.datasets[0],
          data: initialData.datasets[0].data.filter((value) => value > 5),
        },
      ],
    };
    setChartData(filteredData);
  };
  return (
    <>
      <div
        style={{
          transform: !sidebar && "translateX(-80px)",
        }}
        className="datachart_container"
      >
        <div className="greet_box">
          Hii , DataVinci <br />{" "}
          <span className="sub_greet">
            {" "}
            Good Morning!! , Start your Day with Daily Analysis
          </span>
        </div>
        <div
          style={{
            border: "none",
          }}
          className="greet_box"
        >
          30 Days Marketing Performance
        </div>
        <div className="score_box">
          <div className="score_card1">
            Views
            <p className="score">30,000 </p>
          </div>
          <div className="score_card2">
            Followers <p className="score">12,405 </p>
          </div>
          <div className="score_card3 ">
            Subscribers <p className="score">17,645 </p>
          </div>
        </div>
        <div
          style={{
            width: "600px",
            height: "300px",
            background: "rgb(248, 246, 246)",
            borderRadius: "12px",
            marginLeft: "10px",
            padding: "10px",
            display: "flex",
          }}
        >
          <Line data={chartData} />

          {/* <button onClick={handleFilter}>Filter Data</button> */}
        </div>
        <div
          style={{
            marginLeft: "30px",
            fontSize: "small",
          }}
        >
          Analyze your Content Growth Here!
        </div>
      </div>
    </>
  );
};

export default DataChart;
