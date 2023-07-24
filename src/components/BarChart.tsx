import React from "react";
import Bar from "./Bar";

const BarChart = () => {
  // Width of each bar
  const data = [
    {
      id: 0,
      name: "kentcdodds",
      repos: 371,
    },
    {
      id: 1,
      name: "sindresorhus",
      repos: 909,
    },
    { id: 2, name: "developit", repos: 222 },
    { id: 3, name: "getify", repos: 43 },
    { id: 4, name: "btholt", repos: 56 },
    { id: 5, name: "kyleshevlin", repos: 82 },
  ];
  const itemWidth = 20;

  // Distance between each bar
  const itemMargin = 5;

  const dataLength = data.length;

  // Normalize data, we'll reduce all sizes to 25% of their original value
  const massagedData = data.map((datum) =>
    Object.assign({}, datum, { repos: datum.repos * 0.25 })
  );

  const mostRepos = massagedData.reduce((acc, cur) => {
    const { repos } = cur;
    return repos > acc ? repos : acc;
  }, 0);

  return (
    <div className="w-full gap-2.5 flex p-4">
      {massagedData.map((datum, index) => (
        <Bar
          key={datum.name}
          x={index * (itemWidth + itemMargin)}
          y={0}
          width={itemWidth}
          height={datum.repos}
        />
      ))}
    </div>
  );
};
export default BarChart;
