import React from 'react';
import ReactDOM from 'react-dom';
import {App,Brazil,Swiden}from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,applyMiddleware,compose} from 'redux'
import {reducer} from './reducer'
import thunk from 'redux-thunk' //异步处理插件
import {Provider} from 'react-redux'
import {BrowserRouter,Route,Link} from "react-router-dom"
const store=createStore(reducer,compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():()=>{}
));


ReactDOM.render(

    <Provider store={store} >

           <BrowserRouter>
           <div>
           <ul>
               <li>
               <Link to="/">德国</Link>

               </li>
               <li>
     <Link to="/Brazil">巴西</Link>

               </li>

               <li>
               <Link to="/Swiden">瑞典</Link>

               </li>

           </ul>

     <Route path="/" exact component={App}></Route>
     <Route path="/Brazil" component={Brazil}></Route>
      <Route path="/Swiden" component={Swiden}></Route>
    {/* <App  /> */}
    </div>
    </BrowserRouter>

    </Provider>, 
    document.getElementById('root')
);  




registerServiceWorker();
