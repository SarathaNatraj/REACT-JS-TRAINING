//npm i class-validator
import { validate,registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsLongerThan(property: string, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isLongerThan',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          const relatedValue = (args.object as any)[relatedPropertyName];
          return typeof value === 'string' && typeof relatedValue === 'string' && value.length > relatedValue.length; // you can return a Promise<boolean> here as well, if you want to make async validation
        },
      },
    });
  };
}
  export class PostV {
    title: string;

    constructor(tit:any){
        this.title=tit;
    }
  
    @IsLongerThan('title', {
      /* you can also use additional validation options, like "groups" in your custom validation decorators. "each" is not supported */
      message: 'Text must be longer than the title',
    })
    public text: string="WhatsApp";
    //public text:string ="WhatsApp introduces screen sharing feature for video calls";
  }
  
  let postV:PostV = new PostV('WhatsApp introduces screen sharing feature for video calls');
postV.title = 'Tech Post';

console.log(postV);

  validate(postV).then(errors => {
  
    
    console.log(errors);
  });

  
