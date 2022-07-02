const {simpanContact,tulisPertanyaan} = require('./contact');

const main = async () => {
    const nama = await tulisPertanyaan('Tuliskan Nama Anda : ');
    const email = await tulisPertanyaan('Tuliskan Email Anda : ');
    const noHp = await tulisPertanyaan('Tuliskan No Hp Anda : ');

    simpanContact(nama,email,noHp);
}

main();