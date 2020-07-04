import React, { useEffect, useState } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import styles from "./Charts.module.css";

function Charts({ data, country }) {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchApi();
  }, []);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
            pointStyle: 'rectRot',
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
            pointStyle: 'triangle',
          },
        ],
      }}
    />
  ) : null;


  // const barChart = data.confirmed ? (
  //   <Bar
  //     data={{
  //       labels: ["Infected", "Recovered", "Deaths"],
  //       datasets: [
  //         {
  //           label: "People",
  //           backgroundColor: [
  //             "rgba(0, 0, 255, 0.5)",
  //             "rgba(0, 255, 0, 0.5)",
  //             "rgba(255, 0, 0, 0.5)",
  //           ],
  //           data: [data.confirmed.value, data.recovered.value, data.deaths.value],
  //         },
  //       ],
  //     }}
  //     options={{
  //       legend: { display: false },
  //       title: { display: true, text: `Current State in ${country}` },
  //     }}
  //   />
  // ) : null;


  const doughtnutChart = data.confirmed ? (
    <Doughnut 
      data = {{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [data.confirmed.value, data.recovered.value, data.deaths.value]
          }
        ]
      }}
      options={{
        animation: {animateRotate: true, animateScale: true}
      }}
    />
  ) : null;
  



  return (
    <div className={styles.container}>
    <div>{country ? doughtnutChart : lineChart}</div>
    </div>
  );
}


export default Charts;
