import { Component, EventEmitter, Output } from '@angular/core';

import { TimeSlot } from '../../models/time-slot.model';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-step2-select-date',
  templateUrl: './step2-select-date.component.html',
  styleUrl: './step2-select-date.component.css'
})
export class Step2SelectDateComponent {
  date : Date = new Date();
  faCareDown = faCaretDown;
  faCaretUp = faCaretUp;
  @Output() hourSelected = new EventEmitter<[Date, TimeSlot[]]>();



  timeSlots: TimeSlot[] = [
    { start: '7:00', end: '7:30' },
    { start: '7:30', end: '8:00' },
    { start: '8:00', end: '8:30' },
    { start: '8:30', end: '9:00' },
    { start: '9:30', end: '10:00' }, 
    { start: '10:00', end: '10:30' }, 
    { start: '10:30', end: '11:00' }, 
    { start: '11:00', end: '11:30' }, 
    { start: '11:30', end: '12:00' }, 
    { start: '12:00', end: '12:30' }, 
    { start: '12:30', end: '13:00' }, 

  ];



  selectTimeSlot(clickedSlot: TimeSlot){
    const clickedIndex = this.timeSlots.indexOf(clickedSlot);

    // Encuentra los índices de los slots seleccionados
    const selectedIndexes = this.timeSlots
                              .map((slot, index) => slot.selected ? index : -1)
                              .filter(index => index !== -1);

    // Si es la primera selección, simplemente selecciona
    if (selectedIndexes.length === 0) {
      clickedSlot.selected = true;
      return;
    }

    // Encuentra el rango de índices seleccionados
    const minSelectedIndex = Math.min(...selectedIndexes);
    const maxSelectedIndex = Math.max(...selectedIndexes);

    // Verifica si el clickeado es adyacente a los seleccionados
    if (clickedIndex === minSelectedIndex - 1 || clickedIndex === maxSelectedIndex + 1) {
      clickedSlot.selected = true;
      
      
    } else if (clickedIndex === minSelectedIndex || clickedIndex === maxSelectedIndex) {
      // Permite deseleccionar si es uno de los extremos de la selección
      clickedSlot.selected = !clickedSlot.selected;
      // Opcional: limpiar selecciones intermedias si se deselecciona un extremo
    } else if (clickedIndex > minSelectedIndex && clickedIndex < maxSelectedIndex){

      // Si se selecciona un slot intermedio, se deselecciona todo
      this.timeSlots.forEach(slot => slot.selected = false);
      clickedSlot.selected = true;
      
    }else{
      alert('Por favor, seleccione un horario contiguo.');
    }

    this.emitSelectedSlots();
  }

  getDate(date: Date) {
    console.log(this.date)
    
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
  
    if (date >= currentDate) {
      this.date = date;
    } else {
      alert("No se puede seleccionar una fecha pasada.");
    }
  }

  emitSelectedSlots(){
    const selectedSlots = this.timeSlots.filter(slot => slot.selected);
    console.log(selectedSlots)
    this.hourSelected.emit([this.date, selectedSlots]);
  }

  scrollSlots(direction: 'up' | 'down') {
    const container = document.querySelector('.time-slot-container');
    const scrollAmount = 50; // La cantidad de píxeles que se desplazará el contenedor

    if (container) {
      const currentScroll = container.scrollTop;
      container.scrollTop = direction === 'down' ? currentScroll + scrollAmount : currentScroll - scrollAmount;
    }
  }

}
