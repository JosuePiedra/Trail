
export interface Station {
    _id : string; 
    name: string;
    totalCapacity: number;
    vehicles: string[];
    location: number[];
    currentVehicles: number;
    address: string;
    img?: string;
  }