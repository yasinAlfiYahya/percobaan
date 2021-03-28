function onlyNumber(evt) {
  var charCode = evt.which ? evt.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  return true;
}

function hitungSilinder() {
  r = document.getElementById('id_colFormLabelr').value;
  t = document.getElementById('id_colFormLabelt').value;
  luas_permukaan = (2 * Math.PI * Math.pow(r, 2) + 2 * Math.PI * r * t).toFixed(2);
  volume_silinder = (Math.PI * Math.pow(r, 2) * t).toFixed(2);
  document.getElementById('txtLuas').value = luas_permukaan;
  document.getElementById('txtVolume').value = volume_silinder;
}

function hitungKerucut() {
  r = document.getElementById('id_colFormLabelr').value;
  t = document.getElementById('id_colFormLabelt').value;
  s = document.getElementById('id_colFormLabels').value;
  luas_permukaan = (Math.PI * Math.pow(r, 2) + Math.PI * r * s).toFixed(2);
  volume_kerucut = ((Math.PI * Math.pow(r, 2) * t) / 3).toFixed(2);
  document.getElementById('txtLuas').value = luas_permukaan;
  document.getElementById('txtVolume').value = volume_kerucut;
}

function hitungBola() {
  r = document.getElementById('id_colFormLabelr').value;
  luas_permukaan = (4 * Math.PI * Math.pow(r, 2)).toFixed(2);
  volume_bola = ((4 * Math.PI * Math.pow(r, 3)) / 3).toFixed(2);
  document.getElementById('txtLuas').value = luas_permukaan;
  document.getElementById('txtVolume').value = volume_bola;
}
