package previewModal

import kotlinx.html.InputType
import kotlinx.html.js.onChangeFunction
import kotlinx.html.js.onClickFunction
import kotlinx.html.js.onSelectFunction
import kotlinx.html.onChange
import kotlinx.html.onSelect
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.HTMLSelectElement
import org.w3c.dom.events.Event
import org.w3c.dom.get
import react.*
import react.dom.*
import react.RBuilder
import setting.*

external interface ScheduleCardProps : RProps {
    var cardData: DayData
    var isShow: Boolean
    var onSubmit: ( week: String, id: Int, cardData: DayData) -> Unit
    var onCancel: (Event) -> Unit
    var setCurrentCardData: (DayData) -> Unit
}

class PreviewModal(props: ScheduleCardProps) : RComponent<ScheduleCardProps, RState> () {
    var selectHourList = mutableListOf<HourData>()
    private val contentClass = if(props.isShow) { "preview-modal-content show-modal-animate" } else { "preview-modal-content" }
    override fun componentWillMount() {
        scheduleHourList.forEach {
            if(it.timeNum > props.cardData.hour.timeNum) {
                selectHourList.add(it)
            }
        }
        console.log(selectHourList)
    }
    override fun RBuilder.render() {

        div(contentClass) {
            div("modal-body") {
                val cardBgColor = if (props.cardData.bgColor.isNullOrEmpty()) {"#FFF"} else {props.cardData?.bgColor}
                attrs{
                    jsStyle { backgroundColor = cardBgColor}
                }
                div("close"){
                    val closeColor = if(props.cardData.isHadInfo) {"#fff"} else {"#999"}
                    attrs{
                        onClickFunction = props.onCancel
                        jsStyle { color = closeColor}
                    }
                    + "×"
                }
                if(props.cardData.isHadInfo) {
                    div("info-content") {
                        p("time-intervals") {
                            +"${props.cardData.startTime.timeString}-${props.cardData.endTime.timeString}"
                        }
                        h3() {
                            +props.cardData.infoTitle.toString()
                        }
                        div() {+props.cardData.infoContent.toString()}
                    }
                } else {
                    div("add-content") {
                        div("input-body") {
                            select() {
                                attrs {
                                    onChangeFunction = {
                                        val target = it.target as HTMLSelectElement
                                        props.cardData.endTime.timeNum = target.value.toDouble()
                                        props.cardData.endTime.timeString = target[target.selectedIndex]?.innerHTML.toString()
                                    }
                                }
                                option(){
                                    attrs {
                                        value = "-1"
                                    }
                                    + "请选择结束时间"
                                }
                                selectHourList.map {
                                    option() {
                                        attrs {
                                            key = it.timeString
                                            value = it.timeNum.toString()
                                        }
                                        + it.timeString
                                    }
                                }
                            }
                            input(InputType.text) {
                                attrs {
                                    placeholder = "请输入标题"
                                    onChangeFunction = {
                                        val target = it.target as HTMLInputElement
                                        props.cardData.infoTitle = target.value
                                    }
                                }
                            }
                            input(InputType.text) {
                                attrs {
                                    placeholder = "请输入内容"
                                    onChangeFunction = {
                                        val target = it.target as HTMLInputElement
                                        props.cardData.infoContent = target.value
                                    }
                                }
                            }
                        }
                        input(InputType.button) {
                            attrs {
                                value="提交"
                                onClickFunction = {
                                    if(!props.cardData.infoTitle.isNullOrEmpty() && !props.cardData.infoContent.isNullOrEmpty() && props.cardData.endTime !== null) {
                                        props.cardData.isHadInfo = true
                                        val randomNum = (0..bgMap.size).random()
                                        props.cardData.bgColor = bgMap[randomNum]
                                        console.log(randomNum)
                                        props.onSubmit(props.cardData.week, props.cardData.id, props.cardData)
                                    }
                                }
                            }
                        }
                        input(InputType.button) {
                            attrs {
                                value="取消"
                                onClickFunction = props.onCancel
                            }
                        }
                    }
                }
            }
        }
    }
}

fun RBuilder.PreviewModal(cardData: DayData, isShow: Boolean, onSubmit:( week: String, id: Int, cardData: DayData) -> Unit, onCancel: (Event) -> Unit, setCurrentCardData: (DayData) -> Unit) = child(
    PreviewModal::class) {
    attrs.cardData = cardData
    attrs.isShow = isShow
    attrs.onSubmit = onSubmit
    attrs.onCancel = onCancel
    attrs.setCurrentCardData = setCurrentCardData
}