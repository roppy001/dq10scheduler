var darkEventArray = [];
var dfEventArray = [];
var sealEventArray = [];
var previousDate;

function initDaily() {
  loadDailyConfigFromCookie();
  var currentDate = new Date();
  previousDate = currentDate;

  /**
   * 表示日を算出。午前6時までは前日のカレンダーを表示する。
   */
  var displayDate = new Date(currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    currentDate.getHours() - 6);


  /**
   * 常闇・聖守護者情報を追加
   */
  for (var i = 0; i < 7; i++) {
    var targetDate = new Date(displayDate.getFullYear(),
      displayDate.getMonth(),
      displayDate.getDate() + i,
      6);

    var intervalTime = targetDate.getTime() - BASE_DATE.getTime();
    var dailyDiff = parseInt(intervalTime / 24 / 60 / 60 / 1000);

    var reroLevel = ((dailyDiff + 1) % 3) + 1;
    var scoLevel = (dailyDiff % 3) + 1;
    var jeruLevel = ((dailyDiff + 2) % 3) + 1;
//    var garuLevel = ((dailyDiff + 2) % 3) + 1;

    darkEventArray.push({
      title: "聖守護者 スコルパイド／デルメゼ Lv" + scoLevel + "、レギロLv" + reroLevel + "、ジェル／ガルドドンLv" + jeruLevel,
      start: targetDate,
      allDay: true,
      color: i == 0 ? '#FA8072' : '#87CEFA',
      textColor: '#000000'
    });
  }


  /**
   * 防衛軍イベントを追加
   */
  for (var i = 0; i < 168; i++) {
    var targetDate = new Date(displayDate.getFullYear(),
      displayDate.getMonth(),
      displayDate.getDate(),
      i);
    var targetEndDate = new Date(displayDate.getFullYear(),
      displayDate.getMonth(),
      displayDate.getDate(),
      i + 1);
    dfEventArray.push({
      title: getDefenseForceName(targetDate),
      start: targetDate,
      end: targetEndDate,
      color: (currentDate.getDate() == targetDate.getDate() && currentDate.getHours() == targetDate.getHours() ? '#FA8072' : '#87CEFA'),
      textColor: '#000000'
    });
  }
  /**
   * モンスターシールイベントを追加
   */
  var sealColorArray = ['#C0C0C0', '#ADFF2F', '#FFA500'];

  // 直近のベース時間を設定する。
  var tempDate = new Date(currentDate.getTime()
    - (currentDate.getTime() - SEAL_BASE_DATE.getTime()) % SEAL_INTERVAL_TIME
    - SEAL_INTERVAL_TIME);

  var endDate = new Date(currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate() + 7,
    currentDate.getHours());

  while (tempDate.getTime() < endDate.getTime()) {
    for (var data of SEAL_DATA) {
      var targetDate = new Date(tempDate.getTime() + data.index * 18 * 60 * 1000);
      var targetEndDate = new Date(targetDate.getTime() + 18 * 60 * 1000);

      sealEventArray.push({
        title: data.title,
        page: data.page,
        start: targetDate,
        end: targetEndDate,
        color: sealColorArray[data.rarity],
        textColor: '#000000'
      });
    }
    tempDate = new Date(tempDate.getTime() + SEAL_INTERVAL_TIME);
  }

  /**
   * 設定情報に基づいて反映
   */


  $('#applyFilter').on('click', function () {
    fetchChecked();
    $('#calendar').fullCalendar('removeEventSources');
    $('#calendar').fullCalendar('addEventSource', getEventArray());
    saveDailyConfigToCookie();
  });

  $('#calendar').fullCalendar({
    defaultView: 'agendaDay',
    themeSystem: 'bootstrap3',
    titleFormat: 'M月D日',
    defaultDate: displayDate,
    minTime: '6:00:00',
    maxTime: '1.06:00:00',
    scrollTime: currentDate.getHours() < 6 ? '23:00:00' : currentDate.getHours() + ":00:00",
    events: getEventArray(),
    customButtons: {
      filterButton: {
        bootstrapGlyphicon: 'glyphicon-filter',
        click: function () {
          applyChecked();
          $('#filterModal').modal();
        }
      }
    },
    header: {
      left: 'title',
      center: '',
      right: 'filterButton prev,next'
    },
    height: window.innerHeight-80,
    windowResize: function () {
      $('#calendar').fullCalendar('option', 'height', window.innerHeight-80);
    }
  })
}

function applyChecked() {
//  $('#checkboxDark').prop('checked', dailyConfig.dark);
//  $('#checkboxDf').prop('checked', dailyConfig.df);
  $('#checkboxSeal0').prop('checked', dailyConfig.seal0);
  $('#checkboxSeal1').prop('checked', dailyConfig.seal1);
  $('#checkboxSeal2').prop('checked', dailyConfig.seal2);
  $('#checkboxSeal3').prop('checked', dailyConfig.seal3);
}

function fetchChecked() {
//  dailyConfig.dark = $('#checkboxDark').prop('checked');
//  dailyConfig.df = $('#checkboxDf').prop('checked');
  dailyConfig.seal0 = $('#checkboxSeal0').prop('checked');
  dailyConfig.seal1 = $('#checkboxSeal1').prop('checked');
  dailyConfig.seal2 = $('#checkboxSeal2').prop('checked');
  dailyConfig.seal3 = $('#checkboxSeal3').prop('checked');
}

function getEventArray() {
  var eventArray = [];

  /*
  if (dailyConfig.dark == true) {
    eventArray = eventArray.concat(darkEventArray);
  }

  if (dailyConfig.df == true) {
    eventArray = eventArray.concat(dfEventArray);
  }
*/

  if (dailyConfig.seal0 == true) {
    eventArray = eventArray.concat(sealEventArray.filter(function (v) { return v.page == 0; }));
  }
  if (dailyConfig.seal1 == true) {
    eventArray = eventArray.concat(sealEventArray.filter(function (v) { return v.page == 1; }));
  }
  if (dailyConfig.seal2 == true) {
    eventArray = eventArray.concat(sealEventArray.filter(function (v) { return v.page == 2; }));
  }
  if (dailyConfig.seal3 == true) {
    eventArray = eventArray.concat(sealEventArray.filter(function (v) { return v.page == 3; }));
  }

  return eventArray;
}

function updateView() {
  var currentDate = new Date();

  if (previousDate.getHours() != currentDate.getHours()) {
    window.location.reload(false);
    previousDate = currentDate;
  }

//  setTimeout(updateView, 60 * 1000);
}

$(function () {
  initDaily();
  updateView();
});
