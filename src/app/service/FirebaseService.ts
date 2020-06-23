import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFirestore) {}

  // loadCollection(collection: string, entity: any): any {
  //   const Db = this.db.collection(collection).snapshotChanges().subscribe(docs => {
  //     const list = docs.map(a => {
  //       const data = a.payload.doc.data() as typeof(entity);
  //       const id = a.payload.doc.id;
  //       return {id, ...data};
  //     });
  //   });
  // }


}
