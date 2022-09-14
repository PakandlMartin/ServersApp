import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: "./servers.component.html",
  styleUrls: ['./servers.component.css'],
})

export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = "";
  serverCreated = false;
  servers = ["Testserver", "Testserver2"];
  displayDetails = false;
  cliks = [];
  clickNum = 0;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus = "Server war created! Name is" + this.serverName
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  onDisplayDetails() {
    this.displayDetails = !this.displayDetails
    this.clickNum++
    this.cliks.push(this.clickNum)
  }

  getDisplayColor() {
    return this.clickNum >= 5 ? "blue" : "none";
  }
}
