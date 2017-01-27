import { Component, OnInit } from '@angular/core';
import { MemberService} from '../member.service';
import { Member } from '../member.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
  providers: [MemberService]
})
export class MemberListComponent implements OnInit {
  members: FirebaseListObservable<any[]>;
  constructor(private memberService: MemberService, private router: Router) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

  goToDetailPage(clickedMember) {
    this.router.navigate(['members', clickedMember.$key]);
  }

}
