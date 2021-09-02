export class itemmodel {
    _id:any;
    strName: string;
    strCategory: string;
    intQuantity: Number;
    strImage: string;
    intPrice: Number;
    constructor() {
        this.strName = "";
        this.strCategory = "";
        this.intQuantity = 0;
        this.strImage = "";
        this.intPrice = 0;
    }
}