import { FileImage } from '@shared/interfaces/file-image.interfaces';
import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { RegRefereesService } from './reg-referees.service';
import { CommonModule } from '@angular/common';
import { APP_CONSTANTS2 } from '@shared/constants';
import Swal from 'sweetalert2'
import { getDownloadURL, ref, Storage, uploadBytesResumable } from '@angular/fire/storage';
import { Observable, of } from 'rxjs';
import { DragDropModule} from '@angular/cdk/drag-drop';


const MATERIAL_MODULES = [MatFormFieldModule, MatDialogModule,
                          MatButtonModule, MatInputModule,
                          MatSelectModule];

@Component({
  selector: 'app-reg-referees',
  standalone: true,
  imports: [MATERIAL_MODULES, ReactiveFormsModule, RouterModule, CommonModule, 
            MatButtonModule, RouterModule, DragDropModule],
  templateUrl: './reg-referees.component.html',
  styleUrl: './reg-referees.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class RegRefereesComponent implements OnInit{
  refereeForm!: FormGroup;
  uploadProgress$!: Observable<number>;
  downloadURL$!: Observable<string>;

  isOnDropBox = true;
  files: FileImage[] = [];
  
  imgUrl: string = '../../../assets/images/drop-images.png'

  private readonly _fb                  = inject(FormBuilder);
  private readonly _refSvc              = inject(RegRefereesService);
  private storage: Storage              = inject(Storage);
  
  
  estados = [
    { value: 'Aguascalientes',      viewValue: 'Aguascalientes'       },
    { value: 'Baja California',     viewValue: 'Baja California'      },
    { value: 'Baja California Sur', viewValue: 'Baja California Sur'  },
    { value: 'Campeche',            viewValue: 'Campeche'             }, 
    { value: 'Chiapas',             viewValue: 'Chiapas'              },    
    { value: 'Chihuahua',           viewValue: 'Chihuahua'            },
    { value: 'Ciudad de México',    viewValue: 'Ciudad de México'     },
    { value: 'Coahuila',            viewValue: 'Coahuila'             },  
    { value: 'Colima',              viewValue: 'Colima'               },
    { value: 'Durango',             viewValue: 'Durango'              },    
    { value: 'Estado de México',    viewValue: 'Estado de México'     },
    { value: 'Guanajuato',          viewValue: 'Guanajuato'           },   
    { value: 'Guerrero',            viewValue: 'Guerrero'             },
    { value: 'Hidalgo',             viewValue: 'Hidalgo'              },    
    { value: 'Jalisco',             viewValue: 'Jalisco'              }, 
    { value: 'Michoacán',           viewValue: 'Michoacán'            },
    { value: 'Morelos',             viewValue: 'Morelos'              },
    { value: 'Nayarit',             viewValue: 'Nayarit'              },
    { value: 'Nuevo León',          viewValue: 'Nuevo León'           },
    { value: 'Oaxaca',              viewValue: 'Oaxaca'               },
    { value: 'Puebla',              viewValue: 'Puebla'               },  
    { value: 'Querétaro',           viewValue: 'Querétaro'            },
    { value: 'Quintana Roo',        viewValue: 'Quintana Roo'         },
    { value: 'San Luis Potosí',     viewValue: 'San Luis Potosí'      },
    { value: 'Sinaloa',             viewValue: 'Sinaloa'              },
    { value: 'Sonora',              viewValue: 'Sonora'               },
    { value: 'Tabasco',             viewValue: 'Tabasco'              },
    { value: 'Tamaulipas',          viewValue: 'Tamaulipas'           },
    { value: 'Tlaxcala',            viewValue: 'Tlaxcala'             },
    { value: 'Veracruz',            viewValue: 'Veracruz'             },  
    { value: 'Yucatán',             viewValue: 'Yucatán'              },
    { value: 'Zacatecas',           viewValue: 'Zacatecas'            },  
  ];

  onFileSelected(event: any){
    const imgtoLoad : File = event.target.files[0];
    this.uploadFile(imgtoLoad);
  }

  async uploadFile( file:File ){
    const filePath = `imgFiles/${file.name}`;
    const fileRef = ref(this.storage, filePath);
    const uploadFile = uploadBytesResumable(fileRef, file);

    if ( file.name === '*.png' || file.name === '*.jpg' || file.name === '*.gif') {
        console.log('Solo se aceptan archivos ');
    }  

    uploadFile.on('state_changed',
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      this.uploadProgress$ = of(progress);

      // const uploadTask: firebase.storage.UploadTask =
      //  storageRef
    },
    (error) => {
      console.error('Error al cargar el archivo:', error);
    },
    async () => {
      console.log("el archivo se subio exitosamente!");
      const url = await getDownloadURL(fileRef);
      this.imgUrl = url;
    })
  }

  ngOnInit(): void {
    this._buildForm();
  }


  onRefereeSubmit() {
    let message = APP_CONSTANTS2.MESSAGES.REFEREE_UPDATED;
    const referee = this.refereeForm.value;

    Swal.fire({
      title: "Los datos se guardaron exitosamente",
      confirmButtonText: "Ok",
      cancelButtonText: "cancelar"
    }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      this._refSvc.newReferee(referee);
      Swal.fire("El Oficial se ha guardado exitosamente", "", "success");
      this.refereeForm.reset();
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
    });
    message = APP_CONSTANTS2.MESSAGES.REFEREE_ADDED;
  }


  private _buildForm(): void {
    this.refereeForm = this._fb.nonNullable.group({
    refname:    ['', [Validators.required, Validators.minLength(3), Validators.max(30)]],
    fnac:       ['', Validators.required],
    lnac:       ['', Validators.required],
    estProced:  ['', Validators.required],
    refphone:   ['', [Validators.required, Validators.maxLength(10)]],
    refemail:   ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    eventos:    ['', Validators.required],
    comision:   ['', [Validators.required, Validators.max(15)]],
    img:        [this.imgUrl]
    });
  }

  private getFiles( filesList: FileList ) {
    for ( const prop in Object.getOwnPropertyNames( filesList )) {
      const tempFile = filesList[prop];
      const newFile = new FileImage( tempFile );
      this.files.push( newFile );
    }
  }
}
