import { Component } from '@angular/core';
import { AdalService } from 'adal-angular4';
import { environment } from '../environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private adal: AdalService) {
    this.adal.init(environment.adal_config);
    this.adal.handleWindowCallback();
  }
  
}
