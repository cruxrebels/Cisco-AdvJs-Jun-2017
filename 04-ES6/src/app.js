import { Employee } from './Employee';
let add = (x,y) => x + y;
console.log(add(100,200));



class FullTimeEmployee extends Employee{
	constructor(id, name, benefits="Good Food!"){
		super(id, name);
		this.benefits = benefits;
	}
}

let fte = new FullTimeEmployee(100, 'Magesh');
fte.display();