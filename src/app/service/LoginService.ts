import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from '../model/User';
import {FirebaseService} from './FirebaseService';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  currentUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  users: User[] = [];

  constructor(private router: Router, private firebaseService: FirebaseService) {
    this.users.push({id: 1, email: 'test@gmail.com', password: '12345', firstname: 'Alexandre', lastname: 'Gublin', image: ''});
  }

  public isLogin() {
    return this.currentUser.getValue() != null;
  }

  public authentication(formGroup: FormGroup) {
    const user = {id: 1, email: formGroup.get('email').value, password: formGroup.get('password').value, firstname: 'Alexandre', lastname: 'Gublin', image: 'https://randomuser.me/api/portraits/med/men/75.jpg'};

    for (let i = 0; i < this.users.length; i++) {
      console.log(user.email + ' | ' + (this.users[i].email + ' && ' + user.password + ' | ' + this.users[i].password));
      if (this.users[i].email === user.email && this.users[i].password === user.password) {
        console.log('connected');
        this.currentUser.next(user);
        this.router.navigate(['']);
      }
    }
  }

  public disconnectUser() {
    this.currentUser.next(null);
    console.log('disconnect');
    console.log(this.currentUser.getValue());
    this.router.navigate(['/login']);
  }
}
