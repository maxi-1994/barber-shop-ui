import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() public isAdmin: boolean = false;
  public title: string = '';

  constructor() { }

  ngOnInit(): void {
    this.title = this.isAdmin ? 'Barber Shop Admin' : 'Barber Shop App';
  }

}
