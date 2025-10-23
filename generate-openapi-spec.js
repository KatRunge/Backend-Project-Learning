const swaggerJsdoc = require('swagger-jsdoc');
const {join} = require("node:path");
const fs = require("node:fs");

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
  },
apis: ['server.js'],
};

const openapiSpecification = swaggerJsdoc(options);
const outputPath = join(__dirname, 'spec.json');
fs.writeFileSync(outputPath, JSON.stringify(openapiSpecification, null, 2), 'utf8');
console.log(`OpenAPI specification generated at: ${outputPath}`);