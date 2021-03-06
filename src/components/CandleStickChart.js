import React from "react";
import PropTypes from "prop-types";

import { scaleTime } from "d3-scale";
import { utcDay } from "d3-time";

import { ChartCanvas, Chart } from "react-stockcharts";
import { CandlestickSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { fitWidth } from "react-stockcharts/lib/helper";
import { last, timeIntervalBarWidth } from "react-stockcharts/lib/utils";

class CandleStickChart extends React.Component {
	render() {
		const {  data, ratio } = this.props;
		const xAccessor = d => d.date;
		const xExtents = [
			xAccessor(last(data)),
			xAccessor(data[data.length - 6])
		];
		return (
			<ChartCanvas height={400}
					ratio={ratio}
					margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
          width={1000}
					seriesName="MSFT"
					data={data}
					xAccessor={xAccessor}
					xScale={scaleTime()}
					xExtents={xExtents}> 
          
				<Chart id={1} yExtents={d => [d.high, d.low]}>
					<XAxis axisAt="bottom" orient="bottom" ticks={6}/>
					<YAxis axisAt="left" orient="left" ticks={5} />
					<CandlestickSeries width={timeIntervalBarWidth(utcDay)}/>
				</Chart>
			</ChartCanvas>
		);
	}
}

CandleStickChart.propTypes = {
	data: PropTypes.array.isRequired,
	ratio: PropTypes.number.isRequired,
};


CandleStickChart = fitWidth(CandleStickChart);

export default CandleStickChart;
