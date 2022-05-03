import { apolloClient } from "../apollo/client";

export const protocolMetricsQuery = `
  query {
    _meta {
      block {
        number
      }
    }
    protocolMetrics(first: 1, orderBy: timestamp, orderDirection: desc) {
      timestamp
      ohmCirculatingSupply
      sOhmCirculatingSupply
      totalSupply
      ohmPrice
      marketCap
      totalValueLocked
      treasuryMarketValue
      nextEpochRebase
      nextDistributedOhm
    }
  }
`;

export const treasuryDataQuery = `
query {
  protocolMetrics(first: 100, orderBy: timestamp, orderDirection: desc) {
    id
    timestamp
    ohmCirculatingSupply
    sOhmCirculatingSupply
    totalSupply
    ohmPrice
    marketCap
    totalValueLocked
    treasuryMarketValue
    treasuryShibMarketValue
    treasuryFlokiMarketValue
    treasuryEthMarketValue
    nextEpochRebase
    nextDistributedOhm
    runway2dot5k
    runway5k
    runway7dot5k
    runway10k 
    runway20k 
    runway50k 
    runway70k 
    runway100k 
    runwayCurrent
    treasuryOhmEthPOL,
    treasuryRiskFreeValue
    treasuryShibRiskFreeValue
    liquidityOhmEthValue
  }
}
`;

export const rebaseDataQuery = `
query {
  rebases(where: {contract: "0x31847Eb74ce61d121258897977EB0b40098b4d07"}, orderBy: timestamp, first: 1000, orderDirection: desc) {
    percentage
    timestamp
  }
}
`;

export const treasuryData = () => apolloClient(treasuryDataQuery).then(r => r.data.protocolMetrics);


