import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HymnsService } from '../../services/hymns.service';
import { HymnsModel } from '../../models/hymns.model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-hymn',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './add-hymn.component.html',
  styleUrl: './add-hymn.component.css'
})
export class AddHymnComponent {
  hymn: HymnsModel = {id: NaN, title: '', author: '', description: '', content: ''};

  constructor(private hymnService: HymnsService){}

  addHymn(): void{
    this.hymnService.addHymn(this.hymn).subscribe(() => {
      console.log('Hymn added successfully');
    })
  }
}
