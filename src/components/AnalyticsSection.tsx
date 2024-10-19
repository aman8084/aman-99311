import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const AnalyticsSection: React.FC = () => {
  const investmentChartRef = useRef<HTMLCanvasElement>(null);
  const distributionChartRef = useRef<HTMLCanvasElement>(null);
  const investmentChartInstanceRef = useRef<Chart | null>(null);
  const distributionChartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (investmentChartRef.current && distributionChartRef.current) {
      const investmentCtx = investmentChartRef.current.getContext('2d');
      const distributionCtx = distributionChartRef.current.getContext('2d');

      if (investmentCtx && distributionCtx) {
        // Destroy existing charts
        if (investmentChartInstanceRef.current) {
          investmentChartInstanceRef.current.destroy();
        }
        if (distributionChartInstanceRef.current) {
          distributionChartInstanceRef.current.destroy();
        }

        // Create new charts
        investmentChartInstanceRef.current = new Chart(investmentCtx, {
          type: 'bar',
          data: {
            labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
            datasets: [{
              label: 'Last 6 Days',
              backgroundColor: '#007bff',
              data: [10, 12, 14, 15, 18, 13]
            }, {
              label: 'Last Week',
              backgroundColor: '#ced4da',
              data: [8, 10, 12, 11, 14, 9]
            }]
          },
          options: {
            scales: {
              x: { beginAtZero: true },
              y: { beginAtZero: true }
            }
          }
        });

        distributionChartInstanceRef.current = new Chart(distributionCtx, {
          type: 'pie',
          data: {
            labels: ["Net Margin", "Gross Margin", "EBIDA"],
            datasets: [{
              data: [27, 45, 2],
              backgroundColor: ['#6f42c1', '#fd7e14', '#20c997'],
              hoverOffset: 4
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Investment Distribution'
              }
            }
          }
        });
      }
    }

    // Cleanup function
    return () => {
      if (investmentChartInstanceRef.current) {
        investmentChartInstanceRef.current.destroy();
      }
      if (distributionChartInstanceRef.current) {
        distributionChartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Revenue</h2>
        <p className="text-3xl font-bold text-blue-600">IDR 7,852,000</p>
        <p className="text-sm text-green-500 mt-2">+2.1% vs last week</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md col-span-2">
        <h2 className="text-xl font-semibold mb-4">Investment Overview</h2>
        <canvas ref={investmentChartRef}></canvas>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md col-span-1">
        <h2 className="text-xl font-semibold mb-4">Investment Distribution</h2>
        <canvas ref={distributionChartRef}></canvas>
      </div>
    </section>
  );
};

export default AnalyticsSection;