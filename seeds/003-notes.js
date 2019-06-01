
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {id: 1, description: 'npx knex init', action_id: 1},
        {id: 2, description: 'add path to development db', action_id: 1},
        {id: 3, description: 'useNullAsDefault', action_id: 1}
      ]);
    });
};
