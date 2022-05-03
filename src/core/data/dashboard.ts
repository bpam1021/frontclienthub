import { NetworkBaseInfo, NetworkBaseInfoKey } from '../interfaces/Dashboard';

export const defaultNetworkBaseInfos: NetworkBaseInfo[] = [
  {
    name: 'Market Cap',
    value: '233.2',
    key: NetworkBaseInfoKey.MarketCap
  },
  {
    name: '3DOG Price',
    value: '8.43',
    key: NetworkBaseInfoKey.ThreeDogPrice
  },
  {
    name: 'APY',
    value: '32.5',
    key: NetworkBaseInfoKey.Apy
  },
  {
    name: 'Circulating Supply (total)',
    value: '32352',
    key: NetworkBaseInfoKey.CirculatingSupply
  },
  {
    name: 'Backing per 3DOG',
    value: '252',
    key: NetworkBaseInfoKey.BackingPerThreeDog
  },
  {
    name: 'Current Index',
    value: '425',
    key: NetworkBaseInfoKey.CurrentIndex,
    hasTooltip: true,
    message: 'The current index tracks the amount of s3DOG accumulated since the beginning of staking. Basically, how much s3DOG one would have if they staked and held a single 3DOG from day 1.'
  },
];