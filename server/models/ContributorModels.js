module.exports = (sequelize, DataTypes) => {

    const contributor = sequelize.define("contributor", {
        userId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        questionSet: {
            type: DataTypes.JSON,
            allowNull: false
        },
       

    })

    return contributor;
}