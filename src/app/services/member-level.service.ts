import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MemberLevelService {

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<MemberLevel[]>(`${environment.api_url}/member-level/list`);
  }

  find(levelUid: number) {
    return this.http.get<MemberLevel>(`${environment.api_url}/member-level/${levelUid}`);
  }

  save(ml: MemberLevel) {
    if (ml.levelUid == null) {
      return this.http.post<MemberLevel>(`${environment.api_url}/member-level`, ml);
    } else {
      return this.http.put<MemberLevel>(`${environment.api_url}/member-level`, ml);
    }
  }
}

export interface MemberLevel {
  levelUid: number;
  levelId: string;
  name: string;
  default: boolean;
}
