import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core'
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
  public tentativas: number = 3
  @Output() public encerrarJogo = new EventEmitter()

  constructor() {
    this.atualizaRodada()
  }

  ngOnInit() {
  }

  ngOnDestroy() {    
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = ((<HTMLInputElement>resposta.target).value) // Nescessario "HTMLInputElement" para acesso ao Value
  }

  public verificarResposta(): void {
    if (this.rodadaFrase.frasePortuguese == this.resposta) {
      //trocar pergunta da rodada
      this.rodada++
      this.progresso = this.progresso + (100 / this.frases.length)

      if (this.rodada == 4) {
        this.encerrarJogo.emit("Vitoria")      
      }
      this.atualizaRodada()
    }
    else {
      if (this.tentativas == 0) {        
        this.encerrarJogo.emit("Derrota")
      }
      this.tentativas--
    }
  }

  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada]
    this.resposta = ''
  }
}
