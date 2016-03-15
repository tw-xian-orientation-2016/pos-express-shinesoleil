function getData(key) {
  $.get('/' + key, function (data) {
    console.log(JSON.parse(data));
    return data;
  })
}

function setData(key, value) {
  $.post('/' + key, value, function () {

  })
}

function clearData(key) {
  localStorage.removeItem(key);
}
