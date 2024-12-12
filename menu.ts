import readlinesync=require("readline-sync")
import {colors} from "./src/util/cores"
import {Conta} from "./src/model/conta"
import { contacorrente } from "./src/model/contacorrente";
import { contapoupanca } from "./src/model/contapoupanca";

export function main(){

    let opcao:number

    //Sacar
    const c1=new Conta(1, 123, 1, "Jonas", 2000000);
    c1.visualizar()
    console.log(c1.sacar(100.00))
    c1.visualizar()

    //Depositar
    const c2=new Conta(2, 234, 2, "Adrielly", 1000000);
    c2.visualizar()
    c2.depositar(100.00)
    c2.visualizar()

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
        console.log("    9 - Sair do programa                           ")
        console.log("___________________________________________________")
        console.log(colors.reset)

        console.log("Insira a operação desejada: ")
        opcao=readlinesync.questionInt("");

        if(opcao==9){
            console.log(colors.fg.whitestrong,"Banco BRP proporcionando segurança e inovação!")
            sobre();
            console.log(colors.reset)
            process.exit()
        }

        switch(opcao){
            case 1:
                console.log(colors.fg.white, "Criar uma conta")
                keyPress()
                break
            case 2:
                console.log(colors.fg.white, "Listar as contas inseridas")
                keyPress()
                break
            case 3: 
                console.log(colors.fg.white, "Buscar uma conta no sistema")
                keyPress()
                break
            case 4:
                console.log(colors.fg.white, "Atualizar uma conta")
                keyPress()
                break
            case 5:
                console.log(colors.fg.white, "Apagar uma conta")
                keyPress()
                break
            case 6:
                console.log(colors.fg.white, "Sacar um valor da conta")
                keyPress()
                break
            case 7:
                console.log(colors.fg.white, "Depositar um valor na conta")
                keyPress()
                break
            case 8:
                console.log(colors.fg.white, "Transferir um valor de uma conta para outra")
                keyPress()
                break
            case 9:
                console.log(colors.fg.white, "Operação finalizada com sucesso!")
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