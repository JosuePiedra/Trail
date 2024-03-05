import { Station } from './station.model';
import { TimeSlot } from './time-slot.model';
import { Vehicle } from './vehicle.model';

export interface Reservation {
  userId?: string;
  vehicleId?: string;
  schedule?: string;
  dateOfReservation?: string;
  pickupStation?: string;
  pickupLocation?: number[] | null;
  totalPrice?: number;
  vehicle?: Vehicle;
  station?: Station;
}
