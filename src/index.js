import React from 'react';
import ReactDOM from 'react-dom';
// 使用react-hot-loader包裹所有的组件
import {
    AppContainer
} from 'react-hot-loader';
// import './styles/index.scss'

import App from './app';


import './index.scss';

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <App />
        </AppContainer>,
        document.getElementById('root')
    )
}
render();

// 用于监听react模块的热更新
if (module.hot) {
    module.hot.accept('./App', () => {
        render(require('./App').default)
    })
}