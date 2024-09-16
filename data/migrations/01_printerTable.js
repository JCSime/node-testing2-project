
exports.up = function(knex) {
    return knex.schema
        .createTable('printers', tbl =>{
            tbl.increments('printer_id')
            tbl.text('make').notNullable()
            tbl.text('model').notNullable()
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('printers')
};