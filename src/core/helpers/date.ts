export const getTimeFormated = (seconds: number) => {
  const date = new Date(0);
  date.setSeconds(seconds);
  return date.toTimeString().replace(/.*(\d{2}:\d{2}).*/, '$1');
};
