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
  	this.blogs=[{'title':'A Boring Day :(','body':'By in no ecstatic wondered disposal my speaking. Direct wholly valley or uneasy it at really. Sir wish like said dull and need make. Sportsman one bed departure rapturous situation disposing his. Off say yet ample ten ought hence. Depending in newspaper an september do existence strangers. Total great saw water had mirth happy new. Projecting pianoforte no of partiality is on. Nay besides joy society him totally six. '},{'title':'Happy Life :)!!','body':'Carried nothing on am warrant towards. Polite in of in oh needed itself silent course. Assistance travelling so especially do prosperous appearance mr no celebrated. Wanted easily in my called formed suffer. Songs hoped sense as taken ye mirth at. Believe fat how six drawing pursuit minutes far. Same do seen head am part it dear open to. Whatever may scarcely judgment had. '},{'title':'Sad!!','body':'it was reall ckjsb  kjzxn l l;zcnx ol noldsbnczxl  jkldsbczio kljndlzb   l;sdnc lx .'}];
  }

  ngOnInit() {
    this.createBlogForm();
  }

  createBlogForm() {
    this.blogForm = this.formBuilder.group({
      'title': [''],
      'body': ['']
    });
  }

  submit() {
    this.blogs.push({'title':this.blogForm.value.title,'body':this.blogForm.value.body});
    this.blogForm.reset();

  }

}
