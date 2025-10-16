import { Timestamp } from "@angular/fire/firestore";

export type ColumnKeys<T> = Array<keyof T>;

export interface User {
 id:            string;
 name:          string;
 phone:         number;
 email:         string;
 teamName:      string;
 categoria:     string;
 rama:          string;
 estadoProced:  string;
 action:        string;
 created:       Timestamp;
 updated:       Timestamp;
}