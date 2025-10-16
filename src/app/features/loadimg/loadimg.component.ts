import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';

const MATERIAL_MODULES = [MatCardModule, MatButtonModule, MatProgressBarModule]

@Component({
  selector: 'app-loadimg',
  standalone: true,
  imports: [ ],
  templateUrl: './loadimg.component.html',
  styleUrls: ['./loadimg.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class LoadimgComponent implements OnInit{
  
  constructor() {

  }
   
  ngOnInit(): void {

  }

  // files: FileImage[] = [];
  // constructor( public _loadimg: LoadFilesBDService ){
  //} 

  // loadimg() {
    //this._loadimg.loadimgsBD( this.files );
  // }
}
