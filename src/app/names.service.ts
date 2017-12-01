import { Injectable } from '@angular/core';

@Injectable (

)
export class NameService {
    nameList: Array<any> = [];
    
    constructor(){
        //First registry to example...
        this.saveName("Isaac Fraire", "March 25");
    }

    saveName(name, birthDay){
        var arrayTemp = {"name" : name, "birth_day":birthDay};
        this.nameList.push(arrayTemp);
    }

    getList(){
        return this.nameList;
    }

    createJSON(){
        console.log(JSON.stringify(this.nameList));
    }

    resetList(){
        this.nameList = [];
    }
}