exports.seed = function(knex) {
    return knex('3d_printers')
      .truncate()
      .then(function() {
        return knex('printers').insert([
          { make: 'Creality', model: 'Ender 3 Pro' },
          { make: 'Prusa', model: 'MK3S+' },
          { make: 'Voxelab', model: 'Aries' },
        ]);
      });
  };
  