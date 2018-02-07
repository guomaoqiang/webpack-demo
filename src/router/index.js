import React from 'react';
// 这里使用react-router-dom中的HashRouter，4之前的版本引用方法是：
import {
  Router,
  Route,
  hashHistory
} from 'react-router';
// Router是根路由，由history属性来决定使用哪一种路由方式
// import {
// 		HashRouter as Router,
// 		Route,
// 		Switch,
// 		hashHistory
// } from 'react-router-dom';
// import Demo from './modules/demo/demo';

// // touch 下拉刷新，上拉加载更多
// import Antd from './modules/demo/antd';

// // 下拉刷新，向上滚动加载更多
// import add from './modules/demo/add';

import New from './modules/news/index';

console.log(New);

export default const App = () => {
	return (
		<Router history={hashHistory}>
			{/*<Route path='/demo' component={Demo}/>
			<Route path='/antd' component={Antd}/>
			<Route path='/add' component={add}/>*/}
			<Route path='/new' component={New}>
		</Router>
	)
}


