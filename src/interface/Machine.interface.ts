import { MachineEfficiency } from './MachineEfficiency.interface';

export interface Machine {
    id: string
    model: string;
    year: string;
    city: string;
    machineEfficiency: MachineEfficiency;
    
}