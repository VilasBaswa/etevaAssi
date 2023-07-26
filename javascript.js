function array1ValuesNotInarray2(array1, array2) {
  notInAry2 = []
  for(let item of array1){
      if (!array2.includes(item)){
          notInAry2.push(item)
      }
  }
 return notInAry2
}

function array2ValuesNotInarray1(array1, array2) {
  notInAry2 = []
  for(let item of array2){
      if (!array1.includes(item)){
          notInAry2.push(item)
      }
  }
 return notInAry2
}

function arraysInBothLists(list1,list2){
    usersInBoth = []
    for(let item of list1){
        if (list2.includes(item)){
            usersInBoth.push(item)
        }
    }
    return usersInBoth
}

const list1 = ["Arjun", "Adwait", "Swapnil","Amit", "Vishal", "Adnan"];
const list2 = [ "Adwait","Laxman","Amit", "Adnan","Nitin","Gaurav"];
const array1 = array1ValuesNotInarray2(list1,list2);
const array2 = array2ValuesNotInarray1(list1,list2);
const array3 = arraysInBothLists(list1,list2)
console.log(array1)
console.log(array2)
console.log(array3)
