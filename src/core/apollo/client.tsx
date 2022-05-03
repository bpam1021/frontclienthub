import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { GRAPH_URL } from '../data/base';

const clientInstance = () => {
    return new ApolloClient({uri: GRAPH_URL, cache: new InMemoryCache()});
};
  
export const apolloClient = (queryString: string) => {
    return clientInstance().query({
        query: gql(queryString),
    })
    .then((data?: any) => {
    return data;
    })
    .catch(err => console.error('Graph query error: ', err));
};