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
import { chartDays } from '../../helper/constant';

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

  const handleChangeDays = (e) => {
    const daySelected = e.target.options[e.target.selectedIndex].value;
    if (daySelected == 1) {
      setCoinInterval('')
    } else {
      setCoinInterval('daily')
    }
    setDays(e.target.options[e.target.selectedIndex].value);
  }


  chartDays.map((day) => {
    console.log(day)
  })

  return (
    <div className='flex flex-col items-center justify-center w-full h-full p-6 mt-6'>

      <div className='h-[500px] w-full'>
        <Line
          className='w-full h-100'
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
            },
            elements: {
              point: {
                radius: 0
              }
            },
            responsive: true,
            maintainAspectRatio: false
          }}
        />
      </div>

      <div className='flex items-center w-full gap-4 p-10 h-50 bg-amber-200'>
        <h2>Days</h2>
        <select
          value={days} // Controlled by state
          className="select"
          onChange={handleChangeDays}
        >
          {chartDays.map((day, ind) => (
            <option key={ind} value={day.value}>
              {day.label}
            </option>
          ))}
        </select>

      </div>


    </div>
  )
}

export default CoinInfo
