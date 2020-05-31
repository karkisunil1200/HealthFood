exports.up = function(knex) {
  return knex.schema.createTable('food', tbl => {
    tbl.increments();

    tbl
      .string('name')
      .notNullable()
      .unique()
      .index();

    tbl.integer('calories').notNullable();
  });
};

exports.down = function(knex) {
  return knex.Sshema.dropTableIfExists('food');
};
