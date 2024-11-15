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


const initialStories = [
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
const App = () => {

  const [searchTerm, setSearchTerm] = useStorageState('', '');

  const [stories, setStories] = React.useState(initialStories)

  const handleRemoveStory = (item) => {
    const newStories = stories.filter(
      (story) => item.objectID !== story.objectID
    );

    setStories(newStories);
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <React.Fragment>
      <h1>My Hacker Stories</h1>

      <InputWithLabel id="search" type="text" value={searchTerm} onInputChange={handleSearch}
      >
        <strong>Search:!</strong>
      </InputWithLabel>

      <hr />

      <List list={searchedStories} onRemoveItem={handleRemoveStory} />


    </React.Fragment>
  );
};
const InputWithLabel = ({ id, value, onInputChange, type, children, isFocused }) => {

  const inputRef = React.useRef();

  React.useEffect(() => {

    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }

  }, [isFocused])

  return (
    <>
      <label htmlFor={id}>{children}</label>
      &nbsp;
      <input autoFocus ref={inputRef} id={id} value={value} type={type} onChange={onInputChange} />

    </>
  )

}
const List = ({ list, onRemoveItem }) => (
  <ul>
    {list.map((item) => (
      <Item key={item.objectID} {...item} onRemoveItem />
    ))}
  </ul>
);

const Item = ({
  url, title, author, num_comments, points, onRemoveItem }
) => {
  const handleRemoveItem = () => {
    onRemoveItem(item)
  }
  return (
    <li>
      <span>
        <a href={url}>{title}</a>
      </span>
      <span>{author}</span>
      <span>{num_comments}</span>
      <span>{points}</span>
      <button onClick={handleRemoveItem}>Dismiss</button>
    </li>
  )
};


export default App;
