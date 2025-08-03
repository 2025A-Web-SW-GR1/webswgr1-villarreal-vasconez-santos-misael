import { IsOptional, Length } from "class-validator";

export class BuscarDTO {
    @Length(3,500)
    @IsOptional()
    nombre: string;
}

