import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarDashboardService {
  visible: boolean;
  constructor() { this.visible = false; }
  hide_dash() { this.visible = false; }

  show() { this.visible = true; }

  toggle_dash() { this.visible = !this.visible; }
}
