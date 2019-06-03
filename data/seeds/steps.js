
exports.seed = function(knex, Promise) {
  return knex('steps').insert([
    {
      howto_id: 1,
      description: 'Add water'
    },
    {
      howto_id: 1,
      description: 'add stuff'
    },
    {
      howto_id: 1,
      description: 'Vwala you have slime'
    }
  ]);
};
