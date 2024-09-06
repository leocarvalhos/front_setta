import { Machine } from '@/interface/Machine.interface';
import { Tbody, Td, Tr } from '@chakra-ui/react';
import UpdateSVG from "../../../public/update.svg"
import DeleteSVG from "../../../public/delete.svg"
import Image from 'next/image';
import { use, useEffect, useState } from 'react';
import { getHistoryById } from '@/data/services/history.service';
interface Props {
    machine: Machine
    setHour: any
    setTemperature: any
}
export function TBody({ machine, setHour, setTemperature }: Props) {
    const [machineID, setMachineID] = useState<any>()

    useEffect(() => { getHistoryData() }, [machineID])


    async function getHistoryData() {

        if (machineID === undefined) {
            setMachineID('2776d5e0-92fd-43d9-ade8-6e455c5af10f')
        }

        const response = await getHistoryById(machineID)

        if (response?.data) {

            const temperatures = response.data.map((data: any) => data.temperature.toFixed())

            const hour = response.data.map((data: any) => data.date.split(', ')[1])

            setTemperature(temperatures)
            setHour(hour)
        }

    }

    return (
        <Tbody>
            <Tr onClick={() => {
                setMachineID(machine.id)
                getHistoryData()


            }}>
                <Td>{machine.model}</Td>
                <Td>{machine.year}</Td>
                <Td>{machine.city}</Td>
                <Td>{machine.machineEfficiency.efficiency.toFixed()}%</Td>
                <Td>{machine.machineEfficiency.temperature.toFixed()}º</Td>
                <Td display='flex' gap='5px'><Image src={UpdateSVG} alt='update' /> <Image src={DeleteSVG} alt='delete' /></Td>
            </Tr>

        </Tbody >
    )
}