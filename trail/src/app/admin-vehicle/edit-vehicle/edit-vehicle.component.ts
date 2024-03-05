import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Vehicle } from '../../models/vehicle.model';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';
import { VehicleService } from '../../services/vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrl: './edit-vehicle.component.css'
})
export class EditVehicleComponent {
  newVehiculo: string = '';
  showNewVehiculoInput: boolean = false;
  vehicle: string | any;
  manufacturerEditMode = false;
  modelEditMode = false;
  activeButton: 'scooter' | 'bicycle' = 'scooter';
  faBicycle = faBicycle;
  marcaScooter : string[]= [];
  marcaBicycle : string[]= [];
  modelosScooter : string[]= [];
  modelosBicycle : string[]= [];
  marcas: string[] = [];
  modelos: string[] = [];
 
  vehicleForm: FormGroup;

  constructor(private fb: FormBuilder, private vehicleService: VehicleService, private route: ActivatedRoute, private router: Router) {

    this.route.params.subscribe(params => {

      
      
      this.vehicle = params['id']


      console.log('id vehiculo', this.vehicle)

    });

    this.vehicleForm = this.fb.group({
      model: [''],
      manufacturer: [''],
      maxVelocity: [''],
      manufacturingAge: [null],
    });

    
    
  }

  ngOnInit() {
  console.log('EditVehicleComponent cargado');
}

goToParent() {
  this.router.navigate(['/admin-vehicle']); // Usa la ruta correcta del componente padre
}


  changeStatusManufacturer() {
    this.manufacturerEditMode = !this.manufacturerEditMode;
  }

  changeStatusModel() {
    this.modelEditMode = !this.modelEditMode;
  }

  onSubmit() {
    const formData = this.vehicleForm.value;
  
    const filteredFormData: Partial<Vehicle> = Object.keys(formData).reduce((acc: Partial<Vehicle>, key) => {
      if (formData[key] !== '' && formData[key] !== null && formData[key] !== undefined) {
        acc[key as keyof Vehicle] = formData[key];
      }
      return acc;
    }, {});

    console.log(filteredFormData)
  
    // Ahora filteredFormData es reconocido como Partial<Vehicle>, lo que significa
    // que puede tener algunas (o todas) las propiedades de un Vehicle, pero ninguna es obligatoria.
    
    this.vehicleService.updateVehicle(this.vehicle, filteredFormData as Vehicle).subscribe({
      next: (vehicle) => {
        alert('Vehículo actualizado correctamente');
        
      },
      error: (error) => {
        console.error('Error al actualizar el vehículo:', error);
      }
    });
  }
  
  

}
