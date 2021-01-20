// Luas Segitiga
const alas = prompt('Masukkan Alas Segitiga : ');
const tinggi = prompt('Masukkan Tinggi Segitiga : ');
const luasSegitiga = alas * tinggi / 2;
alert(`Luas Segitiga adalah : ${luasSegitiga}`);

// Luas Lingkaran
const jariLingkaran = prompt('Masukkan jari-jari lingkaran : ');
const phi = 3.14;
const luasLingkaran = phi * jariLingkaran ** 2;
alert(`Luas Lingkaran adalah : ${luasLingkaran}`);

// membuat object 
const dataDiri = {
    nama: "Helmi Agustiawan",
    umur: 22,
    tanggalLahir: "03-Agustus-1998",
    Alamat: "bogor",
    Pekerjaan: "Front End Developer",
}
const tagP = document.querySelectorAll('p');

tagP[0].textContent = dataDiri.nama;
tagP[1].textContent = dataDiri.umur;
tagP[2].textContent = dataDiri.tanggalLahir;
tagP[3].textContent = dataDiri.Alamat;
tagP[4].textContent = dataDiri.Pekerjaan;


// membuat array 
const hobbies = ['Gaming', 'Programming', 'Swimming', 'Reading', 'Basketball'];
const ul = document.querySelector('ul');

hobbies.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
});
