import React, {Component} from 'react';


export default class Demo extends Component {

    state = {count:0}

    add = ()=> {
        //1.获取原来的count值
        //  const {count} = this.state
        //2。更新状态
        //对象式的setState
        // this.setState({count: count+1},()=>{
        //     console.log('setState的回调输出：',this.state.count) //值为已更新的状态
        // })
        // console.log('setState的下方输出：',this.state.count)  //值为未更新的状态

        //React状态的更新是异步的
        //第二个参数callback是可选的回调函数, 它在状态更新完毕、界面也更新后(render调用后)才被调用

        //函数式的setState参数可以拿到state和props
        this.setState(state => ({count: state.count+1}) )

    }

    render() {
        return (
            <div>
                <h1>当前求和为:{this.state.count}</h1>
                <button onClick={this.add}>点我+1</button>
            </div>
        );
    }
}