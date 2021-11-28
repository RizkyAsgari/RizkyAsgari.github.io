function welcome() {
	alert('Selamat datang di Katalog Produk!');
	window.location.href='katalog.php';
}

function diskon() {
	nama = prompt('Siapa nama kamu?');

	alert('Selamat ' + nama + " Kamu mendapatkan voucher 75%!");
}