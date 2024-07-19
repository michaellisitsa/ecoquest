// First, install Chart.js and its React wrapper
// npm install chart.js react-chartjs-2

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Electricity Usage",
    },
  },
  scales: {
    y: {
      stacked: true,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Heat Pump Hot Water System",
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      fill: true,
    },
    {
      label: "Reverse Cycle Air Conditioner",
      data: [28, 48, 40, 19, 86, 27, 90],
      borderColor: "rgb(54, 162, 235)",
      backgroundColor: "rgba(54, 162, 235, 0.5)",
      fill: true,
    },
    {
      label: "Lighting",
      data: [18, 24, 77, 9, 100, 27, 40],
      borderColor: "rgb(255, 206, 86)",
      backgroundColor: "rgba(255, 206, 86, 0.5)",
      fill: true,
    },
    {
      label: "Induction Cooktop",
      data: [33, 33, 33, 33, 33, 33, 33],
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgba(75, 192, 192, 0.5)",
      fill: true,
    },
    {
      label: "Other Electric Demands",
      data: [56, 55, 40, 65, 59, 80, 81],
      borderColor: "rgb(153, 102, 255)",
      backgroundColor: "rgba(153, 102, 255, 0.5)",
      fill: true,
    },
  ],
};

export default function ElectricityUsageChart() {
  return <Line options={options} data={data} />;
}
