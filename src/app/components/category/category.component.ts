import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  titleAction: string = "Agregar categoria";
  categoryForm!: FormGroup;
  submitted = false;
  optionBtn: string = "Guardar";

  constructor(private fb: FormBuilder, private sCategory: CategoryService) { }

  ngOnInit(): void {
    this.createForm();
    this.getAllCategory();
  }

  createForm() {
    this.categoryForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      photo: [null],
    });
  }

  get f() { return this.categoryForm.controls; }

  getAllCategory(){

  }
  addCategory(){

  }

}
