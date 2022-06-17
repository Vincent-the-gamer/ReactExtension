import React from 'react';
// import {Component} from "react";
import ReactDOM from "react-dom";

//类式组件
// class Demo extends Component {
//     state = {count: 0}
//
//     myRef = React.createRef()
//
//     add = ()=>{
//         this.setState((state) => ({count: state.count+1}))
//     }
//
//     show = ()=> {
//         alert(this.myRef.current.value)
//     }
//
//     componentDidMount() {
//         this.timer = setInterval(() => {
//             this.setState( state => ({count: state.count+1}))
//         },1000)
//     }
//
//     componentWillUnmount() {
//         clearInterval(this.timer)
//     }
//
//     render() {
//         return (
//             <div>
//                 <input type="text" ref={this.myRef}/>
//                 <h2>当前求和为{this.state.count}</h2>
//                 <button onClick={this.add}>点我加1</button>
//                 <button onClick={this.show}>点我提示数据</button>
//             </div>
//         );
//     }
// }


//Hooks：让函数式组件也能用state等类式组件可以用的东西
function Demo(){
    //State Hook: React.useState 模拟setState
    // React.useState是一个数组，只有两个元素，第一个是状态，第二个是更新状态的方法
    // React.useState括号中填入状态的初始值
    const [count,setCount] = React.useState(0)
    const [name,setName] = React.useState('老电线')
    const myRef = React.useRef()

    //Effect Hook: React.useEffect 模拟生命周期钩子
    //useEffect如果不传第二个参数，则默认监测所有内容的改变，
    //useEffect在组件挂载时会调用一次，相当于componentDidUpdate()
    //如果写空数组，则谁也不监测，此时相当于componentDidUpdate()
    React.useEffect(() => {
      const timer = setInterval(() => {
          add()
      },1000)
        return () => {  //相当于componentWillUnmount()
          clearInterval(timer)
        }
    },[])

    //加的回调
    function add(){
        // setCount(count + 1) //第一种写法
        setCount(count => count+1) //第二种方法
    }

    //提示输入的回调
    function show(){
        alert(myRef.current.value)
    }

    //改名的回调
    function changeName(){
        setName('jack')
    }


    return (
        <div>
            <input type="text" ref={myRef}/>
            <h2>当前求和为: {count}</h2>
            <h2>我的名字是：{name}</h2>
            <button onClick={add}>点我加1</button>
            <button onClick={changeName}>点我改名</button>
            <button onClick={show}>点我提示输入</button>
        </div>
    )
}

export default Demo;