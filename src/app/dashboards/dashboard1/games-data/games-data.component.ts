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
  isLoading: Boolean = false;
  reorderable = true;
  activeModal: any;
  modalData: any;
  userId: any;
  userName: string = '';
  userEmail : string = '';
  userAddress: any;
  status : string = 'Active'
  users = [
    { id: '#W83549801', name:'Anna Sthesia', email:'anna@gmail.com', address:'Boston', status:'Active'},
    { id: '#R67546476', name:'Barb Dwyer', email:'barbdwyer@gmail.com', address:'Washington DC', status:'Inactive'},
    { id: '#G05654653', name:'Wilma Mumduya', email:'wilmamum@gmail.com', address:'San Francisco', status:'Active'},
    { id: '#S45645778', name:'Zack Lee', email:'zac@gmail.com',address:'Las Vegas', status:'Inactive'},
    
  ]

  
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

  closeModal() {
    this.modalService.dismissAll();
  }

  createUser() {
    try{
      this.isLoading = true;
      const newUser = {
        id: this.userId,
        name: this.userName,
        email:this.userEmail,
        address:this.userAddress, 
        status:this.status
        }
        this.users.push(newUser);
        alert('User Added!')
        this.closeModal();
    }catch(error){
      console.log(error);
      
    }
  finally{
    this.isLoading = false;
  }
  }

  
  deleteUser(user: any) {
    const index = this.users.findIndex(o => o.id === user.id);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }
}
