/**
 * Copyright 2018, Erwin Mombay
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const nconf = require('nconf');

nconf.argv()
  .env([
    'NODE_ENV',
    'PORT',
    'SECRET',
    'GITHUB_ACCESS_TOKEN',
    'GITHUB_REPO_DIR',
    'GITHUB_BOT_USERNAME',
  ])
  .defaults({
    PORT: 8080
  });
