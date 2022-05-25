import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { Subscription } from 'rxjs';
import 'rxjs-compat/operators/timestamp';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit , OnDestroy{
  exercises?: Exercise[];
  excerciseSubscription?:Subscription;

  constructor(private trainingService: TrainingService) { }


  ngOnInit() {
    this.trainingService.exercisesChanged.subscribe(exercises=> this.exercises= exercises);
    this.trainingService.fetchAvailableExercises();

  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }

  ngOnDestroy(): void {
   this.excerciseSubscription?.unsubscribe();
  }

}


