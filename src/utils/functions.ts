
export const toPx = (pt: number): string => `${(pt * 4) / 3}px`;

export const renderValue = (val?: number, prefix?: string) => {
  if (!val) return prefix ? `0${prefix}` : '0';
  const converted = val.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  if (prefix) return `${converted}${prefix}`;
  return converted;
};


export const fnLimitQuantity = (
  current?: number,
  max?: number
) => Math.max(Math.min(Number(current || 0), Number(max || 0)), 0);

export const getYoutubeId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return (match && match[2].length === 11)
    ? match[2]
    : null;
}

export const checkExternalUrl = (str?: string) => {
  if (!str) return false;
  const tareaRegex = /^(http|https|tel|mailto|sms)/;
  return tareaRegex.test(String(str).toLowerCase());
};

export const kFormatter = (num: number): string => {
  return Math.abs(num) > 999 ? `${Number.isInteger((Math.sign(num) * Math.abs(num) / 1000)) ? (Math.sign(num) * Math.abs(num) / 1000) : (Math.sign(num) * Math.abs(num) / 1000).toFixed(1)}K` : `${Math.sign(num) * Math.abs(num)}đ`
}

export const convertViToEn = (str: string, toUpperCase = false) => {
  str = str.replace("-", " ")
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
  return toUpperCase ? str.toUpperCase() : str;
}

export const convertDate = (dateString: string): Date => {
  const [datePart, timePart] = dateString.split(' ');
  const [year, month, day] = datePart.split('-').map(Number);
  const [hour, minute, second, millisecond] = timePart.split(/[:.]/).map(Number);
  return new Date(year, month - 1, day, hour, minute, second, millisecond);
}
