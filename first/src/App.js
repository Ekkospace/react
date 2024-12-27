
//在react中，状态被认为是只读的，只能通过setState()方法来修改状态(而不是count++)，而不能直接修改状态，而是直接替换他们。
//直接替换状态会导致组件不会重新渲染(引发视图的更新)，因为react无法检测到状态的变化。

import {useState}from 'react';
import './index.css';

const count = 100;
const list=[
  {id:1,name:'John'},
  {id:2,name:'Doe'},
  {id:3,name:'Smith'},
]
const isLogin = false; 

const articleType= 0;

//箭头函数与function组件 组件开头首字母需要大写
//箭头函数
const Button = () => {
  return <button>Click me!!!</button>
}


// {/* <defineButton /> */}
// function Button() {
// //业务 逻辑组件
//   return <button>Click me!!!</button>
// }


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

  //1.10.3 行内样式控制
  const style = { color: 'red', fontSize: '50px' };

function App() {

  // {/**Event handling e*/}
  // const handleClick = (e) => {console.log('clicked',e)};

  // {/**Event handling name*/}
  // const handleClick = (name) => {console.log('clicked',name)};

  // {/**Event handling name and e*/}
  // const handleClick = (name, e) => {console.log('clicked',name, e)};
  
  //1.10 Use state
  const [count, setCount] = useState(0);
  //1.10.1 Event handling 点击事件回调
  const handleClick = () => {
    //作用：用传入的新值修改count 和 重新使用新的count值渲染ui
    setCount(count + 2)};
  //1.10.2 修改对象状态
  const [form, setForm] = useState({name: 'Ekko'});

  const changeForm = () => {  
    // 错误写法form.name = 'Jack';
    //正确写法
    setForm({
      name: 'Jack'
  })

}
  
  
  return (
    <div className="App">
      {/**Using component 自闭和*/}
      <Button />
      {/**Using component 成对标签*/}
      <Button></Button>


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

    
        <div className= "App">
        <button onClick={(e) => handleClick('ekko',e)}>Click me</button>
        </div>

        {/* //1.10 Use state   
        // UseState是一个hook函数，返回值是一个数组
        // 数组中的第一个参数是状态变量，第二个是set函数用来修改状态变量
        // UseState的参数将作为count的初始值*/}
        <button onClick={handleClick}>{count}</button>
        <button onClick={changeForm}>修改form{form.name}</button>

        {} 
        <span style={style}>this is red</span>
        <div>
        <span className="foo">this is class foo improt from index.css</span>
        </div>


        
   
    </div>
    
  );
}




export default App;
