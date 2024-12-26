
const count = 100;
const list=[
  {id:1,name:'John'},
  {id:2,name:'Doe'},
  {id:3,name:'Smith'},
]
const isLogin = false; 

const articleType= 0;


function getArticleTem() {
  if(articleType === 0){
    return <div>0 picture in article</div>
  }else if(articleType === 1){
    return <div>1 picture in article</div>
  }else if(articleType === 2){
    return <div>2 picture in article</div>
  }
}

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
      {/**basic Conditional rendering */}
      {isLogin && <span>this is span</span>}
      {isLogin ? <span>jack</span> : <span>Loading</span>}

      {/**Conditional rendering using function */}
      {getArticleTem()}


    </div>
    
  );
}

export default App;
