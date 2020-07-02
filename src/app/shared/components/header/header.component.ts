import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // Instantiate EventEmitter object to be used as property of <app-header>
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {}

  toggleSideBar() {
    // emit events to trigger sideBarToggler() function in default.component.ts
    this.toggleSideBarForMe.emit();
    // triggers the window.resize so that elements will resize when toggling sidebar
    setTimeout(()=> {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
