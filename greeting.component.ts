import{Component} from "@angular/core";

@Component({

    selector:'greeting-comp',
    template:'<h1>{{message}}</h1>',
    styles:['h1{background-color:yellow; color:darkred; font-family:Lucida Handwriting}']
})


export class GreetingComponent{

    message:string="Welcome to the World of Angular!";

}