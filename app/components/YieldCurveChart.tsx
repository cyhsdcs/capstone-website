'use client';

import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables, TooltipItem } from 'chart.js';
import Papa from 'papaparse';

Chart.register(...registerables);

interface YieldData {
  enddate: string;
  yield: number;
}

export default function YieldCurveChart() {
  const [data, setData] = useState<YieldData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data/cbyieldcurve_info_final.csv');
      const csvText = await response.text();
      
      Papa.parse(csvText, {
        header: true,
        complete: (results) => {
          const parsedData = results.data as YieldData[];
          setData(parsedData);
        }
      });
    };

    fetchData();
  }, []);

  const chartData = {
    labels: data.map(item => {
      if (!item.enddate || item.enddate.length !== 8) return item.enddate;
      return `${item.enddate.slice(0,4)}-${item.enddate.slice(4,6)}-${item.enddate.slice(6,8)}`;
    }),
    datasets: [
      {
        label: 'Yield Curve',
        data: data.map(item => item.yield * 100), // Convert to percentage
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        fill: false
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Yield Curve Over Time'
      },
      tooltip: {
        callbacks: {
          label: function(context: TooltipItem<'line'>) {
            return `Yield: ${context.parsed.y.toFixed(2)}%`;
          }
        }
      }
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'Yield (%)'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Date'
        }
      }
    }
  };

  return (
    <div className="w-full h-[400px] bg-white p-4 rounded-lg shadow">
      <Line data={chartData} options={options} />
    </div>
  );
}