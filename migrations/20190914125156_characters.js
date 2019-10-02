
exports.up = function(knex) {
    return knex.schema.createTable('characters', tbl => {
        tbl.increments();
        tbl.string('name').notNullable();
        tbl.string('species').notNullable();
        tbl.text('description', 280);
        tbl.string('status').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('characters')
};
