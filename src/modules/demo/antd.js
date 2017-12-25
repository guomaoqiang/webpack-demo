import React,{ Component} from 'react';
import { PullToRefresh, Button } from 'antd-mobile';
import ReactDOM from 'react-dom';
function genData() {
  const dataArr = [];
  for (let i = 0; i < 20; i++) {
    dataArr.push(i);
  }
  return dataArr;
}
export default class antd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      down: true,
      height: document.documentElement.clientHeight,
      data: [],
    };
  }
  componentWillMount() {
    this.state.data = [1,2,3,4,5,6,7,9,10,11,12,13,14,15]

  }
  componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    setTimeout(() => this.setState({
      height: hei,
      data: genData(),
    }), 0);
    // this.setState({
    //   height: hei
    // })
  }
  // 刷新之后的回调
  onRefresh() {
    console.log('xxx');
    this.setState({ refreshing: true });
    setTimeout(() => {
      this.setState({ refreshing: false });
    }, 1000);
  }
  render() {
    return (
      <div>
        <Button
          style={{ marginBottom: 15 }}
          onClick={() => this.setState({ down: !this.state.down })}
        >
          direction: {this.state.down ? 'down' : 'up'}
        </Button>
        <PullToRefresh
          ref={el => this.ptr = el}
          style={{
            height: this.state.height,
            overflow: 'auto',
          }}
          indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
          direction={this.state.down ? 'down' : 'up'}
          refreshing={this.state.refreshing}
          onRefresh={() => {this.onRefresh()}}
        >
          {this.state.data.map(i => (
            <div key={i} style={{ textAlign: 'center', padding: 20 }}>
              {this.state.down ? 'pull down' : 'pull up'} {i}
            </div>
          ))}
        </PullToRefresh>
      </div>
    );
  }
}
