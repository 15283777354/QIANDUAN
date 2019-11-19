import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import HomePage from './HomePage/homePage'
import{BrowserRouter,Route,Switch,Redirect} from'react-router-dom'
import LoginPage from './Login/login';
import RegisterPage from './Register/register';
import StudentPage from './Student/studentone';
import HouqinPage from './Houqin/houqin';
class IndexPage extends React.Component{
    render(){
        return(
            <div>
                <div>
                    西南交通大学希望学院寝室报修系统
                </div>
                <BrowserRouter basename='react-example'>
                <Switch>
                <Route path="/homepage" component={HomePage}></Route>
                <Route path="/login" component={LoginPage}></Route>
                <Route path="/register" component={RegisterPage}></Route>
                <Route path="/studentone" component={StudentPage}></Route>
                <Route path="/houqin" component={HouqinPage}></Route>
                <Redirect to="/homepage"></Redirect>
                </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
//直接在html上渲染组件
ReactDOM.render(<IndexPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
