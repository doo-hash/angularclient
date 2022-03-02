import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user : User;
  constructor(private route : ActivatedRoute,
    private router : Router,
    private userservice: UserServiceService) { 
      this.user = new User();
    }

  onSubmit(){
    this.userservice.save(this.user).subscribe(result => {
      this.gotoUserList()
    });
  }
  gotoUserList(){
    this.router.navigate(['/users']);
  }
  ngOnInit() {
  }

}
