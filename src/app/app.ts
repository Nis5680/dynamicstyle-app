import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  bgcolor="blue";
  fontsize="50px";
  headingSizeBig="80px";
  headingSizeSmall="30px";

  zoom=true;

  updateSize(){
    this.zoom = !this.zoom;
  }
}
