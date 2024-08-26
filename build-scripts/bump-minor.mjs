import { spawn } from 'child_process';
import core from '@actions/core';
import semver from 'semver';
import fs from 'fs';
import {readPackageSync} from 'read-pkg';
// const github = require('@actions/github');

async function getNpmVersion(name) {
  return new Promise((resolve, reject) => {
    const npm = spawn('npm', ['view', name, 'version', '--json']);
    let data = '';
    npm.stdout.on('data', (chunk) => {
      data += chunk;
    });
    npm.on('close', () => {
      resolve(data);
    });
    npm.on('error', (err) => {
      reject(err);
    });
  });

}

try {
  const packageJson = readPackageSync();
  const { name, version: originalVersion } = packageJson;
  const npmVersion = JSON.parse(await getNpmVersion(name));
  let finalVersion = npmVersion;
  if (semver.gt(originalVersion, npmVersion)) {
    finalVersion = originalVersion;
  } else {
    finalVersion = semver.inc(npmVersion, 'minor');
  }

  console.log('Bump Summary:', {
    originalVersion,
    npmVersion,
    finalVersion,
  });

  packageJson.version = finalVersion;

  fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));
  console.log(`taltaltal - finalVersion`, finalVersion);

} catch (error) {
  core.setFailed(error.message);
}