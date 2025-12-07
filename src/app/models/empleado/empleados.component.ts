import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
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
    isLoading: boolean = false;
    errorMessage: string | null = null;

    constructor(private route: ActivatedRoute) { } 

    ngOnInit(): void {

        const resolvedData = this.route.snapshot.data['empleadosData'];
        
        if (resolvedData && resolvedData.length > 0) {
            this.empleados = resolvedData;
        } else {
            this.errorMessage = 'Hubo un error al recuperar los datos de empleados o la lista está vacía.';
        }
    }
}