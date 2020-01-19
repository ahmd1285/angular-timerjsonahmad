import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {HomeserviceService} from '../homeservice.service';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.css']
})
export class ConsumerComponent implements OnInit {

  constructor(private homeservice:HomeserviceService) {
    
   }

  ngOnInit() {
  }
  groupingForm = new FormGroup({
    id : new FormControl()
  });

  onSubmit(){
    (this.homeservice.serviceData);
  }
}