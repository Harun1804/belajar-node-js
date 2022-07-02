const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// cek apakah folder tidak ada
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// cek apakah file tidak ada
const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]','utf-8');
}

const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (jawaban) => {
            resolve(jawaban);
        });
    })
}

const main = async () => {
    const nama = await tulisPertanyaan('Tuliskan Nama Anda : ');
    const email = await tulisPertanyaan('Tuliskan Email Anda : ');
    const noHp = await tulisPertanyaan('Tuliskan No Hp Anda : ');

    const contact = {
        nama,email,noHp
    }

    const file = fs.readFileSync('data/contacts.json','utf8');
    const contacts = JSON.parse(file);
    contacts.push(contact)
    fs.writeFileSync('data/contacts.json',JSON.stringify(contacts))
    console.log("Terima kasih telah mengisi data");
    rl.close();
}

main();