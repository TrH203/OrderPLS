import { Sequelize } from "sequelize";

const sequelize = new Sequelize('OrderPLS', 'root', null, {
    dialect: 'mysql',
    dialectOptions: {
        // Your mysql2 options here
    }
})

let testConnection = async () => {
    try {
        await sequelize.authenticate();
        return "OKE";
    } catch (e) {
        console.log("ERR", e);
    }
}
export default testConnection;