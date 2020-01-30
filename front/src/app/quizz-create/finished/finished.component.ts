import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {faSmileWink} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-finished',
  templateUrl: './finished.component.html',
  styleUrls: ['./finished.component.scss']
})
export class FinishedComponent implements OnInit {

  faCoffee = faCoffee;

  faSmileWink = faSmileWink;

  constructor() { }

  ngOnInit() {
  }

}
