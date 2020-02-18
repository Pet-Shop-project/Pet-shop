import { Component, OnInit } from '@angular/core';
import {NavbarService} from '../../services/navbar.service'

@Component({
  selector: 'app-dashboard-design',
  templateUrl: './dashboard-design.component.html',
  styleUrls: ['./dashboard-design.component.css']
})
export class DashboardDesignComponent implements OnInit {

  constructor(public nav: NavbarService ) { }

  ngOnInit() {
  this.nav.hide()
}}
