const prompt = require('prompt-sync')();
let calculator={
    

 read()
 {

     this.a=+prompt("enter the value a",0);
     this.b=+prompt("enter the value b",0);
 },

 sum()
{
    //let add=new this.add(this.a+this.b);
    return this.a+this.b;
},
 mul()
{
    //let multi=new this.multi(this.a*this.b);
    return this.a*this.b;
}
};
//calculator();
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());


