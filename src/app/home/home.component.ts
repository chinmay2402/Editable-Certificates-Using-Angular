import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

declare var bootstrap: any; // Ensure Bootstrap is recognized

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    this.initializeDropdowns();
  }

  initializeDropdowns() {
    setTimeout(() => {
      const dropdownElementList = document.querySelectorAll('.dropdown-toggle');
      dropdownElementList.forEach((dropdownToggleEl) => {
        new bootstrap.Dropdown(dropdownToggleEl);
      });
    });
  }
}
