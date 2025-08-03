import { IsInt, IsOptional, IsString, IsUrl, Length, Min } from "class-validator";

export class CrearEditarDTO {
    @Length(3,500)
    nombre: string;
    
    @Min(0)
    @IsInt()
    valor: number;

    @IsUrl()
    imagenURL: string;

    @Length(3,500)
    password: string;

    @IsOptional()
    @IsString()
    username: string;
}