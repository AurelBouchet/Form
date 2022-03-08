import { Component} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
// import { FormBuilder } from '@angular/forms';
// import { FormArray } from '@angular/forms';
@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent {
title ="Mon Formulaire";
loginForm = new FormGroup({
  user : new FormControl(''),
  password : new FormControl(''),
})

loginUser(){
  console.log(this.loginForm)
}
}
