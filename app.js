const lib = require('./lib/stringlib');

const command = process.argv[2];
const str = process.argv[3];

switch (command) {
  case 'reverse':
    console.log(lib.reverse(str));
    break;
  case 'upper':
    console.log(lib.uppercase(str));
    break;
  case 'lower':
    console.log(lib.lowercase(str));
    break;
  default:
    console.log('Valid commands are reverse, lower and upper');

}