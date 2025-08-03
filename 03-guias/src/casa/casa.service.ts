import { Inject, Injectable } from '@nestjs/common';
import { Casa } from './casa.entity';
import { FindManyOptions, Repository } from 'typeorm';
import { CrearEditarDTO } from './dto/crear-editar.base.dto';

@Injectable()
export class CasaService {
    constructor(
        @Inject('CASA_REPOSITORY')
        private readonly casaRepository: Repository<Casa>,
    ){}

    obtenerTodos(
        options?: FindManyOptions<Casa> | undefined
    ){
        return this.casaRepository.find(options);
    }

    crearUno(valoresAActualizar: CrearEditarDTO) {
        let nuevaInstancia = this.casaRepository.create();
        nuevaInstancia = {
            ...nuevaInstancia,
            ...valoresAActualizar,
        };
        // Guardamos la nueva instancia en la base de datos
        return this.casaRepository.save(nuevaInstancia);
    }

    buscarUnoPorUsername(username: string) {
        return this.casaRepository.findOne({
            where: {
                username: username
            }
        });
    }

    async actualizarArchivoPorId(
        valoresAActualizar: {
            fileContentType: string;
            filename: string;
            fileID: string;
        },
        id: number
    ) {
        const recordExist = await this.casaRepository.findOneByOrFail({ id });
        let registroActualizar = this.casaRepository.create();
        registroActualizar = {
            ...registroActualizar,
            ...valoresAActualizar
        }
        registroActualizar.id = recordExist.id;
        return this.casaRepository.save(registroActualizar);
    }

    obtenerUnoPorId(id: number) {
        return this.casaRepository.findOneByOrFail({ id });
    }
}