function inputName() {
    var nama = sessionStorage.getItem('nama');
    var input = document.getElementById('id_jumbotron');
    var time = new Date().getHours();
    if (nama == null) {
        var nama = prompt('Masukkan Nama Anda: ');
    }
    if (nama != null) {
        if (time > 0 && time < 11) {
            input.innerHTML = 'Selamat Pagi ' + nama;
            sessionStorage.setItem('nama', nama);
        } else if (time > 10 && time < 15) {
            input.innerHTML = 'Selamat Siang ' + nama;
            sessionStorage.setItem('nama', nama);
        } else if (time > 14 && time < 19) {
            input.innerHTML = 'Selamat Sore ' + nama;
            sessionStorage.setItem('nama', nama);
        } else {
            input.innerHTML = 'Selamat Malam ' + nama;
            sessionStorage.setItem('nama', nama);
        }
    }
}