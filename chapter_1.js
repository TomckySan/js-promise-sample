var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function asyncFunction() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('thenに渡す値');
      // reject('errorのときに渡す値');
    }, 1000);
  });
}

function fetchUrl(url) {
  return new Promise(function (resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.onload = function () {
      if (200 <= req.status && req.status < 300) {
        resolve(req.responseText);
      } else {
        reject(new Error(req.statusText));
      }
    };
    req.onerror = function () {
      reject(new Error(req.statusText));
    };
    req.send();
  });
}

// asyncFunction().then(function (value) {
//   console.log('SUCCESS');
//   console.log(value);
// }).catch(function (error) {
//   console.error('ERROR');
//   console.error(error);
// });

// asyncFunction().then(function (value) {
//   console.log('SUCCESS');
//   console.log(value);
// }, function (error) {
//   console.error('ERROR');
//   console.error(error);
// });

var url = 'https://httpbin.org/get';
// var url = 'https://httpbin.org/status/500';
fetchUrl(url).then(function onFulfilled(value) { // わかりやすくするために名前をつけているだけ
  console.log('SUCCESS');
  console.log(value);
}).catch(function onRejected(error) { // わかりやすくするために名前をつけているだけ
  console.log('!!ERROR!!');
  console.error(error);
});
