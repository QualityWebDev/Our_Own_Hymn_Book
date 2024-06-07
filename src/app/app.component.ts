import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, UpperCasePipe, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Our Own Hymn Book';
  displaytitle = 'Our Own Hymn Book';

  hideElement(id: string){
    const element = document.getElementById(id);
    if(element){
      element.style.display = 'none';
    } else{
      console.error(`Element is null.`);
    }
  }
  showElement(id: string){
    const element = document.getElementById(id);
    if(element){
      element.style.display = 'grid';
      } else{
        console.error(`Element is null.`)
      }
  }
  iconRotateCheck(iconId: string, id: string){
    const element = document.getElementById(id);
    if(element?.style.display === 'none'){
      this.addRotate(iconId);
    } else{
      this.removeRotate(iconId);
    }
  }
  addRotate(iconId: string){
    const icon = document.getElementById(iconId);
    if(icon){
      icon.style.transform = 'rotate(180deg)';
    }
    else{
      console.error(`Your element id ${iconId} seems to be null.`)
    }
  }
  removeRotate(iconId: string){
    const icon = document.getElementById(iconId);
    if(icon){
      icon.style.transform = 'rotate(0deg)';
    } else{
      console.error(`Your element id ${iconId} seems to be null.`);
    }
  }
  toggleElementDisplay(id: string){
    const element = document.getElementById(id);
    if(element){
      if(element?.style.display === 'none'){
      this.showElement(id);
      } else{
        this.hideElement(id);
      }
    }  else{
        console.error(`Element is null.`);
      }
  } 
  handleMenuCollapseClick(Elementid: string, iconId: string){
    this.toggleElementDisplay(Elementid);
    this.iconRotateCheck(iconId, Elementid);
  }
}