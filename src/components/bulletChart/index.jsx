import { BulletChart } from "bizcharts";
import React from "react";

const mockData = [
  {
    measures: [5.5],
    ranges: [0, 60, 70, 85, 100],
    targets: [5.1],
    title: "高一物理分层班01",
  },
  {
    measures: [5.1],
    ranges: [0, 60, 70, 85, 100],
    targets: [5.1],
    title: "高一物理分层班02",
  },
];

const Bullet = () => {
  return (
    <BulletChart
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
      legend={{
        custom: "true",
        position: "top",
        offsetX: 8,
        items: [
          {
            name: "班平均分",
            marker: {
              symbol: "circle",
              style: {
                fill: "#43467c",
              },
            },
          },
          {
            name: "校平均",
            marker: {
              symbol: "line",
              style: {
                stroke: "#000000",
              },
            },
          },
          {
            name: "不及格",
            marker: {
              symbol: "circle",
              style: {
                fill: "#ffb1ac",
              },
            },
          },
          {
            name: "及格",
            marker: {
              symbol: "circle",
              style: {
                fill: "#ffdba1",
              },
            },
          },
          {
            name: "良好",
            marker: {
              symbol: "circle",
              style: {
                fill: "#abc9f0",
              },
            },
          },
          {
            name: "优秀",
            marker: {
              symbol: "circle",
              style: {
                fill: "#b4ebbf",
              },
            },
          },
        ],
      }}
    />
  );
};

export default Bullet;
