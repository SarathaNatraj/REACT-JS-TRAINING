// function minimumFuel(fuel: number) {
//     return function(target: Function, context:any) {
//       if (context.kind === "method") {
//           return function (...args: any[]) {
//             if (this.fuel > fuel) {
//               return target.apply(this, args)
//             } else {
//               console.log(`Not enough fuel. Required: ${fuel}, got ${this.fuel}`)
//             }
//           }
//       }
//     }
//   }
  
//   class RocketFact {
//     fuel = 50
  
//     @minimumFuel(75)
//     launch() {
//       console.log("Launching to Mars in 3... 2... 1... ")
//     }
//   }
  
//   const rocket2 = new RocketFact()
// rocket2.launch()

