// import { useState } from 'react'
// import Content from './Content_useReducer'

// import { useEffect } from "react";

// function App() {

//     const [show, setShow] = useState(false)

//     return (
//         <div>
//             <button onClick={() => setShow(!show)}>click</button>
//             {show && <Content />}
//         </div>
//     )
// }

// export default App

// import React, { useState } from 'react';
// import './index.css';
// import { DownloadOutlined } from '@ant-design/icons';
// import { Button, Radio, Space, Divider } from 'antd';
// import type { SizeType } from 'antd/es/config-provider/SizeContext';

// const App: React.FC = () => {
//   const [size, setSize] = useState<SizeType>('large'); // default is 'middle'

//   return (
//     <>
//       <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
//         <Radio.Button value="large">Large</Radio.Button>
//         <Radio.Button value="default">Default</Radio.Button>
//         <Radio.Button value="small">Small</Radio.Button>
//       </Radio.Group>
//       <Divider orientation="left" plain>
//         Preview
//       </Divider>
//       <Space direction="vertical">
//         <Space wrap>
//           <Button type="primary" size={size}>
//             Primary
//           </Button>
//           <Button size={size}>Default</Button>
//           <Button type="dashed" size={size}>
//             Dashed
//           </Button>
//         </Space>
//         <Button type="link" size={size}>
//           Link
//         </Button>
//         <Space wrap>
//           <Button type="primary" icon={<DownloadOutlined />} size={size} />
//           <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
//           <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} />
//           <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
//             Download
//           </Button>
//           <Button type="primary" icon={<DownloadOutlined />} size={size}>
//             Download
//           </Button>
//         </Space>
//       </Space>
//     </>
//   );
// };

// export default App;

// import React, { useState } from 'react';
// import { render } from 'react-dom';
// import { DatePicker, message } from 'antd';
// import 'antd/dist/reset.css';
// import './index.css';

// function App(){
//   const [date, setDate] = useState(null);
//   const handleChange = (value) => {
//     message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
//     setDate(value);
//   };
//   return (
//     <div style={{ width: 400, margin: '100px auto' }}>
//       <DatePicker onChange={handleChange} />
//       <div style={{ marginTop: 16 }}>
//         Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
//       </div>
//     </div>
//   );
// };

// // render(<App />, document.getElementById('root'));

// export default App
