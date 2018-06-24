import React from 'react'
import { connect } from 'react-redux'
import {login} from '../actions'
import {Redirect} from 'react-router-dom'

@connect(state=>({isAuth:state.inAuth}),{login})
export default class Login extends React.Component{
    render(){

 
            return  (<div>
                  <h1>登录界面</h1>
                  <button onClick={loginClick}>登录</button>
           </div>)
          

    }
}