export const increaseCounter = (payload) => {
  return {
    type: "INCREASE",
    payload: payload,
  };
};

export const EmptyAction = () => {
  return {
    type: "EMPTY",
  };
};
