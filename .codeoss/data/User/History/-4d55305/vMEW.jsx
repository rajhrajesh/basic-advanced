import * as React from 'react';


const useStorageState = () => {
  const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem('search') || ''
  )

  React.useEffect(()=>{
    localStorage.setItem('search', searchTerm)
  },[searchTerm])
}


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

  const [searchTerm, setSearchTerm] = React.useStorageState('React');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search search={searchTerm} onSearch={handleSearch} />

      <hr />

      <List list={searchedStories} />
    </div>
  );
};

const Search = ({ onSearch, search }) => (
  <div>
    <label htmlFor="search">Search: </label>
    <input value={search} id="search" type="text" onChange={onSearch} />
  </div>
);

const List = ({ list }) => (
  <ul>
    {list.map((item) => (
      <Item key={item.objectID} fine="rajesh" love="rajh_" {...item} />
    ))}
  </ul>
);

const Item = ({
  url, title, author, num_comments, points, love ,fine }
) => (
  <li>
    <span>
      <a href={url}>{title}</a>
    </span>
    <span>{author}</span>
    <span>{num_comments}</span>
    <span>{points}</span>
    <span>{love}{fine}</span> {/* Display the custom property if needed */}
  </li>
);


export default App;
