'use strict';

const Hapi = require('hapi');

//const server = new Hapi.Server();
const server = new Hapi.Server({ debug: { request: ['error'] } });

server.connection({ host: '0.0.0.0', port: 3001 });

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('==>Hello!<==');
    }
});

server.route({
    method: 'GET',
    path: '/api/getBreedDetail',
    handler: function (request, reply) {
      var responseData = {'response' : ['breed1', 'breed2', 'breed3', 'breed4', 'breed5']};
        reply(responseData);
    }
});

/*
server.route({
    method: 'GET',
    path: '/api/getContentDetail',
    handler: function (request, reply) {
      var responseData = {'response' : ['content1', 'content2', 'content3', 'content4', 'content5']};
        reply(responseData);
    }
});
*/

server.start((err) => {

    /*if (err) {
        throw err;
    }*/
    console.log(`Server running at: ${server.info.uri}`);
});
/*
server.register(require('inert'), (err) => {

  if (err) {
      throw err;
  }

  server.route({
      method: 'GET',
      path: '/hello',
      handler: function (request, reply) {
          reply.file('./public/hello.html');
      }
  });
});*/

server.log(['error', 'database', 'read']);
