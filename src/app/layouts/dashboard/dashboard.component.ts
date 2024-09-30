import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{


  title: string = '';
  body: string = '';
  posts:posts[] = [];
  addLoader:boolean = false;
  constructor(private authService: AuthService){
  }

ngOnInit(): void {
    this.getallPost();
}

getallPost(){
  this.authService.getPost().subscribe((res) => {
    this.posts = res.posts.map((post:posts) => {
      return {...post, flag : false}

    })
  })
}

addPost(){
  if(this.title && this.body){
    this.addLoader = true;
    let body = {
      title : this.title,
      body: this.body,
      userId : 1
    }
    this.authService.addPost(body).subscribe((res) => {
       this.posts.push( res)
       this.title = '';
       this.body = '';
       this.addLoader = false;
    })
  }else{
    alert("Please fill title and body")
  }
}

deletePost(post:any){
  post.flag = true;
  this.authService.deletePost(post.id).subscribe((res) => {
    post.flag = false;
    this.posts = this.posts.filter(post => post.id !== res.id);
  })
}

}

export interface posts {
  title:string;
  body:string;
  flag:boolean;
  id:number
}
