import { Pipe, PipeTransform } from '@angular/core';

//aqui é o decorador de pipe:
@Pipe({
  name: 'multiplicaPor'
})
export class MultiplicaPorPipe implements PipeTransform {

  transform(valor: number, multiplicador: number): unknown {
    return valor * multiplicador;
  }

}
