import { Component, OnInit } from '@angular/core';
import { IisDirty } from 'src/app/shared/guards/test.guard';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, IisDirty {

  constructor() { }

  ngOnInit(): void {
  }

  isDirty() {
    return confirm("Voulez-vous vraiment quitter la page ?");
  }

}
