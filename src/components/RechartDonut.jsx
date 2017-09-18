import React, { Component, PropTypes } from "react";
import styled from "styled-components";

import { PieChart, Sector, Pie, Cell, Legend, Tooltip} from 'recharts';

const DonutContainer = styled.div`
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  `;
const data = [{name: 'used', space: 60}, {name: 'free', space: 40}]
const colors = ["#0098db", "#999"]  
const payload = [{ value: 'used', type: 'rect', id: 'ID01',stroke: "#999" }, { value: 'free', type: 'rect', id: 'ID02' }]
const renderActiveShape = (props) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle,
    fill, percent, value } = props;

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{value}%</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

class RechartDonut extends Component {
  constructor(props) {
    super(props);
    this.state = {activeIndex: 0};
    this.onPieEnter = this.onPieEnter.bind(this)
  }

  onPieEnter(data, index) {
    this.setState({
      activeIndex: index,
    });
  }

  render() {
    return (
      <DonutContainer>
        <PieChart width={200} height={220}>
          <Pie dataKey={"space"} startAngle={90} endAngle={-270} data={data} cx={100} cy={100} innerRadius={40} outerRadius={80} 
            onMouseEnter={this.onPieEnter} activeIndex={this.state.activeIndex} activeShape={renderActiveShape}
            >
            {
              data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]}/>
              ))
            }
          </Pie>
          <Legend verticalAlign="bottom" height={10} />
        </PieChart>
      </DonutContainer>
  );
  }
}

export default RechartDonut;
