import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  public inputType = "text";
  public color: string = 'red';
  
  constructor() { 
    
  }

  ngOnInit(): void {
    setTimeout( () => {
      this.inputType = 'password';
      console.warn('les caractères entrès sont désormais masqués par sécurité')
    }, 8000);
  }

  public changeColor(color:string) :void{
    this.color = color;
  }

}
