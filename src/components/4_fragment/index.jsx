import React, {Component,Fragment} from 'react';

export default class Demo extends Component {
    render() {
        return (
            //Fragment类似于Vue 2的template，可以骗过一个组件只能有一个根标签的语法规则
            //Fragment标签在编译后不会在页面中出现，传入任何属性值都没有意义，但是它允许可以传入唯一一个属性: key来作为遍历的唯一标识
            //虽然在React中可以用<></>空标签来达到这个效果，但是空标签不允许传入key遍历
            <Fragment>
                <input type="text"/>
                <input type="text"/>
            </Fragment>
        );
    }
}