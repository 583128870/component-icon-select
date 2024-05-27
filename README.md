# IconSelect

图标选择器，配合 next Icon 组件使用，待选列表和已选项为 Icon 组件的 type 值

## API

| 参数名       | 说明                     | 必填 | 类型         | 默认值 | 备注 |
| ------------ | ------------------------ | ---- | ------------ | ------ | ---- |
| onChange     | 组件选择触发回调         | -    | (value)=>{}  |        |      |
| value        | 图标选择值               | -    | string       |        |      |
| defaultValue | 初始值                   | -    | string       |        |      |
| iconList     | 图标下拉列表             | 必填 | [string]     |        |      |
| buttonProps  | 当前图标 Button 属性透传 | -    | ButtonProps  |        |      |
| overlayProps | 弹出层 overlay 属性透传  | -    | OverlayProps |        |      |
