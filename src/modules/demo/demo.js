import React,{ Component } from 'react';
import './index.scss';

import Toast from '../../components/toast';

// import 'antd-mobile/dist/antd-mobile.css';
import { PullToRefresh, ListView, Button } from 'antd-mobile';


// 图片上传
import imgLoader from 'components/imgLoader';


// console.log(imgLoader);

export default class Demo extends Component {
	state = {
		imgSrc: null
	}
	open() {
		this.refs.toast.open('你很厉害哦');
	}
	componentDidMount() {
		new imgLoader({
			selector: '.file',
			callback: (res) => {
				console.log(res);
				this.setState({
					imgSrc: res.base64Img
				})
			}
		})
	}
	render() {
		const imgClass = this.state.imgSrc ? 'img':'img dsn'; 
		return (
			<div className='demo'>
				<Toast ref='toast'/>
				<div onClick={() => {this.open()}}>1232312</div>
				<Button>start</Button>
				<div className='upImg'>
					<input type='file' className='file'/>
					<img src={this.state.imgSrc} className={imgClass}/>
				</div>
			</div>
		)
	}
}