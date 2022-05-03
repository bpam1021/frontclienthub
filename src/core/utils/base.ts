export function boundObject(state: any, payload: any) {
    if (payload) {
      const keys = Object.keys(payload);
      keys.forEach(key => {
        state[key] = payload[key];
      })
    }
  }
  
  export function formatCurrency(c: number, precision = 0) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: precision,
      minimumFractionDigits: precision,
    }).format(c);
  }
  
  export function formatNumber(number = 0, precision = 0) {
    const array = number.toString().split('.');
    if (array.length === 1) return number.toString();
    if (precision === 0) return array[0].toString();
  
    const poppedNumber = array.pop() || '0';
    array.push(poppedNumber.substring(0, precision));
    const result = array.join('.');
    return result;
  }
  
  export const minutesAgo = (x: number) => {
    const now = new Date().getTime();
    return new Date(now - x * 60000).getTime();
  };
  