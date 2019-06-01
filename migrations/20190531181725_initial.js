
exports.up = async function(knex) {
    await knex.schema.createTable('projects', tbl => {
        tbl.increments('id');
        tbl.string('name').notNullable();
        tbl.string('description');
        tbl.boolean('completed');
    });

    await knex.schema.createTable('actions', tbl => {
       tbl.increments('id');
       tbl.string('description');
       tbl.integer('project_id').references('id').inTable('projects').notNullable();
    });

    await knex.schema.createTable('notes', tbl => {
        tbl.increments('id');
        tbl.integer('action_id').references('id').inTable('actions').notNullable();
        tbl.string('description');
    })
  
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('notes');
    await knex.schema.dropTableIfExists('actions');
    await knex.schema.dropTableIfExists('projects');
  
};
