import React, {Component,lazy,Suspense} from 'react';
import {NavLink,Route} from 'react-router-dom'

//注意，懒加载suspense组件的fallback组件必须在懒加载之前引入
import Loading from "./Loading";

//普通加载
// import Home from "./Home";
// import About from "./About";

//懒加载
const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))

//创建并暴露App组件
export default class Demo extends Component{
    render() {
        return(
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 原生html中，靠<a>跳转到不同的页面 */}
                            {/*<a className="list-group-item active" href="./about.html">About</a>*/}
                            {/*<a className="list-group-item" href="./home.html">Home</a>*/}
                            {/* 编写路由链接 --- 在React中靠路由链接实现切换组件 */}
                            <NavLink className="list-group-item" to="/about">About</NavLink>
                            <NavLink className="list-group-item" to="/home">Home</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}
                                <Suspense fallback={<Loading/>}>
                                    <Route path="/about" component={About}/>
                                    <Route path="/home" component={Home}/>
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

