import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioService } from '../../services/servicio'; 


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
    isLoading: boolean = true;
    errorMessage: string | null = null;

    constructor(private servicioService: ServicioService) { }

    ngOnInit(): void {
        this.loadServicios();
    }

    loadServicios(): void {
        this.isLoading = true;
        this.servicioService.getServicios().subscribe({
            next: (data) => {
                this.servicios = data;
                this.isLoading = false;
            },
            error: (err) => {
                console.error('Error al cargar servicios:', err);
                this.errorMessage = 'Hubo un error al conectar con el servidor de servicios. Revise la consola para detalles.';
                this.isLoading = false;
            }
        });
    }
}