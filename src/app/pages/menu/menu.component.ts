import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {tryUnwrapForwardRef} from "@angular/compiler-cli/src/ngtsc/annotations/common";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit{

  @Input() currentPage: string = '';
  @Output() selectedPage: EventEmitter<string> = new EventEmitter<string>();
  @Output() onCloseSidenav : EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() loggedInUser?: firebase.default.User | null;
  @Output() onLogOut: EventEmitter<boolean> = new EventEmitter();

  ngAfterViewInit() {
  }

  ngOnInit() {
  }

  close(logout?: boolean){
    if(logout === true){
      this.onLogOut.emit(logout);
    }
    this.onCloseSidenav.emit(true);
  }

}
