<h2>Examen técnico Almundo.com - Ejercicio 1</h2>

Para levantar la api de hoteles es necesario tener instalado mongo, npm (o yarn) y node.js > 4.x

<strong>Con npm:</strong>

npm install
npm start

<strong>Con yarn:</strong>

yarn install
yarn start

Para restaurar la base de datos de mongo, parado en la raíz del directorio hotelApi:

mongoimport -d hotel -c hotels dump/hotels-dump.json

Documentación: http://localhost:3000/api/docs
