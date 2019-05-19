import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { AuthServices } from '../../auth/auth.service';
import { HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false;
  constructor(private dataService: DataStorageService, private authservice: AuthServices ) {
  }

  ngOnInit() {
  this.isAuthenticated = this.authservice.isAuthenticated();
    console.log(this.authservice.isAuthenticated());
  }
  saveData() {
    // call service
    this.dataService.saveRecipe().subscribe(
      (response) => console.log(response)
    );
  }
  getRecipe() {
    // Get recipe from the backend
    this.dataService.getRecipe();
  }
}
