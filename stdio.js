/*
 * Copyright 2012 The Closure Compiler Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverfiew Definitions for node's stdio module. Depends on the assert module.
 * @see http://nodejs.org/api/stdio.html
 * @externs
 * @author Daniel Wirtz <dcode@dcode.io>
 */

/**
 * @type {Object.<string,function>}
 */
var console = {};

/**
 * @param {*} data
 * @param {...*} var_args
 */
console.log = function(data, var_args) {};

/**
 * @param {*} data
 * @param {...*} var_args
 */
console.info = function(data, var_args) {};

/**
 * @param {*} data
 * @param {...*} var_args
 */
console.error = function(data, var_args) {};

/**
 * @param {*} data
 * @param {...*} var_args
 */
console.warn = function(data, var_args) {};

/**
 * @param {*} obj
 */
console.dir = function(obj) {};

/**
 * @param {*} label
 */
console.time = function(label) {};

/**
 * @param {*} label
 */
console.timeEnd = function(label) {};

/**
 * @param {*} label
 */
console.trace = function(label) {};

/**
 * @param {*} expression
 * @param {*} message
 * @throws {assert.AssertionError}
 */
console.assert = function(expression, message) {};