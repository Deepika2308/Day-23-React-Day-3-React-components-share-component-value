import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
    ArcElement, Tooltip,Legend
);


export function DoughnutChart(){
    const labels = ["Direct","Referral","Social"];
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [55,30,15],
        borderColor: ['blue','green','teal'],
        backgroundColor: ['blue','green','teal'],
      },
    ],
  };
    return(
        <Doughnut data={data} />
    )
}