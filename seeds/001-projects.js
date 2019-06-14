
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Setup DB', completed: false},
        {id: 2, name: 'Create endpoints', completed: false},
        {id: 3, name: 'Build frontend', completed: false}
      ]);
    });
};
