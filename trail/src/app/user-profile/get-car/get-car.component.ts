import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from '../../models/reservation.model';
import { BarcodeFormat } from '@zxing/library';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-get-car',
  templateUrl: './get-car.component.html',
  styleUrl: './get-car.component.css',
})
export class GetCarComponent {
  

  reservation: Reservation | null = null;
  allReservations: Reservation[] = [];
  availableDevices: MediaDeviceInfo[] = [];
  currentDevice: MediaDeviceInfo | null = null;
  formatsEnabled: BarcodeFormat[] = [
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.EAN_13,
    BarcodeFormat.QR_CODE,
  ];
  hasDevices: boolean | undefined;
  hasPermission: boolean | undefined;
  torchEnabled = false;
  torchAvailable$ = new BehaviorSubject<boolean>(false);
  tryHarder = false;
  resultScanner = '';
  rentValidate = false; 
  check = false;

  
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.reservation = params['data'] ? JSON.parse(params['data']) : null;
    });

  }

  onScanSucces(result: string) {
    this.resultScanner = result;
    if(this.reservation?.vehicleId === result){
      console.log("El vehiculo es correcto");
      this.rentValidate = true;
    }else{
      console.log("El código qr no coincide");
    }
    
  }

  onDeviceSelectChange(id: string) {


    const device = this.availableDevices.find((x) => x.deviceId === id);
    this.currentDevice = device || null;
    // Ahora puedes usar el deviceId como necesites
  }
  

  onCodeResult(resultString: string) {
    this.resultScanner = resultString;
  }

  onHasPermission(has: boolean) {
    this.hasPermission = has;
    this.check = true;
  }

  onTorchCompatible(isCompatible: boolean): void {
    this.torchAvailable$.next(isCompatible || false);
  }

  onCamerasFound(devices: MediaDeviceInfo[]): void {
    this.availableDevices = devices;
    this.hasDevices = Boolean(devices && devices.length);
    this.check = true;
  }
}
