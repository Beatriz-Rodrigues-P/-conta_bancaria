import { contarepository } from "../../Repository/contarepository";
import { Conta } from "../model/conta";

export class contacontroller implements contarepository{

    //Coleção array que vai armazenar os objetos da conta
    private listacontas=new Array<Conta>();

    //Controlar os numeros das contas
    public numero:number=0;

    procurarpornumero(numero: number): void {
        throw new Error("Method not implemented.");
    }
    listartodas(): void {
        throw new Error("Method not implemented.");
    }
    cadastrar(conta: Conta): void {
        this.listacontas.push(conta);
        console.log("A conta foi cadastrada com sucesso!")
    }
    atualizar(conta: Conta): void {
        throw new Error("Method not implemented.");
    }
    deletar(conta: Conta): void {
        throw new Error("Method not implemented.");
    }
    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    transferir(numeroorigem: number, numerodestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    //Métodos auxiliares
    public gerarnumero(): number{
        return ++this.numero;
    }

}