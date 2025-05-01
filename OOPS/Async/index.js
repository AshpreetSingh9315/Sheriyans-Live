// // // calback hell

// // function stepOne(cb){
// //     console.warn("he1")
// //     cb()
// // }

// // function stepTwo(cb){
// //     console.warn("he2")
// //     cb()
// // }

// // function stepThree(cb){
// //     console.warn("he3")
// //     cb()
// // }

// // stepOne(()=>{
// //     stepTwo(()=>{
// //         stepThree(()=>{
// //             console.warn("all Called")
// //         })
// //     })
// // })



// //callbackhell with promise

// function one(){
//     return new Promise((res,rej)=>{
//         console.warn("setp1")
//         res()
//     })
// }

// function two(){
//     return new Promise((res,rej)=>{
//         console.warn("setp2")
//         res()
//     })
// }

// function three(){
//     return new Promise((res,rej)=>{
//         console.warn("setp3")
//         res()
//     })
// }

// one().then(two).then(three).then(()=>{
//     console.warn("helo")
// })