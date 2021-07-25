import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private readonly platform: Platform) {}

  title = 'runtime-landing2';

  ngOnInit(): void {
    this.platform.ready().then(() => {
      console.log(this.platform.platforms());
    });
  }
}
