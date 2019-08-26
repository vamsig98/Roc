
import  _Modeler from "bpmn-js/lib/Modeler.js";            //'bpmn-js/lib/Modeler.js';
import * as _Viewer from 'bpmn-js/lib/Viewer.js';
import * as _NavigatedViewer from 'bpmn-js/lib/NavigatedViewer.js';
import * as _PropertiesPanelModule from 'bpmn-js-properties-panel';
import  _BpmnPropertiesProvider  from 'bpmn-js-properties-panel/lib/provider/bpmn';
import _EntryFactory from "bpmn-js-properties-panel/lib/factory/EntryFactory";
import  _PaletteProvider from 'bpmn-js/lib/features/palette/PaletteProvider';
import * as _ModeUtil from 'bpmn-js/lib/util/ModelUtil';
import * as _CmdHelper from 'bpmn-js-properties-panel/lib/helper/CmdHelper';
import * as _Utils from 'bpmn-js-properties-panel/lib/Utils';



export const InjectionNames = {
  eventBus: 'eventBus',
  bpmnFactory: 'bpmnFactory',
  elementRegistry: 'elementRegistry',
  translate: 'translate',
  propertiesProvider: 'propertiesProvider',
  bpmnPropertiesProvider: 'bpmnPropertiesProvider',
  paletteProvider: 'paletteProvider',
  originalPaletteProvider: 'originalPaletteProvider',
  zoomScroll: 'zoomScroll',
  canvas: 'canvas',
  overlays: 'overlays',
  ModeUtil:'ModeUtil',
  CmdHelper:'CmdHelper',
  propertiesPanel: "propertiesPanel"
}

export const Modeler = _Modeler;
export const Viewer = _Viewer;
export const NavigatedViewer = _NavigatedViewer;
export const PropertiesPanelModule = _PropertiesPanelModule;
export const EntryFactory = _EntryFactory;
export const OriginalPaletteProvider = _PaletteProvider;
export const OriginalPropertiesProvider = _BpmnPropertiesProvider;
export const getBusinessObject = _ModeUtil;
export const CmdHelper = _CmdHelper;
export const Utils = _Utils;


export interface IPaletteProvider {
  getPaletteEntries(): any;
}

export interface IPalette {
  registerProvider(provider: IPaletteProvider): any;
}


export interface IPropertiesProvider {
  getTabs(elemnt): any;
}


