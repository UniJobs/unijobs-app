import { Component, OnInit } from '@angular/core';
import {JobsService} from "../../../service/jobs.service";
import {Job} from "../../../models/job.model";

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobs: Job[];

  constructor(private jobService: JobsService) { }

  ngOnInit() {
    this.jobService.getJobs().subscribe(jbs => {
      this.jobs = jbs;
      console.log(this.jobs)
    });
  }

}
