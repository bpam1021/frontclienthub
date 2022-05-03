export const chartBulletPoints = {
    tvl: [
      {
        right: 20,
        top: -12,
        background: 'linear-gradient(180deg, #768299 -10%, #98B3E9 100%)',
      },
    ],
    coin: [
      {
        right: 15,
        top: -12,
        background: 'linear-gradient(180deg, #F5AC37 -10%, #EA9276 100%)',
      },
      {
        right: 25,
        top: -12,
        background: 'linear-gradient(180deg, #768299 -10%, #98B3E9 100%)',
      },
      {
        right: 29,
        top: -12,
        background: 'linear-gradient(180deg, #DC30EB -10%, #EA98F1 100%)',
      },
      {
        right: 29,
        top: -12,
        background: 'linear-gradient(180deg, #4C8C2A -10%, #8BFF4D 100%)',
      },
      {
        right: 29,
        top: -12,
        background: 'linear-gradient(180deg, #c9184a -10%, #ff758f 100%)',
      },
    ],
    rfv: [
      {
        right: 15,
        top: -12,
        background: 'linear-gradient(180deg, #F5AC37 -10%, #EA9276 100%)',
      },
      {
        right: 25,
        top: -12,
        background: 'linear-gradient(180deg, #768299 -10%, #98B3E9 100%)',
      },
      {
        right: 29,
        top: -12,
        background: 'linear-gradient(180deg, #c9184a -10%, #ff758f 100%)',
      },
    ],
    holder: [
      {
        right: 40,
        top: -12,
        background: '#A3A3A3',
      },
    ],
    apy: [
      {
        right: 20,
        top: -12,
        background: '#49A1F2',
      },
    ],
    runway: [
      {
        right: 45,
        top: -12,
        background: '#000000',
      },
      {
        right: 48,
        top: -12,
        background: '#2EC608',
      },
      {
        right: 48,
        top: -12,
        background: '#49A1F2',
      },
      {
        right: 48,
        top: -12,
        background: '#c9184a',
      },
    ],
    staked: [
      {
        right: 45,
        top: -11,
        background: 'linear-gradient(180deg, #55EBC7 -10%, rgba(71, 172, 235, 0) 100%)',
      },
      {
        right: 68,
        top: -12,
        background: 'rgba(151, 196, 224, 0.2)',
        border: '1px solid rgba(54, 56, 64, 0.5)',
      },
    ],
    pol: [
      {
        right: 15,
        top: -12,
        background: 'linear-gradient(180deg, rgba(56, 223, 63, 1) -10%, rgba(182, 233, 152, 1) 100%)',
      },
      {
        right: 25,
        top: -12,
        background: 'rgba(219, 242, 170, 1)',
        border: '1px solid rgba(118, 130, 153, 1)',
      },
    ],
  };
  
  export const chartTooltipItems = {
    tvl: ['Total Value Deposited'],
    coin: ['SHIB', 'FLOKI', 'wETH', '3DOG-WETH LP'],
    rfv: ['SHIB'],
    holder: ['OHMies'],
    apy: ['APY'],
    runway: ['Current', '7.5K APY', '5K APY', '2.5K APY'],
    pol: ['SLP Treasury', 'Market SLP'],
  };
  
  export const chartTooltipInfoMessages = {
    tvl: 'Total Value Deposited, or Total Value Locked, represents the value of 3DOG tokens (in dollars) staked in the Cerberus Protocol . This metric is often used as a growth or health indicator among DeFi projects.',
    mvt: 'Market Value of Treasury Assets, or Treasury Balance, represents the total value of assets (in dollars) held in the Cerberus Treasury.',
    rfv: 'Risk Free Value is the market value of the SHIB tokens backing the 3DOG tokens and held in the Cerberus Treasury.',
    pol: 'Protocol Owned Liquidity, is the amount of LP the treasury owns and controls. The more POL the better for the protocol and its users.',
    holder: 'Holders, represents the total number of Ohmies (3DOGs holders)',
    staked: '3DOG Staked, is the ratio of 3DOGs to 3DOG (staked vs unstaked)',
    apy: 'Annual Percentage Yield, is the normalized representation of an interest rate, based on a compounding period over one year. Note that APYs provided are rather ballpark level indicators and not so much precise future results.',
    runway: 'Runway, is the number of days 3DOGs emissions can be sustained at a given rate. Lower APY = longer runway',
  };
  
  export const chartYaxisUnitType = {
    dollar: '$',
    percentage: '%',
  };
  