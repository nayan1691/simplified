import React, { PureComponent } from 'react';
import { LineChart, Label, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Apr',
    uv: 3700,
    pv: 2100,
    amt: 2200,
  },
  {
    name: 'May',
    uv: 3100,
    pv: 1600,
    amt: 2100,
  },
  {
    name: 'Jun',
    uv: 2000,
    pv: 6800,
    amt: 4000,
  },
  {
    name: 'Jul',
    uv: 2080,
    pv: 3000,
    amt: 2000,
  },
  {
    name: 'Aug',
    uv: 1800,
    pv: 2800,
    amt: 1181,
  },
  {
    name: 'Sep',
    uv: 2400,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Oct',
    uv: 3500,
    pv: 4100,
    amt: 2100,
  },
  {
    name: 'Nov',
    uv: 3100,
    pv: 4100,
    amt: 2200,
  },{
    name: 'Dec',
    uv: 4500,
    pv: 5000,
    amt: 3000,
  },
  {
    name: 'Jan',
    uv: 3000,
    pv: 3000,
    amt: 3000,
  },
  {
    name: 'Feb',
    uv: 1500,
    pv: 1500,
    amt: 1200,
  },
  {
    name: 'Mar',
    uv: 3000,
    pv: 4300,
    amt: 2100,
  },
];

export default class LineChartOutcome2 extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name"><Label value="Month" offset={0} position="bottom" /></XAxis>
          <YAxis><Label value="No. of ED Visits" angle={-90}  position="left"  /></YAxis>
          <Tooltip />
          <Legend verticalAlign="top" />
          <Line type="monotone" name="2023" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" name="2024" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
