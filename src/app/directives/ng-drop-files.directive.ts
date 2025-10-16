import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { FileImage } from '@shared/interfaces/file-image.interfaces';

@Directive({
  selector: '[appNgDropFiles]',
  standalone: true,
})
export class NgDropFilesDirective {

  @Input() files: FileImage[] = [];
  @Output() mouseOn: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  @HostListener('dragover', ['$event'] )
  public onDragEnter( event: any ) {
    this.mouseOn.emit( true );
    this._preventStop( event );
  }

  @HostListener('dragleave', ['$event'] )
  public onDragLeave( event: any ) {
    this.mouseOn.emit( false );
  }

   @HostListener('drop', ['$event'] )
  public onDrop( event: any ) {
    this.mouseOn.emit( false );

    const transferencia = this._getTransfer( event );

    if ( !transferencia ) {
      return;
    }

    this._extractFiles( transferencia.files );

    this._preventStop( event );
    this.mouseOn.emit( false );
  }

  private _getTransfer( event: any ) {
    return event.dataTransfer ? event.dataTransfer : event.orginalEvent.dataTransfer
  }

  private _extractFiles( filesList: FileList ) {
    console.log(filesList);
  }
  // Validaciones

  private _fileReadytoUp( file: File ): boolean {
    if ( !this._fileDropped( file.name ) && this._esImg( file.type )) {
      return true;
    } else {
      return false;
    }
  }

  private _preventStop( event ) {
    event.preventDefault();
    event.stopPropagation();
  }

  private _fileDropped( nameFile: string): boolean {
    for ( const file of this.files ) {
      if ( file.nameFile == nameFile ) {
        console.log('El archivo ' + nameFile + 'ya esta agregado');
        return true;
      }
    }
    return false;
  }

  private _esImg( fileType: string ): boolean {
    return ( fileType === '' || fileType === undefined ) ? false : fileType.startsWith('image');
  }
}
