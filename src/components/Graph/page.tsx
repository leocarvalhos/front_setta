'use client'
import { getHistoryById } from '@/data/services/history.service';
import { Machine } from '@/interface/Machine.interface';
import { Flex } from '@chakra-ui/react';
import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);




interface Props {
    temperature: any
    hour: any

}
export function Graph({ temperature, hour }: Props) {

    const data = {
        labels: hour || ['00:00', '03:00', '06:00 ', '09:00 ', '12:00 ', '15:00 ', '18:00', '21:00'],
        datasets: [
            {
                label: 'Eficiência das máquinas',
                backgroundColor: '#F2CB13',
                borderColor: '#D82727',
                data: temperature || [50, 59, 80, 100, 56, 55, 43, 94, 80, 30],
                fill: true,

            }
        ],
    };



    return (
        <Flex width='30%' paddingBottom=' 40px'>

            <Line data={data} />
        </Flex >

    )
}