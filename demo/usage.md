---
title: Simple Usage
order: 1
---

组件支持受控和非受控两种模式。

```jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import IconSelect from '@riil-frontend/component-icon-select';
const iconList=['atm','help','smile','cry','atm','help','smile','cry','atm','help','smile','cry','atm','help','smile','cry','atm','help','smile','cry','atm','help','smile','cry','atm','help','smile','cry','atm','help','smile','cry','atm','help','smile','cry','atm','help','smile','cry']
function App () {
  	const [current, setCurrent] = useState('atm');
    return (
      <div>
        <span>受控</span>
        <IconSelect value={current} 
          onChange={
            (value)=>{
              console.log(value);
              setCurrent(value)
            }
          } 
          defaultValue='atm' 
          iconList={iconList}/>
        <br/>
        <span>非受控</span>
        <IconSelect 
          defaultValue='atm' 
          iconList={iconList} 
          onChange={
            (value)=>{console.log(value)}
          }/>
      </div>
    );
}

ReactDOM.render((
  <App />
), mountNode);
```
