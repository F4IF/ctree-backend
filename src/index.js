/**
 * @license
 * Copyright (c) 2021 Foundation For an Innovative Future (InnovativeFuture.org)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or any
 * later version.
 *
 * Foundation For an Innovative Future reserves the right to release the
 * covered work, in part or in whole, under a different open source
 * license and/or with specific copyleft exclusions.  Such a release
 * would not invalidate the license for this project, although the
 * project released with a modified license would not be considered
 * part of this covered work or subject to the copyleft portions of this
 * license even if the projects are identical.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * Please email contact@innovativeFuture.org for inquiries related to
 * this license.
 */
'use strict'

const Log = require('./loaders/logger');
Log.info('Load: index.js');
const Config = require('./config');
const express = require('express');

async function startServer() {
  Log.info('Called: startServer()');

  const app = express();

  await require('./loaders')({ expressApp: app });

  // TODO: uncomment to serve images, CSS files, and JavaScript files in a directory named public
  //app.use(express.static('public'));

  app.listen(Config.port, () => {
    Log.info(`
################################################
#  Server listening on port: ${Config.port}
################################################`);
  }).on('error', err => {
    Log.error(err);
    process.exit(1);
  });
}

startServer();
