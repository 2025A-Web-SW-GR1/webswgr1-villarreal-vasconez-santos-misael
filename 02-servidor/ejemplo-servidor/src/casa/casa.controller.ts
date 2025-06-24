import { 
  Controller, Get } from '@nestjs/common';
import { CasaService } from './casa.service';

@Controller('api/casa')
export class CasaController {
    constructor(
        private readonly casaService: CasaService
    ) {

    }
    @Get()
    obtener(){
        return this.casaService.obtenerTodos();
    }

}