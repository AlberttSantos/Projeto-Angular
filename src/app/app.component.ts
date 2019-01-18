import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public jogoEmAndamento: boolean = true
  public mensagemEncerramento: string

  public encerrarJogo(mensagem: string): void {  
    this.jogoEmAndamento = false
    this.mensagemEncerramento = mensagem
  }

  public reiniciarJogo(): void {
    this.jogoEmAndamento = true
    this.mensagemEncerramento = undefined
  }

}
