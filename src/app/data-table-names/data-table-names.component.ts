import { Component, OnInit } from '@angular/core';
import { NameService } from '../names.service';

@Component({
  selector: 'app-data-table-names',
  templateUrl: './data-table-names.component.html',
  styleUrls: ['./data-table-names.component.scss']
})
export class DataTableNamesComponent implements OnInit {

  datos: any;

  constructor(private lista:NameService) {
    //Other option
    //this.datos = this.lista.getList();
  }

  ngOnInit() {
    this.datos = this.lista.getList();
  }

  ngDoCheck(){
    this.datos = this.lista.getList();
  }

  remove(item){
    this.datos.splice(item, 1);
    console.log(this.datos);
  }

}
