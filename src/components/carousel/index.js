/**
 * 轮播图
 * @param  {object}
 options = {
  container:'', 选择的元素 class or id
 }
 * 
 */

class Carousel {

	constructor(options) {
		console.log(options);
		this.ele = document.querySelector(options.container);
		this.element =  options.container;
		this.sliderTime = options.sliderTime || 2000;
		this.ele_width = this.ele.clientWidth,
		this.ele_length = this.ele.children.length,
		this.ele_chliden = this.ele.children,
		this.flag = this.ele_length - 1;  // 元素是否
		this.move = 0; // 元素滚动的距离

		this.distance = 0;
		// this.options = options;
		this.init();
		this.start();
		this.bindEvent();
	}
	// 元素是用绝对定位，所以给每个元素添加不同的left，排成一排。
	init() {
		let {
			ele_width,
			ele_chliden,
			ele_length
		} = this;
		for (let i=0;i<ele_length;i++) {
			ele_chliden[i].style.left = i*ele_width+'px';
		}
		ele_chliden[ele_length-1].style.left = -ele_width+'px';
	}
	start() {
		this.timer = setInterval(() => {
			this.rightSlider();
		},this.sliderTime)
	}
	// 右滑
	rightSlider() {
		let {
			ele_width,
			ele_chliden,
			ele_length
		} = this;
		this.move += ele_width;
		this.ele.style.transform = `translateX(-${this.move}px)`;
		this.distance = parseInt(ele_chliden[this.flag].style.left);
		this.distance += ele_length*ele_width;
		if (Math.abs(this.move) >= Math.abs((ele_length-1)*ele_width)) {
			ele_chliden[this.flag].style.left = this.distance +'px';
			this.flag++;
			if (this.flag ===  ele_length) {
				this.flag = 0;
			}
		};
	}
	// 左滑
	leftSlider() {
		let {
			ele_width,
			ele_chliden,
			ele_length
		} = this;
		this.move += ele_width;
		this.ele.style.transform = `translateX(${this.move}px)`;
		this.distance = parseInt(ele_chliden[this.flag-1].style.left);
		this.distance -= ele_length*ele_width;
		if (Math.abs(this.move) >= ele_width) {
			ele_chliden[this.flag-1].style.left = this.distance +'px';
			this.flag--;
			if (this.flag === 0) {
				this.flag = this.ele_length;
			}
		};
	}
	bindEvent() {
		let start = null,
			middle = null,
			end = null;
		this.ele.addEventListener('touchstart',(e) => {
			clearInterval(this.timer);
			start = e.changedTouches[0].clientX;
		},false);
		this.ele.addEventListener('touchmove',(e) => {
			middle = e.changedTouches[0].clientX;
			let st = middle - start;
			st = Math.abs(st) >= 750 ? -750 : st;
			let stan = st - this.move;
			this.ele.style.transform = `translateX(${stan}px)`;
		},false);
		this.ele.addEventListener('touchend',(e) => {
			end = e.changedTouches[0].clientX;
			let distance = end - start;
			if ( end - start > 100) {
				console.log(1)
			} else if (start-end > 100) {
				console.log(100);
				this.move += this.ele_width;
				this.ele.style.transform = `translateX(-${this.move}px)`;
			}
			this.start();
		},false);
	}
}

export default Carousel