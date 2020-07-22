module.exports = (str) => `echo ${Buffer.from(str).toString('base64')} | base64 -d`;
