/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global'],function(q){"use strict";var m={};m.loadStyles=function(f){return q.get(q.sap.getModulePath('sap.ui.rta.themes.base.'+f)+'.css').then(function(d){if(sap.ui.getCore().getConfiguration().getRTL()){return d.replace(/right/g,'left');}return d;});};return m;},true);
