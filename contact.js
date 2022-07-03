const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');

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

const simpanContact = (nama,noHp,email) => {
    const contact = {
        nama,noHp,email
    }

    const file = fs.readFileSync('data/contacts.json','utf8');
    const contacts = JSON.parse(file);
    const duplikat = contacts.find(contact => contact.nama === nama);
    
    if(duplikat) {
        console.log(chalk.red.inverse.bold('Contact sudah ada'));
        return false;
    }

    if(email){
        if(!validator.isEmail(email)){
            console.log(chalk.red.inverse.bold('Email Tidak Valid'));
            return false;
        }
    }

    if(!validator.isMobilePhone(noHp, 'id-ID')){
        console.log(chalk.red.inverse.bold('Nomber Telepon Tidak Valid'));
        return false;
    }

    contacts.push(contact)
    fs.writeFileSync('data/contacts.json',JSON.stringify(contacts))
    console.log(chalk.green.inverse.bold('Terima kasih telah mengisi data'));
}

module.exports = {simpanContact}