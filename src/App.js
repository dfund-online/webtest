import logo from './logo.svg';
import './App.css';

import {Button} from 'antd'
import { Input } from 'antd';
const { TextArea } = Input;

function App() {
  return (
    <div className="App">
      <h1 align="left">根据abi计算函数selector</h1>
      <TextArea rows={12} />
      <Button type="primary"  align="left">计算</Button>
      <TextArea rows={12} />
    </div>
  );
}

export default App;
