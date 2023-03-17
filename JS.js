///////////////////////////Recurtion
//cw1
// function Factorial(a){
//     if(a==1){
//         return 1
//     }
//     return a*Factorial(a-1)
// }
// console.log(Factorial(5));

//cw2
// function doubleFactorial(a){
//     if(a==1 || a==0){
//         return 1
//     }
//     return a*doubleFactorial(a-2)
// }
// console.log(doubleFactorial(14));

//cw3
// function Factorial(a){
//     if(a==1){
//         return 1
//     }
//     return a+Factorial(a-1)
// }
// console.log(Factorial(12));

//cw4
// function Lenght(a,cnt=0){
//     if(a.length==cnt){
//         return cnt
//     }
//     return Lenght(a,cnt+1)
// }
// console.log(Lenght("apple"));

//cw5
// function F(a){
//     if (a<=1){
//         return a
//     }
//     return F(a-1)+F(a-2)
// }
// console.log(F(8))


/////////////////////////////Closure
//cw1
// function redudant(a){
//     return function(){
//         return a
//     }
// }
// let f1 = redudant("apple")
// console.log(f1());

//cw2
// function Name(a){
//     return function(b){
//         return a+b
//     }
// }
// let fun2 = Name(44)
// console.log(fun2(10));

//cw3
// function redudant(a){
//     return function(b){
//         return a+b
//     }
// }
// console.log(redudant(-30)(80));

//cw4
// function addSufix(a){
//     return function(b){
//         return b+a
//     }
// }
// let fun2 = addSufix("ly")
// console.log(fun2("heppy"));

//cw5
// function Name(a,b){
//     return function(c,d){
//         return function(e,f){
//             return a*c*e+b*d*f
//         }
//     }
// }
// console.log(Name(1,2)(1,1)(2,3));

////////////////////////////////CLASS WORK
//cw1
// function Swap(a){
//     return function (b){
//         return Math.pow(a,b)
//     }
// }
// console.log(Swap(2)(4));

//cw2
// function XurdTaqsim(a,b,i=a+b){
//     if(b%i==0 && a%i==0){
//         return i
//     }
//     return XurdTaqsim(a,b,i-1)
// }
// console.log(XurdTaqsim(32,8));

//cw3
// function EvenOrAnd(a){
//     if(a>0){
//         let c = a
//         return function Pos(b=c,cnt=1){
//             if(cnt==a){
//                 return cnt%2==0?"Even":"Odish"
//             }
//             return Pos(b,cnt+1)
//         }
//     }
//     else if(a<0){
//         let c = a
//         return function Neg(b=c,cnt=0){
//             if(b==0){
//                 return cnt%2==0?"Even":"Odish"
//             }
//             return Neg(b+1,cnt+1)
//         }
//     }
//     else return "Zero"
// }
// let fun2 = EvenOrAnd(-4)
// console.log(fun2());

////////////////////////////////////HOME WORK
//hw1
// let c=""
// function repetition(a,b,cnt=0){
//     if(b==cnt){
//         return c
//     }
//     c+=a
//     return repetition(a,b,cnt+1)
// }
// console.log(repetition("ob",3));

//hw2
// function EvenOrAnd(a){
//     if(a>0){
//         let c = a
//         return function Pos(b=c,cnt=1){
//             if(cnt==a){
//                 return cnt%2==0?"Even":"Odish"
//             }
//             return Pos(b,cnt+1)
//         }
//     }
//     else if(a<0){
//         let c = a
//         return function Neg(b=c,cnt=0){
//             if(b==0){
//                 return cnt%2==0?"Even":"Odish"
//             }
//             return Neg(b+1,cnt+1)
//         }
//     }
//     else return "Zero"
// }
// let fun2 = EvenOrAnd(-4)
// console.log(fun2());

//hw3
// function equal(a,b,c){
//     if(a==b && b==c)return "3"
//     else if(a==b || b==c || c==a)return "2"
//     else return "0"
// }
// console.log(equal(1,2,3));

//hw4
// function inequality(a,b,c){
//     return a<b && b<c?true:false
// }
// console.log(inequality(1,2,3));

//hw5
// function minNum(a,b,c){
//     return Math.min(a,b,c)
// }
// console.log(minNum(-2,-5,0));

//hw6
// function minAndMax(a,b,c){
//     return `${Math.min(a,b,c)} ${Math.max(a,b,c)}`
// }
// console.log(minAndMax(-5,5,15));

//hw7
// function nextEvenNum(a){
//     return (a+2)-(a%2)
// }
// console.log(nextEvenNum(6));

//hw8
// function sequenceNum(a,b,c){
//     if(a==b && b!=c)return 3
//     else if(a==c && c!=b)return 2
//     else if(b==c && c!=a)return 1
// }
// console.log(sequenceNum(2,1,2));

//hw9
// function passin(a,b,c){
//     return a>c && b>c
// }
// console.log(passin(3,4,2));
 
//hw10
// function incAndDac(a,b,c){
//     return a<b && b<c?`${a*2} ${b*2} ${c*2}`:`${-(a)} ${-(b)} ${-(c)}`
// }
// console.log(incAndDac(3,2,3));

//hw11
// function sequenceNums(a,b,c,d){
//     if(a==b && b==c && c!=d)return 4
//     else if(a==b && b==d && d!=c)return 3
//     else if(a==c && c==d && d!=b)return 2
//     else if(b==c && c==d && d!=a)return 1
// }
// console.log(sequenceNums(1,6,6,6));

//hw12
// function sumOf(a,b){
//     let c=a%10
//     c+=Math.floor(a/10)
//     return c>b
// }
// console.log(sumOf(55,9));

//hw13
// function three(a){
//     let b = a%10
//     let c=Math.floor(a/10)%10
//     let d=Math.floor(a/100)
//     return b*c*d>100
// }
// console.log(three(555));

//
let rev=0;
function reverse(a){
    if(a<0){
        rev=Math.floor(rev/10)
        return rev
    }
    rev+=(a%10)*10
    
    return reverse(Math.floor(a/10))
}
console.log(reverse(123));
