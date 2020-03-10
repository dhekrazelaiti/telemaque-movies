export const truncate = (str, max) => str.length < max ? str : `${str.slice(0, max)}...`;
