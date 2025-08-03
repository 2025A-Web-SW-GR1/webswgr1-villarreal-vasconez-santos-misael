import {
    Controller, Get,
    Query
} from '@nestjs/common';
import { CasaService } from './casa.service';
import { Like } from 'typeorm';

@Controller('api/casa')
export class CasaController {
    constructor(
        private readonly casaService: CasaService
    ) {

    }
    @Get()
    obtener(@Query('nombre') nombre: string,
    ) {
        return this.casaService.obtenerTodos({
            where: {
                nombre: Like("%" + nombre + "%"),
            }
        });
    }

}