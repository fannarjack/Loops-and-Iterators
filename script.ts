{
  
type listTypes = {
  name: string,
  birthdate: string,
  children: number,
  country: string,
  can_program: boolean
}

let list = [
  {
    name: "Grazia Du Fray",
    birthdate: "8/18/1974",
    children: 0,
    country:"Argentina",
    can_program:true
  },

  {
    name:"Mella Issitt",
    birthdate:"12/6/1951",
    children:0,
    country:"China",
    can_program:false
  },
  {
    name:"Ruddy Proughten",
    birthdate:"11/26/1972",
    children:5,
    country:"Croatia",
    can_program:false
  },

  {
    name:"Janos Lyptrade",
    birthdate:"3/23/1959",
    children:4,
    country:"Yemen",
    can_program:true
  },

  {
    name:"Phyllys Bye",
    birthdate:"10/12/1989",
    children:3,
    country:"Vietnam",
    can_program:true
  },

  {
    name:"Simone Bernlin",
    birthdate:"6/21/1968",
    children:0,
    country:"Portugal",
    can_program:false
  },

  {
    name:"Ulrika Arnaudon",
    birthdate:"9/23/1983",
    children:1,
    country:"China",
    can_program:false
  },

  {
    name:"Jacquette Western",
    birthdate:"1/27/2003",
    children:2,
    country:"China",
    can_program:false
  },

  {
    name:"Thurstan Mollene",
    birthdate:"4/3/1963",
    children:2,
    country:"Ukraine",
    can_program:false
  },

  {
    name:"Ruthe Nyles",
    birthdate:"2/18/1952",
    children:0,
    country:"China",
    can_program:true
  }
]



/*
Outputs how many children all people have, in total (Ex.: Bia has 2 kids, Paul has 3, so the total 5)
*/
let numberOfChildren = 0;
for(let childrens of list ){
  numberOfChildren = childrens.children + numberOfChildren 
}
console.log(numberOfChildren)
/*---------------------------- */
for(let i = 0; i < list.length; i++) {
  numberOfChildren = list[i].children + numberOfChildren
}
/*
Got to this solution with the help of chatgpt - using a forloop
Outputs one string per person formatted as such:
name: Age
*/

const formattedPeople: string[] = [];

for(let i = 0; i < list.length; i++){
  const person = list[i];
  formattedPeople.push(
    `${person.name} was born on ${person.birthdate}, has ${person.children} child(ren), lives in ${person.country}, and ${person.can_program ? 'can' : 'cannot'} program.`
  )
}
console.log(formattedPeople.join("\n"))

/* 
Output all properties of all people using for…in
Ex.:
name: Freddy McCready
Birth Date:  7/1/1987
Children: 3
Country: Australia
Can program: Yes
*/



for(let i = 0; i < list.length; i++){
  for (const name in list[i]){
    console.log(name + " : " + list[i][name]);
  }
}

}