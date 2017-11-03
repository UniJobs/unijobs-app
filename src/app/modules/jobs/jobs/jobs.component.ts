import { Component, OnInit } from '@angular/core';
import {JobsService} from '../../../service/jobs.service';
import {Job} from '../../../models/job.model';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  selectedDropDown = 'Description';
  jobs: Job[];
  whatever: string;
  constructor(private jobService: JobsService) { }

  updateSelected(filterType: string) {
    document.getElementById('search_concept').innerHTML = filterType;
    this.selectedDropDown = filterType;
  }

  ngOnInit() {
    this.jobService.getJobs().subscribe(jbs => {
      this.jobs = jbs;
      console.log(this.jobs);
    });
  }

  filter(searchfilter: string) {

    switch (this.selectedDropDown) {
      case 'Location':
        console.log('case Location');
        this.jobService.jobFilterByLocation(searchfilter).subscribe(
          filteredjobs => {
            this.jobs = filteredjobs;
          }
        );
        break;
      case 'Description':
        this.jobService.jobFilterByDescription(searchfilter).subscribe(
          filteredjobs => {
            this.jobs = filteredjobs;
          }
        );
        break;
      default:
        break;
    }

  }

  clear() {
    this.whatever = '';
    this.jobService.getJobs().subscribe(jbs => {
      this.jobs = jbs;
      console.log(this.jobs);
    });
  }

}
