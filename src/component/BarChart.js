import React from "react";
import { Sparklines, SparklinesBars } from "react-sparklines";

const BarChart = ({ type }) => {
  const month = [
    5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10,
    5, 20, 5, 10, 5, 20,
  ];
  const year = [5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20];

  return (
    <Sparklines
      data={type === "month" ? month : year}
      style={{ width: "100%", height: "100%", marginBottom: 10 }}
      max={100}
      min={0}
    >
      <SparklinesBars style={{ fill: "#192c92" }} />
    </Sparklines>
  );
};

export default BarChart;

// import React from "react";
// import Chart from "react-apexcharts";

// const BarChart = ({ type }) => {
//   const month = [
//     5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10,
//     5, 20, 5, 10, 5, 20,
//   ];
//   const year = [5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20];

//   let options = {
//     chart: {
//       id: "consumption-chart",
//     },
//     colors: ["#192c92"],
//     xaxis: {
//       categories:
//         type === "month"
//           ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
//           : [
//               1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
//               20, 21, 22, 23, 24, 25, 26, 27, 28,
//             ],
//       labels: {
//         show: false,
//       },
//       axisBorder: false,
//     },
//     yaxis: {
//       opposite: true,
//       axisBorder: false,
//     },
//     dataLabels: {
//       enabled: false,
//     },
//   };

//   let series = [{ data: type === "month" ? month : year }];

//   return (
//     <Chart
//       options={options}
//       series={series}
//       type="bar"
//       width={"100%"}
//       height={"100%"}
//     />
//   );
// };

// export default BarChart;
