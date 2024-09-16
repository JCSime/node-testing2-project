const db = require('../data/dbConfig');

async function createPrinter(printer){
    const [id] = await db('3d_printers').insert(printer)
    return db('3d_printers').where('printer_id', id).first()
}

module.exports = {
    createPrinter
}