function getData(key) {
  $.get('' + key, function (data) {
    return data;
  })
}

function setData(key, value) {
  $.post('' + key, value, function () {

  })
}

function clearData(key) {
  localStorage.removeItem(key);
}
