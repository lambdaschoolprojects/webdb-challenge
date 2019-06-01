
exports.up = async function(knex) {
  await knex.schema.dropTableIfExists('notes');

  await knex.schema.alterTable('actions', tbl => {
      tbl.string('notes');
  })
};

exports.down = async function(knex) {
    await knex.schema.createTable('notes', tbl => {
        tbl.increments('id');
        tbl.integer('action_id').references('id').inTable('actions').notNullable();
        tbl.string('description');
    })
};
