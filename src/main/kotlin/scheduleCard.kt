package scheduleCard


import kotlinx.html.js.onClickFunction
import kotlinx.html.onClick
import org.w3c.dom.events.Event
import react.*
import react.dom.*
import setting.*

external interface ScheduleCardProps : RProps {
    var cardData: DayData
    var onClick: (Event) -> Unit
}

val calculationTime : (Double, Double) -> Double = { start, end -> (end * 100 - start * 100) / 100 * 2 }

abstract class ScheduleCard(props: ScheduleCardProps) : RComponent<ScheduleCardProps, RState> () {


    override fun RBuilder.render() {
        li {
            attrs {
                onClickFunction = props.onClick
            }
            if (props.cardData?.isHadInfo === true) {
                val calcHeight: Double = if(props.cardData?.isHadInfo === true) {
                    calculationTime(
                        props.cardData.startTime.timeNum,
                        props.cardData.endTime.timeNum
                    )
                } else {
                    9.0
                }

                val cardHeight = if (props.cardData?.isHadInfo === true) {
                    calcHeight * 30 + calcHeight // 加上border的高度
                } else {
                    30
                }
                div("remark-card") {
                    attrs {
                        jsStyle { height = "${cardHeight}px"; backgroundColor = props.cardData.bgColor}
                    }
                    div("time-intervals") {
                        +"${props.cardData.startTime.timeString}-${props.cardData.endTime.timeString}"
                    }
                    div("remarks-content") {
                        h3{
                            +"${props.cardData.infoTitle}"
                        }
                    }
                }
            } else {
                div(){}
            }
        }
    }
}

fun RBuilder.ScheduleCard(cardData: DayData, onClick: (Event) -> Unit) = child(ScheduleCard::class) {
    attrs.cardData = cardData
    attrs.onClick = onClick
}