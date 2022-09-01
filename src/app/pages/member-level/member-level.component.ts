import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MemberLevel, MemberLevelService } from 'src/app/services/member-level.service';

@Component({
  selector: 'app-member-level',
  templateUrl: './member-level.component.html',
  styleUrls: ['./member-level.component.css']
})
export class MemberLevelComponent implements OnInit {

  level = new FormGroup({
    levelUid: new FormControl(),
    levelId: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    default: new FormControl()
  });

  _editable = false;
  set editable(val: boolean) {
    this._editable = val;
    if (this._editable) {
      this.level.enable();
    } else {
      this.level.disable();
    }
  }
  get editable() {
    return this._editable;
  }

  constructor(
    private memberLevelService: MemberLevelService,
    private route: ActivatedRoute
  ) {
    const levelUid = this.route.snapshot.params['levelUid'];
    if (levelUid != undefined) {
      this.find(levelUid);
      this.editable = false;
    } else {
      this.editable = true;
    }
  }

  ngOnInit(): void {
  }

  find(levelUid: number) {
    this.memberLevelService
      .find(levelUid)
      .subscribe(level => {
        this.level.setValue(level);
      });
  }

  save() {
    this.memberLevelService
      .save(this.level.value as MemberLevel)
      .subscribe(level => {
        this.level.setValue(level);
        this.editable = false;
      });
  }

}
