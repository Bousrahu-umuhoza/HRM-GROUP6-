import React, { useEffect, useRef } from 'react';

import Chart from 'chart.js';

function MyComponent() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    chartRef.current.chart = new Chart(ctx, {...});

    return () => {
      chartRef.current.chart.destroy();
    }
  }, []);

  return (
    <canvas ref={chartRef} />
  );
}


