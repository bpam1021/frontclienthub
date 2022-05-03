import { Skeleton } from '@material-ui/lab';
import { Typography, Box, SvgIcon, CircularProgress } from '@material-ui/core';
import { useEffect, useState } from 'react';

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    AreaChart,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Area,
    CartesianGrid,
    Tooltip,
  } from 'recharts';
import { format } from 'date-fns';
import InfoTooltip from '../Infotooltip';
import CustomTooltip from './CustomTooltip';
import ExpandedChart from './ExpandedChart';
import { ChartProps } from '../../core/interfaces/Dashboard';
import { formatNumber } from '../../core/utils/base';
import { ExpandIcon } from '../../core/data/CustomSvg/CustomSvg';
const formatCurrency = (c:any) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    }).format(c);
  };

  const tickCount = 3;
const expandedTickCount = 5;

const renderExpandedChartStroke = (isExpanded :any, color :any) => {
  return isExpanded ? <CartesianGrid vertical={false} stroke={color}/> : '';
};

const renderAreaChart = (
    data : any,
    dataKey :any,
    stopColor :any,
    stroke :any,
    dataFormat :any,
    bulletPointColors :any,
    itemNames :any,
    itemType :any,
    isStaked :any,
    isExpanded :any,
    expandedGraphStrokeColor :any,
    isPOL :any,
  ) => (
    <AreaChart data={data}>
      <defs>
        <linearGradient id={`color-${dataKey[0]}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stopColor[0][0]} stopOpacity={1}/>
          <stop offset="90%" stopColor={stopColor[0][1]} stopOpacity={0.9}/>
        </linearGradient>
      </defs>
      <XAxis
        dataKey="timestamp"
        interval={30}
        axisLine={false}
        tickLine={false}
        tickFormatter={str => format(new Date(str * 1000), 'MMM dd')}
        reversed={true}
        padding={{right: 20}}
      />
      <YAxis
        tickCount={isExpanded ? expandedTickCount : tickCount}
        axisLine={false}
        tickLine={false}
        width={dataFormat === 'percent' ? 33 : 55}
        tickFormatter={(number:any) =>
          number !== 0
            ? dataFormat !== 'percent'
            ? `${formatCurrency(parseFloat(number) / 1000000)}M`
            : `${formatNumber(parseFloat(number), 2)}%`
            : ''
        }
        domain={[0, 'auto']}
        dx={3}
        allowDataOverflow={false}
      />
      <Tooltip
        content={
          <CustomTooltip
            bulletPointColors={bulletPointColors}
            itemNames={itemNames}
            itemType={itemType}
            isStaked={isStaked}
            isPOL={isPOL}
          />
        }
      />
      <Area dataKey={dataKey[0]} stroke="none" fill={`url(#color-${dataKey[0]})`} fillOpacity={1}/>
      {renderExpandedChartStroke(isExpanded, expandedGraphStrokeColor)}
    </AreaChart>
  );

  const renderLineChart = (
    data:any,
    dataKey:any,
    stroke:any,
    color:any,
    dataFormat:any,
    bulletPointColors:any,
    itemNames:any,
    itemType:any,
    isExpanded:any,
    expandedGraphStrokeColor:any,
    scale:any,
  ) => (
    <LineChart data={data}>
      <XAxis
        dataKey="timestamp"
        interval={100}
        axisLine={false}
        tickCount={3}
        tickLine={false}
        reversed={true}
        tickFormatter={str => format(new Date(str * 1000), 'MMM dd')}
        padding={{right: 20}}
      />
      <YAxis
        tickCount={scale == 'log' ? 1 : isExpanded ? expandedTickCount : tickCount}
        axisLine={false}
        tickLine={false}
        width={32}
        scale={scale}
        tickFormatter={number =>
          number !== 0 ? (dataFormat !== 'percent' ? `${number}` : `${parseFloat(number) / 1000}k`) : ''
        }
        domain={[scale == 'log' ? 'dataMin' : 0, 'auto']}
        allowDataOverflow={false}
      />
      <Tooltip
        content={<CustomTooltip bulletPointColors={bulletPointColors} itemNames={itemNames} itemType={itemType}/>}
      />
      <Line type="monotone" dataKey={dataKey[0]} stroke={stroke ? stroke : 'none'} color={color} dot={false}/>;
      {renderExpandedChartStroke(isExpanded, expandedGraphStrokeColor)}
    </LineChart>
  );
  const renderStackedAreaChart = (
    data:any,
    dataKey:any,
    stopColor:any,
    stroke:any,
    dataFormat:any,
    bulletPointColors:any,
    itemNames:any,
    itemType:any,
    isExpanded:any,
    expandedGraphStrokeColor:any,
  ) => (
    <AreaChart data={data}>
      <defs>
        <linearGradient id={`color-${dataKey[0]}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stopColor[0][0]} stopOpacity={1}/>
          <stop offset="90%" stopColor={stopColor[0][1]} stopOpacity={0.9}/>
        </linearGradient>
        <linearGradient id={`color-${dataKey[1]}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stopColor[1][0]} stopOpacity={1}/>
          <stop offset="90%" stopColor={stopColor[1][1]} stopOpacity={0.9}/>
        </linearGradient>
        <linearGradient id={`color-${dataKey[2]}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stopColor[2][0]} stopOpacity={1}/>
          <stop offset="90%" stopColor={stopColor[2][1]} stopOpacity={0.9}/>
        </linearGradient>
        <linearGradient id={`color-${dataKey[3]}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stopColor[3][0]} stopOpacity={1}/>
          <stop offset="90%" stopColor={stopColor[3][1]} stopOpacity={0.9}/>
        </linearGradient>
        <linearGradient id={`color-${dataKey[4]}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stopColor[4][0]} stopOpacity={1}/>
          <stop offset="90%" stopColor={stopColor[4][1]} stopOpacity={0.9}/>
        </linearGradient>
      </defs>
      <XAxis
        dataKey="timestamp"
        interval={30}
        axisLine={false}
        tickLine={false}
        tickFormatter={str => format(new Date(str * 1000), 'MMM dd')}
        reversed={true}
        padding={{right: 20}}
      />
      <YAxis
        tickCount={isExpanded ? expandedTickCount : tickCount}
        axisLine={false}
        tickLine={false}
        width={dataFormat === 'percent' ? 33 : 55}
        tickFormatter={number => {
          if (number !== 0) {
            if (dataFormat === 'percent') {
              return `${formatNumber(parseFloat(number), 2)}%`;
            } else if (dataFormat === 'k') return `${formatCurrency(parseFloat(number) / 1000)}k`;
            else return `${formatCurrency(parseFloat(number) / 1000000)}M`;
          }
          return '';
        }}
        domain={[0, 'auto']}
        allowDataOverflow={false}
      />
      <Tooltip
        formatter={(value:any) => formatNumber(parseFloat(value), 2)}
        content={<CustomTooltip bulletPointColors={bulletPointColors} itemNames={itemNames} itemType={itemType}/>}
      />
      <Area
        dataKey={dataKey[0]}
        stroke={stroke ? stroke[0] : 'none'}
        fill={`url(#color-${dataKey[0]})`}
        fillOpacity={1}
        stackId="1"
      />
      <Area
        dataKey={dataKey[1]}
        stroke={stroke ? stroke[1] : 'none'}
        fill={`url(#color-${dataKey[1]})`}
        fillOpacity={1}
        stackId="1"
      />
      <Area
        dataKey={dataKey[2]}
        stroke={stroke ? stroke[2] : 'none'}
        fill={`url(#color-${dataKey[2]})`}
        fillOpacity={1}
        stackId="1"
      />
      <Area
        dataKey={dataKey[3]}
        stroke={stroke ? stroke[3] : 'none'}
        fill={`url(#color-${dataKey[3]})`}
        fillOpacity={1}
        stackId="1"
      />
      <Area
        dataKey={dataKey[4]}
        stroke={stroke ? stroke[4] : 'none'}
        fill={`url(#color-${dataKey[4]})`}
        fillOpacity={1}
        stackId="1"
      />
      {renderExpandedChartStroke(isExpanded, expandedGraphStrokeColor)}
    </AreaChart>
  );
  const renderMultiLineChart = (
    data:any,
    dataKey:any,
    color:any,
    stroke:any,
    dataFormat:any,
    bulletPointColors:any,
    itemNames:any,
    itemType:any,
    isExpanded:any,
    expandedGraphStrokeColor:any,
  ) => (
    <LineChart data={data}>
      <XAxis
        dataKey="timestamp"
        interval={30}
        axisLine={false}
        tickCount={3}
        tickLine={false}
        reversed={true}
        tickFormatter={str => format(new Date(str * 1000), 'MMM dd')}
        padding={{right: 20}}
      />
      <YAxis
        tickCount={isExpanded ? expandedTickCount : tickCount}
        axisLine={false}
        tickLine={false}
        width={25}
        tickFormatter={number => (number !== 0 ? `${formatNumber(parseFloat(number), 2)}` : '')}
        domain={[0, 'auto']}
        allowDataOverflow={false}
      />
      <Tooltip
        content={<CustomTooltip bulletPointColors={bulletPointColors} itemNames={itemNames} itemType={itemType}/>}
      />
      <Line dataKey={dataKey[0]} stroke={stroke[0]} dot={false}/>;
      <Line dataKey={dataKey[1]} stroke={stroke[1]} dot={false}/>;
      <Line dataKey={dataKey[2]} stroke={stroke[2]} dot={false}/>;
      <Line dataKey={dataKey[3]} stroke={stroke[3]} dot={false}/>;
      {renderExpandedChartStroke(isExpanded, expandedGraphStrokeColor)}
    </LineChart>
  );
  
  const renderBarChart = (
    data:any,
    dataKey:any,
    stroke:any,
    dataFormat:any,
    bulletPointColors:any,
    itemNames:any,
    itemType:any,
    isExpanded:any,
    expandedGraphStrokeColor:any,
  ) => (
    <BarChart data={data}>
      <XAxis
        dataKey="timestamp"
        interval={30}
        axisLine={false}
        tickCount={tickCount}
        tickLine={false}
        reversed={true}
        tickFormatter={str => format(new Date(str * 1000), 'MMM dd')}
        padding={{right: 20}}
      />
      <YAxis
        axisLine={false}
        tickLine={false}
        tickCount={isExpanded ? expandedTickCount : tickCount}
        width={33}
        domain={[0, 'auto']}
        allowDataOverflow={false}
        tickFormatter={number => (number !== 0 ? number : '')}
      />
      <Tooltip
        content={<CustomTooltip bulletPointColors={bulletPointColors} itemNames={itemNames} itemType={itemType}/>}
      />
      <Bar dataKey={dataKey[0]} fill={stroke[0]}/>
      {renderExpandedChartStroke(isExpanded, expandedGraphStrokeColor)}
    </BarChart>
  );
function Chart({type, data, scale, dataKey, color, stopColor, stroke, headerText, dataFormat, headerSubText,
bulletPointColors, itemNames, itemType, isStaked, infoTooltipMessage, expandedGraphStrokeColor,
isPOL,}: ChartProps) {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const renderChart: any = (type :any, isExpanded :boolean) => {
        if (type === 'line')
        return renderLineChart(
            data,
            dataKey,
            color,
            stroke,
            dataFormat,
            bulletPointColors,
            itemNames,
            itemType,
            isExpanded,
            expandedGraphStrokeColor,
            scale,
        );
        if (type === 'area')
        return renderAreaChart(
        data,
        dataKey,
        stopColor,
        stroke,
        dataFormat,
        bulletPointColors,
        itemNames,
        itemType,
        isStaked,
        isExpanded,
        expandedGraphStrokeColor,
        isPOL,
        );
        if (type === 'stack')
        return renderStackedAreaChart(
            data,
            dataKey,
            stopColor,
            stroke,
            dataFormat,
            bulletPointColors,
            itemNames,
            itemType,
            isExpanded,
            expandedGraphStrokeColor,
        );
        if (type === 'multi')
        return renderMultiLineChart(
            data,
            dataKey,
            color,
            stroke,
            dataFormat,
            bulletPointColors,
            itemNames,
            itemType,
            isExpanded,
            expandedGraphStrokeColor,
        );

        if (type === 'bar')
        return renderBarChart(
            data,
            dataKey,
            stroke,
            dataFormat,
            bulletPointColors,
            itemNames,
            itemType,
            isExpanded,
            expandedGraphStrokeColor,
        );
    };
    useEffect(() => {
        if (data) {
          setLoading(false);
        }
      }, [data]);
    
      return loading ? (
        <Box className="flex items-center justify-center">
          <CircularProgress/>
        </Box>
      ) : (
        <Box className="w-full h-full">
          <div className="text-white px-20 mb-20">
            <Box className="flex justify-between items-center w-full overflow-hidden">
              <Box className="flex items-center w-9/10">
                <Typography
                  variant="h6"
                  className="font-normal truncate font-normal mr-10"
                >
                  {headerText}
                </Typography>
                <InfoTooltip message={infoTooltipMessage}/>
              </Box>
              <SvgIcon
                component={ExpandIcon}
                color="primary"
                onClick={handleOpen}
                style={{fontSize: '1rem', cursor: 'pointer'}}
              />
              <ExpandedChart
                open={open}
                handleClose={handleClose}
                renderChart={renderChart(type, true)}
                uid={dataKey}
                data={data}
                infoTooltipMessage={infoTooltipMessage}
                headerText={headerText}
                headerSubText={headerSubText}
              />
            </Box>
            {loading ? (
              <Skeleton variant="text" width={100}/>
            ) : (
              <Box display="flex">
                <Typography variant="h5" className="font-semibold mr-15">
                  {headerSubText}
                </Typography>
                <Typography variant="h5" className="font-normal">
                  {type !== 'multi' && 'Today'}
                </Typography>
              </Box>
            )}
          </div>
          <Box className="px-10 w-full min-w-310 min-h-360">
            {loading || (data && data.length > 0) ? (
              <ResponsiveContainer className="w-full min-h-260">
                {renderChart(type, false)}
              </ResponsiveContainer>
            ) : (
              <Skeleton width="100%" height={260}/>
            )}
          </Box>
        </Box>
    );

}
  export default Chart;