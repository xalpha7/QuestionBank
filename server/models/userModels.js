module.exports = (sequelize, DataTypes) => {

    const user = sequelize.define("user", {
        userId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }

    })

    return user;
}