import * as React from 'react';

const useStorageState = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  )

  React.useEffect(() => {
    localStorage.setItem(key, value)
  }, [value, key])

  return [value, setValue]
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

  const [searchTerm, setSearchTerm] = useStorageState('', '');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <React.Fragment>
      <h1>My Hacker Stories</h1>

      {/* <Search search={searchTerm} onSearch={handleSearch} /> */}
      <InputWithLabel id="search" label="Search" type="text" value={searchTerm} onInputChange={handleSearch} />

      <hr />

      <List list={searchedStories} />


    </React.Fragment>
  );
};

// const Search = ({ onSearch, search }) => (
//   <>
//     <label htmlFor="search">Search: </label>
//     <input value={search} id="search" type="text" onChange={onSearch} />
//   </>
// );

// Reusable React Component
const InputWithLabel = ({ id, label, value, onInputChange, type}) => (
  <>
    <label htmlFor={id}>{label}</label>
    &nbsp;
    <input id={id} value={value} type={type} onChange={onInputChange} />

  </>

)
const List = ({ list }) => (
  <ul>
    {list.map((item) => (
      <Item key={item.objectID} fine="rajesh" love="rajh_" {...item} />
    ))}
  </ul>
);

const Item = ({
  url, title, author, num_comments, points, love, fine }
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
