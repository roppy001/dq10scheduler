/*******************************************************************************************
 * DailyTaskManager独自処理
 *******************************************************************************************/




/**
 * 各日週月課単位のベースとなるHTMLを生成する。
 */
function getDailyTaskTemplate(id, title, description) {
  return '<div class="list-group-item" id="' + id + '">'
    + '<span class="glyphicon glyphicon-unchecked pull-right" style="font-size:18pt"></span>'
    + '<h4 class="dtm-title">' + title + '</h4>'
    + '<span class="dtm-badge badge">0s</span>'
    + '<div class="dtm-description">' + description + '</div></div>';
}


/**
 * 初期化処理
 */
function initDailyTaskManager() {
  initItems();
  addDailyTaskManagerEvents();
  loadLastModifiedTimeFromCookie();
  setStatusAll();
}

/**
 * 各タスクのHTMLを追加する。
 */
function initItems() {
  for (var index in taskInfoArray) {
    $('.dtm-box').eq(taskInfoArray[index].displayType)
      .append(
        getDailyTaskTemplate(taskInfoArray[index].key,
          taskInfoArray[index].title,
          taskInfoArray[index].description));
  }
}

function addDailyTaskManagerEvents() {
  $('#dtm-reset').on('click',
    function () {
      for (var index in taskInfoArray) {
        lastModifiedTimeArray[index] = 0;
      }

      saveLastModifiedTimeToCookie();
      setStatusAll();
    }
  );

  for (var index in taskInfoArray) {
    $('#' + taskInfoArray[index].key).on('click',
      { "index": index }, function (e) {
        var i = e.data.index;
        var currentDate = new Date();

        if (isValidTime(currentDate, i)) {
          if (lastModifiedTimeArray[i] == 0) {
            lastModifiedTimeArray[i] = currentDate.getTime();
          } else {
            lastModifiedTimeArray[i] = 0;
          }
        }

        setStatus(i, currentDate);
        saveLastModifiedTimeToCookie();
      });
  }
}



/**
 * 
 */
function setStatusAll() {
  var currentDate = new Date();

  for (var index in taskInfoArray) {
    setStatus(index, currentDate);
  }
}

function setStatus(index, currentDate) {
  var isDone;

  var lastModifiedTime = lastModifiedTimeArray[index];
  var lastUpdateDate = getNearUpdateDate(currentDate, index, true);
  var nextUpdateDate = getNearUpdateDate(currentDate, index, false);
  var valid = isValidTime(currentDate, index);

  // 最後にチェックをした時刻が、前回の日週月課の更新時刻よりも後の場合のみ、済んだものとみなす
  isDone = (lastModifiedTime >= lastUpdateDate.getTime());

  // HTMLの更新
  var elm = $('#' + taskInfoArray[index].key);
  var badge = elm.children('.dtm-badge');
  var star = elm.children('.glyphicon');

  star.removeClass('glyphicon-unchecked');
  star.removeClass('glyphicon-ok');
  star.removeClass('glyphicon-remove');
  badge.removeClass('dtm-badge-checked');
  badge.removeClass('dtm-badge-normal');
  badge.removeClass('dtm-badge-3d');
  badge.removeClass('dtm-badge-1d');

  if (!valid) {
    // 未実施を表す0に初期化
    lastModifiedTimeArray[index] = 0;

    diffTime = nextUpdateDate.getTime() - currentDate.getTime();

    if (diffTime >= 366 * 24 * 60 * 60 * 1000) {
      badge.text("終");
      badge.addClass('dtm-badge-checked');
    } else if (diffTime >= 3 * 24 * 60 * 60 * 1000) {
      badge.text(parseInt(diffTime / (24 * 60 * 60 * 1000)) + 'd');
      badge.addClass('dtm-badge-checked');
    } else {
      badge.text(parseInt(diffTime / (60 * 60 * 1000)) + 'h');
      badge.addClass('dtm-badge-checked');
    }
    star.addClass('glyphicon-remove');
  } else if (isDone) {
    badge.text('済');
    badge.addClass('dtm-badge-checked');
    star.addClass('glyphicon-ok');
  } else {
    // 未実施を表す0に初期化
    lastModifiedTimeArray[index] = 0;

    diffTime = nextUpdateDate.getTime() - currentDate.getTime();

    if (diffTime >= 366 * 24 * 60 * 60 * 1000) {
      badge.text("∞");
      badge.addClass('dtm-badge-normal');
    } else if (diffTime >= 3 * 24 * 60 * 60 * 1000) {
      badge.text(parseInt(diffTime / (24 * 60 * 60 * 1000)) + 'd');
      badge.addClass('dtm-badge-normal');
    } else if (diffTime >= 24 * 60 * 60 * 1000 || taskInfoArray[index].intervalType == "d") {
      badge.text(parseInt(diffTime / (60 * 60 * 1000)) + 'h');
      badge.addClass('dtm-badge-3d');
    } else {
      badge.text(parseInt(diffTime / (60 * 60 * 1000)) + 'h');
      badge.addClass('dtm-badge-1d');
    }
    star.addClass('glyphicon-unchecked');
  }
}

$(function () {
  initDailyTaskManager();
});
