import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
// rxjs - hold data that returned from the api  
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  user$: Object;    
  userId$: number;

  constructor(private data: DataService,private route: ActivatedRoute) 
  {
     this.route.params.subscribe(
       params => this.userId$ = params.id 
     )
   }

  ngOnInit() {

    this.data.getUser(this.userId$).subscribe(
      data => this.user$ = data
    )
  }

}
