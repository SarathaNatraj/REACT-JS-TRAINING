
  
export class Numbers {
 sumOddNumbers:number
    constructor(injectedSumOddNumbers:any) {
      this.sumOddNumbers = injectedSumOddNumbers 
    }
    
   public someMethod(someFlag:boolean, num:number)  : number{
      let result:number=0;
      if (someFlag === true) {
        result = this.onlyOdds(num);
      } else {
        //do something else...
      }
      return result;
    }
     onlyOdds = (num:number) => {
        let sum = 0;
        while (num >= 1){
          if(num % 2 === 1){
              sum += num;
          }
          num--;
        }
        return sum
      }
  }
  