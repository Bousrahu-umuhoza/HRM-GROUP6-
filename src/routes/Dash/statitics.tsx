// import React, { PureComponent } from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import './statistics.css'
// const Data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// export default 
// class Example extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/s/bar-chart-has-no-padding-jphoc';

//   render() {
//     return (
//       <ResponsiveContainer width="100%" height="74%">
//         <BarChart
//           width={100}
//           height={30}
//           data={Data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//           barSize={40}
//         >
//           <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <CartesianGrid strokeDasharray="3 " />
//           <Bar dataKey="pv" fill="#128989" background={{ fill: '#F2EFFF' }} />
//         </BarChart>
//       </ResponsiveContainer>
//     );
//   }
// }
import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Data = [
  {
    name: 'Jan',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Aprl',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'June',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'July',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Aug',
    uv: 2590,
    pv: 400,
    amt: 2100,
  },
  {
    name: 'Sept',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Oct',
    uv: 2490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Nov',
    uv: 1490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Dec',
    uv: 3090,
    pv: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/bar-chart-has-background-62zcd';

  render() {
    return (
      <ResponsiveContainer width="75%" height="40%">
        <BarChart
          width={900}
          height={300}
          data={Data}
          margin={{
            top: 100,
            right: 30,
            left: 219,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} /> */}
          <Bar dataKey="uv" fill="#128989" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}