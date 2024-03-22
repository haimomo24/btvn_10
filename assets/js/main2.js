console.log("giai :pt ax+b=0")
function pt(a,b){
  if(a==0){
    if(b==0){
      console.log("phương trình vô số nghiệm ");
    }
    else{
      console.log("phương trình vô nghiệm ");
    }
  }else{
    var x=- b / a;
    console.log("Pphương trình có nghiệm :x",x);
  }
}
pt(5,9);
pt(7,8);
pt(8,6);
console.log("-------------------------------------")
console.log("giai :pt ax^2+bx+c=0")


function ptb2(a, b, c) {
    if (a === 0) {
        if (b === 0) {
            if (c === 0) {
                console.log("phương trình vô số nghiệm ");
            } else {
                console.log("phương trình vô nghiệm ");
            }
        } else {
            var x = -c / b;
            console.log("phương trình có 1 nghiệm : x =", x);
        }
    } else {
        var delta = b * b - 4 * a * c;
        if (delta < 0) {
            console.log("phương trình vô nghiệm ");
        } else if (delta === 0) {
            var x = -b / (2 * a);
            console.log("pphương trình có nghiệm kép  : x =", x);
        } else {
            var x1 = (-b + Math.sqrt(delta)) / (2 * a);
            var x2 = (-b - Math.sqrt(delta)) / (2 * a);
            console.log("Phương trình có 2 nghiện phân biệt :");
            console.log("x1 =", x1);
            console.log("x2 =", x2);
        }
    }
}




ptb2(6,6,6);
ptb2(2,10,9);
ptb2(1,8,1);
ptb2(0,0,9);