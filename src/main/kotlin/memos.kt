package memos

import react.*
import react.dom.*
import setting.*
import kotlin.collections.*
import scheduleCard.*
import previewModal.*


data class MemosState(
    var dayMap: MutableMap<String, MutableList<DayData>>,
    var currentCardData: DayData?,
    var isShowModal: Boolean?
) : RState

fun setDayList(): MutableMap<String, MutableList<DayData>> {
    var id : Int = 0
    var data = mutableMapOf<String, MutableList<DayData>>()
    val newHourList = mutableListOf<HourData>()
    newHourList.addAll(scheduleHourList)
    newHourList.removeLast()
    scheduleWeekList.forEach() { week ->
        newHourList.forEach() { hour ->
            var newData = DayData(
                id++,
                hour,
                week,
                HourData(hour.timeString, null, hour.timeNum),
                HourData(hour.timeString, null, hour.timeNum),
                false,
                "",
                "",
                ""
            )
            if(data[week] != null ){
                data[week]?.add(newData)
            }else{
                data[week] = mutableListOf(newData)
            }
        }
    }
    return data
}

class Memos() : RComponent<RProps, MemosState>() {
    init {
        state = MemosState(setDayList(), null, false)
    }
    override fun RBuilder.render() {
        div("schedule-container") {
            h1 { + "Schedule Template"}
            div("schedule-content") {
                div("schedule-hours") {
                    ul {
                        scheduleHourList.map() {
                            if(it.isShow == true) {
                                li {
                                    attrs.key= it.timeNum.toString()
                                    +it.timeString
                                }
                            }
                        }
                    }
                }
                div("schedule-table") {
                    div("schedule-header") {
                        ul {
                            scheduleWeekList.map() {
                                li {
                                    attrs.key=it
                                    +it
                                }
                            }
                        }
                    }
                    div("schedule-body") {
                        scheduleWeekList.map() { week ->
                            ul {
                                attrs.key = state.dayMap[week].toString()
                                state.dayMap[week]?.map() { day ->
                                    child(ScheduleCard::class) {
                                        attrs {
                                            cardData = day
                                            onClick = {
                                                setState {
                                                    isShowModal = true
                                                    currentCardData = day
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (state.isShowModal == true) {
                child(PreviewModal::class) {
                    attrs {
                        isShow = state.isShowModal!!
                        cardData = state.currentCardData!!
                        onSubmit = { week: String, id: Int, cardData: DayData ->
                            console.log(cardData)
                            val index = state.dayMap[week]?.indexOfFirst { it.id === id }!!
                            state.dayMap[week]?.set(index, cardData)
                            setState{
                                dayMap = state.dayMap
                            }
                        }
                        onCancel = {
                            setState{
                                isShowModal = false
                            }
                        }
                        setCurrentCardData = {
                            setState{
                                currentCardData = it
                            }
                        }
                    }
                }
            }
        }
    }
}

fun RBuilder.Memos() = child(Memos::class) {}