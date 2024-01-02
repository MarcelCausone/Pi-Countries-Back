require('dotenv').config();
const server = require("./src/server");
const { conn } = require("./src/db.js");
const port = process.env.PORT || 3001;

//Sincronización de la base de datos
conn
  .sync({ force: true })
  .then(() => {
    //inicio del servidor
    server.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((error) => console.error(error));

/*este código inicia un servidor Express.js que se conecta a una base de datos 
con Sequelize, sincroniza la base de datos con los modelos Sequelize, y 
luego inicia el servidor para escuchar las solicitudes HTTP.*/
