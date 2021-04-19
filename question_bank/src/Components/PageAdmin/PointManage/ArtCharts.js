import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default class  ArtCharts extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';
    constructor(props){
        super(props);
    }
  render() {
      let {Array_ts}=this.props;
      var data=[];
        for(let i=0;i<20;i++){
            var name=i*5;
            var name2=(i+1)*5;
            var name_kq=name+"-"+name2;
           var diem= this.statusCounter(Array_ts,i/2,(i+1)/2);
            data.push({name:name_kq,Sinhvien:diem})
        }
    return (
      <BarChart ylabel='Sinh Viên'
        width={1200}
        height={500}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" fill="#52ca9d" />
        <YAxis  />
        <Tooltip />
        <Legend />
       
        <Bar dataKey="Sinhvien" fill="#82ca9d" />
      </BarChart>
    );
  }
    statusCounter(Array_ts,a,b) {
    let counter = 0;
    for (const test of Array_ts) {
      if (a<test && test<=b) counter += 1;
    }
    return counter;
  }
}
