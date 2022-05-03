import { Paper, Box, Typography } from '@material-ui/core';

import { ChartTooltipProps } from '../../core/interfaces/Chart';

const renderDate = (index :any, payload :any, item :any) => {
  return index === payload.length - 1 && (
    <div className="mt-15">
      {new Date(item.payload.timestamp * 1000).toLocaleString('default', {month: 'long'}).charAt(0).toUpperCase()}
      {new Date(item.payload.timestamp * 1000).toLocaleString('default', {month: 'long'}).slice(1)}
      &nbsp;
      {new Date(item.payload.timestamp * 1000).getDate()}, {new Date(item.payload.timestamp * 1000).getFullYear()}
    </div>
  );
};
const renderItem = (type :any, item :any) => {
    return type === '$' ? (
      <Typography variant="body2">{`${type}${Math.round(item).toLocaleString('en-US')}`}</Typography>
    ) : (
      <Typography variant="body2">{`${Math.round(item).toLocaleString('en-US')}${type}`}</Typography>
    );
  };
  
  const renderTooltipItems = (payload :any, bulletPointColors :any, itemNames :any, itemType :any, isStaked = false, isPOL = false) => {
    return isStaked ? (
      <Box>
        <Box className="flex justify-between items-center h-25">
          <Typography variant="body2">
            <span className="inline border-rounded mr-5 text-center w-15 h-15" style={bulletPointColors[0]}></span>
            Staked
          </Typography>
          <Typography>{`${Math.round(payload[0].value)}%`}</Typography>
        </Box>
        <Box className="flex justify-between items-center h-25">
          <Typography variant="body2">
            <span className="inline border-rounded mr-5 text-center w-15 h-15" style={bulletPointColors[1]}></span>
            Not staked
          </Typography>
          <Typography>{`${Math.round(100 - payload[0].value)}%`}</Typography>
        </Box>
        <Box>{renderDate(0, payload, payload[0])}</Box>
      </Box>
    ) : isPOL ? (
      <Box>
        <Box className="flex justify-between items-center h-25">
          <Typography variant="body2">
            <span className="inline border-rounded mr-5 text-center w-15 h-15" style={bulletPointColors[0]}></span>
            {itemNames[0]}
          </Typography>
          <Typography>{`${Math.round(payload[0].value)}%`}</Typography>
        </Box>
        <Box className="flex justify-between items-center h-25" display="flex" justifyContent="space-between">
          <Typography variant="body2">
            <span className="inline border-rounded mr-5 text-center w-15 h-15" style={bulletPointColors[1]}></span>
            {itemNames[1]}
          </Typography>
          <Typography>{`${Math.round(100 - payload[0].value)}%`}</Typography>
        </Box>
        <Box>{renderDate(0, payload, payload[0])}</Box>
      </Box>
    ) : (
      payload.map((item :any, index :any) => (
        <Box key={index}>
          <Box className="flex justify-between items-center h-25" display="flex">
            <Box display="flex" justifyContent="space-between">
              <Typography variant="body2">
                <span className="inline border-rounded mr-5 text-center w-15 h-15"
                      style={bulletPointColors[index]}></span>
                {`${itemNames[index]}`}
              </Typography>
            </Box>
            {renderItem(itemType, item.value)}
          </Box>
          <Box>{renderDate(index, payload, item)}</Box>
        </Box>
      ))
    );
  };
  
  const CustomTooltip = ({active, payload, bulletPointColors, itemNames, itemType, isStaked, isPOL}: ChartTooltipProps)  => {
    if (active && payload && payload.length) {
      return (
        <Paper className="min-w-175 border border-salegray opacity-20">
          {renderTooltipItems(payload, bulletPointColors, itemNames, itemType, isStaked, isPOL)}
        </Paper>
      );
    }
    return null;
  }
  
  export default CustomTooltip;