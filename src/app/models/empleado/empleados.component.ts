import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoService } from '../../services/empleado';
import { Empleado } from './empleado';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
    empleados: Empleado[] = [];
    isLoading: boolean = true;
    errorMessage: string | null = null;

    constructor(private empleadoService: EmpleadoService) { }

    ngOnInit(): void {
        this.loadEmpleados();
    }

    loadEmpleados(): void {
        this.isLoading = true;
        this.empleadoService.getEmpleados().subscribe({
            next: (data) => {
                this.empleados = data;
                this.isLoading = false;
            },
            error: (err) => {
                console.error('Error al cargar empleados:', err);
                this.errorMessage = 'Hubo un error al conectar con el servidor. Revise la consola para detalles.';
                this.isLoading = false;
            }
        });
    }
}