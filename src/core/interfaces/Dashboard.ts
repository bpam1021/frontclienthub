export interface NetworkBaseInfo {
    name: string;
    value: string;
    key?: string;
    hasTooltip?: Boolean;
    message?: string;
  }

  export enum NetworkBaseInfoKey {
    MarketCap = 'MARKET_CAP',
    ThreeDogPrice = 'MARKET_PRICE',
    Apy = 'APY',
    CirculatingSupply = 'CIRCULATING_SUPPLY',
    BackingPerThreeDog = 'BACKING_PER_THREE_DOG',
    CurrentIndex = 'CURRENT_INDEX'
  }
  export interface ChartProps {
    type: any;
    data?: any;
    scale?: any;
    dataKey?: any;
    color?: any;
    stopColor?: any;
    stroke?: any;
    headerText: any;
    dataFormat?: any;
    headerSubText: any;
    bulletPointColors: any;
    itemNames?: any;
    itemType?: any;
    isStaked?: any;
    infoTooltipMessage: any;
    expandedGraphStrokeColor: any;
    isPOL?: any;
  }