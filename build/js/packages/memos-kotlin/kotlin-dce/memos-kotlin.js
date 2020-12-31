(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-wrappers-kotlin-react-dom-jsLegacy', 'kotlin-wrappers-kotlin-react-jsLegacy', 'kotlinx-html-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-wrappers-kotlin-react-dom-jsLegacy'), require('kotlin-wrappers-kotlin-react-jsLegacy'), require('kotlinx-html-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'memos-kotlin'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'memos-kotlin'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-dom-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'memos-kotlin'. Its dependency 'kotlin-wrappers-kotlin-react-dom-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-dom-jsLegacy' is loaded prior to 'memos-kotlin'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'memos-kotlin'. Its dependency 'kotlin-wrappers-kotlin-react-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-jsLegacy' is loaded prior to 'memos-kotlin'.");
    }if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'memos-kotlin'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'memos-kotlin'.");
    }root['memos-kotlin'] = factory(typeof this['memos-kotlin'] === 'undefined' ? {} : this['memos-kotlin'], kotlin, this['kotlin-wrappers-kotlin-react-dom-jsLegacy'], this['kotlin-wrappers-kotlin-react-jsLegacy'], this['kotlinx-html-js']);
  }
}(this, function (_, Kotlin, $module$kotlin_wrappers_kotlin_react_dom_jsLegacy, $module$kotlin_wrappers_kotlin_react_jsLegacy, $module$kotlinx_html_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var getKClass = Kotlin.getKClass;
  var Unit = Kotlin.kotlin.Unit;
  var render = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.render_2955dm$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var removeLast = Kotlin.kotlin.collections.removeLast_vvxzk3$;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var set_key = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.set_key_g0n3bx$;
  var toString = Kotlin.toString;
  var setState = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.setState_kpl3tw$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var RComponent_init = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RComponent_init_lqgejo$;
  var RComponent = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RComponent;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var attributesMapOf = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var LI_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.LI;
  var RDOMBuilder_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.RDOMBuilder;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var UL_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.UL;
  var DIV_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var H1_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H1;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var throwCCE = Kotlin.throwCCE;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var set_onChangeFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onChangeFunction_pszlq2$;
  var InputType = $module$kotlinx_html_js.kotlinx.html.InputType;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var get_jsStyle = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.get_jsStyle_6s7ubj$;
  var P_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
  var H3_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H3;
  var OPTION_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OPTION;
  var SELECT_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SELECT;
  var enumEncode = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
  var attributesMapOf_0 = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var INPUT_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.INPUT;
  var Random = Kotlin.kotlin.random.Random;
  var random = Kotlin.kotlin.ranges.random_xmiyix$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  Memos.prototype = Object.create(RComponent.prototype);
  Memos.prototype.constructor = Memos;
  PreviewModal.prototype = Object.create(RComponent.prototype);
  PreviewModal.prototype.constructor = PreviewModal;
  ScheduleCard.prototype = Object.create(RComponent.prototype);
  ScheduleCard.prototype.constructor = ScheduleCard;
  function main$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function main$lambda$lambda($receiver) {
    $receiver.child_ssazr1$(getKClass(Memos), main$lambda$lambda$lambda);
    return Unit;
  }
  function main$lambda(it) {
    render(document.getElementById('root'), void 0, main$lambda$lambda);
    return Unit;
  }
  function main() {
    window.onload = main$lambda;
  }
  function li$lambda(closure$classes) {
    return function (it) {
      return new LI_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function ul$lambda(closure$classes) {
    return function (it) {
      return new UL_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function h1$lambda(closure$classes) {
    return function (it) {
      return new H1_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function MemosState(dayMap, currentCardData, isShowModal) {
    this.dayMap = dayMap;
    this.currentCardData = currentCardData;
    this.isShowModal = isShowModal;
  }
  MemosState.$metadata$ = {kind: Kind_CLASS, simpleName: 'MemosState', interfaces: []};
  MemosState.prototype.component1 = function () {
    return this.dayMap;
  };
  MemosState.prototype.component2 = function () {
    return this.currentCardData;
  };
  MemosState.prototype.component3 = function () {
    return this.isShowModal;
  };
  MemosState.prototype.copy_wum6il$ = function (dayMap, currentCardData, isShowModal) {
    return new MemosState(dayMap === void 0 ? this.dayMap : dayMap, currentCardData === void 0 ? this.currentCardData : currentCardData, isShowModal === void 0 ? this.isShowModal : isShowModal);
  };
  MemosState.prototype.toString = function () {
    return 'MemosState(dayMap=' + Kotlin.toString(this.dayMap) + (', currentCardData=' + Kotlin.toString(this.currentCardData)) + (', isShowModal=' + Kotlin.toString(this.isShowModal)) + ')';
  };
  MemosState.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.dayMap) | 0;
    result = result * 31 + Kotlin.hashCode(this.currentCardData) | 0;
    result = result * 31 + Kotlin.hashCode(this.isShowModal) | 0;
    return result;
  };
  MemosState.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.dayMap, other.dayMap) && Kotlin.equals(this.currentCardData, other.currentCardData) && Kotlin.equals(this.isShowModal, other.isShowModal)))));
  };
  function setDayList() {
    var id = {v: 0};
    var data = {v: LinkedHashMap_init()};
    var newHourList = ArrayList_init();
    newHourList.addAll_brywnq$(scheduleHourList);
    removeLast(newHourList);
    var tmp$;
    tmp$ = scheduleWeekList.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      tmp$_0 = newHourList.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        var tmp$_1, tmp$_2;
        var newData = new DayData((tmp$_1 = id.v, id.v = tmp$_1 + 1 | 0, tmp$_1), element_0, element, new HourData(element_0.timeString, null, element_0.timeNum), new HourData(element_0.timeString, null, element_0.timeNum), false, '', '', '');
        if (data.v.get_11rb$(element) != null) {
          (tmp$_2 = data.v.get_11rb$(element)) != null ? tmp$_2.add_11rb$(newData) : null;
        } else {
          var $receiver = data.v;
          var value = mutableListOf([newData]);
          $receiver.put_xwzc9p$(element, value);
        }
      }
    }
    return data.v;
  }
  function Memos() {
    RComponent_init(this);
    this.state = new MemosState(setDayList(), null, false);
  }
  function Memos$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$day) {
    return function ($receiver) {
      $receiver.isShowModal = true;
      $receiver.currentCardData = closure$day;
      return Unit;
    };
  }
  function Memos$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$day, this$Memos) {
    return function (it) {
      setState(this$Memos, Memos$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$day));
      return Unit;
    };
  }
  function Memos$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$day, this$Memos) {
    return function ($receiver) {
      $receiver.cardData = closure$day;
      $receiver.onClick = Memos$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$day, this$Memos);
      return Unit;
    };
  }
  function Memos$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$day, this$Memos) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(Memos$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$day, this$Memos));
      return Unit;
    };
  }
  function Memos$render$lambda$lambda$lambda$lambda$lambda(this$Memos) {
    return function ($receiver) {
      $receiver.dayMap = this$Memos.state.dayMap;
      return Unit;
    };
  }
  function Memos$render$lambda$lambda$lambda$lambda(this$Memos) {
    return function (week, id, cardData) {
      var tmp$, tmp$_0;
      console.log(cardData);
      var tmp$_1;
      if ((tmp$ = this$Memos.state.dayMap.get_11rb$(week)) != null) {
        var indexOfFirst$result;
        indexOfFirst$break: do {
          var tmp$_2;
          var index = 0;
          tmp$_2 = tmp$.iterator();
          while (tmp$_2.hasNext()) {
            var item = tmp$_2.next();
            if (item.id === id) {
              indexOfFirst$result = index;
              break indexOfFirst$break;
            }index = index + 1 | 0;
          }
          indexOfFirst$result = -1;
        }
         while (false);
        tmp$_1 = indexOfFirst$result;
      } else
        tmp$_1 = null;
      var index_0 = ensureNotNull(tmp$_1);
      (tmp$_0 = this$Memos.state.dayMap.get_11rb$(week)) != null ? tmp$_0.set_wxm5ur$(index_0, cardData) : null;
      setState(this$Memos, Memos$render$lambda$lambda$lambda$lambda$lambda(this$Memos));
      return Unit;
    };
  }
  function Memos$render$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.isShowModal = false;
    return Unit;
  }
  function Memos$render$lambda$lambda$lambda$lambda_0(this$Memos) {
    return function (it) {
      setState(this$Memos, Memos$render$lambda$lambda$lambda$lambda$lambda_0);
      return Unit;
    };
  }
  function Memos$render$lambda$lambda$lambda$lambda$lambda_1(closure$it) {
    return function ($receiver) {
      $receiver.currentCardData = closure$it;
      return Unit;
    };
  }
  function Memos$render$lambda$lambda$lambda$lambda_1(this$Memos) {
    return function (it) {
      setState(this$Memos, Memos$render$lambda$lambda$lambda$lambda$lambda_1(it));
      return Unit;
    };
  }
  function Memos$render$lambda$lambda$lambda(this$Memos) {
    return function ($receiver) {
      $receiver.isShow = ensureNotNull(this$Memos.state.isShowModal);
      $receiver.cardData = ensureNotNull(this$Memos.state.currentCardData);
      $receiver.onSubmit = Memos$render$lambda$lambda$lambda$lambda(this$Memos);
      $receiver.onCancel = Memos$render$lambda$lambda$lambda$lambda_0(this$Memos);
      $receiver.setCurrentCardData = Memos$render$lambda$lambda$lambda$lambda_1(this$Memos);
      return Unit;
    };
  }
  function Memos$render$lambda$lambda(this$Memos) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(Memos$render$lambda$lambda$lambda(this$Memos));
      return Unit;
    };
  }
  Memos.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new RDOMBuilder_init(div$lambda('schedule-container'));
    var $receiver_0_0 = new RDOMBuilder_init(h1$lambda(null));
    $receiver_0_0.unaryPlus_pdl1vz$('Schedule Template');
    $receiver_0.child_52psg1$($receiver_0_0.create());
    var $receiver_0_1 = new RDOMBuilder_init(div$lambda('schedule-content'));
    var $receiver_0_2 = new RDOMBuilder_init(div$lambda('schedule-hours'));
    var $receiver_0_3 = new RDOMBuilder_init(ul$lambda(null));
    var $receiver_1 = scheduleHourList;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_1, 10));
    var tmp$;
    tmp$ = $receiver_1.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      if (item.isShow === true) {
        var $receiver_0_4 = new RDOMBuilder_init(li$lambda(null));
        set_key($receiver_0_4.attrs, item.timeNum.toString());
        $receiver_0_4.unaryPlus_pdl1vz$(item.timeString);
        $receiver_0_3.child_52psg1$($receiver_0_4.create());
      }tmp$_0.call(destination, Unit);
    }
    $receiver_0_2.child_52psg1$($receiver_0_3.create());
    $receiver_0_1.child_52psg1$($receiver_0_2.create());
    var $receiver_0_5 = new RDOMBuilder_init(div$lambda('schedule-table'));
    var $receiver_0_6 = new RDOMBuilder_init(div$lambda('schedule-header'));
    var $receiver_0_7 = new RDOMBuilder_init(ul$lambda(null));
    var $receiver_2 = scheduleWeekList;
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_2, 10));
    var tmp$_1;
    tmp$_1 = $receiver_2.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
      var tmp$_2 = destination_0.add_11rb$;
      var $receiver_0_8 = new RDOMBuilder_init(li$lambda(null));
      set_key($receiver_0_8.attrs, item_0);
      $receiver_0_8.unaryPlus_pdl1vz$(item_0);
      tmp$_2.call(destination_0, $receiver_0_7.child_52psg1$($receiver_0_8.create()));
    }
    $receiver_0_6.child_52psg1$($receiver_0_7.create());
    $receiver_0_5.child_52psg1$($receiver_0_6.create());
    var $receiver_0_9 = new RDOMBuilder_init(div$lambda('schedule-body'));
    var $receiver_3 = scheduleWeekList;
    var destination_1 = ArrayList_init_0(collectionSizeOrDefault($receiver_3, 10));
    var tmp$_3;
    tmp$_3 = $receiver_3.iterator();
    while (tmp$_3.hasNext()) {
      var item_1 = tmp$_3.next();
      var tmp$_4 = destination_1.add_11rb$;
      var $receiver_0_10 = new RDOMBuilder_init(ul$lambda(null));
      var tmp$_5;
      set_key($receiver_0_10.attrs, toString(this.state.dayMap.get_11rb$(item_1)));
      if ((tmp$_5 = this.state.dayMap.get_11rb$(item_1)) != null) {
        var destination_2 = ArrayList_init_0(collectionSizeOrDefault(tmp$_5, 10));
        var tmp$_6;
        tmp$_6 = tmp$_5.iterator();
        while (tmp$_6.hasNext()) {
          var item_2 = tmp$_6.next();
          destination_2.add_11rb$($receiver_0_10.child_ssazr1$(getKClass(ScheduleCard), Memos$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(item_2, this)));
        }
      }tmp$_4.call(destination_1, $receiver_0_9.child_52psg1$($receiver_0_10.create()));
    }
    $receiver_0_5.child_52psg1$($receiver_0_9.create());
    $receiver_0_1.child_52psg1$($receiver_0_5.create());
    $receiver_0.child_52psg1$($receiver_0_1.create());
    if (this.state.isShowModal === true) {
      $receiver_0.child_ssazr1$(getKClass(PreviewModal), Memos$render$lambda$lambda(this));
    }$receiver.child_52psg1$($receiver_0.create());
  };
  Memos.$metadata$ = {kind: Kind_CLASS, simpleName: 'Memos', interfaces: [RComponent]};
  function p$lambda(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function h3$lambda(closure$classes) {
    return function (it) {
      return new H3_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda_0(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function option$lambda(closure$classes) {
    return function (it) {
      return new OPTION_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function select$lambda(closure$classes) {
    return function (it) {
      return new SELECT_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function input$lambda(closure$type, closure$formEncType, closure$formMethod, closure$name, closure$classes) {
    return function (it) {
      return new INPUT_init(attributesMapOf_0(['type', closure$type != null ? enumEncode(closure$type) : null, 'formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'name', closure$name, 'class', closure$classes]), it);
    };
  }
  function PreviewModal(props) {
    RComponent_init(this);
    this.selectHourList = ArrayList_init();
    var tmp$;
    if (props.isShow) {
      tmp$ = 'preview-modal-content show-modal-animate';
    } else {
      tmp$ = 'preview-modal-content';
    }
    this.contentClass_0 = tmp$;
  }
  PreviewModal.prototype.componentWillMount = function () {
    var tmp$;
    tmp$ = scheduleHourList.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.timeNum > this.props.cardData.hour.timeNum) {
        this.selectHourList.add_11rb$(element);
      }}
    console.log(this.selectHourList);
  };
  function PreviewModal$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$PreviewModal) {
    return function (it) {
      var tmp$, tmp$_0;
      var target = Kotlin.isType(tmp$ = it.target, HTMLSelectElement) ? tmp$ : throwCCE();
      this$PreviewModal.props.cardData.endTime.timeNum = toDouble(target.value);
      this$PreviewModal.props.cardData.endTime.timeString = toString((tmp$_0 = target[target.selectedIndex]) != null ? tmp$_0.innerHTML : null);
      return Unit;
    };
  }
  function PreviewModal$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$PreviewModal) {
    return function (it) {
      var tmp$;
      var target = Kotlin.isType(tmp$ = it.target, HTMLInputElement) ? tmp$ : throwCCE();
      this$PreviewModal.props.cardData.infoTitle = target.value;
      return Unit;
    };
  }
  function PreviewModal$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$PreviewModal) {
    return function (it) {
      var tmp$;
      var target = Kotlin.isType(tmp$ = it.target, HTMLInputElement) ? tmp$ : throwCCE();
      this$PreviewModal.props.cardData.infoContent = target.value;
      return Unit;
    };
  }
  function PreviewModal$render$lambda$lambda$lambda$lambda$lambda$lambda(this$PreviewModal) {
    return function (it) {
      var $receiver = this$PreviewModal.props.cardData.infoTitle;
      var tmp$ = !($receiver == null || $receiver.length === 0);
      if (tmp$) {
        var $receiver_0 = this$PreviewModal.props.cardData.infoContent;
        tmp$ = !($receiver_0 == null || $receiver_0.length === 0);
      }if (tmp$ && this$PreviewModal.props.cardData.endTime !== null) {
        this$PreviewModal.props.cardData.isHadInfo = true;
        var randomNum = random(new IntRange(0, bgMap.size), Random.Default);
        this$PreviewModal.props.cardData.bgColor = bgMap.get_za3lpa$(randomNum);
        console.log(randomNum);
        this$PreviewModal.props.onSubmit(this$PreviewModal.props.cardData.week, this$PreviewModal.props.cardData.id, this$PreviewModal.props.cardData);
      }return Unit;
    };
  }
  PreviewModal.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new RDOMBuilder_init(div$lambda_0(this.contentClass_0));
    var $receiver_0_0 = new RDOMBuilder_init(div$lambda_0('modal-body'));
    var tmp$, tmp$_0;
    var $receiver_1 = this.props.cardData.bgColor;
    if ($receiver_1 == null || $receiver_1.length === 0) {
      tmp$_0 = '#FFF';
    } else {
      tmp$_0 = (tmp$ = this.props.cardData) != null ? tmp$.bgColor : null;
    }
    var cardBgColor = tmp$_0;
    get_jsStyle($receiver_0_0.attrs).backgroundColor = cardBgColor;
    var $receiver_0_1 = new RDOMBuilder_init(div$lambda_0('close'));
    var tmp$_1;
    if (this.props.cardData.isHadInfo) {
      tmp$_1 = '#fff';
    } else {
      tmp$_1 = '#999';
    }
    var closeColor = tmp$_1;
    var $receiver_2 = $receiver_0_1.attrs;
    set_onClickFunction($receiver_2, this.props.onCancel);
    get_jsStyle($receiver_2).color = closeColor;
    $receiver_0_1.unaryPlus_pdl1vz$('\xD7');
    $receiver_0_0.child_52psg1$($receiver_0_1.create());
    if (this.props.cardData.isHadInfo) {
      var $receiver_0_2 = new RDOMBuilder_init(div$lambda_0('info-content'));
      var $receiver_0_3 = new RDOMBuilder_init(p$lambda('time-intervals'));
      $receiver_0_3.unaryPlus_pdl1vz$(this.props.cardData.startTime.timeString + '-' + this.props.cardData.endTime.timeString);
      $receiver_0_2.child_52psg1$($receiver_0_3.create());
      var $receiver_0_4 = new RDOMBuilder_init(h3$lambda(null));
      $receiver_0_4.unaryPlus_pdl1vz$(toString(this.props.cardData.infoTitle));
      $receiver_0_2.child_52psg1$($receiver_0_4.create());
      var $receiver_0_5 = new RDOMBuilder_init(div$lambda_0(null));
      $receiver_0_5.unaryPlus_pdl1vz$(toString(this.props.cardData.infoContent));
      $receiver_0_2.child_52psg1$($receiver_0_5.create());
      $receiver_0_0.child_52psg1$($receiver_0_2.create());
    } else {
      var $receiver_0_6 = new RDOMBuilder_init(div$lambda_0('add-content'));
      var $receiver_0_7 = new RDOMBuilder_init(div$lambda_0('input-body'));
      var $receiver_0_8 = new RDOMBuilder_init(select$lambda(null));
      set_onChangeFunction($receiver_0_8.attrs, PreviewModal$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this));
      var $receiver_0_9 = new RDOMBuilder_init(option$lambda(null));
      $receiver_0_9.attrs.value = '-1';
      $receiver_0_9.unaryPlus_pdl1vz$('\u8BF7\u9009\u62E9\u7ED3\u675F\u65F6\u95F4');
      $receiver_0_8.child_52psg1$($receiver_0_9.create());
      var $receiver_3 = this.selectHourList;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_3, 10));
      var tmp$_2;
      tmp$_2 = $receiver_3.iterator();
      while (tmp$_2.hasNext()) {
        var item = tmp$_2.next();
        var tmp$_3 = destination.add_11rb$;
        var $receiver_0_10 = new RDOMBuilder_init(option$lambda(null));
        var $receiver_4 = $receiver_0_10.attrs;
        set_key($receiver_4, item.timeString);
        $receiver_4.value = item.timeNum.toString();
        $receiver_0_10.unaryPlus_pdl1vz$(item.timeString);
        tmp$_3.call(destination, $receiver_0_8.child_52psg1$($receiver_0_10.create()));
      }
      $receiver_0_7.child_52psg1$($receiver_0_8.create());
      var $receiver_0_11 = new RDOMBuilder_init(input$lambda(InputType.text, null, null, null, null));
      var $receiver_5 = $receiver_0_11.attrs;
      $receiver_5.placeholder = '\u8BF7\u8F93\u5165\u6807\u9898';
      set_onChangeFunction($receiver_5, PreviewModal$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this));
      $receiver_0_7.child_52psg1$($receiver_0_11.create());
      var $receiver_0_12 = new RDOMBuilder_init(input$lambda(InputType.text, null, null, null, null));
      var $receiver_6 = $receiver_0_12.attrs;
      $receiver_6.placeholder = '\u8BF7\u8F93\u5165\u5185\u5BB9';
      set_onChangeFunction($receiver_6, PreviewModal$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this));
      $receiver_0_7.child_52psg1$($receiver_0_12.create());
      $receiver_0_6.child_52psg1$($receiver_0_7.create());
      var $receiver_0_13 = new RDOMBuilder_init(input$lambda(InputType.button, null, null, null, null));
      var $receiver_7 = $receiver_0_13.attrs;
      $receiver_7.value = '\u63D0\u4EA4';
      set_onClickFunction($receiver_7, PreviewModal$render$lambda$lambda$lambda$lambda$lambda$lambda(this));
      $receiver_0_6.child_52psg1$($receiver_0_13.create());
      var $receiver_0_14 = new RDOMBuilder_init(input$lambda(InputType.button, null, null, null, null));
      var $receiver_8 = $receiver_0_14.attrs;
      $receiver_8.value = '\u53D6\u6D88';
      set_onClickFunction($receiver_8, this.props.onCancel);
      $receiver_0_6.child_52psg1$($receiver_0_14.create());
      $receiver_0_0.child_52psg1$($receiver_0_6.create());
    }
    $receiver_0.child_52psg1$($receiver_0_0.create());
    $receiver.child_52psg1$($receiver_0.create());
  };
  PreviewModal.$metadata$ = {kind: Kind_CLASS, simpleName: 'PreviewModal', interfaces: [RComponent]};
  function h3$lambda_0(closure$classes) {
    return function (it) {
      return new H3_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda_1(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function li$lambda_0(closure$classes) {
    return function (it) {
      return new LI_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function calculationTime$lambda(start, end) {
    return (end * 100 - start * 100) / 100 * 2;
  }
  var calculationTime;
  function ScheduleCard(props) {
    RComponent_init(this);
  }
  ScheduleCard.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new RDOMBuilder_init(li$lambda_0(null));
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    set_onClickFunction($receiver_0.attrs, this.props.onClick);
    if (((tmp$ = this.props.cardData) != null ? tmp$.isHadInfo : null) === true) {
      if (((tmp$_0 = this.props.cardData) != null ? tmp$_0.isHadInfo : null) === true) {
        tmp$_1 = calculationTime(this.props.cardData.startTime.timeNum, this.props.cardData.endTime.timeNum);
      } else {
        tmp$_1 = 9.0;
      }
      var calcHeight = tmp$_1;
      if (((tmp$_2 = this.props.cardData) != null ? tmp$_2.isHadInfo : null) === true) {
        tmp$_3 = calcHeight * 30 + calcHeight;
      } else {
        tmp$_3 = 30;
      }
      var cardHeight = tmp$_3;
      var $receiver_0_0 = new RDOMBuilder_init(div$lambda_1('remark-card'));
      var $receiver_1 = get_jsStyle($receiver_0_0.attrs);
      $receiver_1.height = cardHeight.toString() + 'px';
      $receiver_1.backgroundColor = this.props.cardData.bgColor;
      var $receiver_0_1 = new RDOMBuilder_init(div$lambda_1('time-intervals'));
      $receiver_0_1.unaryPlus_pdl1vz$(this.props.cardData.startTime.timeString + '-' + this.props.cardData.endTime.timeString);
      $receiver_0_0.child_52psg1$($receiver_0_1.create());
      var $receiver_0_2 = new RDOMBuilder_init(div$lambda_1('remarks-content'));
      var $receiver_0_3 = new RDOMBuilder_init(h3$lambda_0(null));
      $receiver_0_3.unaryPlus_pdl1vz$(toString(this.props.cardData.infoTitle));
      $receiver_0_2.child_52psg1$($receiver_0_3.create());
      $receiver_0_0.child_52psg1$($receiver_0_2.create());
      $receiver_0.child_52psg1$($receiver_0_0.create());
    } else {
      var $receiver_0_4 = new RDOMBuilder_init(div$lambda_1(null));
      $receiver_0.child_52psg1$($receiver_0_4.create());
    }
    $receiver.child_52psg1$($receiver_0.create());
  };
  ScheduleCard.$metadata$ = {kind: Kind_CLASS, simpleName: 'ScheduleCard', interfaces: [RComponent]};
  function DayData(id, hour, week, startTime, endTime, isHadInfo, bgColor, infoTitle, infoContent) {
    this.id = id;
    this.hour = hour;
    this.week = week;
    this.startTime = startTime;
    this.endTime = endTime;
    this.isHadInfo = isHadInfo;
    this.bgColor = bgColor;
    this.infoTitle = infoTitle;
    this.infoContent = infoContent;
  }
  DayData.$metadata$ = {kind: Kind_CLASS, simpleName: 'DayData', interfaces: []};
  DayData.prototype.component1 = function () {
    return this.id;
  };
  DayData.prototype.component2 = function () {
    return this.hour;
  };
  DayData.prototype.component3 = function () {
    return this.week;
  };
  DayData.prototype.component4 = function () {
    return this.startTime;
  };
  DayData.prototype.component5 = function () {
    return this.endTime;
  };
  DayData.prototype.component6 = function () {
    return this.isHadInfo;
  };
  DayData.prototype.component7 = function () {
    return this.bgColor;
  };
  DayData.prototype.component8 = function () {
    return this.infoTitle;
  };
  DayData.prototype.component9 = function () {
    return this.infoContent;
  };
  DayData.prototype.copy_u1aa36$ = function (id, hour, week, startTime, endTime, isHadInfo, bgColor, infoTitle, infoContent) {
    return new DayData(id === void 0 ? this.id : id, hour === void 0 ? this.hour : hour, week === void 0 ? this.week : week, startTime === void 0 ? this.startTime : startTime, endTime === void 0 ? this.endTime : endTime, isHadInfo === void 0 ? this.isHadInfo : isHadInfo, bgColor === void 0 ? this.bgColor : bgColor, infoTitle === void 0 ? this.infoTitle : infoTitle, infoContent === void 0 ? this.infoContent : infoContent);
  };
  DayData.prototype.toString = function () {
    return 'DayData(id=' + Kotlin.toString(this.id) + (', hour=' + Kotlin.toString(this.hour)) + (', week=' + Kotlin.toString(this.week)) + (', startTime=' + Kotlin.toString(this.startTime)) + (', endTime=' + Kotlin.toString(this.endTime)) + (', isHadInfo=' + Kotlin.toString(this.isHadInfo)) + (', bgColor=' + Kotlin.toString(this.bgColor)) + (', infoTitle=' + Kotlin.toString(this.infoTitle)) + (', infoContent=' + Kotlin.toString(this.infoContent)) + ')';
  };
  DayData.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.hour) | 0;
    result = result * 31 + Kotlin.hashCode(this.week) | 0;
    result = result * 31 + Kotlin.hashCode(this.startTime) | 0;
    result = result * 31 + Kotlin.hashCode(this.endTime) | 0;
    result = result * 31 + Kotlin.hashCode(this.isHadInfo) | 0;
    result = result * 31 + Kotlin.hashCode(this.bgColor) | 0;
    result = result * 31 + Kotlin.hashCode(this.infoTitle) | 0;
    result = result * 31 + Kotlin.hashCode(this.infoContent) | 0;
    return result;
  };
  DayData.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.hour, other.hour) && Kotlin.equals(this.week, other.week) && Kotlin.equals(this.startTime, other.startTime) && Kotlin.equals(this.endTime, other.endTime) && Kotlin.equals(this.isHadInfo, other.isHadInfo) && Kotlin.equals(this.bgColor, other.bgColor) && Kotlin.equals(this.infoTitle, other.infoTitle) && Kotlin.equals(this.infoContent, other.infoContent)))));
  };
  function HourData(timeString, isShow, timeNum) {
    this.timeString = timeString;
    this.isShow = isShow;
    this.timeNum = timeNum;
  }
  HourData.$metadata$ = {kind: Kind_CLASS, simpleName: 'HourData', interfaces: []};
  HourData.prototype.component1 = function () {
    return this.timeString;
  };
  HourData.prototype.component2 = function () {
    return this.isShow;
  };
  HourData.prototype.component3 = function () {
    return this.timeNum;
  };
  HourData.prototype.copy_2ufrag$ = function (timeString, isShow, timeNum) {
    return new HourData(timeString === void 0 ? this.timeString : timeString, isShow === void 0 ? this.isShow : isShow, timeNum === void 0 ? this.timeNum : timeNum);
  };
  HourData.prototype.toString = function () {
    return 'HourData(timeString=' + Kotlin.toString(this.timeString) + (', isShow=' + Kotlin.toString(this.isShow)) + (', timeNum=' + Kotlin.toString(this.timeNum)) + ')';
  };
  HourData.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.timeString) | 0;
    result = result * 31 + Kotlin.hashCode(this.isShow) | 0;
    result = result * 31 + Kotlin.hashCode(this.timeNum) | 0;
    return result;
  };
  HourData.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.timeString, other.timeString) && Kotlin.equals(this.isShow, other.isShow) && Kotlin.equals(this.timeNum, other.timeNum)))));
  };
  var scheduleWeekList;
  var scheduleHourList;
  var bgMap;
  _.main = main;
  var package$memos = _.memos || (_.memos = {});
  package$memos.MemosState = MemosState;
  package$memos.setDayList = setDayList;
  $$importsForInline$$['kotlin-wrappers-kotlin-react-dom-jsLegacy'] = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy;
  package$memos.Memos = Memos;
  var package$previewModal = _.previewModal || (_.previewModal = {});
  package$previewModal.PreviewModal = PreviewModal;
  var package$scheduleCard = _.scheduleCard || (_.scheduleCard = {});
  package$scheduleCard.ScheduleCard = ScheduleCard;
  var package$setting = _.setting || (_.setting = {});
  package$setting.DayData = DayData;
  package$setting.HourData = HourData;
  calculationTime = calculationTime$lambda;
  scheduleWeekList = listOf(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']);
  scheduleHourList = mutableListOf([new HourData('09:00', true, 9.0), new HourData('09:30', false, 9.5), new HourData('10:00', true, 10.0), new HourData('10:30', false, 10.5), new HourData('11:00', true, 11.0), new HourData('11:30', false, 11.5), new HourData('12:00', true, 12.0), new HourData('12:30', false, 12.5), new HourData('13:00', true, 13.0), new HourData('13:30', false, 13.5), new HourData('14:00', true, 14.0), new HourData('14:30', false, 14.5), new HourData('15:00', true, 15.0), new HourData('15:30', false, 15.5), new HourData('16:00', true, 16.0), new HourData('16:30', false, 16.5)]);
  bgMap = listOf(['#443453', '#f6b067', '#a2b9b2', '#e47dc0', '#577f92']);
  main();
  return _;
}));

//# sourceMappingURL=memos-kotlin.js.map
