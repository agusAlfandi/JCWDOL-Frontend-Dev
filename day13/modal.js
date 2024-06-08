var id_aktif;
function on(clicked_id) {
  document.getElementById("overlay").style.display = "block";
  document.getElementById(clicked_id).style.display = "block";
  id_aktif = clicked_id;
}
function off() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById(id_aktif).style.display = "none";
}
