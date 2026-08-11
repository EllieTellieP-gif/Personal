//let i=0;
//let n=5;

//while(i<=5){
 //console.log("Hi,bitch");
 //i++;
//}

//for(let i=0;i<=n;i++){
    //sum=sum+i;
  //  console.log("Fuck You" + sum)
//};

//do{
    //console.log("Hi");
  //  i++;
//}
//while(i<=10);

//name="ElliE";
//let length=0;
//for( val of name){
  //  console.log(val);
    //length++;
//}
//console.log(length);

//let game={name:"Elf",age:"12"};
//const {name,age}=game;
//for (keys in game){
  //  console.log(keys,game[keys]);
//}

//for(let apple=0;apple<=100;apple++){
  //  if (apple % 2 === 0){
//console.log(apple);
//}
//}

//let gameNum="25";
//let userNum=prompt("Guess a number");
//while(userNum!=gameNum){
  //  console.log("Keep trying");
//}
//console.log("You got it");
//let game=prompt("Enter your name");
//let yourname=game;
//console.log(`@${yourname} and the length is ${yourname.length}`);

//let marks=[85,44,97,37,60,76];
//let sum=0;

//for(let val of marks){
  //  sum += val;
//}
//let avg = sum/marks.length;
//console.log(avg);
 //let s=["Tam","Dam","Kam","Pam","Tam","Sam","Ram"];
 //let i=0;
 //for (val of s){
  //console.log(`hey: ${i}=${val}`);
 //}

 //let s=["Tam","Dam","Kam","Pam","Tam","Sam","Ram"];
 
 //for (let idx=0;idx<s.length;idx++){
  //console.log(`he: ${s[idx]}`);
 //}
 //for(let idx in s){
  //console.log(s[idx]);
 //}

 //let price=["240","233","231","442","21","24"];
 //let i=0;
 //for(let val of price){
  //console.log(`value at index ${i}=${val}`);
  //let offer= val/10;
  //price[i]=price[i]-offer;
  //console.log(`value after discount: ${price[i]}`);
  //i++;
 //}
 //for (let i = 0; i < price.length; i++){
   //let offer = price[i]/10;
   //price[i] -= offer;
  //}
  //console.log(price);

  //let d=["pap","sat","bad"];
  //console.log(d);
   //console.log(d.toString());
//let marks=['23','353','32'];
//console.log(marks);
//console.log(marks.toString());
 // let arr=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
  //console.log(arr);
  //replacing
  //arr.splice(1,1,102);
  //console.log(arr);
  //deleting
  //arr.splice(2,1);
  //console.log(arr);
  //adding wihtout deleting
  //arr.splice(3,0,44);
  //console.log(arr);
  //let m=arr.splice(0,2);
  //console.log(arr);
  //console.log(m);
  //arr.splice(0,1);
 // arr.shift();
//arr.splice(2,1,"Ola");
//arr.push("Amazon");
//console.log(arr);
//function sum(x,y){
  //add=x+y;
  //return add;
//}
  //let val=sum(3,6);
  //console.log(val);
  //console.log(x+y);
//function mul(a,b){
  //return a * b;
//}
//const sal=(a,b)=>{
  //console.log(a*b);
//}
//const print =()=> {console.log("Hello")};

//function countVowels(str){
  //  let count=0;
  //for(let char of str){
   // if (char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
     // count++;
    //}
  //}
//console.log(count);
//return count;
//};

//const countVowels=(str)=>{
   //let count=0;
  //for(char of str){
    //if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
    //count++;
  //  }
    
//}
//console.log(`No. of vowels is ${count}`);  
//}

//let arr=[1,2,3,4,5];

//let m=arr.reduce((res,val)=>{return res > val ?  res : val;});
//console.log(m);

//let newarr=arr.filter((val)=>{
  //return(val%2===0);
//})
//console.log(newarr);

//let marr=arr.map((val)=>{
  //console.log(val*val);
//return val;
//})
//console.log(marr);
//let double=(num)=>{
  //console.log(num*num);
//}

//arr.forEach(function printVal(val){
//console.log(val);
//})

//arr.forEach((val) => {
  //console.log(val);
//}
//);

//arr.forEach((val)=>{
 // let double=val*val;
  //console.log(val*val);
//})

//arr.forEach(double);

//let marks=[34,54,99,98,90];

//let a=marks.filter((val)=>{
  //return val > 90;
//});
//console.log(a);

//let n=prompt("Enter a number:");
//let a=[];
//for(let i=1;i<=n;i++){
//a[i-1]=i;
//};
//console.log(a);

//let p=a.reduce((res,val)=>{
//return res * val;
//});
//console.log(p);
//let m = document.querySelectorAll(".box");
//m[1].innerText="Hello";
//console.dir(m[0]);
//let i =0;
//for (val of m){
  //val.innerText=`hi baby ${i}`;
  //i++;
//}//

//let p = document.querySelector("box");
//console.log(p);

//let id = document.querySelector("div");
//console.log(id);

//let q = id.getAttribute("class");
//console.log(q);

//let d = document.querySelector(".box");
//console.log(d.setAttribute("class","flower"));
//d.style.color="pink";
//d.style.visibility="hidden";

//let el=document.createElement("button");
//el.innerText="Hello";
//console.log(el);

//let div=document.querySelector("div");
//div.after(el);

//let para=document.querySelector("div");
//para.innerHTML+="<i>Hola,Como Estas</i>";

//document.querySelector("body").prepend(para);

//let ar=document.querySelector("ul");
//ar.remove();

//para.remove();

//let pop=document.createElement("button");
//pop.innerHTML="Click Me";
//pop.style.color="white";
//pop.style.backgroundColor="red";

//let bop=document.querySelector("body");
//bop.prepend(pop);


//let carl=document.querySelector("p");
//console.log(carl);
//let app=document.querySelector("dug");
//document.querySelector(carl).append(app);

//let f= document.querySelector("#btn1");
let f= document.querySelector("div");
//f.onclick=(e)=>{
  //console.log(e);
  //console.log(e.type);
  //console.log(e.target);
  //console.log(e.clientX,e.clientY);
//f.addEventListener("click",(e)=>{
  //console.log(e);
  //console.log("btn1 was clicked");
//});

//f.addEventListener("click",()=>{
  //console.log("btn1 was clicked again");
//});

//const handler3 =()=>{
  //console.log("button was clicked more ");
//}

//f.addEventListener("click",handler3);

//f.removeEventListener("click",handler3);

//let mode=document.querySelector("#mode");
//let body=document.querySelector("body");
//let now="light";
//mode.addEventListener("click",()=>{
  //if(now === "light"){
    //now = "dark";
    //body.classList.add("dark");
  //  body.classList.remove("light");
  //document.querySelector("body").style.backgroundColor="brown";
  //document.querySelector("body").style.color="white";
//}
  //else{
    //now = "light";
    //body.classList.add("light");
    //body.classList.remove("dark");
    //document.querySelector("body").style.backgroundColor="white";
  //document.querySelector("body").style.color="black";
  //  } console.log(now);}
    
//);


//const fruit = {
  //name:"Apple",
  //color:"Red",
  //pigment:function() {
    //console.log("Color:",this.color);
  //},
  //name(){
    //console.log("Hi");
  //},
//};
//const avoc ={
  //salary:9000,
  //name(){
   // console.log("Hello");//when obj and prototype has class,object wins,prototype is close but not blood;
  //}
//}
//avoc.__proto__=fruit;//fruit ma avoc prototype assign gareko//accessing fruit from avoc//protottpe is reference to an object

//we can access fruit's poperties in avoc via prototyping.

//class MyCar{
  //constructor(brand,mileage){
    //console.log("creating new object");
    //this.brand=brand;
    //this.mileage=mileage;
  //}
  //start(){
    //console.log("hi");
  //}
  //stop(){
    //console.log("bye");
  //}
  //setBrand(brand){
    //this.brandName=brand;// this means instance of class, and whatever gets passed as brand is set in brandName,just giving variable to the parameter,if this. is connected, then it's instnce of the class,if not then argument
  //}
//}

//let newCar = new MyCar("Sike",67);
//newCar.setBrand("Bike");

//class User{
  //constructor(name,email){
    //this.name=name;
    //this.email=email;
  //}
   //viewData(){
    //console.log("Name:",this.name);
    //console.log("Email:",this.email);
   //}
//}
//let Ellie = new User("EllieShrestha","ellie@gmal.com");

//class Admin extends User{
  //constructor(name,email){
    //super(name,email);
  //}
  //editData(){
    //DATA="some new value";
  //}
//}
//let t1=new Admin("ham","cfgvhbj");

//setTimeout(() => {
  //console.log("Hi");
//},2000);
//function hello(){
  //console.log("Hello");
//}

//setTimeout(hello,5000);
 function sum(a,b){
  console.log(a+b);
 }

 function calculate(a,b,sum){
  sum(a,b);
 }

 //calculate(1,2,sum);//if we use parenthessi on sum,that means it is executed there but we don't want that so
 calculate(1,2,(a,b)=>{//in callback,we can pass the whole fucntion 0r just the name as well
  console.log(a+b);
 });