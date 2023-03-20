module.exports = (sequelize, DataTypes) => {
  Book = sequelize.define('Book', {
    name: {
        type: DataTypes.STRING
    },RollNo: {
        type: DataTypes.STRING
    },class:{
        type: DataTypes.STRING
    }
},{
    timestamps: false
})
return Book
}

