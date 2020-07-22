const DEFAULT_PLACEHOLDER = 'abcdefhijkmnprstwxyz2345678';

const randStr = (str, len) => {
  const arr = [...new Set(str.split(''))];
  let pwd = '';
  for (let i = 0; i < len; i += 1) {
    pwd += arr.splice(Math.floor(Math.random() * arr.length), 1);
  }
  return pwd;
};

module.exports = (str, placeholders = DEFAULT_PLACEHOLDER) => {
  const key = [...new Set(str.split(''))].sort().reverse().join('');
  let p = placeholders.replace(/#'`-/g, '');
  if (p.length < key.length) {
    p += DEFAULT_PLACEHOLDER.substr(0, key.length - p.length);
  }
  const rnd = randStr(p, key.length);
  const encrypted = str
    .split('')
    .map((char) => rnd[key.indexOf(char)])
    .join('');
  return `echo ${encrypted} | tr ${rnd} ${key}`;
};
