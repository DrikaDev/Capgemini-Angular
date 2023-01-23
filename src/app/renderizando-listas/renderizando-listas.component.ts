import { Component } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {
  // lista de dados:
  celulares: Celular[] = [
    {id: 1, nome: "Celular XL", descricao: "Celular grande", esgotado: false},
    {id: 2, nome: "Celular Normal", esgotado: false},
    {id: 3, nome: "Celular Mini", descricao: "Celular pequeno", esgotado: true}
  ]
}
// mostrar a lista de celulares no arquivo
//renderizando-listas.component.html