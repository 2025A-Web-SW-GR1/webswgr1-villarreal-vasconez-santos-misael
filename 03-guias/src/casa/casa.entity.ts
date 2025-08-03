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

  @Column()
  password: string;

  @Column({ nullable: true })
  fileContentType?: string;

  @Column({ nullable: true })
  filename?: string;

  @Column({ nullable: true })
  fileID?: string;

  @Column({ nullable: true })
  username: string;
}