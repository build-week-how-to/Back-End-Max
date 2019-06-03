
exports.seed = function(knex, Promise) {
  return knex('howto').insert([
    {
      title: 'Slime'
    }
  ]);
};
