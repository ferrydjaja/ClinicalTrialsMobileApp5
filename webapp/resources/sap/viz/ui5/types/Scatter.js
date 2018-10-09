/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

(c) Copyright 2009-2018 SAP SE. All rights reserved
 */
sap.ui.define(['sap/viz/library','sap/viz/ui5/core/BaseStructuredType'],function(l,B){"use strict";var S=B.extend("sap.viz.ui5.types.Scatter",{metadata:{library:"sap.viz",properties:{colorPalette:{type:"string[]",defaultValue:['#748CB2','#9CC677','#EACF5E','#F9AD79','#D16A7C','#8873A2','#3A95B3','#B6D949','#FDD36C','#F47958','#A65084','#0063B1','#0DA841','#FCB71D','#F05620','#B22D6E','#3C368E','#8FB2CF','#95D4AB','#EAE98F','#F9BE92','#EC9A99','#BC98BD','#1EB7B2','#73C03C','#F48323','#EB271B','#D9B5CA','#AED1DA','#DFECB2','#FCDAB0','#F5BCB4']},shapePalette:{type:"string[]",defaultValue:['circle','square','diamond','triangleUp','triangleDown','triangleLeft','triangleRight','cross','intersection']},maxPriValue:{type:"float",defaultValue:0,deprecated:true},minPriValue:{type:"float",defaultValue:0,deprecated:true},maxSecValue:{type:"float",defaultValue:0,deprecated:true},minSecValue:{type:"float",defaultValue:0,deprecated:true},timeBased:{type:"boolean",defaultValue:false,deprecated:true},drawingEffect:{type:"sap.viz.ui5.types.Scatter_drawingEffect",defaultValue:sap.viz.ui5.types.Scatter_drawingEffect.normal},formatRules:{type:"object[]"},showNegativeValues:{type:"boolean",defaultValue:true,deprecated:true},markerSize:{type:"int",defaultValue:10}},aggregations:{animation:{type:"sap.viz.ui5.types.Scatter_animation",multiple:false},axisTooltip:{type:"sap.viz.ui5.types.Scatter_axisTooltip",multiple:false,deprecated:true},hoverline:{type:"sap.viz.ui5.types.Scatter_hoverline",multiple:false,deprecated:true}}}});return S;});
