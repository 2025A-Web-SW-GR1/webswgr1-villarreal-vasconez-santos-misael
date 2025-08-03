import { DataSource } from 'typeorm';
import { Casa } from './casa.entity';

export const casaProviders = [
  {
    provide: 'CASA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource
    .getRepository(Casa),
    inject: ['DATA_SOURCE'],
  },
];
 