import React from 'react'

// const person = {
//   name:"Bruce",
//   age:36,
//   location : 'Gotham City'
// }

// we can do like this 
// person.name ; 
// also we can do destructuring 
// const{name,age,location} = person;
// console.log(name);

const Search = ({searchTerm,setSearchTerm}) => {
  return (
    // props should never be changed by child components ; 
    // its only read only 
    // searchTerm = "I am Goku"; 
    // mutation of the props variable is not allowed 
    // you should not mutate props 
    // you should never mutate state 
    <div className="search">
      <div>
        <img src="search.svg" alt="search" />
        <input type="text" placeholder='Search through thousands of movies'
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)} />
      </div>
    </div>
  )
}

export default Search;