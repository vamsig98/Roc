import { EntryFactory, InjectionNames, IPropertiesProvider, getBusinessObject, CmdHelper, Utils } from '../bpmn-js/bpmn-js';
import { AdminService } from '../../shared-services/admin/admin.service';
import { ServiceInjector } from '../props-provider/injector.service';
import { ToastrService } from 'ngx-toastr';



export class CustomPropsProvider implements IPropertiesProvider {

  // Note that names of arguments must match injected modules, see InjectionNames.
  public datasourceOptions: any;
  public servicecall: any;
  public toastr: any;
  static $inject = [InjectionNames.translate, InjectionNames.bpmnPropertiesProvider, InjectionNames.elementRegistry];
  constructor(private translate, private bpmnPropertiesProvider, private elementRegistry) {
    this.servicecall = ServiceInjector.injector.get(AdminService);
    this.toastr = ServiceInjector.injector.get(ToastrService);
    // this.bpmnPropertiesProvider = ServiceInjector.injector.get(bpmnPropertiesProvider);
  }

  /* extending the getTabs with processlist select */
  getTabs(element) {
    if (this.datasourceOptions == undefined) {
      /* API call to get processList */
      this.servicecall.getProcessList().subscribe((data: { result: any }) => {
        let Processdata = [];
        for (var i = 0; i < data.result.length; i++) {
          Processdata.push({ "name": data.result[i].display_name, "value": data.result[i].name });
        }
        this.datasourceOptions = Processdata;
        //   console.log(this.datasourceOptions);
      });
    }

    let elemtsIds = this.elementRegistry._elements;
    let generaltab = this.bpmnPropertiesProvider.getTabs(element);
    let parentkey = Object.keys(elemtsIds);
    let option;
    if (parentkey) {
      var collaborationkey;
      for (var i = 0; i < parentkey.length; i++) {
        if (parentkey[i].indexOf("Collaboration") > -1) {
          collaborationkey = parentkey[i];
        }
      }
      if (collaborationkey) {
        //  option = elemtsIds.parentkey[0].element.businessObject.participants;
        option = elemtsIds[collaborationkey].element.businessObject.participants;
        localStorage.setItem('bpmnfilter', JSON.stringify(option));
      }
    }


    var self = this;
    let processListSelect = EntryFactory.selectBox({
      id: 'id',
      label: 'Id',
      selectOptions: this.datasourceOptions,
      setControlValue: true,
      modelProperty: 'selectid',
      emptyParameter: false,
      get: function (element, node) {
        var bo1 = getBusinessObject.getBusinessObject(element);
        return { selectid: bo1.$attrs["camunda:selectid"] ? bo1.$attrs["camunda:selectid"] : element.id };
      },
      set: function (element, node, values) {
        if (node.selectid) {
          // var bo2 = getBusinessObject.getBusinessObject(element);
          var selectid1 = node.selectid ? node.selectid : element.id || undefined;
          // var props = {
          //   'camunda:selectid': selectid1
          // };
          // if (getBusinessObject.is(bo2, 'camunda:DmnCapable') && !selectid1) {
          //   props = Object.assign({ 'camunda:mapDecisionResult': 'resultList' }, props);
          // }
          if (elemtsIds[selectid1]) {
            self.toastr.error("The process Id is mapped to some other process !!", "Information")
            return;
          }
          return CmdHelper.updateProperties(element, { 'id': selectid1 });
        }
        if (node.id) {
          var selectid2 = node.id ? node.id : element.id || undefined;
          return CmdHelper.updateProperties(element, { 'selectid': selectid2 });
        }
      }
    });

    var textelement = EntryFactory.validationAwareTextField({
      id: 'texteditid',
      label: this.translate('Id'),
      description: 'Desc' && this.translate('Desc'),
      modelProperty: 'editid',
      getProperty: function (element, node) {
        return getBusinessObject.getBusinessObject(element).id;
      },
      setProperty: function (element, properties) {

        element = element.labelTarget || element;
        if (properties.editid == "") {
          var randomtext = "";
          var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

          for (var i = 0; i < 5; i++)
            randomtext += possible.charAt(Math.floor(Math.random() * possible.length));
          properties.editid = randomtext;
        }
        let props = { "id": properties.editid };
        return CmdHelper.updateProperties(element, props);
      },
      validate: function (element, values) {
        var idValue = values.id;

        var bo3 = getBusinessObject.getBusinessObject(element);

        var idError = Utils.isIdValid(bo3, idValue);

        return idError ? { id: idError } : {};
      },
      hidden: function (element, values) {
        let isval: boolean = true;
        if (self.datasourceOptions) {
          for (var i = 0; i < self.datasourceOptions.length; i++) {
            if (self.datasourceOptions[i].name == element.id) {
              isval = false;
              break;
            }
          }
          return isval;
        }
      }
    });


    generaltab[0].groups[0].entries.push(
      processListSelect
    );
    generaltab[0].groups[0].entries.push(
      textelement
    );
    let filtertedEntries = [];
    filtertedEntries.push(generaltab[0].groups[0].entries[1]); // Name property
    filtertedEntries.push(generaltab[0].groups[0].entries[2]); // select processlist property
    filtertedEntries.push(generaltab[0].groups[0].entries[3]); // clear button handled property
    generaltab[0].groups[0].entries = [];
    generaltab[0].groups[0].entries = filtertedEntries.filter(Boolean);

    return generaltab;
  }
}
