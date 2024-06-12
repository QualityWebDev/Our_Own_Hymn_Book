import { Component, OnInit } from '@angular/core';
import { HymnsModel } from '../models/hymns.model';
import { HymnsService } from '../services/hymns.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  hymns: HymnsModel[] = [];

  constructor(private _hymnsService: HymnsService){}

  ngOnInit(): void {
    this._hymnsService.getAllHymns().subscribe( hymns => {
      this.hymns = hymns;
    })
  }
}
