import React, { PureComponent } from 'react';
import { LineChart, Label, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Apr',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'May',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Jun',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Jul',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Aug',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Sep',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Oct',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Nov',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },{
    name: 'Dec',
    uv: 4570,
    pv: 5100,
    amt: 3100,
  },
  {
    name: 'Jan',
    uv: 3090,
    pv: 4000,
    amt: 2000,
  },
  {
    name: 'Feb',
    uv: 1490,
    pv: 1300,
    amt: 1100,
  },
  {
    name: 'Mar',
    uv: 3190,
    pv: 4100,
    amt: 2800,
  },
];

export default class LineChartOutcome extends PureComponent {
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
          <Line type="monotone" name="2021" dataKey="pv" stroke="#CF2732" activeDot={{ r: 8 }} />
          <Line type="monotone" name="2022" dataKey="uv" stroke="#83B531" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
