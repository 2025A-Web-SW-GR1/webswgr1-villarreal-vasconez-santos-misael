import { Inject, Injectable, Options } from '@nestjs/common';
import { Casa } from './casa.entity';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class CasaService {
    constructor(
        @Inject('CASA_REPOSITORY')
        private photoRepository: Repository<Casa>,
    ) {

    }
    obtenerTodos(
        Options?: FindManyOptions | undefined
    ) {

        return this.photoRepository.find();
    }
}
