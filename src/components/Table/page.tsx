import { Machine } from '@/interface/Machine.interface'
import {
    Button,
    Table,
    TableCaption,
    TableContainer,
    Tfoot,
    Th,
    Thead,
    Tr
} from '@chakra-ui/react'
import { TBody } from '../TBody/page'
interface Props {
    onOpen: any,
    machines: Machine[]
    setHour: any
    setTemperature: any
}
export function TableMachines({ onOpen, machines, setHour, setTemperature }: Props) {
    return (
        <TableContainer>
            <Table variant='simple'>
                <TableCaption><Button background='#F2CB13' color='#D82727' onClick={onOpen}>CADASTRE UMA MÁQUINA</Button></TableCaption>
                <Thead>
                    <Tr>
                        <Th>Modelo</Th>
                        <Th>Ano</Th>
                        <Th>Cidade</Th>
                        <Th>Eficiência</Th>
                        <Th>Temperatura</Th>
                        <Th>Ações</Th>

                    </Tr>
                </Thead>
                {machines.map((machine: Machine) => {
                    return <TBody setTemperature={setTemperature} setHour={setHour} key={machine.id} machine={machine} />

                })}
                <Tfoot>
                    <Tr>
                        <Th>Modelo</Th>
                        <Th>Ano</Th>
                        <Th>Cidade</Th>
                        <Th>Eficiência</Th>
                        <Th>Temperatura</Th>
                        <Th>Ações</Th>

                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    )
}