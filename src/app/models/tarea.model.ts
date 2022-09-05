export class TareaModel{
    id: number= 0;
    //titulo?: string;
    static utlimo_id: number = 0;

    constructor(public fecha: Date, public titulo: string){
      TareaModel.utlimo_id++;
      this.id = TareaModel.utlimo_id;

    }
}
