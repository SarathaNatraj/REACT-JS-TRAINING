import { validate,MinLength,MaxLength,IsEmail,IsString,Contains,Allow, Min } from 'class-validator';

class BaseContent {
  @IsEmail()
  email: string="xx";

  @IsString()
  password: string="aa";
}

class User extends BaseContent {
  @MinLength(2)
  @MaxLength(20)
  name: string="a";

  @Contains('hello')
  welcome: string="h";

  @MinLength(5)
  password: string="j";
}

let user = new User();


user.email = 'aa@gmail.com'; // inherited property
user.password = 'too short'; // password wil be validated not only against IsString, but against MinLength as well
user.name = 'Gowtham Ranganathan'
user.welcome = 'hello';

validate(user).then(errors => {
    console.log(errors);
  }); 


  

export class Post {

    @Allow()
    title: string="a";

    @Min(2)
    views: number=0;

    nonWhitelistedProperty: number=1;
}

let post = new Post();
post.title = 'Hello world!';
post.views = 1;

post.nonWhitelistedProperty = 69;
(post as any).anotherNonWhitelistedProperty = "something";

validate(post).then(errors => {
  // post.nonWhitelistedProperty is not defined
  // (post as any).anotherNonWhitelistedProperty is not defined
  console.log(post);
  console.log(errors);
});