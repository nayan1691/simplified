import React, { PureComponent } from 'react';
import { BarChart, Bar, Label, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '1',
    uv: 40,
    pv: 21,
    amt: 22,
  },
  {
    name: '2',
    uv: 29,
    pv: 15,
    amt: 21,
  },
  {
    name: '3',
    uv: 24,
    pv: 94,
    amt: 10,
  },
  {
    name: '4',
    uv: 27,
    pv: 39,
    amt: 15,
  },
  {
    name: '5',
    uv: 28,
    pv: 38,
    amt: 20,
  },
];

export default class BarChartOutcome2 extends PureComponent {
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
          <Bar name="2023 72-hour return" dataKey="pv" fill="#8884d8" />
          <Bar name="2024 72-hour return" dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
