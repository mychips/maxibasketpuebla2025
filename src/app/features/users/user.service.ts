import { inject, Injectable } from "@angular/core";
import { addDoc, collection, collectionData, deleteDoc, doc, DocumentData, DocumentReference, Firestore, getDoc, orderBy, query, updateDoc } from "@angular/fire/firestore";
import { APP_CONSTANTS } from "@shared/constants";
import { Observable } from "rxjs";
import { User } from "@features/users/user.interfaces";
import { FileImage } from "@shared/interfaces/file-image.interfaces";

@Injectable({ 
    providedIn: 'root'
})

export class UserService {
    private FILE_IMG = 'img';
    private readonly _firestore = inject(Firestore);
    private readonly _userCollection = collection(this._firestore, APP_CONSTANTS.COLLECTION_NAME );
    private readonly _imgCollection = collection(this._firestore, 'imgs');

    newUser(user:Partial<User>): Promise<DocumentReference<DocumentData, DocumentData>> {
        return addDoc(this._userCollection, {
            created: Date.now(),
            updated: Date.now(),
            ...user,
        })
    }

    getAllUsers():Observable<User[]> {
        const queryFn = query(this._userCollection, orderBy('created', 'desc'));
        return collectionData(queryFn, {idField: 'id'}) as Observable<User[]>
    }

    async getUserById(id:string): Promise<User> {
        const docRef = this._getDocRef(id);
        const documentData = await getDoc(docRef);
        return documentData.data() as User;
    }

    updateUser(id:string, user: User): void {
        const docRef = this._getDocRef(id);
        updateDoc(docRef, {...user});
    }

    deleteUser(id:string): void{
        const docRef = this._getDocRef(id);
        deleteDoc(docRef);
    }


    private _getDocRef(id:string) {
        return doc(this._firestore, APP_CONSTANTS.COLLECTION_NAME, id);
    }

    private saveimage(img: FileImage) {
        return addDoc( this._imgCollection, img );
    }

    loadimgs( imgs: FileImage[] ) {
        console.log(imgs);
    }
}