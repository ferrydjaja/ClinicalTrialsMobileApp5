/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

(c) Copyright 2009-2018 SAP SE. All rights reserved
 */
sap.ui.define(['sap/viz/ui5/format/ChartFormatter','sap/ui/Device'],function(C,D){"use strict";var a={};var F={plotArea:{scrollbar:{spacing:2}},legend:{scrollbar:{spacing:2}}};var i=sap.ui.Device.system.tablet||sap.ui.Device.system.phone;var b={'tooltip':{'visible':false},'general':{'groupData':true},'plotArea':{'window':{'start':'firstDataPoint'},'dataLabel':{'hideWhenOverlap':true,'respectShapeWidth':true,'style':{'color':null}},'dataPointSize':{'min':(i)?40:24,'max':96}},'interaction':{'behaviorType':'noHoverBehavior','selectability':{'mode':'multiple'},'zoom':{'enablement':'enabled','direction':'categoryAxis'},'enableKeyboard':true,'enableInternalEvents':true},'timeAxis':{'label':{'forceToShowFirstLastData':true}},'categoryAxis':{'label':{'angle':45,'rotation':'auto'}},'legendGroup':{'layout':{'position':'auto','respectPlotPosition':false},'forceToShow':true},'legend':{'isScrollable':true,'selectionFeedback':true}};var c={'plotArea':{'primaryValuesColorPalette':['sapUiChartPaletteSequentialHue1','sapUiChartPaletteSequentialHue1Light2','sapUiChartPaletteSequentialHue1Dark1'],'secondaryValuesColorPalette':['sapUiChartPaletteSequentialHue2','sapUiChartPaletteSequentialHue2Light2','sapUiChartPaletteSequentialHue2Dark1']},"valueAxis":{"title":{"style":{"color":"sapUiChartPaletteSequentialHue1Dark1"}},"axisLine":{"visible":false},"color":"sapUiChartPaletteSequentialHue1Dark1"},"valueAxis2":{"title":{"style":{"color":"sapUiChartPaletteSequentialHue2Dark1"}},"axisLine":{"visible":false},"color":"sapUiChartPaletteSequentialHue2Dark1"}};a.getExtraProp=function(e){if(e==="fiori"&&i){return jQuery.extend(true,{},F);}else{return{};}};a._getFiori=function(P,t){var r=P.mergeProperties(t,{},a._general,a._specified[t.replace('info/','')]||{});var e=jQuery.extend(true,{},b);r=P.mergeProperties(t,e,r);if(/dual/.test(t)){r=P.mergeProperties(t,r,c);}return r;};a.get=function(P,t,e){if(e==="fiori"){return a._getFiori(P,t);}else{return P.mergeProperties(t,{},a._general,a._specified[t.replace('info/','')]||{},h({},t));}};function g(p,k){if(p==null||k.legnth===0){return p;}var e=p[k[0]];if(e&&e.children){return g(e.children,k.slice(1));}return e;}function s(e,k,v){if(k.length===0){return v;}e=e||{};var p=e[k[0]];e[k[0]]=s(p,k.slice(1),v);return e;}var d="u";var f=[["valueAxis","label","formatString"],["valueAxis2","label","formatString"]];function h(e,k){var m=sap.viz.api.metadata.Viz.get(k);if(m){var l=m.properties;f.forEach(function(n){var p=g(l,n);if(p&&p.hasOwnProperty("defaultValue")){s(e,n,d);}});}return e;}a._general={"title":{"visible":true},"legend":{"visible":true},"plotArea":{"animation":{"dataLoading":false,"dataUpdating":false,"resizing":false},'colorPalette':['sapUiChartPaletteQualitativeHue1','sapUiChartPaletteQualitativeHue2','sapUiChartPaletteQualitativeHue3','sapUiChartPaletteQualitativeHue4','sapUiChartPaletteQualitativeHue5','sapUiChartPaletteQualitativeHue6','sapUiChartPaletteQualitativeHue7','sapUiChartPaletteQualitativeHue8','sapUiChartPaletteQualitativeHue9','sapUiChartPaletteQualitativeHue10','sapUiChartPaletteQualitativeHue11','sapUiChartPaletteQualitativeHue12','sapUiChartPaletteQualitativeHue13','sapUiChartPaletteQualitativeHue14','sapUiChartPaletteQualitativeHue15','sapUiChartPaletteQualitativeHue16','sapUiChartPaletteQualitativeHue17','sapUiChartPaletteQualitativeHue18','sapUiChartPaletteQualitativeHue19','sapUiChartPaletteQualitativeHue20','sapUiChartPaletteQualitativeHue21','sapUiChartPaletteQualitativeHue22'],'primaryValuesColorPalette':['sapUiChartPaletteSequentialHue1Light1','sapUiChartPaletteSequentialHue1','sapUiChartPaletteSequentialHue1Dark1'],'secondaryValuesColorPalette':['sapUiChartPaletteSequentialHue2Light1','sapUiChartPaletteSequentialHue2','sapUiChartPaletteSequentialHue2Dark1']}};var j={"plotArea":{"nullColor":"sapUiChoroplethRegionBG","colorPalette":["sapUiChartPaletteSequentialHue1Light2","sapUiChartPaletteSequentialHue1Light1","sapUiChartPaletteSequentialHue1","sapUiChartPaletteSequentialHue1Dark1","sapUiChartPaletteSequentialHue1Dark2"]}};a._specified={"heatmap":j,"treemap":j};return a;});
