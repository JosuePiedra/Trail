import { VehicleType, StateType } from 'src/schemas/vehicle.schema';
export declare class CreateVehicleDto {
    type: VehicleType;
    state: StateType;
    location: [number];
    battery: number;
    model: string;
    manufacturer: string;
    maxVelocity: number;
    lastMaintenance?: string;
    manufacturingAge: string;
    img: string;
}
