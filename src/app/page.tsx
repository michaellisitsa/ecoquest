"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Chart from "../components/Chart";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Home Page</h1>
      <Chart />
    </div>
  );
}
