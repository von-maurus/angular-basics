import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Base Component';
  name = "Mauricio";
  age = 28;
  imgURL: string = "https://fastly.picsum.photos/id/237/500/500.jpg?hmac=idOEkrJhLd7nEU5pNrAGCyJ6HHJdR_sit1qDt5J3Wo0";
  counter = 0;


  getName() {
    return this.name.toUpperCase();
  }

  incrementCounter() {
    this.counter += 1;
    // throw new Error('Method not implemented.');
  }

  changeImage(event: KeyboardEvent) {
    // change image
    this.imgURL = (event.target as HTMLInputElement).value;
  }

  logImg(event: string) {
    console.debug(event);
  }
}
