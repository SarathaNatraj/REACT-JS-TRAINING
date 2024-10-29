function infoDeco(constructor:Function){
    console.log(" info deco called");
}

function debugDeco(constructor:Function){
    console.log(" debug deco called");
}

@infoDeco
@debugDeco
class MultiDeco{

    

}