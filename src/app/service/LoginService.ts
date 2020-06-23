import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from '../model/User';
import {FirebaseService} from './FirebaseService';
import {AngularFirestore} from '@angular/fire/firestore';
import {Channel} from '../model/Channel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  currentUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  usersDb;

  constructor(private router: Router, private db: AngularFirestore) {
    this.getUsers();
  }

  public isLogin() {
    return this.currentUser.getValue() != null;
  }

  public authentication(formGroup: FormGroup) {
    const email = formGroup.get('email').value;
    const password = formGroup.get('password').value;
    if (this.users.getValue().find(u => u.email === email && u.password === password)) {
      this.currentUser.next(this.users.getValue().find(u => u.email === email && u.password === password));
      this.router.navigate(['']);
    }
  }

  public disconnectUser() {
    this.currentUser.next(null);
    console.log('disconnect');
    this.router.navigate(['/login']);
  }

  public getUsers(): User[] {
    this.usersDb = this.db.collection('users').snapshotChanges().subscribe(docs => {
      const list = docs.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
      this.users.next(list);
    });
    return this.users.getValue();
  }
}
