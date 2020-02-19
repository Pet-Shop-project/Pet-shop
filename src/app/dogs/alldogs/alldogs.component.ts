import { Component, OnInit } from '@angular/core';
import { DogsService } from 'src/app/services/dogs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alldogs',
  templateUrl: './alldogs.component.html',
  styleUrls: ['./alldogs.component.css']
})
export class AlldogsComponent implements OnInit {
  collection = { count: 45, data: [] };
  config = {
    id: 'custom',
    itemsPerPage: 3,
    currentPage: 1,
    totalItems: this.collection.count
  };
 
  public maxSize: number = 3;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;
  public labels: any = {
      previousLabel: 'prev',
      nextLabel: 'next',
      screenReaderPaginationLabel: 'Pagination',
      screenReaderPageLabel: 'page',
      screenReaderCurrentLabel: `You're on page`
  };
  constructor(private dog:DogsService , private router:Router) { 
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          id: i + 1,
          value: "items number " + (i + 1)
        }
      );
    }
  }
  onPageChange(event){
    console.log(event);
    this.config.currentPage = event;
  }
  
  public dogs=[];
  ngOnInit() {
    this.dog.listalldog().subscribe(data=>{
      this.dogs=data;
      console.log(data);

    })
  }
  onSelect(dog){
    this.router.navigate(['/alldogdetails',dog._id])
    console.log(dog._id)
  }

}
