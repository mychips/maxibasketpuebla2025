import { Timestamp } from "firebase/firestore"

export type ColumnKeys<T> = Array<keyof T>;

export interface Referee {
    id:         string;
    refname:    string;
    fnac:       Date;
    lnac:       string;
    estProced:  string;
    refphone:   number;
    refemail:   string;
    eventos:    string;
    comision:   string;
    img:        string;
    action:     string;
    created:    Timestamp;
    updated:    Timestamp;

}
