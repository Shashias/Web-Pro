/*console.log("hii");
console.log(1==false);
console.log(1===1);
console.log(0==true);
console.log(1===true);
console.log(false===true);
console.log(true===true);
console.log(1===34);
var a=4.56;
var b=23+456+45;
console.log(a);//storing the values and calling the fuctions to print here
console.log(b);
var c=5;
if(c>0){
    console.log("pos");
}
else{
    console.log("neg");
}



//Normal Funtion
function greet(){
        console.log("hii bye");
}
greet();
greet();
greet();



//return function 
function ret(){
return`loo`
}
console.log(ret());
//return statments typ 
function abc(){
    return`hello${s}${a}`    // $ symbol used to fetch the return statments in entire program
}
var s="jsp"
var p="bye"
console.log(abc());



//anonymous Functions             // without function name
var mul=function(num1,num2)
{
    return (num1*num2)
}
var result=mul(4,6)
console.log(result);



//with arr arrow symbol
var add=(num1,num2)=>         //without function keyword & function name
{
    return (num1*num2)
}
var result=add(3,6)
console.log(result);
(function(){
    console.log("arrow");
})();
*/

//arrays

let a=[1,2,45,56,67,78,889]
console.log(a.length);                      //prints length of array
console.log(a);                   //prints length along with array elements
//push
console.log(a.push(3));             //adds new element at last -specify number
console.log(a);
//pop     
console.log(a.pop());
console.log(a); 
//shift 
console.log(a.shift());         //deletes 1st element 
console.log(a); 
//unshift
console.log(a.unshift(3));       //add 1st element -specify number
console.log(a); 