
	// TAP_JUMP,
	// FINANCIAL_NEWS,
	// DEPTH_SPECIAL,
	// REAL_TIME_DYNAMIC,
	// ECONOMIC_DATA，
	// NEWS_CONTENT，
	// DEPTH_SPECIAL_CONTENT
import * as actionType from './actionType';

// 点击tap跳转
export const tapJump = (data) => {
	return {
		type: actionType.TAP_JUMP,
		data
	}
}
// 获取财经要闻的数据
// export tapJump = (data) => {
// 	return {
// 		type: actionType.FINANCIAL_NEWS,
// 		data
// 	}
// }

