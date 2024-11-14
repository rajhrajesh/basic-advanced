import React, { useState } from 'react';

const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    console.log(searchTerm)
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) => 
  story.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  ) 



  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search onSearch = {handleChange} />

      <hr />

      <List list={searchedStories} />
    </div>
  );
};

const Search = (props) => {

    return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={props.onSearch} />
      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </div>
  );
};

const List = ({ list }) => (
  <ul>
    {list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);


const Item = ({ item }) => (
  <li>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </li>
);

export default App;