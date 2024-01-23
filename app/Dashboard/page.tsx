'use client'
import React from 'react'
import VerticalBarChart from './VerticalBarChart';

const Dashboard = () => {
        const chartData = {
                labels: ['Building 1', 'Building 2', 'Building 3', 'Building 4', 'Building 5'],
                values: [1, 2],
                datasets: [
                    {
                        label: 'Open',
                        data: [18, 22, 19, 20, 25],
                        backgroundColor: 'red'
                    },
                    {
                        label: 'Closed',
                        data: [14, 20, 5, 10, 12],
                        backgroundColor: 'blue'
                    },

                ] // Add the missing datasets property
            };
    return (
        <div>Dashboard
        
        <VerticalBarChart data={chartData} />
        </div>
    
  )
}

export default Dashboard