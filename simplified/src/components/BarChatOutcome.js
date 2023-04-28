import React, { PureComponent } from 'react';
import { BarChart, Bar, Label, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '1',
    uv: 40,
    pv: 24,
    amt: 24,
  },
  {
    name: '2',
    uv: 30,
    pv: 13,
    amt: 22,
  },
  {
    name: '3',
    uv: 20,
    pv: 98,
    amt: 20,
  },
  {
    name: '4',
    uv: 27,
    pv: 39,
    amt: 20,
  },
  {
    name: '5',
    uv: 18,
    pv: 48,
    amt: 21,
  },
];

export default class BarChartOutcome extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 30,
            bottom: 40,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name"><Label value="Acuity Level" offset={0} position="bottom" /></XAxis>
          <YAxis><Label value="Percentage of revisits" angle={-90}  position="left"  /></YAxis>
          <Tooltip />
          <Legend verticalAlign="top" />
          <Bar name="2021 72-hour return" dataKey="pv" fill="#8884d8" />
          <Bar name="2022 72-hour return" dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
