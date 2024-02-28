
const {
    DB_HOST,
    DB_DATABASE,
    DB_USER,
    DB_PASSWORD
} = process.env;



const Sequelize = require('sequelize');

const db = new Sequelize(DB_DATABASE, DB_USER, null, {
    host: DB_HOST,
    // pool: {
    //     max: 10,
    //     min: 0,
    //     acquire: 30000,
    //     idle: 10000
    // },
    dialect: 'mysql',
    dialectOptions: {
        options: {
            useUTC: false,
            dateFirst: 1,
        }
    },
    define: {
        timestamps: false
    },
});

async function listTables() {
    const query = `
        SELECT table_name
        FROM information_schema.tables
        WHERE table_schema = :databaseName
        AND table_type = 'BASE TABLE';
    `;

    try {
        const [results, metadata] = await db.query(query, {
            replacements: { databaseName: DB_DATABASE },
            type: Sequelize.QueryTypes.SELECT
        });

        console.log('Tables in the database:');
        console.log(results);
    } catch (error) {
        console.error('Error fetching tables:', error);
    }
}
// listTables();
module.exports = db;
