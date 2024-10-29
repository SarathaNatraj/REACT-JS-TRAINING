function WithFuel(target: typeof Rocket, context:any):  any {
    if (context.kind === "class") {
      return class extends target {
        fuel: number = 50
        isEmpty(): boolean {
          return this.fuel == 0
        }
      }
    }
  }

  //@WithFuel
class Rocket {}

const rocket = new Rocket()
console.log((rocket as any).fuel)
console.log(`Is the rocket empty? ${(rocket as any).isEmpty()}`)

//@WithFuel
class Rocket1 {
  fuel: number = 75
}

const rocket1 = new Rocket1()
console.log((rocket1 as any).fuel)
