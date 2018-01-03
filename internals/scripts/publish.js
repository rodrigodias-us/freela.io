const shell = require('shelljs');
const ghpages = require('gh-pages');

ghpages.publish('build', {dotfiles: true}, function(err) {
  if (err) {
    shell.echo(err.message);
  } else {
    shell.echo('\nPublish!!!');
  }
});
