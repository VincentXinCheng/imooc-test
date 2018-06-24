import React from 'react'
import {BrowserRouter,Link,Route} from 'react-router-dom'
import Germany from './Germany'
import Brazil from './Brazil'
import Belguim from './Belguim'
import { connect } from 'react-redux'
import {logout} from '../actions'

@connect(()=>{},{logout})
export default class Teams extends React.Component(){
    constructor(){
        super(props)
    }
      render(){
          const logoutClick=this.props.logout;
          return (
              <BrowserRouter>
             <div>
                   <ul>
                        <li>
                            <Link to='/teams/Germany'>德国</Link>
                        </li>
                        <li>
                            <Link to='/teams/Brazil'>巴西</Link>
                        </li>
                        <li>
                            <Link to='/teams/Belguim'>比利时</Link>
                        </li>

                    </ul>
                     <button onClick={logoutClick}>注销</button>


               
                    <Route path='/teams/Germany' component={Germany}/>
                     <Route path='/teams/Brazil' component={Brazil}/>
                     <Route path='/teams/Belguim' component={Belgium}/>
                     </div>
             </BrowserRouter>
          )
      }
}