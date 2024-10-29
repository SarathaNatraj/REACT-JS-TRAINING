function upperCase(target:any, propertyKey:string, descriptor:PropertyDescriptor):any{
    const originalMethod = descriptor.value;

    descriptor.value =  function(...args:any[]){
        const result = originalMethod.apply(this,args);
        if(typeof result === 'string'){
            return result.toUpperCase();
        }
        return result;
    };
    return descriptor;
}

class User{
    private name:string;

    constructor(name:any){
        this.name=name;
    }
    @upperCase(name)
    getName(){
        return this.name;
    }
    
}

const user = new User("Suraj kumar");
console.log(user.getName());