var input1,heading1,input2,heading2,input3,heading3;
var num1,num2,Operator;
function setup(){
  createCanvas(400, 400);
  background(178,255,102);

heading1 = createElement('h4','Enter The First Number');
heading1.position(5,20);

input1 = createInput();
input1.position(5,60);

heading2 = createElement('h4','Enter The Second Number');
heading2.position(5,80);

input2 = createInput();
input2.position(5,150);

heading3 = createElement('h4','Enter The Operator Number');
heading3.position(5,180);

input3 = createInput();
input3.position(5,220);
}

function draw() {

 num1 = input1.value();
 num2 = input2.value();
 Operator = input3.value();

switch(Operator){
  case '+' : 
      console.log("addition");
      console.log(int(num1)+int(num2));
      break;

      case '-' : 
      console.log("subraction");
      console.log(int(num1)-int(num2));
      break;


      case '*' : 
      console.log("mulitiplication");
      console.log(int(num1)*int(num2));
      break;


      case '/' : 
      console.log("division");
      console.log(int(num1)/int(num2));
      break;
default:console.log('Show a Valid Number');
}
drawsprites();
}

