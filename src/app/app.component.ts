import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  blogForm: FormGroup;
  blogs: Array<any> = [];

  constructor(private formBuilder: FormBuilder) {
   this.blogs = [{title: 'A Boring Day :(', body: 'ample ten ought hence. ers. Total great saw water had mi'}];
   this.blogs.push({title: 'Sad!!', body: 'it was reall ckjsb  kjzxn l l;zcnx ol noldsbnczxl  jkldsbczio kljndlzb   l;sdnc lx .'});
   this.blogs.push({title: 'Happy Life :)!!', body: 'Carried nothing on am warrant towards. Polite in of in oh '});
   this.createBlogForm();
  }

  createBlogForm() {
    this.blogForm = this.formBuilder.group({
      title: [''],
      body: ['']
    });
  }

  submit() {
    this.blogs.push({title: this.blogForm.value.title, body: this.blogForm.value.body});
    this.blogForm.reset();

  }

}
