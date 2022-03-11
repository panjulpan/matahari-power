import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";

const AreaChart = () => {
  const day = [
    5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10,
    5, 100,
  ];

  return (
    <Sparklines
      data={day}
      style={{ width: "100%", height: "100%", marginBottom: 5 }}
      max={100}
      min={0}
    >
      <SparklinesLine color="#192c92" style={{ fillOpacity: 1 }} />
    </Sparklines>
  );
};

export default AreaChart;

// import React from "react";
// import Chart from "react-apexcharts";

// const AreaChart = () => {
//   const day = [
//     5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20, 5, 10,
//     5, 20,
//   ];

//   let options = {
//     chart: {
//       id: "consumption-chart",
//     },
//     fill: {
//       colors: "#192c92",
//     },
//     colors: ["#192c92"],
//     xaxis: {
//       categories: [
//         1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
//         21, 22, 23, 24,
//       ],
//       labels: {
//         show: true,
//       },
//       axisBorder: true,
//     },
//     yaxis: {
//       opposite: true,
//       axisBorder: true,
//     },
//     dataLabels: {
//       enabled: false,
//     },
//   };

//   let series = [{ data: day }];

//   return (
//     <Chart
//       options={options}
//       series={series}
//       type="area"
//       width={"100%"}
//       height={"100%"}
//     />
//   );
// };

// export default AreaChart;
