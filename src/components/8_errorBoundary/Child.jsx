import React, {Component} from 'react';

export default class Child extends Component {

    state = {
        // users:[
        //     {id: '001',name: '老电线',age:18},
        //     {id: '002',name: '南愁',age:19},
        //     {id: '003',name: '纸张',age:20},
        // ]
        users: '123'  //模拟错误的传值
    }

    render() {
        return (
            <div>
                <h2>我是Child组件</h2>
                {
                    this.state.users.map((userObj)=> {
                        return <h4 key={userObj.id}>{userObj.name}---{userObj.age}</h4>
                    })
                }
            </div>
        );
    }
}
