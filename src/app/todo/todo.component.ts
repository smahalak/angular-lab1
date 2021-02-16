import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ToDo } from '../interfaces/todo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todolist: ToDo[] = [
    {
      task: 'Laundry',
      completed: true,
    },
    {
      task: 'Grocery shopping',
      completed: true,
    },
    {
      task: 'Walk dog',
      completed: true,
    },
    {
      task: 'Do taxes',
      completed: false,
    },
    {
      task: 'Master Angular',
      completed: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  completedTask = (task: ToDo): void => {
    task.completed = !task.completed;
  };

  removeTask = (index: number): void => {
    this.todolist.splice(index, 1);
  };

addTask = (form: NgForm): void => {
console.log(form);

  let newToDo: ToDo = {
    task: form.form.value.newTask,
    completed: form.form.value.completed === 'yes',
  }
  this.todolist.push(newToDo)
}

}
