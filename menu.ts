import readlinesync=require("readline-sync")
import {colors} from "./src/util/cores"
import {Stack} from "./Stack"

let opcao:number
const contaslista=new Stack<string>()
let valor:number

do{
    menu()
    opcao=(readlinesync.questionInt("\nDigite a operacao a ser executada: "))

    switch(opcao){
        case 1:
            criar()
        break
        case 2:
            listar()
        break
        case 3:
            buscar()
        break
        case 4:
            atualizar()
        break
        case 5:
            apagar()
        break
        case 6:
            sacar()
        break
        case 7:
            depositar()
        break
        case 8:
            transferir()
        break
        case 9:
            console.log("Operação finalizada com sucesso!")
        break
    default:
            console.log(colors.fg.redstrong,"Operação inválida. Insira um valor válido!")
        break
    }
}while(true)

//Menu
function menu():void{
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
}
//Digitar os dados solicitados
function criar():void{
    const conta=readlinesync.question("Criar conta: ")
    contaslista.push(conta)
    console.log(`Conta ${conta} criada com sucesso!`)
}
//Listar todas as contas que foram criadas
function listar():void{
    console.log("Lista de contas bancarias: ")
    if(contaslista.isEmpty()){
        console.log("Não há contas criadas!")
    }else{contaslista.printStack()}
}
//Buscar uma conta específica
function buscar():void{
    const buscaconta=readlinesync.question("Buscar uma conta bancária: ")
    if(contaslista.contains((num)=>num===buscaconta)){
    console.log(`A conta ${buscaconta} está no sistema.`)
}else{console.log(`A conta ${buscaconta} não existe no sistema`)}
}
//Atualizar os dados de uma conta que buscou
function atualizar():void{
    const dados=readlinesync.question("Insira a conta que deseja atualizar: ")
    const listadados= contaslista.findIndex((contab)=>contab===dados)
    if (listadados!==-1){ 
        const dadosatu=readlinesync.question("Numero atualizado: ")
        contaslista.items[listadados]=dadosatu
        console.log(`Conta ${dados} atualizada com sucesso. O novo número é: ${dadosatu}.`) 
        } else {
        console.log("Esta conta não é válida!")}
}
//Apagar uma conta 
function apagar():void{
    const dados=readlinesync.question("Insira a conta que deseja apagar: ")
    const listadados=contaslista.findIndex((contab)=>conta===dados)
    if (listadados!=-1){
        constaslista.remove(listadados)
        console.log(`A conta ${dados} foi excluida!`)
    }else{
        console.log("Conta ${dados} não foi rastreada!")
    }
}
//Sacar o valor de uma conta
function sacar():void{
    const dados=readlinesync.question("Insira a conta: ")
    const listadados = contaslista.findIndex((contab)=>contab===dados)
    if (listadados!==-1){
        const valor=readlinesync.questionFloat("Insira o valor que deseja sacar: ")
        console.log(`R$${valor} foram sacados da conta ${listadados}.`)
    } else { console.log("Conta não encontrada.")}
}
//Depositar o valor em uma conta
function depositar():void{
    const dados=readlinesync.question("Número da conta: ")
    const indice = contaslista.findIndex((contab)=>contab===dados)
    if (indice !== -1){
        const valor=readlinesync.questionFloat("Valor que deseja depositar: ")
        console.log(`R$${valor} foi depositado na conta ${dados}.`)
    }else{console.log("A conta não foi rastreada.")
}
//Transferir um valor de uma conta para outra
function transferir():void{
    const origem=readlinesync.question("Insira a conta de origem: ")
    const destino=readlinesync.question("Insira a conta de destino: ")
    const valor=readlinesync.questionFloat("Valor que deseja transferir: ")
    const listao=contaslista.findIndex()
}

process.exit(0)
