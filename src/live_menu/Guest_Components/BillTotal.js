import React from "react";


export default function BillTotal(props) {
  const { item, type } = props
 

  const parseFloated = parseFloat(item.fields.price)

  console.log(parseFloated)


  
  
  return (
    <div>
    
      <p key={item.fields.name}>
        {parseFloated}
      </p>
        
  
        </div>
  );
}
// <p key={item.fields.name}>






  // function fillArray(parseFloated, len) {
  //   if (len == 0) return [];
  //   var a = [parseFloated];
  //   while (a.length * 2 <= len) a = a.concat(a);
  //   if (a.length < len) a = a.concat(a.slice(0, len - a.length));
  //   return a;
  // }

  // console.log(parseFloat({ item.fields.price }))
  // var sum = parseFloated.reduce(function(a, b){
  //   return a + b;
  // }, 0);

  // let intSum = parseFloated.values().stream().reduce(0, Integer::sum);

  // const sumAllInArray = parseFloated => {
  //   const nums = parseFloated
  //     .map((elem) => {
  //       return Number.parseInt(elem);
  //     })
  //     .filter((num) => {
  //       return num > 0 || num < 0;
  //     })
  //     .reduce((a, b) => a + b)
    
  //   return nums
  // }
  // var merger = function (a, b) {
  //   if (parseFloated.isNumber(a)) {
  //     return a + b;
  //   } else {
  //     return parseFloated.mergeWith(a, b, merger);
  //   }
  // };
  // const mergedMap = new Map({parseFloated});