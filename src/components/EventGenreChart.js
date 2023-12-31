import React, { useEffect, useState } from 'react';
import { 
    ResponsiveContainer, 
    PieChart, 
    Pie, 
    Cell, 
    Legend 
} from 'recharts';

const EventGenreChart =  ({events}) => {
    const [data, setData] = useState([]);
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#976ef8'];

    useEffect(() => {
        setData(getData());
    }, [`${events}`]);

    const getData = () => {
        const data = genres.map((genre => {
            const filteredEvents = events.filter(event => event.summary.includes(genre));
            return {
                name: genre,
                value: filteredEvents.length
            }
        }))
        return data;
    };

    const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
        const RADIAN = Math.PI / 180;
        const radius = outerRadius;
        const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
        const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
        return percent ? (
            <text
            x={x}
            y={y}
            fill="#8884d8"
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
            >
            {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
            </text>
        ) : null;
      };

    return (
      <div style={{ width: '99%', height: 400 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie 
            dataKey="value" 
            data={data} 
            fill="#8884d8"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={130}>
                <Legend verticalAlign="top" align='center'/>
            {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]}/>
            ))} 
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
}

export default EventGenreChart
