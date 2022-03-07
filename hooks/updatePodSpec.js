console.log("Running hook to update podspecs");
module.exports = function (context) {
  return new Promise((resolve, reject) => {
    var child_process = require('child_process');
    child_process.exec('rm Podfile.lock && pod install --repo-update', {cwd: __dirname}, function (error) {
      if (error !== null) {
        console.log('exec error: ' + error);
        reject('podspec update failed');
      }
      else {
        resolve();
      }
    });
  });
};
