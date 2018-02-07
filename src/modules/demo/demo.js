import React,{ Component } from 'react';
import './index.scss';

import Toast from '../../components/toast';

// import 'antd-mobile/dist/antd-mobile.css';
import { PullToRefresh, ListView, Button } from 'antd-mobile';


// 图片上传
import imgLoader from 'components/imgLoader';
// 图片轮播
import Carousel from 'components/carousel';




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
		let a = new Carousel({
			container: '.ul-view',
			sliderTime: 3000
		})
		console.log(a);
		// let dom = document.querySelector('carousel');
		// let li = document.querySelectorAll('.ul-li'); // 所有图片的集合
		// let ul = document.querySelector('.ul-view');
		// let len = li.length;
		// let width = li[0].clientWidth;
		// console.log(width);
		// let num = 0;
		// for (let i=0;i<len;i++) {
		// 	li[i].style.left = i*width+'px';
		// }
		// let fi = 0;
		// let issc = false;
		// let stn = null;
		// this.timer = setInterval(() => {
		// 	num++;
		// 	if (num==len) {
		// 		// li[fi].style.left = len*width+'px';
		// 		issc = true;
		// 	};
		// 	if (issc) {
		// 		let aa = li[fi].style.left;
		// 		// console.log(aa);
		// 		aa = parseInt(aa);
		// 		aa += len*width;
		// 		li[fi].style.left = aa + 'px';
		// 		fi ++ ;
		// 		if (fi === len) {
		// 			fi = 0;
		// 		}
		// 		// console.log(fi);
		// 	}
		// 	stn += -750; 
		// 	ul.style.transform = `translateX(${stn}px)`;
		// },2000)
		// let prev = document.querySelector('.prev');
		// let next = document.querySelector('.next');
		// // 上一页
		// document.querySelector('.carousel').addEventListener('touchstart',() => {
		// 	// ul.style.left = animate('prev'); 
		// 	console.log(12);
		// 	clearInterval(this.timer);
		// });
		// // 下一页
		// next.addEventListener('click',() => {
		// 	ul.style.left = animate(); 
		// });
		// function animate() {

		// }
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
				<div className='carousel'>
					<ul className='ul-view'>
						<li className='ul-li'>
							<img src='http://img07.tooopen.com/images/20170226/tooopen_sy_199659683184.jpg'/>
						</li>
						<li className='ul-li'>
							<img src='http://img.taopic.com/uploads/allimg/120727/201995-120HG1030762.jpg'/>
						</li>
						<li className='ul-li'>
							<img src='http://pic20.nipic.com/20120504/9174242_113752197000_2.jpg'/>
						</li>
						<li className='ul-li'>
							<img src='http://img05.tooopen.com/images/20150820/tooopen_sy_139205349641.jpg'/>
						</li>
						<li className='ul-li'>
							<img src='http://img07.tooopen.com/images/20170226/tooopen_sy_199659683184.jpg'/>
						</li>
					</ul>
					<div className='btn'>
						<span>1</span>
						<span>2</span>
						<span>3</span>
						<span>4</span>
					</div>
					<a href="javascript:;" className="arrow prev">&lt;</a>
					<a href="javascript:;" className="arrow next">&gt;</a>
				</div>
			</div>
		)
	}
}