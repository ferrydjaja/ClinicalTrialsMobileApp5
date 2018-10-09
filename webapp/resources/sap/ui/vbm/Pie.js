/*
 * ! SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
sap.ui.define(['./VoBase','./library'],function(V,l){"use strict";var P=V.extend("sap.ui.vbm.Pie",{metadata:{library:"sap.ui.vbm",properties:{position:{type:"string",group:"Misc",defaultValue:null},scale:{type:"string",group:"Misc",defaultValue:null}},defaultAggregation:"items",aggregations:{items:{type:"sap.ui.vbm.PieItem",multiple:true,singularName:"item"}},events:{}}});P.prototype.openContextMenu=function(m){this.oParent.openContextMenu("Pie",this,m);};P.prototype.getDataElement=function(){var s=[];var p=this.getItems();for(var n=0,a=p.length;n<a;++n){var i=p[n];s.push({"T":i.getName(),"V":i.getValue(),"C":i.getColor()});}var e=V.prototype.getDataElement.apply(this,arguments);var b=this.oParent.mBindInfo;if(b.P){e.P=this.getPosition();}if(b.S){e.S=this.getScale();}e.N={"name":"Series","E":s};return e;};P.prototype.handleChangedData=function(e){if(e.P){this.setPosition(e.P);}if(e.S){this.setScale(e.S);}};return P;});
