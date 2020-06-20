import {Component, OnInit} from '@angular/core';
import {RepositoryViewModel} from '@repository/view-model/repository.view-model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss']
})
export class RepositoryListComponent implements OnInit {
  repositoryList: RepositoryViewModel[];

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.repositoryList = this.route.snapshot.data.repositoryList;
  }

}
