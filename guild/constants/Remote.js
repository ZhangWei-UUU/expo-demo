let development = false;

let Remote;
if (development) {
  Remote = "http://10.73.53.43"
} else {
  Remote = "https://polkadot.cloud-wave.cn";
}
export default Remote;