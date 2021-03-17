module.exports = (client, DataTypes) => {
    const Car = client.define(
        'Cars',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            }
        }
    );

    return Car;
};
