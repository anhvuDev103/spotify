import { UseQueryResult } from '@tanstack/react-query';

type NonUndefined<T> = T extends undefined ? never : T;

export const combineQueries = <Queries extends readonly UseQueryResult[], P>(
  queries: Queries,
  combiner: (
    ...data: {
      [K in keyof Queries]: NonUndefined<Queries[K]['data']>;
    }
  ) => P,
) => {
  const loading = queries.some((query) => query.isLoading);
  const error = queries.find((query) => query.error);
  const isAllQueriesDataDefined = queries.every((query) => query.data);

  const queriesData = queries.map((query) => query.data) as {
    [K in keyof Queries]: NonUndefined<Queries[K]['data']>;
  };

  if (!loading && !error) {
    return {
      isLoading: false,
      data: combiner(...queriesData),
      error: null,
    };
  }

  return {
    isLoading: loading,
    data: isAllQueriesDataDefined ? combiner(...queriesData) : undefined,
    error,
  };
};
