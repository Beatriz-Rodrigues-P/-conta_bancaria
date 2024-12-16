import { Conta } from "../model/conta";
import {contarepository} from "../Repository/contarepository";

export class contacontroller implements contarepository {

    //Para armazenar os objetos das contas
    private listaContas: Array<Conta> = new Array<Conta>();
    
    //Para realizar o controle dos números das contas
    public numero: number = 0;

    procurarpornumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null) {
            buscaConta.visualizar();
        } else
            console.log("\nA Conta numero: " + numero
                + " não foi encontrada!");
    }

    listartodas(): void {
        for (let conta of this.listaContas) {
            conta.visualizar();
        }
    }

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log("\nA Conta número: " + conta.numero +" foi criada com sucesso!");
    }

    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);

        if (buscaConta != null) {
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log("\nA Conta numero: " + conta.numero + " foi atualizada com sucesso!");
        } else
            console.log("\nA Conta numero: " + conta.numero + " não foi encontrada!");
    }

    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log("\nA Conta numero: " + numero + " foi apagada com sucesso!");
        }else{
            console.log("\nA Conta numero: " + numero + " não foi encontrada!",);
        }
    }

    sacar(numero: number, valor: number): void {
        const buscaConta=this.buscarNoArray(numero);

        if(buscaConta!==null){
            if(buscaConta.sacar(valor)===true)
                console.log("O saque foi efetuado com sucesso")
        }else
            console.log("Conta não encontrada ")
    }

    depositar(numero: number, valor: number): void {
        const buscaConta = this.buscarNoArray(numero)

		if (buscaConta !== null) {
            buscaConta.depositar(valor)
			console.log("O Depósito foi efetuado com sucesso!");
		}else 
            console.log('\nConta não Encontrada!')
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        const contaOrigem=this.buscarNoArray(numeroOrigem)
        const contaDestino=this.buscarNoArray(numeroDestino)
        
        if(contaOrigem!==null && contaDestino!==null){
            if(contaOrigem.sacar(valor)===true){
                contaDestino.depositar(valor)
                console.log("A transferência foi efetuada com sucesso!")
            }
        }else
            console.log("Conta de origem e/ou conta de destino não foi encontrada!")
    }

    procurartitular(titular: string): void {
        let buscatitular=this.listaContas.filter(conta=>
            conta.titular.toUpperCase().includes(titular.toUpperCase())
        )
        buscatitular.forEach(conta=>conta.visualizar())
    }

    /*Métodos Auxiliares*/

    /*Gerar Número da Conta*/
    public gerarNumero(): number {
        return ++this.numero;
    }

    /*Checa se uma Conta existe*/
    public buscarNoArray(numero: number): Conta | null {

        for (let conta of this.listaContas) {
            if (conta.numero === numero)
                return conta;
        }

        return null;
    }

}