import { Component, Input, HostListener, Inject } from '@angular/core';
// import { MyserviceService } from './myservice.service';
// import { Router } from '@angular/router';
import { NewserviceService } from './newservice.service';
import { FormGroup,FormControl,FormBuilder,NgForm,Validators,FormArray } from '@angular/forms';
import { FormSignup } from './formSignup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[NewserviceService]
})
export class AppComponent {
  title = 'app';
  FormGroup:FormGroup;
  form:any;
  // text:string;
  // emp:any[];
  // constructor(private newservice:NewserviceService){
  // }
  // ngOnInit()
  // {
  //   this.text=this.newservice.display();
  //   this.emp=this.newservice.employees;
  // }
  // student(){

  //   this.router.navigate(['/student']);
  // }
  // checkNgIf=false;
  // isvalid:boolean=true;
  // public choose='';
  // constructor(@Inject (MyserviceService)Service){
  //   console.log(Service);
  //   console.log("This is app component");
  // }
  // @HostListener('click',['$event'])
  // onHostClick(event:Event){
  //   alert("You clicked");
  // }
  // click(){
  //   alert("You clicked me");
  // }
  // changeValue(valid){
  //   this.isvalid=valid;
  // }
  // setvalue(drp:any){
  //   this.choose=drp.target.value;
  // }
  // Students:any[]=[
  //   {
  //     'name':'Prakhar Kalvit'
  //   },
  //   {
  //     'name':'Purvi Maurya'
  //   },
  //   {
  //     'name':'Divvya Vyas'
  //   },
  //   {
  //     'name':'Samarth Dagor'
  //   },
  //   {
  //     'name':'Shivam Pawde'
  //   }
  // ]
  // Students:any[];
  // constructor(){
  //   this.Students=[
  //     {
  //       studentid:1,
  //       name:'Prakhar',
  //       gender:'male',
  //       age:20,
  //       course:'Btech'
  //     },
  //     {
  //       studentid:2,
  //       name:'Purvi',
  //       gender:'female',
  //       age:20,
  //       course:'Btech'
  //     },
  //     {
  //       studentid:3,
  //       name:'Divvy',
  //       gender:'male',
  //       age:20,
  //       course:'Btech'
  //     }
  //   ];
  // }
  // getMoreStudents():void{
  //   this.Students=[
  //     {
  //       studentid:1,
  //       name:'Prakhar',
  //       gender:'male',
  //       age:20,
  //       course:'Btech'
  //     },
  //     {
  //       studentid:2,
  //       name:'Purvi',
  //       gender:'female',
  //       age:20,
  //       course:'Btech'
  //     },
  //     {
  //       studentid:3,
  //       name:'Divvy',
  //       gender:'male',
  //       age:20,
  //       course:'Btech'
  //     },
  //     {
  //       studentid:4,
  //       name:'Pari',
  //       gender:'female',
  //       age:20,
  //       course:'Btech'
  //     }
  //   ];
  // }
  // trackByStudentId(index:number,student:any):string{
  //   return student.studentid;
  // }
  // Countrydetails:any[]=[
  //   {
  //     'country':'India',
  //     'people':[
  //       {
  //         "name":"Prakhar Kalvit"
  //       },
  //       {
  //         "name":"Divvya Vyas"
  //       }
  //     ]
  //   },
  //   {
  //     'country':'Uk',
  //     'people':[
  //       {
  //         "name":"Prakhar "
  //       },
  //       {
  //         "name":"Divvya"
  //       }
  //     ]
  //   },
  // ];
  // people:any[]=[
  //   {
  //     "name":"Prakhar",
  //     "country":"India"
  //   },
  //   {
  //     "name":"Divvy",
  //     "country":"India"
  //   },
  //   {
  //     "name":"Purvi",
  //     "country":"UK"
  //   },
  //   {
  //     "name":"Pari",
  //     "country":"UK"
  //   }
  // ];
  // getcolor(Country){
  //   switch(Country){
  //     case 'India':
  //       return 'green';
  //       case 'UK':
  //         return 'red';
  //   }
  // }
  // users=[
  //    'Prakhar',
  //    'Purvi',
  //    'Divvy',
  //    'Pari'
  // ];
  name='Prakhar';
  // data:string='Angular8';
  // data1:string='Prakhar';
  employees:any[]=[
    {
      code:'emp001',name:'Prakhar',salary:100000,gender:'Male'
    },
    {
      code:'emp002',name:'Purvi',salary:5000,gender:'Female'
    },
    {
      code:'emp003',name:'Divvy',salary:300000,gender:'Male'
    },
    {
      code:'emp004',name:'Pari',salary:50000,gender:'Female'
    },
  ];
  // currentDate=new Date();
  // myNumber=0.12345
  
  // Registration(regForm:any){
  //     console.log(regForm);
  //   }
  // signupForm:FormGroup;
  // FirstName:string="";
  // LastName:string="";
  // Email:string="";
  // Password:string="";
  // constructor(private frmbuilder:FormBuilder){
  //   this.signupForm=frmbuilder.group({
  //     fname:['',Validators.required],
  //     lname:['', [Validators.required,Validators.maxLength(10)]],
  //     Emailid:['',[Validators.required,Validators.email]],
  //     userpass:['',Validators.required]
  //   });
  // }
 
  // PostData(signupForm:any){
  //   // this.FirstName=signupForm.controls.fname.value;
  //   // console.log(this.FirstName);
  //   // console.log(signupForm.controls);
  //   this.FirstName=this.signupForm.get('fname').value;
  //   console.log(this.FirstName);
  //   console.log(this.signupForm.value);
  // }
  // resetForm(){
  //   this.signupForm.reset();
  // }
  // filldata(){
  //   this.signupForm.setValue({
  //     "fname":"Prakhar",
  //     "lname":"Kalvit",
  //     "Emailid":"Prakhar@gmail.com",
  //     "userpass":"123"
  //   })
  // }
  // get Fname(){
  //   return this.signupForm.get("fname");
  // }
  // ngOnInit(){
  //   this.signupForm.get('fname').valueChanges.subscribe(
  //     uname=>{
  //       console.log('fname changed:'+uname);
  //     }
  //   )
    //   this.signupForm.valueChanges.subscribe((uname:FormSignup)=>{
    //     console.log('fname changed:'+uname.fname);
    //     console.log('lname changed:'+uname.lname);
    //     console.log('EmailID changed:'+uname.Emailid);
    //     console.log('Password changed:'+uname.userpass);
    //   }
    //   );    
    //     this.signupForm.get('fname').statusChanges.subscribe(
    //   status=>{
    //     console.log('fname validation status:'+status);
    //   }
    // )
    // this.signupForm.statusChanges.subscribe(
    //     status=>{
    //       console.log('fname validation status:'+status);
    //     }
    //   )
// }
  // ngOnInit(){
  //   const arr=new FormArray([
  //     new FormControl('p',Validators.minLength(2)),
  //     new FormControl('Divvy')
  //   ]);
  //   console.log(arr.value);
  //   console.log(arr.status); 
  // }
  // ngOnInit()
  // {
  //   this.form=new FormGroup({
  //     ContactNos:new FormArray([
  //       new FormControl('8962482613'),
  //       new FormControl('7389839103'),

  //     ]),
  //   });
  // }
  // addContactNo(){
  //   this.form.get('contactNos').push(new FormControl());
  // }
  // onSubmit(){
  //   console.log(this.form.get('contactNos').value);
  //   console.log(this.form.value);
  // }
  // setPreset()
  //   {
  //       this.form.get('contactNos').patchValue(['124574','2248786']);
  //   }
}
