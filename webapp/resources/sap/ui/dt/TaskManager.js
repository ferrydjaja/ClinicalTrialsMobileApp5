/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/base/ManagedObject'],function(M){"use strict";var T=M.extend("sap.ui.dt.TaskManager",{metadata:{library:"sap.ui.dt",properties:{suppressEvents:{type:"boolean",defaultValue:false}},events:{add:{parameters:{taskId:"int"}},complete:{parameters:{taskId:"int"}}}},constructor:function(){M.apply(this,arguments);this._aList=[];},_iNextId:0});T.prototype.add=function(t){if(!jQuery.isPlainObject(t)||!t.type){throw new Error('Invalid task specified');}var i=this._iNextId++;this._aList.push(jQuery.extend({},t,{id:i}));if(!this.getSuppressEvents()){this.fireAdd({taskId:i});}return i;};T.prototype.complete=function(t){this._aList=this._aList.filter(function(m){return m.id!==t;});if(!this.getSuppressEvents()){this.fireComplete({taskId:t});}};T.prototype.cancel=function(t){this.complete(t);};T.prototype.isEmpty=function(){return this.count()===0;};T.prototype.count=function(){return this._aList.length;};T.prototype.getList=function(){return this._aList.slice(0);};T.prototype.getList=function(){return this._aList.slice(0);};T.prototype.destroy=function(){this.setSuppressEvents(true);this.getList().forEach(function(t){this.cancel(t.id);},this);};return T;});
