
exports.up = async function(knex) {
    await knex.schema.alterTable('actions', tbl => {
        tbl.boolean('completed');
    })
};

exports.down = async function(knex) {
  await knex.schema.alterTable('actions', tbl => {
      tbl.dropColumn('completed');
  })
};
