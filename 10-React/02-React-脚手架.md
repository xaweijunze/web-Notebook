### 1.脚手架使用

全局安装脚手架：

> - npm install -g create-react-app //方式1
> - yarn add -g create-react-app //方式2
> - 然后 create-react-app react-demo
>

> 注意问题：在Mac环境下，发现正确安装create-react-app模块后，创建项目的时候，显示如下信息：
>
> ​		weijunzedeMacBook-Air:~ weijunze$ create-react-app --version
>
> ​		-bash: create-react-app: command not found
>
> ​	解决：
>
> 输入`npx create-react-app my-project`
>
> 原因：create-react-app不是内部命令，但是可以使用npx命令进行安装

​    "eject": "react-scripts eject"：

> 较为重要 
>
> npm run eject //暴露eject配置文件 会出现config、script文件和一些隐藏引用
>
> config文件夹内是webpack相关的配置文件包括babel-loader等
>
> script文件夹内是项目的入口文件

### 2.编写Hello World

- sass支持
  - 将App.css修改为App.scss ， 这样css将支持嵌套语法
  - 安装sass：yarn add node-sass --save（或yarn add node-sass -S）
- 运行项目：根据package.json配置 执行yarn start/yarn run start

```js
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
复制代码
```

**App.scss**

```js
//复合样式
div {
  text-align: center;
  font-size:32px;
  h1 {
    color: red;
    font-size: 30px;
  }
}
复制代码
```

**App.js**

```js
import React from 'react';
import './App.scss';

class App extends React.Component{

    state = {
        val:'',
        list:[]
    }

    handleChange=(event)=>{
        let val = event.target.value;
        this.setState({
            val
        })
    }


    handleAdd=()=>{
        let {val,list} = this.state;
        list.push(val);
        this.setState({
            list
        })
    }

    render() {
        const {val,list} = this.state;
        return <div>
            <p>欢迎学习react</p>
            <h1>Hello World</h1>
            <input type="text" value ={val} onChange={this.handleChange}/>
            <button onClick={this.handleAdd}>添加</button>
            <ul>
                {list.map((item)=>{
                    return <li>{item}</li>
                })}
            </ul>
        </div>
    }
}


export default App;

复制代码
```

### 3. AntD UI框架使用

[Ant Design](https://link.juejin.cn?target=https%3A%2F%2Fant.design%2Fdocs%2Freact%2Fintroduce-cn)

#### 安装

- npm install antd --save
- yarn add antd
- babel-plugin-import 按需加载

#### 代码

```js
import React from 'react';
import {Input,Button,Select} from "antd";
import 'antd/dist/antd.css'

const Search = Input.Search;
const Option = Select.Option;
class AntD extends React.Component{

    state = {
        val:'',
        list:[]
    }

    handleChange=(event)=>{
        let val = event.target.value;
        this.setState({
            val
        })
    }


    handleAdd=()=>{
        let {val,list} = this.state;
        list.push(val);
        this.setState({
            list
        })
    }

    handleSearch=(value)=>{
        let {list} = this.state;
        list.push(value);
        this.setState({
            list
        })
    }

    render() {
        const {val,list} = this.state;
        const options =[];
        //width 是一个object对象
        const width = {width:300};

        return <div>
            <p>欢迎学习react</p>
            <h1>Hello World</h1>
            <Input type="text" value ={val} style={width} onChange={this.handleChange}/>
            <Button type={"primary"} onClick={this.handleAdd}>添加</Button>
            <ul>
                {list.map((item,index)=>{
                    options.push(<Option key={index}>{item}</Option>)
                    return <li key={index}>{item}</li>
                })}
            </ul>
            <div>
                <Search
                    style={width}
                    enterButton={"搜索"}
                    onSearch={this.handleSearch}/>
                    <br/>
                <Select style={{width:200}} >
                    {options}
                </Select>
            </div>
        </div>
    }
}

export default AntD;

复制代码
```

**index.js**

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AntD from "./AntD";

ReactDOM.render(
  <React.StrictMode>
    {/*<App />*/}
    <AntD />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
```



