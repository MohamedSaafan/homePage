export const makeGetRequest = (url, callback) => {
  let xhr = new XMLHttpRequest();
  xhr.open("Get", url);
  xhr.onreadystatechange = function (event) {
    if (this.readyState == 4 && this.status == 200) {
      callback(event.target.response);
    }
  };
  xhr.send();
};
//"GET",
//"https://ey5anj8005.execute-api.us-east-2.amazonaws.com/dev/posts"//
