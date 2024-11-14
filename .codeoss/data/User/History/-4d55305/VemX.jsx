
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
  }
]
const App = () => {
  return(
    <div> <div>
      <h1>My Hacker Stories</h1>
      <Search />
      <hr />
      <List list={stories} />
    </div></div>
  )
}

export default App

const Search = () => {

  const handleChange = (event) => {
    console.log(event)
    console.log(event.target.value)
  }

return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
      
    </div> 
)
}

const List = (props) => (

    <ul>
      {props.list.map((item)=> (
          <Item key={item.objectID} item={item} />

      ))}
    </ul>
)

const Item = (props) => (
    <li>
      <span>
        <a key={props.item.url}>{props.item.title}</a>
      </span>
    </li>
)

