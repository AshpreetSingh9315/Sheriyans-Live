// // will also rej after .7% of time 


// function orderFood(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             let chance = Math.random() < .7;
//             if(chance){
//                 res()
//             }
//             else{
//                 rej()
//             }

//         },100)
//     })
// }

// orderFood().then(()=>{
//     console.log("Pizza Delivered");
// }).catch(()=>{
//     console.log("Pizza Not Delivered")
// })



// user data , title , comment s fetch through promise , basically one  by one all things should be printed  by promise.

// Flat Chaining,
// function getUser(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res({id: 1 , name : "ash"})
//         },1000)
//     })
// }

// function getTitle(userId){
//     return new Promise((res,rej)=>{
//        setTimeout(()=>{
//         res(["title1", "title2"])
//        },1000)
//     })
// }

// function getcomts(){
//     return new Promise((res,rej)=>{
//        setTimeout(()=>{
//         res(["lookng great", "excellent"])
//        },1000)
//     })
// }

// getUser().then((data)=>{
//     console.log(data)
//     return getTitle(data.id)
// }).then((title)=>{
//     console.log(title)
//     return getcomts()
// }).then((comts)=>{
//     console.log(comts)
// }).finally(()=>{
//     console.log("Every Data is fetched successfully");
// })


// api function after a delay of 1-3sec

// function fakeApiCall(endpoint){
//     let data = {
//         users : ["Ashu", "Gaurav" , "Naman" ,"Jhatu"],
//         title : ["Great Achiver" , "lund" , "Loda"],
//     }

//     let delay = Math.random() * 2000 + 1000;
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res(data[endpoint])
//         } ,delay)
//     })
// }

// fakeApiCall("users").then((data)=>{
//     console.log(data)
// })
// fakeApiCall("title").then((data)=>{
//     console.log(data)
// })



// 1) 

// function waitPromise(){
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             res()
//         },3000)
//     })
// }

// waitPromise().then(()=>{
//     console.log("helo")
// })


// 2)

// function number(data){
//     return new Promise((res,rej)=>{
//         let num = 10
//         if(num == 10){
//             res(num)
//         }
//         else{
//             rej()
//         }
//     })
// }

// number().then((data)=>{
//     console.log(data*2)
//     return number(data)
// }).then((data)=>{
//     console.log(data-5)
// }).catch(()=>{
//     console.log("error")
// }).finally(()=>{
//     console.log("completed")
// })


// 3)

// function getUserData(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res({name: "John", age: 25})
//         },1000)
//     })
// }

// getUserData().then((data)=>{
//     console.log(data)
// })

// 4)

// function rejecion(){
//     return new Promise((res,rej)=>{
//         rej()
//     })
// }

// rejecion().catch(()=>{
//     console.log("error")
// })

// 5) 

// function first(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res()
//         },1000)
//     })
// }
// function second(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res()
//         },2000)
//     })
// }
// function third(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res()
//         },3000)
//     })
// }

// Promise.all([first(),second(),third()]).then(()=>{
//     console.log("consoled")
// })