/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["jquery.sap.global","./library","./Tool","./TooltipToolHandler","./TooltipToolGizmo"],function(q,l,T,a,b){"use strict";var c=T.extend("sap.ui.vk.tools.TooltipTool",{metadata:{events:{hover:{parameters:{x:"int",y:"int",nodeRef:"any"}}}},constructor:function(i,s){if(c._instance){return c._instance;}T.apply(this,arguments);this._viewport=null;this._handler=null;c._instance=this;}});c.prototype.init=function(){if(T.prototype.init){T.prototype.init.call(this);}this.setFootprint(["sap.ui.vk.threejs.Viewport"]);this.setAggregation("gizmo",new b());};c.prototype.setActive=function(v,d,g){if(T.prototype.setActive){T.prototype.setActive.call(this,v,d,g);}if(v){this._activateTool(d);}else{this._deactivateTool();}return this;};c.prototype._activateTool=function(d){this._viewport=d;this._handler=new a(this);this._gizmo=this.getGizmo();if(this._gizmo){this._gizmo.show(d,this);}this._prepare();};c.prototype._deactivateTool=function(){if(this._handler){if(this._viewport._loco){this._viewport._loco.removeHandler(this._handler);}this._handler=null;}if(this._gizmo){this._gizmo.hide();this._gizmo=null;}};c.prototype._prepare=function(){var o=false;if(this._viewport._loco){this._viewport._loco.addHandler(this._handler);o=true;}return o;};c.prototype.setTitle=function(t){if(this._gizmo){this._gizmo.setTitle(t);}return this;};c.prototype.queueCommand=function(d){if(this._prepare()){if(this.isViewportType("sap.ui.vk.dvl.Viewport")){if(this._dvlRendererId){this._dvl.Renderer._queueCommand(d,this._dvlRendererId);}}else if(this.isViewportType("sap.ui.vk.threejs.Viewport")){d();}}return this;};c.prototype.destroy=function(){T.prototype.destroy.call(this);this._viewport=null;this._handler=null;};return c;});