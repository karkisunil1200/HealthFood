exports.up = function(knex) {
  return knex.schema.createTable('category', tbl => {
    tbl.increments();

    tbl
      .string('name')
      .notNullable()
      .unique()
      .index();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('category');
};
