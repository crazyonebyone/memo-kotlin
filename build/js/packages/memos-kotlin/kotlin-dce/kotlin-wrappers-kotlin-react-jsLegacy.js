(function (_, Kotlin, $module$react, $module$kotlin_wrappers_kotlin_extensions_jsLegacy, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var createElement = $module$react.createElement;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var clone = $module$kotlin_wrappers_kotlin_extensions_jsLegacy.kotlinext.js.clone_issdgt$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var Children = $module$react.Children;
  var addAll = Kotlin.kotlin.collections.addAll_ye1y7v$;
  var throwCCE = Kotlin.throwCCE;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var Throwable = Error;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var Component = $module$react.Component;
  var Any = Object;
  var to = Kotlin.kotlin.to_ujzrz7$;
  RElementBuilder.prototype = Object.create(RBuilder.prototype);
  RElementBuilder.prototype.constructor = RElementBuilder;
  RComponent.prototype = Object.create(Component.prototype);
  RComponent.prototype.constructor = RComponent;
  function RBuilder() {
    this.childList = ArrayList_init();
  }
  RBuilder.prototype.child_52psg1$ = function (element) {
    this.childList.add_11rb$(element);
    return element;
  };
  RBuilder.prototype.unaryPlus_84gpoi$ = function ($receiver) {
    this.childList.add_11rb$($receiver);
  };
  RBuilder.prototype.unaryPlus_pdl1vz$ = function ($receiver) {
    this.childList.add_11rb$($receiver);
  };
  RBuilder.prototype.child_k3oess$ = function (type, props, children) {
    return this.child_52psg1$(createElement.apply(null, [type, props].concat(copyToArray(children))));
  };
  RBuilder.prototype.child_4dvv5y$ = function (type, props, handler) {
    var $receiver = new RElementBuilder(props);
    handler($receiver);
    var children = $receiver.childList;
    return this.child_k3oess$(type, props, children);
  };
  RBuilder.prototype.invoke_eb8iu4$ = function ($receiver, handler) {
    return this.child_4dvv5y$($receiver, {}, handler);
  };
  RBuilder.prototype.invoke_csqs6z$ = function ($receiver, value, handler) {
    var $receiver_0 = {};
    $receiver_0.value = value;
    return this.child_4dvv5y$($receiver, $receiver_0, handler);
  };
  function RBuilder$invoke$lambda$lambda$lambda(closure$handler, closure$value) {
    return function ($receiver) {
      closure$handler($receiver, closure$value);
      return Unit;
    };
  }
  function RBuilder$invoke$lambda$lambda(closure$handler) {
    return function (value) {
      return buildElements(RBuilder$invoke$lambda$lambda$lambda(closure$handler, value));
    };
  }
  function RBuilder$invoke$lambda($receiver) {
    return Unit;
  }
  RBuilder.prototype.invoke_ory6b3$ = function ($receiver, handler) {
    var $receiver_0 = {};
    $receiver_0.children = RBuilder$invoke$lambda$lambda(handler);
    return this.child_4dvv5y$($receiver, $receiver_0, RBuilder$invoke$lambda);
  };
  RBuilder.prototype.node_rwypko$ = function ($receiver, props, children) {
    if (children === void 0)
      children = emptyList();
    return this.child_k3oess$($receiver, clone(props), children);
  };
  RBuilder.prototype.child_ssazr1$ = function (klazz, handler) {
    return this.invoke_eb8iu4$(get_rClass(klazz), handler);
  };
  RBuilder.prototype.child_t7en6a$ = defineInlineFunction('kotlin-wrappers-kotlin-react-jsLegacy.react.RBuilder.child_t7en6a$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (C_0, isC, handler) {
      return this.child_ssazr1$(getKClass(C_0), handler);
    };
  }));
  function RBuilder$childFunction$lambda(closure$children) {
    return function (value) {
      var $receiver = new RBuilder();
      closure$children($receiver, value);
      return first($receiver.childList);
    };
  }
  RBuilder.prototype.childFunction_2656uf$ = function (klazz, handler, children) {
    var tmp$ = get_rClass(klazz);
    var $receiver = new RElementBuilder({});
    handler($receiver);
    return this.child_k3oess$(tmp$, $receiver.attrs, listOf(RBuilder$childFunction$lambda(children)));
  };
  RBuilder.prototype.childFunction_khdow9$ = defineInlineFunction('kotlin-wrappers-kotlin-react-jsLegacy.react.RBuilder.childFunction_khdow9$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (C_0, isC, handler, children) {
      return this.childFunction_2656uf$(getKClass(C_0), handler, children);
    };
  }));
  RBuilder.prototype.node_3ecl1l$ = function (klazz, props, children) {
    if (children === void 0)
      children = emptyList();
    return this.node_rwypko$(get_rClass(klazz), props, children);
  };
  RBuilder.prototype.node_e2hqbc$ = defineInlineFunction('kotlin-wrappers-kotlin-react-jsLegacy.react.RBuilder.node_e2hqbc$', wrapFunction(function () {
    var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
    var getKClass = Kotlin.getKClass;
    return function (C_0, isC, props, children) {
      if (children === void 0)
        children = emptyList();
      return this.node_3ecl1l$(getKClass(C_0), props, children);
    };
  }));
  RBuilder.prototype.children_yllgzm$ = function ($receiver) {
    addAll(this.childList, Children.toArray(get_children($receiver)));
  };
  RBuilder.prototype.children_48djri$ = function ($receiver, value) {
    var tmp$;
    this.childList.add_11rb$((typeof (tmp$ = get_children($receiver)) === 'function' ? tmp$ : throwCCE())(value));
  };
  RBuilder.$metadata$ = {kind: Kind_CLASS, simpleName: 'RBuilder', interfaces: []};
  function buildElements(handler) {
    var tmp$;
    var $receiver = new RBuilder();
    handler($receiver);
    var nodes = $receiver.childList;
    switch (nodes.size) {
      case 0:
        tmp$ = null;
        break;
      case 1:
        tmp$ = first(nodes);
        break;
      default:var tmp$_0 = $module$react.Fragment;
        var $receiver_0 = {};
        tmp$ = createElement.apply(null, [tmp$_0, $receiver_0].concat(copyToArray(nodes)));
        break;
    }
    return tmp$;
  }
  function RElementBuilder(attrs) {
    RBuilder.call(this);
    this.attrs_iyt8sk$_0 = attrs;
  }
  Object.defineProperty(RElementBuilder.prototype, 'attrs', {get: function () {
    return this.attrs_iyt8sk$_0;
  }});
  RElementBuilder.prototype.attrs_slhiwc$ = function (handler) {
    handler(this.attrs);
  };
  Object.defineProperty(RElementBuilder.prototype, 'key', {configurable: true, get: function () {
    throw IllegalStateException_init(''.toString());
  }, set: function (value) {
    set_key(this.attrs, value);
  }});
  Object.defineProperty(RElementBuilder.prototype, 'ref', {configurable: true, get: function () {
    throw IllegalStateException_init(''.toString());
  }, set: function (value) {
    set_ref(this.attrs, value);
  }});
  RElementBuilder.prototype.ref_5ij4lk$ = function (handler) {
    ref(this.attrs, handler);
  };
  RElementBuilder.$metadata$ = {kind: Kind_CLASS, simpleName: 'RElementBuilder', interfaces: [RBuilder]};
  function get_rClass($receiver) {
    return get_js($receiver);
  }
  function get_children($receiver) {
    return $receiver.children;
  }
  function set_key($receiver, value) {
    $receiver.key = value;
  }
  function set_ref($receiver, value) {
    $receiver.ref = value;
  }
  function ref($receiver, ref) {
    $receiver.ref = ref;
  }
  function setState$lambda(closure$buildState) {
    return function (it) {
      var builder = closure$buildState;
      var $receiver = clone(it);
      builder($receiver);
      return $receiver;
    };
  }
  function setState($receiver, buildState) {
    $receiver.setState(setState$lambda(buildState));
  }
  function RComponent() {
  }
  RComponent.prototype.init_bc6fkx$ = function ($receiver) {
  };
  RComponent.prototype.init_65a95q$ = function ($receiver, props) {
  };
  RComponent.prototype.children_ss14n$ = function ($receiver) {
    $receiver.children_yllgzm$(this.props);
  };
  RComponent.prototype.children_tgvp6h$ = function ($receiver, value) {
    $receiver.children_48djri$(this.props, value);
  };
  function RComponent$render$lambda(this$RComponent) {
    return function ($receiver) {
      this$RComponent.render_ss14n$($receiver);
      return Unit;
    };
  }
  RComponent.prototype.render = function () {
    return buildElements(RComponent$render$lambda(this));
  };
  RComponent.$metadata$ = {kind: Kind_CLASS, simpleName: 'RComponent', interfaces: []};
  function RComponent_init($this) {
    $this = $this || Object.create(RComponent.prototype);
    Component.call($this);
    RComponent.call($this);
    var $receiver = {};
    $this.init_bc6fkx$($receiver);
    $this.state = $receiver;
    return $this;
  }
  var package$react = _.react || (_.react = {});
  $$importsForInline$$['kotlin-wrappers-kotlin-extensions-jsLegacy'] = $module$kotlin_wrappers_kotlin_extensions_jsLegacy;
  package$react.RBuilder = RBuilder;
  package$react.buildElements_zepujl$ = buildElements;
  package$react.RElementBuilder = RElementBuilder;
  $$importsForInline$$.react = $module$react;
  package$react.get_rClass_inwa2g$ = get_rClass;
  package$react.get_children_yllgzm$ = get_children;
  package$react.set_key_38rnt0$ = set_key;
  package$react.set_ref_jjyqia$ = set_ref;
  package$react.ref_dpkau5$ = ref;
  package$react.setState_kpl3tw$ = setState;
  package$react.RComponent_init_lqgejo$ = RComponent_init;
  package$react.RComponent = RComponent;
  return _;
}(module.exports, require('kotlin'), require('react'), require('kotlin-wrappers-kotlin-extensions-jsLegacy'), require('kotlinx-coroutines-core')));

//# sourceMappingURL=kotlin-wrappers-kotlin-react-jsLegacy.js.map
