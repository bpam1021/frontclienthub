import { useTheme } from '@material-ui/core/styles';
import { useTreasuryMetrics, useTreasuryRebase } from '../../hooks/useTreasury';

import Chart from '../../components/Chart/Chart';
import { formatCurrency, formatNumber } from '../../core/utils/base';
import {
  chartBulletPoints,
  chartTooltipItems,
  chartTooltipInfoMessages,
  chartYaxisUnitType
} from '../../core/data/chart';
export const TotalValueDepositedGraph = () => {
    const theme = useTheme();
    const {data} = useTreasuryMetrics({refetchOnMount: false});
  
    return (
      <Chart
        type="area"
        data={data}
        itemType={chartYaxisUnitType.dollar}
        itemNames={chartTooltipItems.tvl}
        dataKey={['totalValueLocked']}
        headerText="Total Value Deposited"
        stopColor={[['#768299', '#98B3E9']]}
        bulletPointColors={chartBulletPoints.tvl}
        infoTooltipMessage={chartTooltipInfoMessages.tvl}
        expandedGraphStrokeColor={theme.palette.success}
        headerSubText={`${data && formatCurrency(data[0].totalValueLocked)}`}
      />
    );
  };

  export const MarketValueGraph = () => {
    const theme = useTheme();
    const {data} = useTreasuryMetrics({refetchOnMount: false});
  
    return (
      <Chart
        type="stack"
        data={data}
        dataKey={[
          'treasuryShibMarketValue',
          'treasuryFlokiMarketValue',
          'treasuryEthMarketValue',
          'liquidityOhmEthValue'
        ]}
        stopColor={[
          ['#F5AC37', '#EA9276'],
          ['#768299', '#98B3E9'],
          ['#DC30EB', '#EA98F1'],
          ['#8BFF4D', '#4C8C2A'],
          ['#ff758f', '#c9184a'],
        ]}
        headerText="Market Value of Treasury Assets"
        headerSubText={`${data && formatCurrency(data[0].treasuryMarketValue)}`}
        bulletPointColors={chartBulletPoints.coin}
        itemNames={chartTooltipItems.coin}
        itemType={chartYaxisUnitType.dollar}
        infoTooltipMessage={chartTooltipInfoMessages.mvt}
        expandedGraphStrokeColor={theme.palette.success}
      />
    );
  };
  
  export const RiskFreeValueGraph = () => {
    const theme = useTheme();
    const {data} = useTreasuryMetrics({refetchOnMount: false});
  
    return (
      <Chart
        type="stack"
        data={data}
        dataFormat="currency"
        dataKey={['treasuryShibRiskFreeValue']}
        stopColor={[
          ['#F5AC37', '#EA9276'],
          ['#768299', '#98B3E9'],
          ['#ff758f', '#c9184a'],
          ['#000', '#fff'],
          ['#000', '#fff'],
        ]}
        headerText="Risk Free Value of Treasury Assets"
        headerSubText={`${data && formatCurrency(data[0].treasuryRiskFreeValue)}`}
        bulletPointColors={chartBulletPoints.rfv}
        itemNames={chartTooltipItems.rfv}
        itemType={chartYaxisUnitType.dollar}
        infoTooltipMessage={chartTooltipInfoMessages.rfv}
        expandedGraphStrokeColor={theme.palette.success}
      />
    );
  };
  
  export const ProtocolOwnedLiquidityGraph = () => {
    const theme = useTheme();
    const {data} = useTreasuryMetrics({refetchOnMount: false});
  
    return (
      <Chart
        isPOL
        type="area"
        data={data}
        dataFormat="percent"
        itemNames={chartTooltipItems.pol}
        itemType={chartYaxisUnitType.percentage}
        dataKey={['treasuryOhmEthPOL']}
        bulletPointColors={chartBulletPoints.pol}
        infoTooltipMessage={chartTooltipInfoMessages.pol}
        headerText="Protocol Owned Liquidity 3DOG-ETH"
        expandedGraphStrokeColor={theme.palette.success}
        headerSubText={`${data && formatNumber(data[0].treasuryOhmEthPOL, 2)}% `}
        stopColor={[['rgba(128, 204, 131, 1)', 'rgba(128, 204, 131, 0)']]}
      />
    );
  };
  
  export const OHMStakedGraph = () => {
    const theme = useTheme();
    const {data} = useTreasuryMetrics({refetchOnMount: false});
  
    const staked =
      data &&
      data
        .map((metric:any) => ({
          staked: (metric.sOhmCirculatingSupply / metric.ohmCirculatingSupply) * 100,
          timestamp: metric.timestamp,
        }))
        .filter((metric:any) => metric.staked < 100);
  
    return (
      <Chart
        isStaked
        type="area"
        data={staked}
        dataKey={['staked']}
        dataFormat="percent"
        headerText="3DOG Staked"
        stopColor={[['#55EBC7', '#47ACEB']]}
        bulletPointColors={chartBulletPoints.staked}
        infoTooltipMessage={chartTooltipInfoMessages.staked}
        expandedGraphStrokeColor={theme.palette.success}
        headerSubText={`${staked && formatNumber(staked[0].staked, 2)}% `}
      />
    );
  };
  
  export const APYOverTimeGraph = () => {
    const theme = useTheme();
    const {data} = useTreasuryRebase({refetchOnMount: false});
  
    let apy =
      data &&
      data
        .map((entry:any) => ({
          timestamp: entry.timestamp,
          apy: Math.pow(parseFloat(entry.percentage) + 1, 365 * 3) * 100,
        }))
        .filter((pm:any) => pm.apy < 300000);
  
    return (
      <Chart
        type="line"
        scale="log"
        data={apy}
        dataKey={['apy']}
        dataFormat="percent"
        headerText="APY over time"
        itemNames={chartTooltipItems.apy}
        itemType={chartYaxisUnitType.percentage}
        color={theme.palette.text.primary}
        bulletPointColors={chartBulletPoints.apy}
        stroke={[theme.palette.text.primary]}
        infoTooltipMessage={chartTooltipInfoMessages.apy}
        headerSubText={`${data && formatNumber(apy[0].apy, 2)}%`}
        expandedGraphStrokeColor={theme.palette.success}
      />
    );
  };
  
  export const RunwayAvailableGraph = () => {
    const theme = useTheme();
    const {data} = useTreasuryMetrics({refetchOnMount: false});
  
    const runway = data && data.filter((metric:any) => metric.runway10k > 5);
  
    const [current, ...others] = chartBulletPoints.runway;
    const runwayBulletpoints = [{...current, background: theme.palette.text.primary}, ...others];
    const colors = runwayBulletpoints.map(b => b.background);
  
    return (
      <Chart
        type="multi"
        data={runway}
        dataKey={['runwayCurrent', 'runway7dot5k', 'runway5k', 'runway2dot5k']}
        color={theme.palette.text.primary}
        stroke={colors}
        headerText="Runway Available"
        headerSubText={`${data && formatNumber(data[0].runwayCurrent, 1)} Days`}
        dataFormat="days"
        bulletPointColors={runwayBulletpoints}
        itemNames={chartTooltipItems.runway}
        itemType={''}
        infoTooltipMessage={chartTooltipInfoMessages.runway}
        expandedGraphStrokeColor={theme.palette.success}
      />
    );
  };