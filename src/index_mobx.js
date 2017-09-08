import React, {Component} from 'react';
import { render } from 'react-dom';
import {observable,useStrict,action,computed} from 'mobx';
import {observer} from 'mobx-react';


useStrict(true);
// 最简单的 mobx 就是一个观察者模式

class Store {
  // 被观察者
  @observable todos = [{
    title: "todo标题",
    done: false,
  },{
    title: "已经完成 todo 的标题",
    done: true,
  }];
  @action changeTodoTitle({index,title}){
    this.todos[index].title = title
  };
  @computed get finishedTodos () {
    return  this.todos.filter((todo) => todo.done)
  }
}

// 观察者
@observer
class TodoBox extends Component  {
  render() {
    console.log('render');
    const { store } = this.props;
    return (
      <div>
        <ul>
          { store.finishedTodos.map((todo,i) => 
              <li key={i}>{todo.title}</li>)
          }
        </ul>
        <div>
          <input type="button" onClick={() => {
            // 直接修改仓库中的状态值
            store.changeTodoTitle({index:0,title:'你修改成功了'})
            // store.todos[0].title = "修改后的todo标题"
          }} value="点我"/>
        </div>
      </div>
    )
  }
}


const store = new Store();

render(
  <TodoBox store={store} />,
  document.getElementById('root')
);