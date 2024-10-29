//Decorator are pure typescript functions, 
function WithFuel(target: any,context:any){
    if(context.kind ==="class"){
        return class extends target{
            fuel:number=0 //adding property
            isEmpty():boolean{ // adding function
                return this.fuel== 0
            }
        }
    }

}

//Exposing as decorator in as expression format @symbol
@WithFuel
class Rocket{
    fuel:number=75
    
}

@WithFuel
class RocketWithFuel{

}

const rocket = new Rocket()
//console.log(rocket.fuel)
console.log((rocket as any).fuel) //50
console.log(`Is rocket is empty? ${(rocket as any).isEmpty()}`)

const rocketF = new RocketWithFuel()
//console.log(rocket.fuel)
console.log((rocketF as any).fuel) //50
console.log(`Is rocket is empty? ${(rocketF as any).isEmpty()}`)
