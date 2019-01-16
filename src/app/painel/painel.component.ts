import { Component, OnInit } from '@angular/core'
import { Frase } from '../shared/frase.model'
import { FRASES } from './frase-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})

export class PainelComponent implements OnInit {

  // Recupera as frases contidas em FRASES
  public frases: Frase[] = FRASES;

  public instrucao: string = 'Traduza a Frase'
  public resposta: string = ''
  public rodada: number = 0
  public rodadaFrase: Frase
  public progresso: number = 0

  constructor() {
    this.atualizaRodada()
   }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = ((<HTMLInputElement>resposta.target).value) // Nescessario "HTMLInputElement" para acesso ao Value
  }

  public verificarResposta(): void{
    if(this.rodadaFrase.frasePortuguese == this.resposta){ 
      alert("A tradução está correta")
      //trocar pergunta da rodada
      this.rodada ++
      this.progresso = this.progresso + (100 / this.frases.length)      
      this.atualizaRodada()
    }
    else{
      alert("A tradução está incorreta")
    }    
  }

  public atualizaRodada():  void {
    this.rodadaFrase = this.frases[this.rodada]
    this.resposta = ''
  }
}
