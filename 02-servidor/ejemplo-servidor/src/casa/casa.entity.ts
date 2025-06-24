
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Casa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  nombre: string;

  @Column()
  valor: number;

  @Column()
  imagenURL: string;
}