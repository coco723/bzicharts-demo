import { DonutChart } from "bizcharts";
import React from "react";

// 数据源
const data = [
  {
    type: "分类一",
    value: 27,
  },
  {
    type: "分类二",
    value: 25,
  },
  {
    type: "分类三",
    value: 18,
  },
  {
    type: "分类四",
    value: 15,
  },
  {
    type: "分类五",
    value: 10,
  },
  {
    type: "其它",
    value: 5,
  },
];

const legendPositionArr = [
  "top",
  "top-left",
  "top-right",
  "left",
  "left-top",
  "left-bottom",
  "right",
  "right-top",
  "right-bottom",
  "bottom",
  "bottom-left",
  "bottom-right",
];

const Pie = ({
  title,
  titleVisible,
  height,
  radius,
  legendPosition,
  legendOffsetX,
  legendItemHeight,
  legendItemSpace,
  statisticTitle,
  statisticContent,
  innerRadius,
}) => {
  return (
    <DonutChart
      data={data || []}
      title={{
        visible: titleVisible || false,
        text: title || "",
      }}
      statistic={{
        title: false,
        content: {
          formatter: () => "答题分布",
        },
      }}
      autoFit
      height={height || 350}
      radius={radius || 0.55}
      innerRadius={innerRadius || 0.8}
      padding="auto"
      angleField="value"
      colorField="type"
      pieStyle={{ stroke: "white", lineWidth: 3, strokeOpacity: 0 }}
      label={false}
      legend={{
        position:
          legendPositionArr.filter((item) => item === legendPosition)?.[0] ||
          "right",
        offsetX: legendOffsetX || -448,
        itemHeight: legendItemHeight || 28,
        itemValue: {
          formatter: (text, item) => {
            return `${text}        ${item.text}%`;
          },
          style: {
            opacity: 0.65,
          },
        },
        itemWidth: 600,
        itemName: { spacing: legendItemSpace || 36 },
      }}
      color={[
        "#ffcb6b",
        "#ff6666",
        "#619eed",
        "#1ec7c1",
        "#7ecc86",
        "#ffb158",
        "#ffec6b",
        "#ff9900",
        "#f57e2a",
        "#ff8059",
        "#e25e47",
        "#d35102",
        "#6c5dae",
        "#0f6daa",
        "#228bc2",
        "#059aff",
        "#18abff",
        "#24bdee",
        "#1fb58c",
        "#7bb57b",
        "#1fb5ab",
      ]}
    />
  );
};

export default Pie;
