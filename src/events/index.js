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

const Log = require('../loaders/logger');
Log.info('Load: events/index.js');
const EventEmitter = require('events');

const Events = new class extends EventEmitter {
  /**
   * Add event name, define in separate category specific js file, and ensure file loaded in /src/loaders/events.
   *
   * Declare event categories & individual event keys using this format:
   *   CATEGORY = {
   *     EVENT_KEY: 'EVENT_NAME',
   *   };
   */
  example = {
    eventKey: 'exampleEvent',
  };
}();

module.exports = Events;
