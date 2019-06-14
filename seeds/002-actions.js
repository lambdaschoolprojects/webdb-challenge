
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {id: 1, description: 'create knexfile', project_id: 1, completed: false, notes: "Don't forget useNullAsDefault"},
        {id: 2, description: 'create initial migration', project_id: 1, completed: false},
        {id: 3, description: 'seed tables', project_id: 1, completed: false}
      ]);
    });
};
