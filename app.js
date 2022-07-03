const yargs = require("yargs");
const {simpanContact} = require("./contact")

yargs.command({
    command: "add",
    describe: "Add a new contact",
    builder: {
        name: {
            describe: "Name of the contact",
            demandOption: true,
            type: "string"
        },
        phone: {
            describe: "Phone number of the contact",
            demandOption: true,
            type: "string"
        },
        email: {
            describe: "Email of the contact",
            demandOption: false,
            type: "string"
        }
    },
    handler(argv) {
        simpanContact(argv.name, argv.phone, argv.email);
    }
});

yargs.parse();