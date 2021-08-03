console.info('Load: config/index.js');
const dotenv = require('dotenv');

const Environments = require('./environments.js');
const LogLevels = require('./logLevels.js');
const DbTypes = require('./dbTypes.js');

/**
 * Supports the following environment values being defined in a .env file
 *
 * # App values
 * APP_NAME=ctree-backend
 * NODE_ENV=dev
 * PORT=3000
 *
 * # Database values
 * DB_TYPE=
 * DB_URI=
 *
 * # Log values
 * LOG_LEVEL=debug
 *
 * # API values
 * API_PATH="/api"
 *
 * # JWT values
 * JWT_SECRET="shhhhhhared-secret"
 * JWT_AUDIENCE="http://myapi/protected"
 * JWT_ISSUER="http://issuer"
 * JWT_ALGORITHM=HS256
 */
process.env.APP_NAME = process.env.APP_NAME || 'ctree-backend';
process.env.NODE_ENV = process.env.NODE_ENV || Environments.production;

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

const envConfigResult = dotenv.config();
if (envConfigResult.error) {
  // Crash if error initializing process.env from .env file
  throw new Error("Unable to find .env file");
}

const Config = {
  environment: process.env.NODE_ENV,
  port: parseInt(process.env.PORT, 10) || 3000,

  database: {
    type: process.env.DB_TYPE || DbTypes.tinkerGraph,
    url: process.env.DB_URI,
  },

  log: {
    level: process.env.LOG_LEVEL || LogLevels.error,
  },

  api: {
    prefix: process.env.API_PATH || '/api',
  },

  jwt: {
    secret: process.env.JWT_SECRET,
    audience: process.env.JWT_AUDIENCE,
    issuer: process.env.JWT_ISSUER,
    algorithm: process.env.JWT_ALGORITHM,
  },
};

module.exports = Config;
