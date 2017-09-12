import React, { Component, PropTypes } from "react";

class DonutChart extends Component {
  static defaultProps = {
    value: 56,
    size: 199,
    strokewidth: 53
  };
  static propTypes = {
    value: PropTypes.number, // value the chart should show
    size: PropTypes.number, // diameter of chart
    strokewidth: PropTypes.number // width of chart line
  };
  render() {
    const halfsize = this.props.size * 0.5;
    const radius = halfsize - this.props.strokewidth * 0.5;
    const circumference = 2 * Math.PI * radius;
    const strokeval = this.props.value * circumference / 100;
    const dashval = strokeval + " " + circumference;

    const trackstyle = { strokeWidth: this.props.strokewidth };
    const indicatorstyle = {
      strokeWidth: this.props.strokewidth,
      strokeDasharray: dashval
    };
    const rotateval = "rotate(-90 " + halfsize + "," + halfsize + ")";

    return (
      <div className="donut-container">
        <svg
          width={this.props.size}
          height={this.props.size}
          className="donut-container donutchart"
        >
          <circle
            r={radius}
            cx={halfsize}
            cy={halfsize}
            transform={rotateval}
            style={trackstyle}
            className="donutchart-track"
          />
          <circle
            r={radius}
            cx={halfsize}
            cy={halfsize}
            transform={rotateval}
            style={indicatorstyle}
            className="donutchart-indicator"
          />
          <text
            className="donutchart-text"
            x={halfsize + 2}
            y={halfsize + 6}
            style={{ textAnchor: "middle" }}
          >
            <tspan className="donutchart-text-val">{this.props.value}</tspan>
            <tspan className="donutchart-text-percent">%</tspan>
          </text>
        </svg>
        <div className="donut-agenda">
          <div className="box-item-container">
            <div className="color-box reserved" />
            <p>free</p>
          </div>
          <div className="box-item-container">
            <div className="color-box free" />
            <p>free</p>
          </div>
        </div>
      </div>
    );
  }
}

export default DonutChart;
