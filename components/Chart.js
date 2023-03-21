import { Chart } from "react-google-charts";

/*export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 20],
  ["Sleep", 7],
];

const options = {
  title: "My Daily Activities",
};
*/

export default function PieChart({data,options}) {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}