import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

export interface Usuario {
    nombre_usuario: string; 
}

export interface Vehiculo {
    marca: string; 
    modelo: string; 
}

export interface Servicio {
    id: number;
    id_vehiculo: number;
    id_usuario: number;
    fecha_servicio: string;
    vehiculo: Vehiculo;
    usuario: Usuario;
}


@Component({
  selector: 'app-servicios', 
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicio.html',
  styleUrls: ['./servicio.css']
})
export class ServiciosComponent implements OnInit {
    servicios: Servicio[] = [];
    isLoading: boolean = false;
    errorMessage: string | null = null;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        const resolvedData = this.route.snapshot.data['serviciosData'];
        
        if (resolvedData && resolvedData.length > 0) {
            this.servicios = resolvedData;
        } else {
            this.errorMessage = 'Hubo un error al recuperar los datos de servicios o la lista está vacía.';
        }
    }
}