import { Component, OnInit } from '@angular/core';
import { AdalService } from 'adal-angular4';

@Component({
  selector: 'app-area-logada',
  templateUrl: './area-logada.component.html',
  styleUrls: ['./area-logada.component.scss']
})
export class AreaLogadaComponent implements OnInit {

  constructor(
    private adalService: AdalService
  ) { }

  ngOnInit() {
  }

  logout(){
    this.adalService.logOut();
  }
}
