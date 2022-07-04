
module.exports = (Sequelize, DataTypes) => {
  const Task = Sequelize.define('Task', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    task: {
      type: DataTypes.INTEGER
    },
    status: {
      type: DataTypes.INTEGER
    },
    create_at: {
      type: DataTypes.DATE,
      allowNull: false,
      underscored: true,
    },
    update_at: {
      type: DataTypes.DATE,
      allowNull: false,
      underscored: true,
    }
  });

	return Task;
}