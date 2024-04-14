export const truncate = (text: string, len: number) => {
  return text.length >= len ? text.slice(0, len - 3) + '...' : text;
};
