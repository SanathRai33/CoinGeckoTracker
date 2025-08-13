import React from 'react'
import Alert from '../Alert/Alert'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const CoinInfo = ({ historicData, setCoinInterval, setDays, days, currency }) => {

  if (!historicData) {
    return <Alert message="History Data not found" type="info" />
  }

  return (
    <div className='flex flex-col items-center justify-center w-full h-full p-6 mt-6 bg-amber-500'>

      <Line
      className='w-full h-100 bg-amber-950'
        data={{
          labels: historicData.prices.map(CoinPrice => {
            let date = new Date(CoinPrice[0]);
            let time = date.getHours() > 12 ? `${date.getHours() - 12} : ${date.getMinutes()} PM` : `${date.getHours()} : ${date.getMinutes()} AM`;
            return days === 1 ? time : date.toLocaleDateString();
          }),
          datasets: [
            {
              label: `Price Past ${days} Days in ${currency.toUpperCase()}`,
              data: historicData.prices.map(CoinPrice => CoinPrice[1]),
              borderColor: 'red',          // Line color
              backgroundColor: 'rgba(255, 0, 0, 0.3)', // Fill under line
              tension: 0.4,                 // Smooth curve
            },
            {
              label: "Line 2",
              data: [9, 2, 4, 6, 9],
              borderColor: 'blue',
              backgroundColor: 'rgba(0, 0, 255, 0.3)',
              tension: 0.4,
            }
          ],
        }}
        options={{
          plugins: {
            datalabels: {
              color: 'green', // ✅ Change number color here
              font: {
                weight: 'bold',
                size: 14
              },
              align: 'top',
              formatter: (value) => value // Display the number
            }
          }
        }}
      />


    </div>
  )
}

export default CoinInfo
