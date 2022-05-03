export interface ChartTooltipProps {
    active?: boolean;
    payload?: any;
    bulletPointColors: any;
    itemNames: any;
    itemType: any;
    isStaked?: boolean;
    isPOL?: boolean;
  }
  
  export interface ExpandedChartProps {
    open: boolean;
    handleClose: any;
    renderChart: any;
    data: any;
    uid?: any;
    infoTooltipMessage: any;
    headerText: any;
    runwayExtraInfo?: any;
    headerSubText: any;
  }
  