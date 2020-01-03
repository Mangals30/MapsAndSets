const capitalArray = arrayString => {
const upperCase =   arrayString.map(element => element.toUpperCase())
    return upperCase
}

console.log(capitalArray((['google'])).toString())

const capitalString = stringElement => {
    const upperCase = stringElement.toUpperCase()
    return upperCase
}
console.log(capitalString('google'))

const swapArrayCase = arrayString => {
//console.log('inside the function')
let len = arrayString.length
const temp = []
//console.log(arrayString[0].toUpperCase())
for(let i = 0; i<len; i=i+2) {
   // console.log('inside the for loop')
    //console.log(i)
    
    temp.push(arrayString[i].toUpperCase(), arrayString[i+1].toLowerCase())
}

return temp
}

console.log(swapArrayCase(['hi', 'how', 'are', 'you']))

const swapStringCase = stringElement => {
let chars = stringElement.toLowerCase().split(' ')
for (let i = 0; i<chars.length; i=i+2) {
    chars[i] = chars[i].toUpperCase()
}
let swapString = chars.join(' ')
//console.log('chars' , chars)
return swapString
}

console.log(swapStringCase('hi how are you'))

const countArrayLetters = arrayString => {
const tempString = []
const objString = []
arrayString.forEach (element => {
    tempString.push(element)
})
const uniqElement = tempString.filter((element, index, array) => {
    if(array.indexOf(element) == index) {
        return element
    }
})

for (const uniques of uniqElement) {
    let count = 0
    for (const unique of tempString) {
        //console.log('uniques =', uniques , 'unique = ', unique)
        if (unique == uniques) {
            count++
        }
    }
    objString.push({[uniques] : count})
}
return objString
}
console.log(countArrayLetters(['a','a', 'a', 'b', 'b', 'c', 'c','c', 'd', 'd', 'd', 'd', 'e', 'e', 'e', 'e', 'e']))

const countStringLetters = stringElement => {
    let char = stringElement.split('')
    //console.log('char', char)
    const countString = []
    let uniqueChar = char.filter((element, index, array) => {
        if(array.indexOf(element)== index) {
            return element
        }
    })
    console.log('uniquechar' , uniqueChar)
    for (const unique of uniqueChar) {
        let count = 0
        for (const chars of char) {
            if (unique=== chars) {
                count++
            }
        }
       countString.push({[unique] : count})
    }
    return countString
}
 
console.log(countStringLetters('aaaabbcccddddeeeee'))


const isPresentArray = (arrayString, stringElement) => {
    let present = null
    if(arrayString.includes(stringElement)){
       present=true
    }
    if(!arrayString.includes(stringElement)) {
        present=false
    }
    return present
}

let presentinArray = isPresentArray(['a', 'b', 'c', 'd'], 'z')
if(presentinArray == true) {
    console.log('The caharacter is present in the array')
}
if(presentinArray == false) {
    console.log('The caharacter is not present in the array')
}

const isPresentString = (strings, stringElement) => {
    let char = strings.split('')
    let present = null
    if(char.includes(stringElement)){
        present = true
    }
    if(!char.includes(stringElement)) {
        present = false
    }
      return present
}

let presentinString = isPresentArray('abcd', 'a')
if(presentinString == true) {
    console.log('The caharacter is present in the string')
}
if(presentinString == false) {
    console.log('The caharacter is not present in the string')
}

const users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' },
    { id: 92, name: 'Oliver1', age: 26, group: 'editor' },
    { id: 93, name: 'Oliver2', age: 23, group: 'admin' },
    { id: 94, name: 'Oliver3', age: 27, group: 'editor' },
    { id: 95, name: 'Oliver4', age: 24, group: 'admin' }
  ]

  const userAges = []
  const groupByAge = []

  users.forEach(element => {
      userAges.push(element.age)
  })

  //console.log(userAges)

  const uniqueUserAges = new Set (userAges)
  console.log(uniqueUserAges)

  for (const uniqueUserAge of uniqueUserAges) {
      let count = 0
      for (const userAge of userAges) {
          if (uniqueUserAge == userAge) {
              count++
          }
      }
        groupByAge.push({[uniqueUserAge] : count})
  }
console.log('Grouping by age ', groupByAge)

const hasAdmin = users.some(user => user.group == 'admin')


if(hasAdmin == true) {
   console.log('Some users have admin rights.')
}
else {
    console.log('None of the users have admin rights')

}


const nestedArray1 = [[[1,2,3,4],5,6,7],[8,9,10],[11,12,13],[14,15,16],[17,18],19,20]
const nestedArray = [[1,2,3],[4,5,6],[7,8,9]]
let flat = nestedArray.reduce((acc, it) => [...acc, ...it], [])
console.log('Flattened array is ', flat)
let flat1 = [].concat.apply([], nestedArray1)
console.log(flat1)
let flat2 = [].concat.apply([],flat1)
console.log(flat2)
console.log(users)
const userIds = []
users.forEach(element => {
    userIds.push(element.id)
})
console.log(userIds)
sortedUserIds = userIds.sort((a,b) => a-b)
console.log('sorted userIds ', sortedUserIds)
const groupbyId = []
sortedUserIds.forEach(userId => {
    users.forEach(user => {
        if(userId == user.id) {
        groupbyId.push({[userId] : user})
        }
    })
})
console.log(groupbyId)

const userGroups = []
users.forEach(element => {
    userGroups.push(element.group)
})
console.log('userGroups ', userGroups)
const setuserGroups = new Set(userGroups)
const groupbyGroup = []
console.log(setuserGroups)
for (const setuserGroup of setuserGroups) {
    groupbyGroup.push(setuserGroup)

}
console.log(groupbyGroup)

const cities = {
    Lyon: 'France',
    Berlin: 'Germany',
    Paris: 'France'
  };
  //console.log(Object.keys(cities))
  let countries = Object.keys(cities).reduce((acc, k) => {
    //console.log('acc ', acc)  
    //console.log('k ', k)
    //console.log('cities[k] ',cities[k])  
    let country = cities[k];
    //console.log('country ', country)
    //console.log('before assigning ', acc[country])
    acc[country] = acc[country] || [];
   // console.log('after assigning ', acc[country])
    acc[country].push(k);
    //console.log('acc' , acc)
    return acc;
  }, {});


  //console.log(cities['Berlin'])
  const cityObj = []
  const cityvalues = Object.values(cities)
  const cityVals = cityvalues.filter((element, index, array) => { 
      if(array.indexOf(element)==index) {
      return element
      }
  })
  console.log(cityVals)
  const valArray = []
 
 // for (const city in cities) {
      for (const cityVal of cityVals) {
        const val = []
        for (const city in cities) {
          console.log('cities[city]' , cities[city])
          console.log('cityVal', cityVal)
          if (cities[city] == cityVal) {
              console.log('city =', city)
              val.push(city)
              
          }
      }
      valArray.push({[cityVal] : val})
  }
  
  console.log('ValArray ', valArray)
 