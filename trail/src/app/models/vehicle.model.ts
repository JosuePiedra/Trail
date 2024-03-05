export interface Vehicle {
  _id: string;
  type: string;
  state: string;
  model: string;
  manufacturer: string;
  maxVelocity: string;
  manufacturingAge: number;
  location?: number[];
  img?: string;
  battery?: number;
  lastMaintenance?: Date;
  rentalRate?: number; 
  pricePerSchedule?: number;
}
  

  