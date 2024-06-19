type ProviderProps = Record<string, unknown>;

const buildProvidersTree = (
  componentsWithProps: [React.FC<ProviderProps>, ProviderProps?][],
) => {
  const initialComponent: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => <>{children}</>;

  return componentsWithProps.reduce(
    (AccumulatedComponents, [Provider, props = {}]) => {
      return ({ children }) => {
        return (
          <AccumulatedComponents>
            <Provider {...props}>{children}</Provider>
          </AccumulatedComponents>
        );
      };
    },
    initialComponent,
  );
};

export default buildProvidersTree;
