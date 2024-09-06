'use client'
import { CreateMachine } from '@/components/CreateMachine/page';
import { Graph } from '@/components/Graph/page';
import { TableMachines } from '@/components/Table/page';
import { getMachines } from '@/data/services/machine.service';
import { Machine } from '@/interface/Machine.interface';
import { Flex, useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [machines, setMachines] = useState<Machine[]>([])
  const [machineSelect, setMachineSelect] = useState()
  const [temperature, setTemperature] = useState([])
  const [hour, setHour] = useState([])



  async function Machines() {
    const response = await getMachines()
    setMachines(response.data)
  }
  useEffect(() => { Machines() }, [machines])


  return (
    <Flex h='86vh' w='100vw' direction='column' paddingTop='40px' align='center' overflowY='auto'>
      <CreateMachine isOpen={isOpen} onClose={onClose} />
      <Graph hour={hour} temperature={temperature} />
      <TableMachines onOpen={onOpen} machines={machines} setHour={setHour} setTemperature={setTemperature} />
    </Flex>
  );
}
