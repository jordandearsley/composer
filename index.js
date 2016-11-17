/*
 * IBM Confidential
 * OCO Source Materials
 * IBM Concerto - Blockchain Solution Framework
 * Copyright IBM Corp. 2016
 * The source code for this program is not published or otherwise
 * divested of its trade secrets, irrespective of what has
 * been deposited with the U.S. Copyright Office.
 */

'use strict';

/**
 * IBM Concerto module. IBM Concerto is a framework for creating
 * blockchain backed digital networks and exchanging assets between participants
 * via processing transactions.
 * @module ibm-concerto-common
 */

module.exports.Serializer = require('./lib/serializer');
module.exports.ModelManager = require('./lib/modelmanager');
module.exports.Factory = require('./lib/factory');
module.exports.Resource = require('./lib/model/resource');
module.exports.Relationship = require('./lib/model/relationship');
module.exports.Introspector = require('./lib/introspect/introspector');
