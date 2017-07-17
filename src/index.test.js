const context = require.context('./app', true, /.+\.test\.(js|jsx)?$/);
context.keys().forEach(context);
