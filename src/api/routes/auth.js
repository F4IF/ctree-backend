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

const Log = require('../../loaders/logger');
Log.info('Load: api/routes/auth.js');
const { Router, Request, Response, NextFunction } = require('express');
const AuthService = require('../../services/auth');
const Middleware = require('../middleware');
const { celebrate, Joi, Segments } = require('celebrate');

const route = Router();

module.exports = (router /* Router */) => {
  Log.info('Loading auth routes');
  router.use('/auth', route);

  route.post('/register',
    Middleware.logRequest,
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        username: Joi.string().required(),
        password: Joi.string().required(),
      }),
    }),
    async (req /* Request */, res /* Response */, next /* NextFunction */) => {
      try {
        const { username, password } = req.body;
        const authServiceInstance = new AuthService();
        const { user, token } = await authServiceInstance.register(username, password);
        return res.json({ user, token }).status(201).end();
      } catch (e) {
        Log.error('Error in /auth/register: %s', e);
        return next(e);
      }
    },
  );

  route.post('/login',
    Middleware.logRequest,
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        username: Joi.string().required(),
        password: Joi.string().required(),
      }),
    }),
    async (req /* Request */, res /* Response */, next /* NextFunction */) => {
      try {
        const { username, password } = req.body;
        const authServiceInstance = new AuthService();
        const { user, token } = await authServiceInstance.login(username, password);
        return res.json({ user, token }).status(200).end();
      } catch (e) {
        Log.error('Error in /auth/login: %s', e);
        return next(e);
      }
    },
  );

  route.post('/logout',
    Middleware.logRequest,
    Middleware.processToken,
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        username: Joi.string().required(),
      }),
    }),
    async (req /* Request */, res /* Response */, next /* NextFunction */) => {
      try {
        /** @TODO add token to list of invalid tokens in DB (ex. Redis) and return 200 **/
        const { username } = req.body;
        const authServiceInstance = new AuthService();
        await authServiceInstance.logout(username);
        return res.status(200).end();
      } catch (e) {
        Log.error('Error in /auth/logout: %s', e);
        return next(e);
      }
    }
  );
};
