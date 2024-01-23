'use client'
import React, { FC } from 'react'
import { useRef, useEffect } from 'react'
//import { Chart } from 'react-chartjs-2'
import Chart, { ChartData } from 'chart.js/auto'
import styles from './VerticalBarChart.module.css'; // Import your CSS file



interface VerticalBarChartProps {
    data: ChartData;
  }
  
  
  
const VerticalBarChart: FC<VerticalBarChartProps> = ({ data }) => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstance = useRef<Chart | null>(null);
  
    useEffect(() => {
      if (chartRef && chartRef.current) {
        // Destroy existing chart instance if it exists
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
  
        const ctx = chartRef.current.getContext('2d');
  
        if (ctx) {
          chartInstance.current = new Chart(ctx, {
            type: 'bar',
            data,
            options: {
              scales: {
                x: {
                  beginAtZero: true,
                },
                y: {
                  beginAtZero: true,
                },
              },
            },
          });
        }
      }
  
      // Cleanup: destroy the chart when the component is unmounted
      return () => {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
      };
    }, [data]);
  
    return (
  

      <div className={styles.chartContainer}>
      <canvas ref={chartRef} className={styles.chartCanvas}></canvas>
    </div>
    );
  };
  
  export default VerticalBarChart;

/*
const BarChart = ({ chartData }: { chartData: any }) => {

    const chartRef = useRef<any>(null)

    useEffect(() => {
        if (chartRef.current?.chart) {
            chartRef.current.chart.destroy()
        }

        const context = chartRef.current?.getContext('2d');

        

        // ...

        useEffect(() => {
            if (chartRef.current?.chart) {
                chartRef.current.chart.destroy();
            }

            const context = chartRef.current?.getContext('2d');

            if (context) {
                new Chart(context, { // Use the correct constructor signature
                    type: 'bar',
                    data: {
                        labels: ['Red', 'Blue', 'Yellow'],
                        datasets: [{
                            label: '# of Votes',
                            data: [12, 15, 14],
                        }]
                    }
                });
            }
        }, []);
    })

    return (
        <div>
            <canvas ref={chartRef} />
        </div>
    )
}*/
// export default BarChart
// }

//export default BarChart