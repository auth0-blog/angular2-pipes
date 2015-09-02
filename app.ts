/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, Pipe, bind} from 'angular2/angular2';

// We use the @Pipe decorator to register the name of the pipe
@Pipe({
  name: 'tempConvert'
})
// The work of the pipe is handled in the tranform method with our pipe's class
class TempConvertPipe {
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
  selector: 'pipes',
  changeDetection: 'ON_PUSH'
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
    var result;
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