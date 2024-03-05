import { VehicleType, StateType } from 'src/schemas/vehicle.schema';
export declare class UpdateVehicleDto {
    type?: VehicleType;
    state?: StateType;
    img?: string;
    location: [number];
    battery?: number;
    model?: string;
    manufacturer?: string;
    manufacturingAge?: string;
    maxVelocity?: number;
    lastMaintenance?: string;
}
