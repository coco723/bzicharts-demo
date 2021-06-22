import { BulletChart } from "bizcharts";
import React from "react";
import { legendOpt } from "./config";

const mockData = [
  {
    measures: [5.5],
    ranges: [0, 60, 70, 85, 100],
    target: [5.1],
    title: "高一物理分层班01",
  },
  {
    measures: [5.1],
    ranges: [0, 60, 70, 85, 100],
    target: [5.1],
    title: "高一物理分层班02",
  },
];

const Bullet = () => {
  return (
    <BulletChart
      index={1}
      data={mockData}
      measureField="measures"
      rangeField="ranges"
      targetField="target"
      xField="title"
      yField="ranges"
      height={180}
      width={560}
      size={{
        measure: 10,
        range: 28,
        target: 25,
      }}
      color={{
        measure: ["#43467c"],
        target: ["#000000"],
        range: ["#b4ebbf", "#ffb1ac", "#ffdba1", "#abc9f0"],
      }}
      bulletStyle={{
        target: {
          width: 15,
          fill: "#000000",
        },
      }}
      legend={legendOpt}
    />
  );
};

export default Bullet;
