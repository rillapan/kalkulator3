// fungsi untuk memasukkan angka ke tampilan teks
function insert(num) {
  document.form.textarea.value = document.form.textarea.value + num;
}

// fungsi untuk melakukan perhitungan
function equal() {
  var hasil = document.form.textarea.value;
  document.form.textarea.value = eval(hasil);
}

// fungsi untuk membersihkan tampilan
function clean() {
  document.form.textarea.value = "";
}

// fungsi untuk menghapus karakter terakhir
function back() {
  var hasil = document.form.textarea.value;
  document.form.textarea.value = hasil.substring(0, hasil.length - 1);
}

s;
