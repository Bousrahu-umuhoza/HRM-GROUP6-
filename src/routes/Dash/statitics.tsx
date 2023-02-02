
import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./statistics.css";

const Data = [
  {
    name: 'Jan',
    uv: 50,
  },
  {
    name: 'Feb',
    uv: 30,
  },
  {
    name: 'Mar',
    uv: 20,
  },
  {
    name: 'Aprl',
    uv: 78,
  },
  {
    name: 'May',
    uv: 20,
  },
  {
    name: 'June',
    uv: 60,
  },
  {
    name: 'July',
    uv: 34,
  },
  {
    name: 'Aug',
    uv: 59,
  },
  {
    name: 'Sept',
    uv: 90,
  },
  {
    name: 'Oct',
    uv: 75,
  },
  {
    name: 'Nov',
    uv: 68,
  },
  {
    name: 'Dec',
    uv: 100,
  },
];

export default class Example extends PureComponent {

  render() {
    return (
      <div className="chart-container">
         <div className='stats-title'>
              Job Statistics
            </div>
            <div className='square'>
            </div> 
            <p className='square-words'>Job view </p>
            <div className='square2'>
            </div> 
            <p className='square-words2'>Job Applied</p>
            <div className='month'>   This month </div>
        <ResponsiveContainer>
            <BarChart
                width={50}
                height={300}
                data={Data}
                margin={{
                    // top: 100,
                    // right: 30,
                    // left: 219,
                    bottom: 180,
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
        {/* <div className='table-emplyees'>hello</div> */}
        </div>
    );
  }
}









