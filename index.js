 // for (let i=0; i<=100; i++){
 //    console.log(i+ 'тест')
 // }

 // let randomNumbers = [16,14,28,99,29,182]
 // let oldValue=randomNumbers[0]

// randomNumbers[0]=5
// randomNumbers[2]=666
//  console.log(randomNumbers)
//  console.log(oldValue)
//  let length=randomNumbers.length
//  console.log("довжина масиву: " + length)
//  randomNumbers.push(82)
//  randomNumbers.reverse()
//  console.log(randomNumbers.length)
//  for(let i=0; i<randomNumbers.length;i++) {
//      console.log("значення елементу масиву: " + randomNumbers[i])
//  }


















//
//  let bibibiArray = [5.25,-0.57,55,-17]
//  bibibiArray[0] = -2
//  bibibiArray[1] = bibibiArray[2]
//  bibibiArray.push(70)
//  console.log("довжина масиву: " + bibibiArray.length)
// for(let i=0; i<bibibiArray.length;i++){
//     console.log("значення елементу масиву: " + bibibiArray[i])
// }



















// let winx = ['bloom', 'stella', 'flora', 'musa', 'leyla', 'tecna']
// let boys = ['sky', 'brendon', 'helia', 'riven', 'nabu', 'timmy']
// let trix = ['icy', 'darcie', 'stormi']
// for(let i=0; i<6; i++){
//  console.log(winx[i] + '-' + boys[i])
// }

// let a = {"itemsNumber":10, "itemPrice":72, "item size":28}
//  console.log(a["item size"])
//
// let myPhone = {"model":'iphone 15', "price":35000, "color":'peaceful sky', "version":'iOS 17.6.1'}
//  console.log(myPhone["price"])
//
// let allMyPhones = [
//     {"model":'iphone 15', "price":35000, "color":'peaceful sky', "version":'iOS 17.6.1'},
//     {"model":'iphone 11', "price":18500, "color":'purple', "version":'iOS 17.6.1'}
// ]
//  for(let i=0; i<allMyPhones.length; i++){
//   console.log(allMyPhones[i]["model"] + '-' + allMyPhones[i]["price"])
//  }

 // let bibibi = [2, 4 ,27, 288282, 99]
 // function sumOfArray(lalala){
 //    let bucket=0;
 //     for(let i=0; i<lalala.length; i++){
 //         bucket = bucket + lalala[i]
 //     }
 //     return bucket
 // }
 //
 // console.log(sumOfArray(bibibi))

 let bibibi = [7, 292, 45, 69]
 function productArray(lalala){
    let bucket=1;
    for(let i=1; i<lalala.length; i++){
        bucket *= lalala[i]
    }
    return bucket
}
console.log(productArray(bibibi))