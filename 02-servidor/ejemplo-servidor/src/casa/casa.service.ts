import { Inject, Injectable } from '@nestjs/common';
import { Casa } from './casa.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CasaService {
    constructor(
        @Inject('CASA_REPOSITORY')
        private photoRepository: Repository<Casa>,
    ){

    }
    obtenerTodos(){
        return this.photoRepository.find();
    }
}
 