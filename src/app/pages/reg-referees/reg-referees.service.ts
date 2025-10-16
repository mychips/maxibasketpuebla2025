import { inject, Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { APP_CONSTANTS2 } from '@shared/constants';
import { Referee } from '@shared/interfaces/referee.interfaces';
import { addDoc, collection, deleteDoc, doc, DocumentData, DocumentReference, getDoc, orderBy, query, updateDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'         
})
export class RegRefereesService {
  private readonly _firestore = inject(Firestore);
  private readonly _refCollection = collection(this._firestore, APP_CONSTANTS2.COLLECTION_NAME2);

  newReferee(referee: Partial<Referee>): Promise<DocumentReference<DocumentData, DocumentData>> {
    return addDoc(this._refCollection, {
      created: Date.now(),
      updated: Date.now(),
      ...referee,
    });    
  }

  getAllReferees(): Observable<Referee[]> {
    const queryFn = query(this._refCollection, orderBy('created', 'desc'));
    return collectionData(queryFn, { idField: 'id' }) as Observable<Referee[]>;
  }

  async getRefereeById(id: string): Promise<Referee> {
    const docRef = this._getDocRef(id);
    const documentData = await getDoc(docRef);
    return documentData.data() as Referee;
  }

  updateReferee(id: string, referee: Referee): void {
    const docRef = this._getDocRef(id);
    updateDoc(docRef, { ...referee });
  }

  deleteReferee(id: string): void {
    const docRef = this._getDocRef(id);
    deleteDoc(docRef);
  }

  private _getDocRef(id:string) {
          return doc(this._firestore, APP_CONSTANTS2.COLLECTION_NAME2, id);
      }
}