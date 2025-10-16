import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ModalService } from '@components/modal/modal.service';
import { SnackBarService } from '@shared/snack-bar.service';
import { UserService } from '@features/users/user.service';
import { APP_CONSTANTS } from '@shared/constants';

const MATERIAL_MODULES = [MatLabel, MatFormFieldModule, MatInput,
                          MatDialogModule, MatButtonModule, MatInputModule,
                          MatSelectModule]
@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule, MATERIAL_MODULES],
  templateUrl: './modal.component.html' ,
  styleUrl: './modal.component.scss',
})
export class ModalComponent implements OnInit{
  userForm!: FormGroup;

  private readonly _fb        = inject(FormBuilder);
  private readonly _matDialog = inject(MAT_DIALOG_DATA);
  private readonly _userSvc   = inject(UserService);
  private readonly _modalSvc  = inject(ModalService);
  private readonly _snackBar  = inject(SnackBarService);
  
  categorias = [     
      { value: '34+', viewValue: '34+' },
      { value: '39+', viewValue: '39+' },      
      { value: '44+', viewValue: '44+' },
      { value: '49+', viewValue: '49+' },
      { value: '54+', viewValue: '54+' },
      { value: '59+', viewValue: '59+' },
      { value: '64+', viewValue: '64+' },
      { value: '69+', viewValue: '69+' },
      { value: '74+', viewValue: '74+' },
      { value: '79+', viewValue: '79+' },
  ];

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
    { value:  'Sinaloa',            viewValue: 'Sinaloa'              },
    { value:  'Sonora',             viewValue: 'Sonora'               },  
    { value:  'Tabasco',            viewValue: 'Tabasco'              },
    { value:  'Tamaulipas',         viewValue: 'Tamaulipas'           },
    { value:  'Tlaxcala',           viewValue: 'Tlaxcala'             },
    { value:  'Veracruz',           viewValue: 'Veracruz'             },  
    { value:  'Yucatán',            viewValue: 'Yucatán'              },
    { value:  'Zacatecas',          viewValue: 'Zacatecas'            },  
  ];

  ngOnInit(): void {
    this._buildForm();
    this.userForm.patchValue(this._matDialog.data);
    }

  get nameNoValid() {
    return this.userForm.get('name').invalid && this.userForm.get('name').touched;
  }

  get phoneNoValid() {
    return this.userForm.get('phone').invalid && this.userForm.get('phone').touched;
  }

  get emailNoValid() {
    return this.userForm.get('email').invalid && this.userForm.get('email').touched;
  }

  get teamNoValid() {
    return this.userForm.get('teamName').invalid && this.userForm.get('teamName').touched;
  }

  get catNoValid() {
    return this.userForm.get('categorias').invalid && this.userForm.get('categorias').touched;
  }

  get ramaNoValid() {
    return this.userForm.get('rama').invalid && this.userForm.get('rama').touched;
  }

  get stateNoValid() {
    return this.userForm.get('estadoProced').invalid && this.userForm.get('estadoProced').touched;
  }

  get imgNoValid() {
    return this.userForm.get('img').invalid && this.userForm.get('img').touched;
  }

  async onSubmit() {
    let message = APP_CONSTANTS.MESSAGES.USER_UPDATED;
    const user = this.userForm.value;
 
    if (this._matDialog.data) {
      this._userSvc.updateUser(this._matDialog.data.id, user);
    } else {
      await this._userSvc.newUser(user);
      message = APP_CONSTANTS.MESSAGES.USER_ADDED;
    }
    this._snackBar.showSnackBar(message);
    this._modalSvc.closeModal();
  }

  getTitle(): string {
    return this._matDialog.data ? 'Editar Usuario' : 'Agregar Usuario';
  }
  
  private _buildForm(): void {
    this.userForm = this._fb.nonNullable.group({
      name:         ['', [Validators.required, Validators.minLength(10)]],
      phone:        ['', [Validators.required, Validators.maxLength(10)]],
      email:        ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      teamName:     ['', [Validators.required, Validators.maxLength(18)]],
      categorias:   ['', Validators.required],
      rama:         ['', Validators.required],
      estadoProced: ['', Validators.required],
    });
  }
}
