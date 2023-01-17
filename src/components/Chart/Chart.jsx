import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

function Chart({ ...props }) {
  // calculate the maximum value
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues); // pull out all the array elements and pass them as a list of values

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
