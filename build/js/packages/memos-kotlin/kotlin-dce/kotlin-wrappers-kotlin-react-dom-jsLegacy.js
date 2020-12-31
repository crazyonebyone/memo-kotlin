(function (_, Kotlin, $module$kotlin_wrappers_kotlin_react_jsLegacy, $module$react, $module$kotlinx_html_js, $module$kotlin_wrappers_kotlin_extensions_jsLegacy, $module$react_dom) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var toSet = Kotlin.kotlin.collections.toSet_us0mfu$;
  var setOf = Kotlin.kotlin.collections.setOf_mh5how$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var set_key = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.set_key_38rnt0$;
  var set_ref = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.set_ref_jjyqia$;
  var ref = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.ref_dpkau5$;
  var createElement = $module$react.createElement;
  var RBuilder = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RBuilder;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var Unsafe = $module$kotlinx_html_js.kotlinx.html.Unsafe;
  var Unit = Kotlin.kotlin.Unit;
  var TagConsumer = $module$kotlinx_html_js.kotlinx.html.TagConsumer;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var buildElements = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.buildElements_zepujl$;
  var render = $module$react_dom.render;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var toMutableMap = Kotlin.kotlin.collections.toMutableMap_abgq59$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var wrapFunction = Kotlin.wrapFunction;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  RDOMBuilder.prototype = Object.create(RBuilder.prototype);
  RDOMBuilder.prototype.constructor = RDOMBuilder;
  function InnerHTML(__html) {
    this.__html = __html;
  }
  InnerHTML.$metadata$ = {kind: Kind_CLASS, simpleName: 'InnerHTML', interfaces: []};
  function RDOMBuilder(factory) {
    RBuilder.call(this);
    this.consumer = new RDOMBuilder$consumer$ObjectLiteral(this);
    this.attrs = factory(this.consumer);
    this.props = {};
    var tmp$;
    tmp$ = this.attrs.attributesEntries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.setProp_4w9ihe$(element.key, element.value);
    }
  }
  RDOMBuilder.prototype.setProp_4w9ihe$ = function (attribute, value) {
    var key = fixAttributeName(attribute);
    this.props[key] = value;
  };
  RDOMBuilder.prototype.get_g0n3bx$ = function ($receiver, name) {
    return this.props[name];
  };
  RDOMBuilder.prototype.set_hpg2xa$ = function ($receiver, name, value) {
    this.props[name] = value;
  };
  RDOMBuilder.prototype.get_defaultChecked_a2ovwx$ = function ($receiver) {
    var tmp$;
    return (tmp$ = this.get_g0n3bx$($receiver, 'defaultChecked')) != null ? tmp$ : false;
  };
  RDOMBuilder.prototype.set_defaultChecked_47da7g$ = function ($receiver, value) {
    this.set_hpg2xa$($receiver, 'defaultChecked', value);
  };
  RDOMBuilder.prototype.get_values_sktobr$ = function ($receiver) {
    var tmp$;
    var valuesArr = (tmp$ = this.get_g0n3bx$($receiver, 'value')) != null ? tmp$ : [];
    return toSet(valuesArr);
  };
  RDOMBuilder.prototype.set_values_d8zj82$ = function ($receiver, value) {
    this.set_hpg2xa$($receiver, 'value', copyToArray(value));
  };
  RDOMBuilder.prototype.get_value_sktobr$ = function ($receiver) {
    return '';
  };
  RDOMBuilder.prototype.set_value_g9clh3$ = function ($receiver, value) {
    this.set_values_d8zj82$($receiver, setOf(value));
  };
  RDOMBuilder.prototype.attrs_1wdtl9$ = defineInlineFunction('kotlin-wrappers-kotlin-react-dom-jsLegacy.react.dom.RDOMBuilder.attrs_1wdtl9$', function (handler) {
    handler(this.attrs);
  });
  Object.defineProperty(RDOMBuilder.prototype, 'key', {configurable: true, get: function () {
    throw IllegalStateException_init(''.toString());
  }, set: function (value) {
    set_key(this.props, value);
  }});
  Object.defineProperty(RDOMBuilder.prototype, 'ref', {configurable: true, get: function () {
    throw IllegalStateException_init(''.toString());
  }, set: function (value) {
    set_ref(this.props, value);
  }});
  RDOMBuilder.prototype.ref_5ij4lk$ = function (handler) {
    ref(this.props, handler);
  };
  RDOMBuilder.prototype.create = function () {
    return createElement.apply(null, [this.attrs.tagName, this.props].concat(copyToArray(this.childList)));
  };
  function RDOMBuilder$consumer$ObjectLiteral(this$RDOMBuilder) {
    this.this$RDOMBuilder = this$RDOMBuilder;
  }
  RDOMBuilder$consumer$ObjectLiteral.prototype.onTagAttributeChange_5n2z71$ = function (tag, attribute, value) {
    this.this$RDOMBuilder.setProp_4w9ihe$(attribute, value);
  };
  RDOMBuilder$consumer$ObjectLiteral.prototype.onTagComment_6bul2c$ = function (content) {
    throw IllegalStateException_init('Comments are not supported');
  };
  RDOMBuilder$consumer$ObjectLiteral.prototype.onTagContent_6bul2c$ = function (content) {
    this.this$RDOMBuilder.childList.add_11rb$(content);
  };
  RDOMBuilder$consumer$ObjectLiteral.prototype.onTagContentEntity_ws8or7$ = function (entity) {
    this.this$RDOMBuilder.childList.add_11rb$(entity.text);
  };
  function RDOMBuilder$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral(closure$sb) {
    this.closure$sb = closure$sb;
  }
  RDOMBuilder$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral.prototype.unaryPlus_pdl1vz$ = function ($receiver) {
    this.closure$sb.append_pdl1vj$($receiver);
  };
  RDOMBuilder$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Unsafe]};
  RDOMBuilder$consumer$ObjectLiteral.prototype.onTagContentUnsafe_kntra7$ = function (block) {
    var sb = StringBuilder_init();
    block(new RDOMBuilder$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral(sb));
    this.this$RDOMBuilder.props.dangerouslySetInnerHTML = new InnerHTML(sb.toString());
  };
  RDOMBuilder$consumer$ObjectLiteral.prototype.onTagStart_tkgjla$ = function (tag) {
    throw IllegalStateException_init("Don't nest tags inside props block");
  };
  RDOMBuilder$consumer$ObjectLiteral.prototype.onTagEnd_tkgjla$ = function (tag) {
    throw IllegalStateException_init("Don't nest tags inside props block");
  };
  RDOMBuilder$consumer$ObjectLiteral.prototype.onTagEvent_azi6uv$ = function (tag, event, value) {
    this.this$RDOMBuilder.setProp_4w9ihe$(event, value);
  };
  RDOMBuilder$consumer$ObjectLiteral.prototype.finalize = function () {
    return Unit;
  };
  RDOMBuilder$consumer$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [TagConsumer]};
  RDOMBuilder.$metadata$ = {kind: Kind_CLASS, simpleName: 'RDOMBuilder', interfaces: [RBuilder]};
  function render$lambda() {
    return Unit;
  }
  function render_0(container, callback, handler) {
    if (callback === void 0)
      callback = render$lambda;
    render(buildElements(handler), container, callback);
  }
  var events;
  var attrsMap;
  function fixAttributeName(event) {
    var tmp$;
    return (tmp$ = attrsMap.get_11rb$(event)) != null ? tmp$ : event;
  }
  function StringAttr() {
    StringAttr_instance = this;
  }
  StringAttr.prototype.getValue_pt3q5s$ = function (thisRef, property) {
    var tmp$;
    return (tmp$ = thisRef.attributes.get_11rb$(property.callableName)) != null ? tmp$ : '';
  };
  StringAttr.prototype.setValue_wi26v6$ = function (thisRef, property, value) {
    var $receiver = thisRef.attributes;
    var key = property.callableName;
    $receiver.put_xwzc9p$(key, value);
  };
  StringAttr.$metadata$ = {kind: Kind_OBJECT, simpleName: 'StringAttr', interfaces: []};
  var StringAttr_instance = null;
  function StringAttr_getInstance() {
    if (StringAttr_instance === null) {
      new StringAttr();
    }return StringAttr_instance;
  }
  var key;
  var key_metadata = new PropertyMetadata('key');
  function set_key_0($receiver, key_0) {
    key.setValue_wi26v6$($receiver, key_metadata, key_0);
  }
  var defaultValue;
  var defaultValue_metadata = new PropertyMetadata('defaultValue');
  var defaultValue_0;
  var defaultValue_metadata_0 = new PropertyMetadata('defaultValue');
  var value;
  var value_metadata = new PropertyMetadata('value');
  function get_jsStyle($receiver) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = $receiver.attributes.get_11rb$('style')) != null)
      tmp$_0 = tmp$;
    else {
      var $receiver_0 = {};
      tmp$_0 = $receiver_0;
    }
    var value = tmp$_0;
    set_jsStyle($receiver, value);
    return value;
  }
  function set_jsStyle($receiver, value) {
    $receiver.attributes.put_xwzc9p$('style', value);
  }
  var package$react = _.react || (_.react = {});
  var package$dom = package$react.dom || (package$react.dom = {});
  package$dom.InnerHTML = InnerHTML;
  $$importsForInline$$['kotlin-wrappers-kotlin-extensions-jsLegacy'] = $module$kotlin_wrappers_kotlin_extensions_jsLegacy;
  package$dom.RDOMBuilder = RDOMBuilder;
  package$dom.render_2955dm$ = render_0;
  package$dom.fixAttributeName_61zpoe$ = fixAttributeName;
  Object.defineProperty(package$dom, 'StringAttr', {get: StringAttr_getInstance});
  package$dom.set_key_g0n3bx$ = set_key_0;
  package$dom.get_jsStyle_6s7ubj$ = get_jsStyle;
  package$dom.set_jsStyle_uekstc$ = set_jsStyle;
  $$importsForInline$$['kotlinx-html-js'] = $module$kotlinx_html_js;
  RDOMBuilder$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral.prototype.unaryPlus_lvwjq6$ = Unsafe.prototype.unaryPlus_lvwjq6$;
  RDOMBuilder$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral.prototype.raw_3p81yu$ = Unsafe.prototype.raw_3p81yu$;
  RDOMBuilder$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral.prototype.raw_61zpoe$ = Unsafe.prototype.raw_61zpoe$;
  RDOMBuilder$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral.prototype.raw_ws8or7$ = Unsafe.prototype.raw_ws8or7$;
  RDOMBuilder$consumer$ObjectLiteral.prototype.onTagError_cjwpn3$ = TagConsumer.prototype.onTagError_cjwpn3$;
  events = listOf(['onCopy', 'onCut', 'onPaste', 'onCompositionEnd', 'onCompositionStart', 'onCompositionUpdate', 'onKeyDown', 'onKeyPress', 'onKeyUp', 'onFocus', 'onBlur', 'onChange', 'onInput', 'onSubmit', 'onClick', 'onContextMenu', 'onDoubleClick', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp', 'onSelect', 'onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart', 'onScroll', 'onWheel', 'onAbort', 'onCanPlay', 'onCanPlayThrough', 'onDurationChange', 'onEmptied', 'onEncrypted', 'onEnded', 'onError', 'onLoadedData', 'onLoadedMetadata', 'onLoadStart', 'onPause', 'onPlay', 'onPlaying', 'onProgress', 'onRateChange', 'onSeeked', 'onSeeking', 'onStalled', 'onSuspend', 'onTimeUpdate', 'onVolumeChange', 'onWaiting', 'onLoad', 'onError', 'onAnimationStart', 'onAnimationEnd', 'onAnimationIteration', 'onTransitionEnd', 'accept', 'acceptCharset', 'accessKey', 'action', 'allowFullScreen', 'allowTransparency', 'alt', 'async', 'autoComplete', 'autoFocus', 'autoPlay', 'capture', 'cellPadding', 'cellSpacing', 'challenge', 'charSet', 'checked', 'cite', 'classID', 'className', 'colSpan', 'cols', 'content', 'contentEditable', 'contextMenu', 'controls', 'coords', 'crossOrigin', 'data', 'dateTime', 'default', 'defer', 'dir', 'disabled', 'download', 'draggable', 'encType', 'form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget', 'frameBorder', 'headers', 'height', 'hidden', 'high', 'href', 'hrefLang', 'htmlFor', 'httpEquiv', 'icon', 'id', 'inputMode', 'integrity', 'is', 'keyParams', 'keyType', 'kind', 'label', 'lang', 'list', 'loop', 'low', 'manifest', 'marginHeight', 'marginWidth', 'max', 'maxLength', 'media', 'mediaGroup', 'method', 'min', 'minLength', 'multiple', 'muted', 'name', 'noValidate', 'nonce', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'profile', 'radioGroup', 'readOnly', 'rel', 'required', 'reversed', 'role', 'rowSpan', 'rows', 'sandbox', 'scope', 'scoped', 'scrolling', 'seamless', 'selected', 'shape', 'size', 'sizes', 'span', 'spellCheck', 'src', 'srcDoc', 'srcLang', 'srcSet', 'start', 'step', 'style', 'summary', 'tabIndex', 'target', 'title', 'type', 'useMap', 'value', 'width', 'wmode', 'wrap']);
  var $receiver = events;
  var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
  var tmp$;
  tmp$ = $receiver.iterator();
  while (tmp$.hasNext()) {
    var item = tmp$.next();
    destination.add_11rb$(to(item.toLowerCase(), item));
  }
  var $receiver_0 = toMutableMap(toMap(destination));
  $receiver_0.put_xwzc9p$('class', 'className');
  $receiver_0.put_xwzc9p$('ondblclick', 'onDoubleClick');
  attrsMap = $receiver_0;
  key = StringAttr_getInstance();
  defaultValue = StringAttr_getInstance();
  defaultValue_0 = StringAttr_getInstance();
  value = StringAttr_getInstance();
  return _;
}(module.exports, require('kotlin'), require('kotlin-wrappers-kotlin-react-jsLegacy'), require('react'), require('kotlinx-html-js'), require('kotlin-wrappers-kotlin-extensions-jsLegacy'), require('react-dom')));

//# sourceMappingURL=kotlin-wrappers-kotlin-react-dom-jsLegacy.js.map
