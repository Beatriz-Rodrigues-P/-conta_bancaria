import { Conta } from "./conta";

export class contapoupanca extends Conta{

    private _aniversario:number;

    constructor(
        aniversario: number,
        numero:number,
        agencia:number,
        tipo:number,
        titular:string,
        saldo:number
    )
	
        {super(numero, agencia, tipo, titular, saldo);
            this._aniversario=aniversario;
        }

	public get aniversario(): number {
		return this._aniversario;
	}

	public set aniversario(value: number) {
		this._aniversario = value;
	}

    public visualizar(){
        super.visualizar()
        console.log(`Dia do aniversário ${this._aniversario}`)
    }
}