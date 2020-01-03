const numbers = [1,2,3]
let [numOne,numTwo,numThree] = numbers
console.log('numOne,numTwo,numThree ', numOne, numTwo, numThree)
const names = ['Mangalam','Sharanya','Sanjay','Shwetha']
let [name1, name2, name3, name4] = names
console.log('name1 name2 name3 name4 = ', name1, name2, name3, name4)
const decimals = [2.8, 3.4, 5.6, 7.8, 9.1, 8.2]
let [decimal1, decimal2, decimal3, decimal4, decimal5, decimal6] = decimals
console.log('decimal1, decimal2, decimal3, decimal4, decimal5, decimal6 ', decimal1, decimal2, decimal3, decimal4, decimal5, decimal6)
const nums = [4,5,6]
let [nums1,,,nums3] = nums
//console.log(nums1,, nums3) ----> not working
const persons = ['John', 'Sam', 'David','Kate']
let [, person2, ,person4] = persons
console.log('person2, person4 = ', person2 , person4)
const contacts = [undefined, 'Charu', 'Krishnan']
let [contact1 = 'Lakshmi', contact2, contact3, contact4 = 'Gowri'] = contacts
console.log('contact1, contact2, contact3, contact4 = ', contact1, contact2, contact3, contact4)
const rectangle = {width : 20, height : 10, area : 200}
let {width, height, area, perimeter} = rectangle
console.log('width, heigth, area, perimeter = ', width, height, area, perimeter)
const rectangle1 = {width: 30, height: 20, area: 600}
let {width: w, height: h, area: a, perimeter: p} = rectangle1
console.log('w, h, a, p = ', w, h, a, p)
const rectangle2 = {width2: 40, height2: 30, area2: 1200}
let {width2, height2, area2, perimeter2 = 140} = rectangle2
console.log('width2, height2, area2, perimeter2 = ', width2, height2, area2, perimeter2)
const rectangle3 = {width3 : 50, height3: 30, area3: 1500, perimeter3: 160}
let {width3 = 10, height3 = 20, area3 = 200, perimeter3 = 60} =rectangle3
console.log('width3, height3, area3, perimeter3 = ', width3, height3, area3, perimeter3)
const rect4 = {width4: 50, height4: 60}
const calculatePerimeter = rectangle => {return 2 * (rectangle.width4 + rectangle.height4)}
console.log('Perimeter = ', calculatePerimeter(rect4))
const calculatePerimeter1 = ({width4, height4}) => {return 2 * (width4 + height4)}
console.log('Perimeter = ', calculatePerimeter1(rect4))
const personDetails = {
    firstName : 'Mangalam',
    lastName : 'Krishnan',
    age : 34,
    country : 'India',
    skills : ['HTML',  'CSS', 'JavaScript'],
    job : 'Software Developer',
    languages: ['English', 'Japanese', 'Suomi(Finnish)']

}
const getPersonalInfo = obj => {
    const skills = obj.skills
    console.log('Skills are ', skills)
    const formattedSkills = skills.slice(0,2).join(',')
    console.log('Formatted skills are ', formattedSkills)
    const languages = obj.languages
    console.log('Languages are ', languages)
    const formattedLanguages = languages.slice(0,2).join(',')
    console.log('Formatted languages are ', formattedLanguages)
    return `I am ${obj.firstName} ${obj.lastName}. I am ${obj.age} years old. I live in ${obj.country}. I am a ${obj.job}.My skills are ${formattedSkills}. I speak ${formattedLanguages} and little bit of ${languages[2]}`
}
const getPersonalInfo1 = ({firstName, lastName, age, country, skills, job, languages}) => {
    const formattedSkills = skills.slice(0, -1).join(',')
    const formattedLanguages = languages.slice(0,-1).join(',')
    return `I am ${firstName} ${lastName}. I am ${age} years old. I live in ${country}. I am a ${job}.My skills are ${formattedSkills}. I speak ${formattedLanguages} and little bit of ${languages[2]}`

}
console.log('My personal details are as below: ', getPersonalInfo(personDetails))
console.log('My personal details are : ', getPersonalInfo1(personDetails))

