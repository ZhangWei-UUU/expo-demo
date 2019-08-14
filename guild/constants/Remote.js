var production = "https://polkadot.cloud-wave.cn/";
var development = "http://10.73.53.43";
var Remote = production;

if (process.env.NODE_ENV === "development") {
  Remote = development;
}
export default Remote;