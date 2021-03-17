module.exports = (client, DataTypes) => {
    const User = client.define(
        'Student',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING
            },
            email: {
                type: DataTypes.INTEGER
            },
            bornYear: {
                type: DataTypes.INTEGER
            }
        },
        {
            tableName: 'users',
            timestamps: false
        }
    );
    return User;
};
