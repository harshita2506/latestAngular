import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';
  constructor() { }
  ngOnInit() {
  }
  onNavigation(feature: string) {
    this.loadedFeature = feature;
  }

}
