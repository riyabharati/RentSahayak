import {createApolloErrorProvider,createApolloLoadingProvider,createApolloMockedProvider} from 'apollo-mocked-provider'
import {InMemoryCache}  from'apollo-boost'
const cache= new InMemoryCache();

export const ApolloMockedProvider = createApolloMockedProvider( cache);
export const ApolloErrorProvider = createApolloErrorProvider(cache);
export const ApolloLoadingProvider = createApolloLoadingProvider(cache);