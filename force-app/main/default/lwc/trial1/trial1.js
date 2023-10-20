import { LightningElement, track } from 'lwc';

export default class Trial1 extends LightningElement {
 @track name;
 @track age;
 @track Title;
 @track show=true;
 namehandler(event){
    this.name = event.target.value;
 }
 agehandler(event){
    this.age = event.target.value;
 }
 titlehandler(event){
    this.title = event.target.value;
 }
 savehandler(event){
    this.show = false;
 }
 tryhandler(event){
   this.show = true;
}

}