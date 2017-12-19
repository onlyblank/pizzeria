export class Util {
    constructor(country, money){
        this.country = country;
        this.money = money;
        this.formatter = this.formatter();
    }
    formatter(){
     return new Intl.NumberFormat(this.country, {
        minimumFractionDigits: 0
      });
    }
}