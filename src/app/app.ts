import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router'; // <--- Importación correcta

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, RouterLink], // <--- Referencia correcta en imports
    templateUrl: './app.html',
    // ... resto del código
})
export class App {
    title = 'Mecanica.Angular';
}