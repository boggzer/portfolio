type VariablesType = Record<'ratio', number | string>;

const variables: VariablesType = {
  ratio: 1.618,
};

const useVariables = (type: keyof VariablesType) => variables[type];

export default useVariables;
