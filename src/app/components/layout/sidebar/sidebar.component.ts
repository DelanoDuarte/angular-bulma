import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  home: any = { path: "/", text: "Home", icon: "fa fa-home", active: window.location.pathname === "/", render: true }

  modules: any[] = [
    { path: "document", text: "Document", icon: "fa fa-file", active: window.location.pathname === "/document", render: true }
  ]

  administration: any[] = [
    { path: "employee", text: "Employee", icon: "fa fa-user", active: window.location.pathname === "/employee", render: true },
    { path: "document-type", text: "Document Type", icon: "fa fa-folder-open", active: window.location.pathname === "/document-type", render: true },
  ]

  ngOnInit() {
  }

}
