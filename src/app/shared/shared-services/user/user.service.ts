import { Injectable } from '@angular/core';
import { Role } from '../admin/admin.service';

@Injectable()
export class UserService {

  constructor() { }

}

// export interface User {
//   _id: {
//     "$oid": string
//   },
//   username: string,
//   firstname: string,
//   email: string,
//   lastname: string,
//   role: Role,
//   processes: Array<number>,
//   first_login: boolean,
//   session_user: string
// }

export interface SaveUser {
  username: string,
  firstname: string,
  lastname: string,
  email: string,
  role: string,
  processes?: Array<number>
}

export interface SAMLUser {
  username?: string,
  firstname: string,
  lastname: string,
  email: string,
  client:string,
  groups: Array<string>  
}