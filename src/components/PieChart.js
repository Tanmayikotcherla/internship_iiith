// components/PieChart.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import '../styles/PieChart.css';

export default function PieChart({ data }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const myChartRef = chartRef.current.getContext('2d');

    chartInstance.current = new Chart(myChartRef, {
      type: 'pie',
      data: data,
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return (
    <div className="pie-chart" id="cat">
      <div className="pie-chart-container" id="cat">
        <canvas ref={chartRef} className="pie-chart-canvas" width={300} height={300} />
      </div>
    </div>
  );
}
