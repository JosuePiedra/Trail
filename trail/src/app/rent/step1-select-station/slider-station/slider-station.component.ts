import { Component, EventEmitter, Input, OnInit, Output, OnDestroy, HostListener } from '@angular/core';
import { Station } from '../../../models/station.model';




@Component({
  selector: 'app-slider-station',
  templateUrl: './slider-station.component.html',
  styleUrl: './slider-station.component.css'
})
export class SliderStationComponent{

  @Input() stations: Station[] = [];
  @Output() stationSelected = new EventEmitter<Station>(); // Emite la estación seleccionada al padre
  posicionActual = 0;

  
  selectedStationIndex: number | null = null;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.actualizarPosicion();
  }
  

  desplazarIzquierda() {
    if (this.posicionActual > 0) {
      this.posicionActual--;
      this.actualizarPosicion();
    }
  }

  reservar(index: number) {
    this.selectedStationIndex = index;
    this.stationSelected.emit(this.stations[index]);
  }

  desplazarDerecha() {
    if (this.posicionActual < this.stations.length - 3) {
      this.posicionActual++;
      this.actualizarPosicion();
    }
  }
  
  actualizarPosicion() {
    const anchoVentana = window.innerWidth;
    const carousel = document.querySelector('.carousel') as HTMLElement;
    let desplazamiento;
  
    if (anchoVentana < 480) { // Móviles
      desplazamiento = this.posicionActual * -(100 / 1);
    } else if (anchoVentana < 768) { // Tabletas
      desplazamiento = this.posicionActual * -(100 / 2);
    } else { // Escritorio
      desplazamiento = this.posicionActual * -(100 / 3);
    }
  
    carousel.style.transform = `translateX(${desplazamiento}%)`;
  }
  



  
  

}
