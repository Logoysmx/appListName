export class ListNames {

    constructor(){}

    public names: Array<string> = [];

    saveInList(a, b): void{
        
        this.names.push(a,b);
        console.log("save");
    }

    giveMeDataList(){
        console.log(JSON.stringify(this.names));
    }
}