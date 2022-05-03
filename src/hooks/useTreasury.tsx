import { useQuery } from 'react-query';

import { apolloClient } from '../core/apollo/client';
import { rebaseDataQuery, treasuryDataQuery } from '../core/data/query';

export const useTreasuryMetrics = (options: any) =>
{
    return useQuery(
        'treasury_metrics',
        async() => {
            const response = await apolloClient(treasuryDataQuery);
            console.log("metrics data");
            console.log(response);
            return response.data.protocolMetrics.map((metric:any) =>
                Object.entries(metric).reduce((obj :any, [key,value]) => ((obj[key as keyof typeof obj] = parseFloat(Number(value).toString())), obj), {})

                );

        },
        options
    );
};

export const useTreasuryRebase = (options:any) => {
    return useQuery(
        'treasury_rebases',
        async () => {
        const response = await apolloClient(rebaseDataQuery);
        return response.data.rebases;
        },
        options,
    );
};