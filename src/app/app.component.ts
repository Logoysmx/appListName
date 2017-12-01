import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ListNames } from './list-names'

import { NameService } from './names.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NameService]
})
export class AppComponent {
  title = 'app';
  name: string;
  birthDate: string;
  showPopup: boolean = false;
  

  constructor(private lista:NameService){

  }
  public tooglePopup(){
    this.showPopup = !this.showPopup;
  }
  public saveData(name, birthDate): void{
    this.pushData(name.value, birthDate.value);
    this.showPopup = false;
  }

  public clearList(){
    this.lista.resetList();
  }

  private pushData(a, b){
    this.lista.saveName(a, b);
  }

}
