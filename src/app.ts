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
  template: `
    <h1>Dates</h1>
    <!-- Sep 1, 2015 -->
    <p>{{ date | date:'mediumDate' }}
    <!-- September 1, 2015 -->
    <p>{{ date | date:'yMMMMd' }}
    <!-- 3:50 pm -->
    <p>{{ date | date:'shortTime' }}

    <h1>Decimals/Percentages</h1>
    <!-- 99.00% -->
    <p>{{ grade | percent:'.2' }}</p>
    <!-- 09.12 -->
    <p>{{ rating | number:'2.1-2' }}</p>

    <h1>Async</h1>
    <p>{{ promise | async }}</p>

    <h1>Custom Pipes - Convert Temperature</h1>
    <!-- 85 F -->
    <h3>Fahrenheit: {{ temperature + ' F' }}</h3>
    <!-- 29.4 C -->
    <h3>Celsius: {{ temperature | tempConvert:'celsius':1 }}</h3>
  `,
  // We can pass the pipe class name into the pipes key to make it usable in our views
  pipes: [TempConvertPipe]
})

class PipesAppComponent {
  date: Date;
  rating: number;
  grade: number;
  temperature: number;
  promise: Promise<string>;

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