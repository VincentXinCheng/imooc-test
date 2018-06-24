import React from 'react'
import {connect} from 'react-redux'
import {addDblGun,addGun,asyncAddGun,reduceGun} from './reducer'

@connect( state=>({num:state}),{addDblGun,addGun,asyncAddGun,reduceGun})
export class App extends React.Component{
  render(){
      let num=this.props.num;
      const addGun=this.props.addGun,
            addDblGun=this.props.addDblGun,
            reduceGun=this.props.reduceGun,
            asyncAddGun=this.props.asyncAddGun;
      // console.log(store.getState())

    return (<div>
      <h1> 余额为:￥{num}</h1>
      <button onClick={addGun} >+1</button>
      <button onClick={addDblGun} >+10</button>
      <button onClick={reduceGun} >-1</button>
      <button onClick={asyncAddGun}>ASYNC</button>
      {/* //store.dispatch 函数的结构是什么 */}
    </div>)
  }
}

export function Brazil(){
  return <h1>巴西</h1>
}
export function Swiden(){
  return <h1>瑞典</h1>
}

// const mapStateToProps=(state)=>{
//   return {num:state}
// }

//mapDispatchToProps  须返回对象  且在connect中作为第二个参数时，必须是以对象的形式
//而TodoList中 mapDispatchToProps 在函数中便执行了dispatch(actions)  而作为对象  就没有执行dispatch(0)
// const mapDispatchToProps=()=>{
//   return {addDblGun,addGun,asyncAddGun,reduceGun}
// }
/*mapDispatchToProps={addDblGun,addGun,asyncAddGun,reduceGun}
App=connect(mapStateToProps,mapDispatchToProps(App);
同样可以运行l
 
*/

// App=connect(mapStateToProps,mapDispatchToProps())(App);

// export default App;