import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Trainings } from '../models/trainings.model';
import { TrainingsService } from './trainings.service';

@Component({
  selector: 'app-viewtrainingsmentors',
  templateUrl: './viewtrainingsusers.component.html',
  styles: []
})
export class ViewTrainingsUsersComponent implements OnInit {

  trainings: Trainings[];

  constructor(private router: Router, private trainingsService: TrainingsService) {

  }

  ngOnInit() {
    this.trainingsService.getUsers()
      .subscribe( data => {
        this.trainings = data;
      });
  };

  deleteUser(user: Trainings): void {
    this.trainingsService.deleteUser(user)
      .subscribe( data => {
        this.trainings = this.trainings.filter(u => u !== user);
      })
  };

}


