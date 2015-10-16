# Angular 2 Pipes
## Based on [ng2-play.ts](https://github.com/pkozlowski-opensource/ng2-play)

This is the code for Auth0's Angular 2 series tutorial on [working with pipes](#). In the tutorial, we cover: 

1. A comparison of Angular 1.x filters to Angular 2 pipes
2. How to use pipes, including the `async` pipe
3. How to create custom pipes

## Installation

Clone the repo and then:

```bash
npm install
gulp play
```

The app will be served at `localhost:9000`.

## Important Snippets

In this tutorial, we work with everything out of one file, `app.ts`.

```js
// app.ts

import {Component, View, bootstrap, Pipe, PipeTransform, bind} from 'angular2/angular2';

// We use the @Pipe decorator to register the name of the pipe
@Pipe({
  name: 'tempConvert'
})
// The work of the pipe is handled in the tranform method with our pipe's class
class TempConvertPipe implements PipeTransform {
  transform(value: number, args: any[]) {
    if(value && !isNaN(value) && args[0] === 'celsius') {
      var temp = (value - 32) * 5/9;
      var places = args[1];
      return temp.toFixed(places) + ' C';       
    }

    return;
  }
}
@Component({
  selector: 'pipes'
})
@View({
  templateUrl: 'pipesTemplate.html',
  // We can pass the pipe class name into the pipes key to make it usable in our views
  pipes: [TempConvertPipe]
})

class PipesAppComponent {
  date: Date;
  rating: number;
  grade: number;
  temperature: number;
  promise: Promise;

  constructor() {
    this.date = new Date();
    this.rating = 9.1243;
    this.grade = 0.99;
    this.temperature = 85;
    this.promise = new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve("Hey, I'm from a promise.");
      }, 2000)
    });
  }
}

bootstrap(PipesAppComponent);
```

## License
MIT

## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, amont others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
* Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
* Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## Create a Free Auth0 Account

1. Go to [Auth0](https://auth0.com) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.