const world = 'world';

function hello(who: string = world): string {
  return `Hello ${who}! `;
}

const helloWorld = hello()
console.log(helloWorld)