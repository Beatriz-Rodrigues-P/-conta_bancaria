import { Conta } from "../model/conta";

export interface contarepository{

    //Métodos do CRUD (Create, Read, Update e Delete)
    procurarpornumero(numero:number):void;
    listartodas():void;
    cadastrar(conta:Conta):void;
    atualizar(conta:Conta):void;
    deletar(numero:number):void;
    procurartitular(titular:string):void;

    sacar(numero: number, valor:number):void;
    depositar(numero:number, valor:number):void;
    transferir(numeroorigem:number, numerodestino:number, valor:number):void;
    
}
