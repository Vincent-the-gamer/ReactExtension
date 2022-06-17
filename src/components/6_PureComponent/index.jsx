import React, { PureComponent } from 'react';
import './index.css'

// Component的2个问题
// 只要执行setState(), 即使不改变状态数据, 组件也会重新render() ==> 效率低
// 只要当前组件重新render(), 就会自动重新render子组件，纵使子组件没有用到父组件的任何数据 ==> 效率低

export default class Parent extends PureComponent {
    state = {carName:"奔驰c63"}
    // carName: '迈巴赫'
    changeCar = ()=>{
        this.setState({carName: '迈巴赫'})
    }
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     // console.log(this.state) //目前的props和state
    //     // console.log(nextState) //接下来要变化的目标props,目标state
    //     return this.state.carName !== nextState.carName
    // }

    render() {
        const {carName} = this.state
        console.log('parent--render')
        return (
            <div className="parent">
                <h3>我是Parent组件</h3>
                <span>我的车名字是:  {carName}</span>
                <br/>
                <button onClick={this.changeCar}>点击换车</button>
                <Child carName="奥拓"/>
            </div>
        );
    }
}

class Child extends PureComponent{

    // shouldComponentUpdate(nextProps,nextState){
    //     return this.props.carName !== nextProps.carName
    // }

    render() {
        console.log('child--render')
        return (
            <div className="child">
                <h3>我是Child组件</h3>
                <span>我接到的车是：{this.props.carName}</span>
            </div>
        )
    }
}