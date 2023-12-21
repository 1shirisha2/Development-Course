// const arr1 = [1, 2, 3];
// const aarr2 = [4, 5, 6];
// console.log("spreadoperator",...arr1)
// console.log("without",arr1)
//




// function example(param1, param2,...rest){
//     console.log('param1:',param1);
//     console.log('param2:',param2)
//     console.log('rest:',...rest)
// }
// example(1, 2, 3, 4, 5);


// function sum(...number){
//     let total = 0;
//     for(const num og number){
//         total += num;

//     }
//     return total;
// }
// console.log(sum(1, 2, 3, 4, 5));


// function sum(x,y,z,p){
//     console.log(x)
//     console.log(y)
    // let total = 0;
    // for (const num of number){
    //     total += num;

    // }
    // return total;

// }
// const number=[1,2,3,4]
// console.log9sum(...number);


// function sum(...number){
//     console.log(number)
//     let total = 0;
//     for (const num of number){
//         total += num;

//     }
//     return total;

// }
// console.log(sum(1,2,3,4,5,6,7,8,9,10));



// const obj1 = {a: 1, b:2};
// const obj2 = {b:3, c:4};
// const mergeobject = {...obj1, ...obj2};
// console.log(mergeobject)


// const studentDetails={
//     name:"shirisha",
//     age: 21
// }

// studentDetails.city="hyderabad"
// studentDetails.flat=103
// console.log(studentDetails)


const teacherDetails={
    tname:"shirisha",
    tage:30
}
const studentDetails={
    name:"akshaya",
    age:21
}
const newDetails={...studentDetails,...teacherDetails}
console.log(newDetails)



