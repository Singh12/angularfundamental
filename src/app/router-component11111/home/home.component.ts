import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
  }
  addServer() {
    this.router.navigate(['/servers'], {relativeTo: this.route, queryParams: {'all': 'nn'}, fragment: 'loading'});
  }
  login() {
    this.authService.login();
  }
  logout() {
    this.authService.logout();
  }
}
