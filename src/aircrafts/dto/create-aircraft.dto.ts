import { IsInt, IsString, Min, IsBoolean } from "class-validator";

export class CreateAircraftDto {

    @IsString({message: "O nome deve ser uma strign válida."})
    name: string;

    @IsString({message: "Modelo deve ser uma string valida."})
    model: string;

    @IsInt({message: "Autonomia, deve ser um número inteiro."})
    @Min(50, {message: "Aeronaves deve ter um tanque minimo de 50L para vôos curtos"})
    autonomy: number;
    
    @IsInt({message: "Deve informar uma quantidade valida de assentos"})
    @Min(2, {message: "Modelos simples tem no mínimo 2 acentos, de piloto e copiloto"})
    quantidade_assentos: number;

    @IsBoolean({message: "Dee informar um booleano, true ou false"})
    in_use: boolean;

}
