import React, { Component, PropTypes } from "react";
import styled from "styled-components";

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

const DonutAgendaContainer = DonutContainer.extend`
  -webkit-flex-direction: row;
  flex-direction: row;
`;

const DonutChart = styled.svg`
  margin: 0 auto;
  border-radius: 50%;
  display: block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;

const DonutChartCircle = styled.circle`
  fill: transparent;
  stroke: #999;
  stroke-width: 23;
  r: ${props => props.radius};
  cx: ${props => props.cx};
  cy: ${props => props.cy};
  transform: ${props => props.transform};
  stroke-width: ${props => props.strokewidth};
`;

const DonutChartCircleIndicator = DonutChartCircle.extend`
  stroke: #0098db;
  stroke-dasharray: ${props => props.dasharray};
  transition: stroke-dasharray 1.7s ease;
`;

const DonuctChartText = styled.text`
  cx: ${props => props.x};
  cy: ${props => props.y};
  text-anchor: middle;
  font-family: "Roboto";
  fill: #13b4ff;
`;

const DonutChartTextSpan = styled.tspan`font-size: 22px;`;

const BoxItem = DonutAgendaContainer.extend`margin: 0 0 0 15px;`;

const ColorBox = styled.div`
  width: 10px;
  height: 10px;
  margin: 3px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: ${props => (props.free ? "#13b4ff" : "#999")};
`;
class Donut extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }
  static defaultProps = {
    size: 199,
    strokewidth: 53,
    freeBoxText: "free",
    reservedBoxText: "reserved"
  };

  static propTypes = {
    value: PropTypes.number, // value the chart should show
    size: PropTypes.number, // diameter of chart
    strokewidth: PropTypes.number // width of chart line
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ value: this.props.value });
    }, 200);
  }

  render() {
    const halfsize = this.props.size * 0.5;
    const radius = halfsize - this.props.strokewidth * 0.5;
    const circumference = 2 * Math.PI * radius;
    const strokeval = this.state.value * circumference / 100;
    const dashval = strokeval + " " + circumference;
    const rotateval = "rotate(-90 " + halfsize + "," + halfsize + ")";

    return (
      <DonutContainer>
        <DonutChart size={this.props.size}>
          <DonutChartCircle
            r={radius}
            cx={halfsize}
            cy={halfsize}
            transform={rotateval}
            strokewidth={this.props.strokewidth}
          />
          <DonutChartCircleIndicator
            r={radius}
            cx={halfsize}
            cy={halfsize}
            transform={rotateval}
            strokewidth={this.props.strokewidth}
            dasharray={dashval}
          />
          <DonuctChartText x={halfsize + 2} y={halfsize + 6}>
            <DonutChartTextSpan>{this.state.value}</DonutChartTextSpan>
            <DonutChartTextSpan>%</DonutChartTextSpan>
          </DonuctChartText>
        </DonutChart>
        <DonutAgendaContainer>
          <BoxItem>
            <ColorBox free />
            <p>{this.props.freeBoxText}</p>
          </BoxItem>
          <BoxItem>
            <ColorBox />
            <p>{this.props.reservedBoxText}</p>
          </BoxItem>
        </DonutAgendaContainer>
      </DonutContainer>
    );
  }
}

export default Donut;
