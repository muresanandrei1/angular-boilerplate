import { Component } from "@angular/core";
import { NgRedux, select, DevToolsExtension } from "@angular-redux/store";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "angular-test";
    
  constructor(){}
}
