
const count = 100;
const list=[
  {id:1,name:'John'},
  {id:2,name:'Doe'},
  {id:3,name:'Smith'},
]


function getnName() {
  return 'John Doe';
}

function App() {
  return (
    <div className="App">
      this is app
      {/** Passing strings using quotes */}
      {'this is message'}
      {/** Passing numbers */}
      {1}
      {/** Passing boolean */}
      {count}
      {/** Passing function */}
      {getnName()}
      {/** Passing array */}
      <div>
      {new Date().getFullYear()}
      </div>
      <div style={{ color: 'red' }}>this is red</div>

      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
    
  );
}

export default App;
