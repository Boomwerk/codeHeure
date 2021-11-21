import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private open = false;

  @ViewChild('link') link: any;
  
  constructor() { }

  ngOnInit(): void {
  }

  menu(){
    if(!this.open){
      console.log("sa marche !");
      this.link.nativeElement.style.top = "14vh";
      this.open = true
    }
    else{
      this.link.nativeElement.style.top = "-100vh";
      this.open = false;
    }
  }

}
