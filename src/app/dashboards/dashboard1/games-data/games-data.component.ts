import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
declare var require: any;
const data: any = require('./games-data.json');


@Component({
  selector: 'app-games-data',
  templateUrl: './games-data.component.html',
  styleUrls: ['./games-data.component.scss']
})
export class GamesDataComponent implements OnInit {
  editing:any = {};
  rows: any = new Array;
  temp = [...data];
  loadingIndicator = true;
  reorderable = true;
  activeModal: any;
  modalData: any;
  columns = [{ prop: 'name' }, { name: 'category' }, { name: 'created' }];
  @ViewChild(GamesDataComponent) table: GamesDataComponent | any;

  constructor( private modalService: NgbModal) {
    this.rows = data;
    this.temp = [...data];
    setTimeout(() => {
      this.loadingIndicator = false;
    }, 1500);
   }

  ngOnInit(): void {
  }


   updateFilter(event:any) {
    const val = event.target.value.toLowerCase();

    // filter data
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    this.table = data;
  }
  updateValue(event:any, cell:any, rowIndex:number) {

    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];

  }

  open(content: any, modalSize: any, context?: any) {
    this.modalData = {...context};
    this.activeModal = this.modalService.open(content, {
        size: modalSize
    });

  }


}
