import readlinesync=require("readline-sync")
import {colors} from "./src/util/cores"
import {Conta} from "./src/model/conta"
import { contacorrente } from "./src/model/contacorrente";
import { contapoupanca } from "./src/model/contapoupanca";
import { contacontroller } from "./src/Controller/contacontroller";

export function main(){

    let opcao, numero, agencia, tipo, saldo, limite, aniversario, numeroDestino, valor:number
    let titular: string
    const tipocontas= ["Conta corrente", "Conta poupança"];

    //Criando um objeto da classe contacontroller
    const contas = new contacontroller();

    //Novas Instâncias da Classe ContaCorrente (Objetos)
    contas.cadastrar(new contacorrente(contas.gerarNumero(), 1234, 1, 'Amanda Magro', 1000000.00, 100000.00));
    contas.cadastrar(new contacorrente(contas.gerarNumero(), 4578, 1, 'João da Silva', 1000.00, 100.00));
    
    // Novas Instâncias da Classe ContaPoupança (Objetos)
    contas.cadastrar(new contapoupanca(contas.gerarNumero(), 5789, 2, 10000, "Gabriel", 10));
    contas.cadastrar(new contapoupanca(contas.gerarNumero(), 5698, 2, 15000, "Julia", 15));

    //Conta corrente
    const cc1=new contacorrente(3, 789, 1,"Andressa", 100000, 1000);
    cc1.visualizar();

    //Sacar conta corrente
    cc1.sacar(100500);
    cc1.visualizar();

    //Conta poupança
    const cp1=new contapoupanca(21, 4, 456, 2, "Luna", 25000)
    cp1.visualizar()

    //Depositar na poupança
    cp1.depositar(1500);
    cp1.visualizar()

    console.log("");

    while(true){
        
        //Menu
        console.log(colors.fg.whitestrong, colors.bg.cyanbright)
        console.log("___________________________________________________")
        console.log("                                                   ")
        console.log("                    BANCO BRP                      ")
        console.log("___________________________________________________")
        console.log("                                                   ")
        console.log("    1 - Criar conta                                ")
        console.log("    2 - Listar todas as contas                     ")
        console.log("    3 - Buscar uma conta                           ")
        console.log("    4 - Atualizar dados da conta                   ")
        console.log("    5 - Apagar conta bancaria                      ")
        console.log("    6 - Sacar                                      ")
        console.log("    7 - Depositar                                  ")
        console.log("    8 - Realizar transferência bancaria            ")
        console.log("    9 - Buscar por titular                         ")
        console.log("    0 - Sair                                       ")
        console.log("___________________________________________________")
        console.log(colors.reset)

        console.log("Insira a operação desejada: ")
        opcao=readlinesync.questionInt("");

        if(opcao==0){
            console.log(colors.fg.whitestrong,"Banco BRP proporcionando segurança e inovação para você!")
            sobre();
            console.log(colors.reset)
            process.exit()
        }

        switch(opcao){
            case 1:
                console.log(colors.fg.white, "Criar uma conta")
                    
                    console.log("Digite o número da agência: ");
                    agencia=readlinesync.questionInt("");

                    console.log("Digite o nome do titular: ");
                    titular=readlinesync.question("");

                    console.log("Escolha o tipo da conta: ");
                    tipo=readlinesync.keyInSelect(tipocontas, "", {cancel:false})+1;
                
                    console.log("Digite o saldo da conta: ");
                    saldo=readlinesync.questionFloat("");

                    switch(tipo){
                        case 1:
                            console.log("Digite o limite da conta: ");
                            limite=readlinesync.questionFloat("");
                            contas.cadastrar(new contacorrente(0, agencia, tipo, titular, saldo, limite))
                        break
                        case 2:
                            console.log("Digite o dia do aniversario da poupança: ");
                            aniversario=readlinesync.questionInt("");
                            contas.cadastrar(new contapoupanca(0, agencia, tipo, saldo, titular, aniversario))
                        break
                    }
                keyPress()
                break
            case 2:
                console.log(colors.fg.white, "Listar as contas inseridas")
                contas.listartodas()
                keyPress()
                break
            case 3: 
                console.log(colors.fg.white, "Buscar uma conta no sistema")

                console.log("Digite o número da conta: ");
                numero=readlinesync.questionInt("");

                contas.procurarpornumero(numero)
            keyPress()
            break
            case 4:
                console.log(colors.fg.white, "Atualizar uma conta")
                
                console.log("Digite o número da conta: ");
                numero=readlinesync.questionInt("");

                let conta=contas.buscarNoArray(numero)

                if(conta!==null){

                console.log("Digite o número da agência: ");
                agencia=readlinesync.questionInt("");

                console.log("Digite o nome do titular: ");
                titular=readlinesync.question("");

                console.log("Escolha o tipo da conta: ");
                tipo=readlinesync.keyInSelect(tipocontas, "", {cancel:false})+1;
            
                console.log("Digite o saldo da conta: ");
                saldo=readlinesync.questionFloat("");

                tipo=conta.tipo

                switch(tipo){
                    case 1:
                        console.log("Digite o limite da conta atualizado: ");
                        limite=readlinesync.questionFloat("");
                        contas.atualizar(new contacorrente(0, agencia, tipo, titular, saldo, limite))
                    break
                        case 2:
                            console.log("Digite o dia do aniversario da poupança atualizado: ");
                            aniversario=readlinesync.questionInt("");
                            contas.atualizar(new contapoupanca(0, agencia, tipo, saldo, titular, aniversario))
                        break
                    }

                }else{
                        console.log("Conta não encontrada!")
                    }
                keyPress()
                break
                
            case 5:
                console.log(colors.fg.white, "Apagar uma conta")
                numero=readlinesync.questionInt("")

                contas.deletar(numero)
            keyPress()
            break

            case 6:
                console.log(colors.fg.white, "Digite o número da conta")
                numero=readlinesync.questionFloat("")

                console.log(colors.fg.white, "Sacar um valor da conta")
                valor=readlinesync.questionFloat("")

                contas.sacar(numero, valor)

            keyPress()
            break
            case 7:
                console.log(colors.fg.white, "Digite o número da conta")
                numero=readlinesync.questionFloat("")

                console.log(colors.fg.white, "Depositar um valor na conta")
                valor=readlinesync.questionFloat("")

                contas.depositar(numero, valor)

            keyPress()
            break
            case 8:
                console.log(colors.fg.white, "Digite o número da conta")
                numero=readlinesync.questionFloat("")

                console.log(colors.fg.white, "Digitar o número da conta destino")
                numero=readlinesync.questionFloat("")
                    
                console.log(colors.fg.white, "Transferir um valor de uma conta para outra")
                valor=readlinesync.questionFloat("")
                
                contas.transferir(numero, numero, valor)

                keyPress()
                break
            case 9:
                console.log(colors.fg.white, "Consulta pelo titular:")
                
                console.log("Digite o nome do titular:")
                titular = readlinesync.question("")

                contas.procurartitular(titular);
            keyPress()
            break
        default:
                console.log(colors.fg.redstrong,"Operação inválida. Insira um valor válido!")
            break
        }
        
    }

}

function sobre():void{
    console.log("____________________________________________________")
    console.log("                                                    ")
    console.log("Projeto Desenvolvido por: Beatriz Rodrigues de Paula");
    console.log("   Generation Brasil - generation@generation.org    ");
    console.log("            github.com/conteudoGeneration           ");
    console.log("____________________________________________________");
}

function keyPress():void{
    console.log(colors.reset,"")
    console.log("\nPressione enter para continuar!")
    readlinesync.prompt()
}
main()