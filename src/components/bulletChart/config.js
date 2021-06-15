export const legendOpt = {
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
};
