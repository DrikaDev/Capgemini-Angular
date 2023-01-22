//Segundo, por o decorador @Component:
import { Component } from "@angular/core";

//Terceiro, passar as informações, selector, template e styles:
@Component({
    selector: 'app-primeiro-componente',
    template: '<h2>Primeiro Componente</h2>',
    styles: ["h2 {color: red;}"]
})
// Primeiro por a classe:
export class PrimeiroComponenteComponent{}