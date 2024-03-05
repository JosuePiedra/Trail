import {
  Component,
  HostListener,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { Vehicle } from '../../models/vehicle.model';

import {
  faBicycle,
  faCircleArrowRight,
  faCircleArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-step3-select-vehicle',
  templateUrl: './step3-select-vehicle.component.html',
  styleUrl: './step3-select-vehicle.component.css',
})
export class Step3SelectVehicleComponent {
  faCircleArrowRight = faCircleArrowRight;
  faCircleArrowLeft = faCircleArrowLeft;
  faBicycle = faBicycle;
  selectedVehicleId: String | null = null;
  selectedVehicle: Vehicle | null = null;
  data: Vehicle[] = [];
  vehicles: Vehicle[] = [];
  scooter: Vehicle[] = [];
  bicycle: Vehicle[] = [];
  @Output() vehicleSelected = new EventEmitter<Vehicle>();
  halfStar = false;
  activeButton: 'scooter' | 'bicycle' = 'scooter';
  currentPage: number = 1;
  pagePosition: string = '0%';
  cardWidth!: string;

  constructor(
    private cdr: ChangeDetectorRef,
    private vehicleService: VehicleService
  ) {}

  @ViewChild('container', { static: true, read: ElementRef })
  container!: ElementRef;

  ngOnInit() {
    this.loadVehicle();
  }

  ngAfterViewInit() {
    this.updateCardWidth();
    this.currentPage = 0;

    this.cdr.detectChanges();
  }

  loadVehicle() {
    this.vehicleService.getAllVehicles().subscribe((data) => {
      this.data = data;
      console.log(this.data.length);
      console.log(data);

      for (var i = 0; i < this.data.length; i++) {
        if (this.data[i].type == 'scooter') {
          this.data[i].img =
          './assets/imgs/scooter-image2.jpeg';
          this.scooter.push(this.data[i]);
        } else {
          this.data[i].img = './assets/imgs/bicycle-image2.png';
          this.bicycle.push(this.data[i]);
        }
      }

      this.vehicles = this.scooter;
    });
  }

  navigate(direction: 'prev' | 'next') {
    if (direction === 'prev' && this.currentPage > 0) {
      this.currentPage--;
    } else if (
      direction === 'next' &&
      this.currentPage < this.vehicles.length - 1
    ) {
      this.currentPage++;
    } else if (direction === 'prev' && this.currentPage == 0) {
      this.currentPage = this.vehicles.length - 1;
    } else if (
      direction === 'next' &&
      this.currentPage == this.vehicles.length - 1
    ) {
      this.currentPage = 0;
    }
  }

  updateCardWidth() {
    if (this.container && this.container.nativeElement) {
      this.cardWidth = `${this.container.nativeElement.offsetWidth}px`;
    }
  }

  getRateNumbers() {
    const rate = this.vehicles[this.currentPage].rentalRate;

    return Array.from({ length: rate! }, (_, i) => i + 1);
  }

  getEmptyStars() {
    const maxRating = 5;
    const rate = this.vehicles[this.currentPage].rentalRate;

    return Array(maxRating - (rate! | 0)).fill(0);
  }

  selectVehicle(vehicleId: string) {
    this.selectedVehicleId = vehicleId;

    this.vehicleSelected.emit(
      this.vehicles.find((vehicle) => vehicle._id === vehicleId)
    );
  }

  isSelected(vehicleId: string): boolean {
    return this.selectedVehicleId === vehicleId;
  }
  setActiveButton(button: 'scooter' | 'bicycle') {
    this.activeButton = button;
    this.vehicles = button === 'scooter' ? this.scooter : this.bicycle;
    this.selectedVehicleId = null;
  }
}
