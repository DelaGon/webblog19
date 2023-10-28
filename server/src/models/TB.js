
module.exports = (sequelize, DataTypes) => {
  const Table = sequelize.define(
    "Table",
    {
      type: DataTypes.STRING,
      brand: DataTypes.STRING,
      color: DataTypes.STRING,
      material: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    
  );
  
  Table.associate = function (models) {};
  return Table;
};
