export class FileImage {
    fileimg:    File;
    nameFile:   string;
    url:        string;
    uploading:  boolean;
    progress:   number;

    constructor( file: File ) {
        this.fileimg    = file;
        this.nameFile   = file.name;
        this.uploading  = false;
        this.progress   = 0;
    }
}