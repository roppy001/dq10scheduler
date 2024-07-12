/*******************************************************************************************
 * 各種定義データ
 *******************************************************************************************/

var LAST_MODIFIED_TIME_COOKIE_KEY = 'last-modified-time';
var SCHEDULE_FILTER_COOKIE_KEY = 'schedule-filter';

/**
 * 2019/1/1 火曜日 6時を基準日とする
 */
var BASE_DATE = new Date("2019/01/01 06:00:00");

/**
 * モンスターシールは、2019/1/2 火曜日 1:30を基準日とする。
 */
var SEAL_BASE_DATE = new Date("2019/01/02 01:30:00");

/**
 * 2019/1/1 火曜日 6時を基準日とした場合の
 */
var DEFENSE_FORCE_NAME_ARRAY = ['紫炎の鉄機兵団', '彩虹の粘塊兵団', '全兵団', '深碧の造魔兵団', '蒼怨の屍獄兵団',
  '銀甲の凶蟲兵団', '彩虹の粘塊兵団', '全兵団', '翠煙の海妖兵団', '灰塵の竜鱗兵団', '彩虹の粘塊兵団', '全兵団',
  '闇朱の獣牙兵団'];

var SEAL_INTERVAL_TIME = (28 * 60 + 48) * 60 * 1000;

var SEAL_DATA = [
  { title: 'シャボン、そうじ、カメラ', index: 0, page: 0, rarity: 1 },
  { title: 'テントウ、コック、カメラ、おすも', index: 3, page: 0, rarity: 2 },
  { title: 'シャボン、ホタル', index: 5, page: 0, rarity: 1 },
  { title: 'シャボン、テントウ、カメラ', index: 11, page: 0, rarity: 1 },
  { title: 'コック、ホタル', index: 13, page: 0, rarity: 1 },
  { title: 'シャボン、そうじ、カメラ', index: 16, page: 0, rarity: 1 },
  { title: 'シャボン、モグラ', index: 18, page: 0, rarity: 0 },
  { title: 'コック、ホタル', index: 25, page: 0, rarity: 1 },
  { title: 'テントウ、コック、カメラ、おすも', index: 27, page: 0, rarity: 2 },
  { title: 'シャボン、モグラ、カメラ、おすも', index: 30, page: 0, rarity: 2 },
  { title: 'コック、そうじ', index: 36, page: 0, rarity: 0 },
  { title: 'シャボン、モグラ、カメラ', index: 38, page: 0, rarity: 1 },
  { title: 'コック、そうじ、カメラ', index: 40, page: 0, rarity: 1 },
  { title: 'シャボン、テントウ', index: 43, page: 0, rarity: 0 },
  { title: 'コック、ホタル', index: 45, page: 0, rarity: 1 },
  { title: 'テントウ、コック、カメラ、おすも', index: 51, page: 0, rarity: 2 },
  { title: 'シャボン、ホタル', index: 57, page: 0, rarity: 1 },
  { title: 'コック、そうじ', index: 60, page: 0, rarity: 0 },
  { title: 'コック、モグラ、カメラ、おすも', index: 66, page: 0, rarity: 2 },
  { title: 'シャボン、ホタル', index: 69, page: 0, rarity: 1 },
  { title: 'シャボン、テントウ', index: 75, page: 0, rarity: 0 },
  { title: 'コック、モグラ、カメラ', index: 78, page: 0, rarity: 1 },
  { title: 'シャボン、そうじ、カメラ', index: 84, page: 0, rarity: 1 },
  { title: 'コック、モグラ、おすも', index: 90, page: 0, rarity: 2 },

  { title: 'カレー、はにわ', index: 0, page: 1, rarity: 0 },
  { title: 'きなこ、はにわ、ニャン、レイン', index: 6, page: 1, rarity: 2 },
  { title: 'カレー、はくば', index: 9, page: 1, rarity: 1 },
  { title: 'きなこ、ヒッチ', index: 15, page: 1, rarity: 0 },
  { title: 'きなこ、はにわ、ニャン', index: 18, page: 1, rarity: 1 },
  { title: 'カレー、はにわ、ニャン', index: 24, page: 1, rarity: 1 },
  { title: 'きなこ、ちゃ、レイン', index: 30, page: 1, rarity: 2 },
  { title: 'カレー、はにわ、ニャン', index: 36, page: 1, rarity: 1 },
  { title: 'きなこ、ヒッチ、ニャン、レイン', index: 39, page: 1, rarity: 2 },
  { title: 'カレー、はくば', index: 41, page: 1, rarity: 1 },
  { title: 'きなこ、ヒッチ、ニャン', index: 47, page: 1, rarity: 1 },
  { title: 'カレー、はくば', index: 49, page: 1, rarity: 1 },
  { title: 'カレー、ちゃ、ニャン', index: 52, page: 1, rarity: 1 },
  { title: 'きなこ、ちゃ', index: 54, page: 1, rarity: 0 },
  { title: 'カレー、はくば', index: 61, page: 1, rarity: 1 },
  { title: 'きなこ、ヒッチ、ニャン、レイン', index: 63, page: 1, rarity: 2 },
  { title: 'きなこ、ちゃ、ニャン、レイン', index: 66, page: 1, rarity: 2 },
  { title: 'カレー、ちゃ', index: 72, page: 1, rarity: 0 },
  { title: 'きなこ、ちゃ、ニャン', index: 74, page: 1, rarity: 1 },
  { title: 'カレー、はにわ、ニャン', index: 76, page: 1, rarity: 1 },
  { title: 'きなこ、ヒッチ', index: 79, page: 1, rarity: 0 },
  { title: 'カレー、はくば', index: 81, page: 1, rarity: 1 },
  { title: 'きなこ、ヒッチ、ニャン、レイン', index: 87, page: 1, rarity: 2 },
  { title: 'カレー、はくば', index: 93, page: 1, rarity: 1 },

  { title: 'まんぷく、いねかり、おにび', index: 1, page: 2, rarity: 1 },
  { title: 'クリーム、ハラヘリ、アクロ', index: 10, page: 2, rarity: 2 },
  { title: 'ペンシル、いねかり、スイカ', index: 13, page: 2, rarity: 1 },
  { title: 'クリーム、おにび、アクロ', index: 20, page: 2, rarity: 2 },
  { title: 'ペンシル、スイカ', index: 23, page: 2, rarity: 1 },
  { title: 'クリーム、おにび', index: 27, page: 2, rarity: 1 },
  { title: 'まんぷく、スイカ', index: 29, page: 2, rarity: 1 },
  { title: 'ペンシル、ハラヘリ、おにび', index: 32, page: 2, rarity: 1 },
  { title: 'クリーム、いねかり', index: 34, page: 2, rarity: 0 },
  { title: 'まんぷく、スイカ', index: 39, page: 2, rarity: 1 },
  { title: 'ペンシル、おにび、アクロ', index: 42, page: 2, rarity: 2 },
  { title: 'クリーム、ハラヘリ、スイカ、アクロ', index: 44, page: 2, rarity: 2 },
  { title: 'まんぷく、いねかり', index: 49, page: 2, rarity: 0 },
  { title: 'クリーム、ハラヘリ、おにび', index: 51, page: 2, rarity: 1 },
  { title: 'まんぷく、いねかり、スイカ', index: 54, page: 2, rarity: 1 },
  { title: 'ペンシル', index: 56, page: 2, rarity: 0 },
  { title: 'まんぷく、おにび', index: 58, page: 2, rarity: 1 },
  { title: 'ペンシル、スイカ、アクロ', index: 63, page: 2, rarity: 2 },
  { title: 'まんぷく、おにび', index: 65, page: 2, rarity: 1 },
  { title: 'ペンシル、ハラヘリ', index: 71, page: 2, rarity: 0 },
  { title: 'クリーム、いねかり、スイカ、アクロ', index: 76, page: 2, rarity: 2 },
  { title: 'まんぷく、おにび', index: 81, page: 2, rarity: 1 },
  { title: 'ペンシル', index: 86, page: 2, rarity: 0 },
  { title: 'クリーム、ハラヘリ、スイカ', index: 92, page: 2, rarity: 1 },

  { title: '調査中1 もも', index: 1, page: 3, rarity: 0 },
  { title: '調査中2 トラ、テラシ', index: 10, page: 3, rarity: 0 },
  { title: '調査中3 つっぱり', index: 13, page: 3, rarity: 0 },
  { title: '調査中4 トラ', index: 20, page: 3, rarity: 0 },
  { title: '調査中5 テラシ、ホラー', index: 23, page: 3, rarity: 2 },
  { title: '調査中6 トラ', index: 27, page: 3, rarity: 0 },
  { title: '調査中7 タコ、ヤドカシ', index: 29, page: 3, rarity: 1 },
  { title: '調査中8 つっぱり、ちゃがま', index: 32, page: 3, rarity: 1 },
  { title: '調査中9 トラ、テラシ', index: 34, page: 3, rarity: 0 },
  { title: '調査中10 タコ、ホラー', index: 39, page: 3, rarity: 2 },
  { title: '調査中11 ちゃがま、ホラー', index: 42, page: 3, rarity: 2 },
  { title: '調査中12 つっぱり、ヤドカシ', index: 44, page: 3, rarity: 1 },
  { title: '調査中13 タコ、つっぱり', index: 49, page: 3, rarity: 0 },
  { title: '調査中14 テラシ', index: 51, page: 3, rarity: 0 },
  { title: '調査中15 もも', index: 54, page: 3, rarity: 0 },
  { title: '調査中16 タコ', index: 56, page: 3, rarity: 0 },
  { title: '調査中17 もも、ちゃがま', index: 58, page: 3, rarity: 1 },
  { title: '調査中18 タコ、ホラー', index: 63, page: 3, rarity: 2 },
  { title: '調査中19 もも、ちゃがま', index: 65, page: 3, rarity: 1 },
  { title: '調査中20 タコ、テラシ', index: 71, page: 3, rarity: 0 },
  { title: '調査中21 つっぱり', index: 76, page: 3, rarity: 0 },
  { title: '調査中22 タコ', index: 81, page: 3, rarity: 0 },
  { title: '調査中23 もも', index: 86, page: 3, rarity: 0 },
  { title: '調査中24 つっぱり', index: 92, page: 3, rarity: 0 },


]

/**
 * 最終更新時刻をセット
 * t = 0 : チェックが入ってない状態
 * t < 前回のリセット時刻 : 前回チェックを入れた時間が経ってリセットされた
 * 　(Cookie保存時に0に変更する)
 * t >= 前回のリセット時刻 : 今回の分を既に終わらせた状態
 */
var lastModifiedTimeArray;

var dailyConfig = {
  dark: true,
  df: true,
  seal0: false,
  seal1: false,
  seal2: false,
  seal3: true,
  month: true,
  wander: false
}

/*******************************************************************************************
 * 共通処理
 *******************************************************************************************/

var Base64 = {
  encode: function (str) {
    return btoa(unescape(encodeURIComponent(str)));
  },
  decode: function (str) {
    return decodeURIComponent(escape(atob(str)));
  }
};


function isNumber(val) {
  var regex = new RegExp(/^[+-]?[0-9]+$/);
  return regex.test(val);
}

/**
 * Cookieから更新時刻情報を読み取る
 */
function loadLastModifiedTimeFromCookie() {
  // 配列初期化
  lastModifiedTimeArray = new Array(taskInfoArray.length);

  for (var index in taskInfoArray) {
    lastModifiedTimeArray[index] = 0;
  }

  var allcookies = document.cookie;

  var position = allcookies.indexOf(LAST_MODIFIED_TIME_COOKIE_KEY);

  if (position == -1) {
    return;
  }

  var startIndex = position + LAST_MODIFIED_TIME_COOKIE_KEY.length + 1;
  var endIndex = allcookies.indexOf(';', startIndex);
  if (endIndex == -1) {
    endIndex = allcookies.length;
  }

  var loadedString = allcookies.substring(startIndex, endIndex);

  if (!loadedString) {
    return;
  }

  var decodedData = Base64.decode(loadedString);
  var loadedData = JSON.parse(decodedData);

  if (!loadedData) {
    return;
  }

  for (var index in taskInfoArray) {
    var d = loadedData[taskInfoArray[index].key];

    if (isNumber(d)) {
      lastModifiedTimeArray[index] = d;
    }
  }
}

function saveLastModifiedTimeToCookie() {
  // 保存対象データを格納するJSONデータを生成
  var savedData = {};

  for (var index in taskInfoArray) {
    savedData[taskInfoArray[index].key] = lastModifiedTimeArray[index];
  }

  var stringifiedData = JSON.stringify(savedData);
  var savedString = Base64.encode(stringifiedData);

  // 保存
  document.cookie = LAST_MODIFIED_TIME_COOKIE_KEY + '='
    + savedString
    + '; expires=Tue, 19 Jan 2038 03:14:07 GMT';
}

/**
 * Cookieからスケジュール設定情報を読み取る
 */
function loadDailyConfigFromCookie() {

  var allcookies = document.cookie;

  var position = allcookies.indexOf(SCHEDULE_FILTER_COOKIE_KEY);

  if (position == -1) {
    return;
  }

  var startIndex = position + SCHEDULE_FILTER_COOKIE_KEY.length + 1;
  var endIndex = allcookies.indexOf(';', startIndex);
  if (endIndex == -1) {
    endIndex = allcookies.length;
  }

  var loadedString = allcookies.substring(startIndex, endIndex);

  if (!loadedString) {
    return;
  }

  var decodedData = Base64.decode(loadedString);
  var loadedData = JSON.parse(decodedData);

  if (!loadedData) {
    return;
  }


  for (var key in dailyConfig) {
    var d = loadedData[key];

    if (d !== undefined) {
      dailyConfig[key] = d;
    }
  }
}

function saveDailyConfigToCookie() {
  // 保存対象データを格納するJSONデータを生成

  var stringifiedData = JSON.stringify(dailyConfig);
  var savedString = Base64.encode(stringifiedData);

  // 保存
  document.cookie = SCHEDULE_FILTER_COOKIE_KEY + '='
    + savedString
    + '; expires=Tue, 19 Jan 2038 03:14:07 GMT';
}


/**
 * 現在有効期間か無効期間かを返却する
 **/
function isValidTime(targetDate, taskIndex) {
  var info = taskInfoArray[taskIndex];
  var valid = false;

  if (info.intervalType == "e") {
    for (ivIndex = 0; ivIndex < info.intervalValue.length; ivIndex++) {
      var ivDate = new Date(info.intervalValue[ivIndex].endDate);
      if (targetDate.getTime() < ivDate.getTime()) {
        valid = info.intervalValue[ivIndex].valid;

        break;
      }
    }
    if (ivIndex == info.intervalValue.length) {
      valid = false;
    }
  } else if (info.intervalType == "m") {
    var ivIndex, h;
    var t = (targetDate.getDate() - 1) * 24 + targetDate.getHours();

    for (ivIndex = 0; ivIndex < info.intervalValue.length; ivIndex++) {
      if (t < info.intervalValue[ivIndex].endHour) {
        valid = info.intervalValue[ivIndex].valid;

        break;
      }
    }
    if (ivIndex == info.intervalValue.length) {
      valid = info.intervalValue[0].valid;
    }
  } else if (info.intervalType == "w") {
    var ivIndex, h;
    var t = targetDate.getDay() * 24 + targetDate.getHours();
    for (ivIndex = 0; ivIndex < info.intervalValue.length; ivIndex++) {
      if (t < info.intervalValue[ivIndex].endHour) {
        valid = info.intervalValue[ivIndex].valid;

        break;
      }
    }
    if (ivIndex == info.intervalValue.length) {
      valid = info.intervalValue[0].valid;
    }
  } else if (info.intervalType == "d") {
    valid = true;
  }

  return valid;
}

/**
 * 過去の中で直近の更新時刻を返す
 * @param targetDate 測定対象の時刻
 * @param taskIndex 種別
 * @param lastFlag trueなら過去の直近の時刻、falseなら次の時刻を返す
 * @returns 直近の更新時刻
 */

function getNearUpdateDate(targetDate, taskIndex, lastFlag) {
  var info = taskInfoArray[taskIndex];
  var newDate;
  if (info.intervalType == "e") {
    var ivIndex;

    var prevDate = new Date("2000/01/01 00:00:00");

    for (ivIndex = 0; ivIndex < info.intervalValue.length; ivIndex++) {
      var ivDate = new Date(info.intervalValue[ivIndex].endDate);

      if (targetDate.getTime() < ivDate.getTime()) {
        if (lastFlag) {
          newDate = prevDate;
        } else {
          newDate = ivDate;
        }
        break;
      }
      prevDate = ivDate;
    }
    if (ivIndex == info.intervalValue.length) {
      if (lastFlag) {
        newDate = prevDate;
      } else {
        newDate = new Date("2100/01/01 00:00:00");
      }
    }
  } else if (info.intervalType == "m") {
    var ivIndex, h;
    var t = (targetDate.getDate() - 1) * 24 + targetDate.getHours();

    for (ivIndex = 0; ivIndex < info.intervalValue.length; ivIndex++) {
      if (t < info.intervalValue[ivIndex].endHour) {
        if (lastFlag) {
          if (ivIndex == 0) {
            // 先月の最終更新タイミングを設定
            h = info.intervalValue[info.intervalValue.length - 1].endHour;
            newDate = new Date(targetDate.getFullYear(),
              targetDate.getMonth() - 1,
              1,
              h);
            break;
          } else {
            h = info.intervalValue[ivIndex - 1].endHour;
            newDate = new Date(targetDate.getFullYear(),
              targetDate.getMonth(),
              1,
              h);
            break;
          }
        } else {
          h = info.intervalValue[ivIndex].endHour;
          newDate = new Date(targetDate.getFullYear(),
            targetDate.getMonth(),
            1,
            h);
          break;
        }
      }
    }
    if (ivIndex == info.intervalValue.length) {
      if (lastFlag) {
        h = info.intervalValue[ivIndex - 1].endHour;
        newDate = new Date(targetDate.getFullYear(),
          targetDate.getMonth(),
          1,
          h);
      } else {
        h = info.intervalValue[0].endHour;
        newDate = new Date(targetDate.getFullYear(),
          targetDate.getMonth() + 1,
          1,
          h);
      }
    }
  } else if (info.intervalType == "w") {
    var ivIndex, h;
    var sunDate = targetDate.getDate() - targetDate.getDay();
    var t = targetDate.getDay() * 24 + targetDate.getHours();
    for (ivIndex = 0; ivIndex < info.intervalValue.length; ivIndex++) {
      if (t < info.intervalValue[ivIndex].endHour) {
        if (lastFlag) {
          if (ivIndex == 0) {
            h = info.intervalValue[info.intervalValue.length - 1].endHour;
            newDate = new Date(targetDate.getFullYear(),
              targetDate.getMonth(),
              sunDate - 7,
              h);
            break;
          } else {
            h = info.intervalValue[ivIndex - 1].endHour;
            newDate = new Date(targetDate.getFullYear(),
              targetDate.getMonth(),
              sunDate,
              h);
            break;
          }
        } else {
          h = info.intervalValue[ivIndex].endHour;
          newDate = new Date(targetDate.getFullYear(),
            targetDate.getMonth(),
            sunDate,
            h);
          break;
        }
      }

    }
    if (ivIndex == info.intervalValue.length) {
      if (lastFlag) {
        h = info.intervalValue[ivIndex - 1].endHour;
        newDate = new Date(targetDate.getFullYear(),
          targetDate.getMonth(),
          sunDate,
          h);
      } else {
        h = info.intervalValue[0].endHour;
        newDate = new Date(targetDate.getFullYear(),
          targetDate.getMonth(),
          sunDate + 7,
          h);
      }
    }
  } else if (info.intervalType == "d") {
    var h;
    h = info.intervalValue[0].endHour;
    if (lastFlag) {
      newDate = new Date(targetDate.getFullYear(),
        targetDate.getMonth(),
        targetDate.getDate(),
        targetDate.getHours() < h ? h - 24 : h);
    } else {
      newDate = new Date(targetDate.getFullYear(),
        targetDate.getMonth(),
        targetDate.getDate(),
        targetDate.getHours() < h ? h : h + 24);
    }
  }
  return newDate;
}

/**
 * 現在の時刻の出現防衛軍名を返却する。
 */
function getDefenseForceName(targetDate) {
  var intervalTime = targetDate.getTime() - BASE_DATE.getTime();
  var hourlyDiff = parseInt(intervalTime / 60 / 60 / 1000);
  return DEFENSE_FORCE_NAME_ARRAY[hourlyDiff % DEFENSE_FORCE_NAME_ARRAY.length];
}



