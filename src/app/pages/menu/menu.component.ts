import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit{

  @Input() currentPage: string = '';
  @Output() selectedPage: EventEmitter<string> = new EventEmitter<string>();
  @Output() onCloseSidenav : EventEmitter<boolean> = new EventEmitter<boolean>();

  ngAfterViewInit() {
  }

  ngOnInit() {
  }

  close(){
    this.onCloseSidenav.emit(true);
  }

}
