import { Component, OnInit } from '@angular/core';
import { faHome, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title: string = 'Mängelmelder.de';
  public faHome = faHome;
  public faStar = faStar;

  constructor() { }

  ngOnInit(): void {
  }

}
