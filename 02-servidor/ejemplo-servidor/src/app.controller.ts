import { Controller, Get, HttpCode, HttpException, NotFoundException, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {

  //Lista fija de casas
  private readonly casas = [
    { id: 1, nombre: 'Casa 1' },
    { id: 2, nombre: 'Casa 2' },
  ];

  /**
   * Servicio REST para obtener casas.
   * 
   * Método: GET /casa
   * 
   * - Sin parámetro: devuelve todas las casas.
   * - Con ?idCasa:
   *   - Si el ID existe: devuelve solo esa casa.
   *   - Si el ID no existe: 404 "No se encuentra".
   *   - Si el parámetro es inválido: 400 "Parámetro idCasa inválido".
   * 
   * Ejemplos:
   * - GET /casa → 200, todas las casas
   * - GET /casa?idCasa=1 → 200, [{ id: 1, nombre: "Casa 1" }]
   * - GET /casa?idCasa=3 → 404, "No se encuentra"
   * - GET /casa?idCasa=abc → 400, "Parámetro idCasa inválido"
   */

  @Get('/casa')
  @HttpCode(200)
  getCasa(@Query('idCasa') idCasa?: string) {
    // Si no se envía el parámetro idCasa, se devuelve todas las casas
    if (!idCasa) {
      return this.casas;
    }

    // Se convierte el parámetro idCasa a número
    const id = parseInt(idCasa, 10);

    // Se valida si el ID es un número válido y mayor a 0
    if (isNaN(id) || id <= 0) {
      // Si no lo es, se lanza el error 400 
      throw new HttpException('Parámetro idCasa inválido', 400);
    }

    // Se busca en la lista si existe una casa con ese ID
    const casa = this.casas.find(c => c.id === id);

    // Si no se encuentra la casa, se lanza el error 404
    if (!casa) {
      throw new NotFoundException('No se encuentra');
    }

    // Si todo está bien, se devuelve la casa encontrada dentro de una lista
    return [casa];
  }
}
