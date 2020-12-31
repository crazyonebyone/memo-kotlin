package setting

data class DayData(
    var id: Int,
    var hour: HourData,
    var week: String,
    var startTime: HourData,
    var endTime: HourData,
    var isHadInfo: Boolean,
    var bgColor: String?,
    var infoTitle: String?,
    var infoContent: String?
)
data class HourData(
    var timeString: String,
    var isShow: Boolean?,
    var timeNum: Double,
)
// 一周天数据
val scheduleWeekList: List<String> = listOf("Monday", "Tuesday", "Wednesday", "Thursday", "Friday")
// 时间数据
val scheduleHourList: MutableList<HourData> = mutableListOf(
    HourData("09:00", true, 9.0),
    HourData("09:30", false, 9.5),
    HourData("10:00", true, 10.0),
    HourData("10:30", false, 10.5),
    HourData("11:00", true, 11.0),
    HourData("11:30", false, 11.5),
    HourData("12:00", true, 12.0),
    HourData("12:30", false, 12.5),
    HourData("13:00", true, 13.0),
    HourData("13:30", false, 13.5),
    HourData("14:00", true, 14.0),
    HourData("14:30", false, 14.5),
    HourData("15:00", true, 15.0),
    HourData("15:30", false, 15.5),
    HourData("16:00", true, 16.0),
    HourData("16:30", false, 16.5),
)
val bgMap: List<String> = listOf("#443453", "#f6b067", "#a2b9b2", "#e47dc0", "#577f92")