const { bacaData } = require("./fungsiCustom");

// ! JANGAN DIMODIFIKASI
// main function
(() => {
  console.log("Mari kita membaca data yah !");
  console.log("====");
  const fnca = (err, data) => {
    if (err) return console.log(err);
    console.log(data?.join());
  };
  bacaData(fnca);

  console.log("Walaupun tulisan ini diletakkan di setelah bacaData");
  console.log("Namun tulisan ini akan ditampilkan terlebih dahulu");
  console.log("Karena bacaData bersifat asynchronous");
  console.log("====");
})();
