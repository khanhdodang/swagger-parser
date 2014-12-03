/**
 * The parsed JavaScript objects for each YAML/JSON file
 */
var parsedFiles = {
  minimal: {
    swagger: '2.0',
    info: {
      version: '1.0.0',
      description: 'Example of the bare minimum Swagger spec',
      title: 'minimal'
    },
    paths: {
      '/users': {
        'get': {
          responses: {
            '200': {
              'description': 'Describe the 200 response in more detail'
            }
          }
        }
      }
    }
  }
};


if (typeof(env) === 'object') {
  env.parsedFiles = parsedFiles;
}
else {
  global.parsedFiles = parsedFiles;
}