import 'reflect-metadata';

const formatMetadataKey = "format"

function format(formatString: string) {
    return Reflect.metadata(formatMetadataKey, formatString);
}

function getFormat(target: any, propertyKey: string) {
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}

class Greeter {
    @format("Hello, %s")
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        let formatString = getFormat(this, "greeting");
        console.log(formatString.replace("%s", this.greeting));
    }
}

let greeter = new Greeter("Alex")
greeter.greet()


