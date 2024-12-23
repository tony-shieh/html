// Nav Bar RWD設定
reverse = false;
$(".menu").hide();
width = $(window).width();
if (width > 992) $("#menu").hide();
$(window).resize(function () {
    width = $(window).width();
    (width > 992) ? $("#menu").hide() : $("#menu").show();
    if (width > 992) $(".menu").hide();
});
var change = true; // 留言排序
$("#menu").click("on", function () {
    $(".menu").toggle();
});
//google chart 插入卡片
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(init);
function init() {
    var url =
        'https://docs.google.com/spreadsheets/d/1Sf8MdFRuaiCb4dxPtqblqEpMu7meLfjRdccyLsW5QXE/gviz/tq?sheet=工作表1';
    var query = new google.visualization.Query(url);
    query.setQuery('select *');
    query.send(processSheetsData);
}

function processSheetsData(response) {
    var data = response.getDataTable();
    var columns = data.getNumberOfColumns();
    var rows = data.getNumberOfRows();
    for (var i = 0; i < rows; i++) {
        var word = data.getFormattedValue(i, 1)
        $("#CARDS").append(`<div class="col s12 m6 l3 cards" id="homepage">
    <div class="card">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src="${data.getFormattedValue(i, 3)}" height="217px" width="290px">
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">${data.getFormattedValue(i, 1)}<i class="material-icons right">more_vert</i></span>
          <p><a href="#" class="new_page" id="${i}">${data.getFormattedValue(i, 2)}</br>詳細介紹</a></p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">${data.getFormattedValue(i, 1)}<i class="material-icons right">close</i></span>
          <p>點擊詳細介紹來查看更多內容！</p>
        </div>
    </div>
</div>`);
        $("#CARDS").append(`<div class="detail" id="detail_${i}">${data.getFormattedValue(i, 4)}</div>`);
        $("#detail_" + i).hide();
        // $("#d" + (i + 1)).append("<h4 class='title'>詳細資訊</h4>");
        // $("#d" + (i + 1)).append(`<img src="${data.getFormattedValue(i, 3)}" class="IMG" height="434px"
        //     width="580px">
        // </br><div class="Name">${data.getFormattedValue(i, 1)}</div>
        // </br><div class="intro">${data.getFormattedValue(i, 4)}</div>`);
    }
}

//返回按鈕
$("#CARDS").append('<span class="material-symbols-outlined press" id="pre">arrow_back</span>');
$("#pre").hide();

//插入留言區
function formresponse() {
    var m = document.forms["form1"]["Name"].value;
    var d = document.forms["form1"]["Comment"].value;
    if (m == null || m == "") {
        alert("Name不可為空白!");
        return false;
    } else if (d == null || d == "") {
        alert("Comment不可為空白!");
        return false;
    } else {
        var MySubmit = "https://docs.google.com/forms/d/e/1FAIpQLSekR-eUQAnzrCb_3ulHIcJIK3xwcP18k_ZznDDr7Ru_ebTwKg/formResponse?entry.71597420=" + m + "&entry.928316273=" + d + "&submit=Submit";
        // var MySubmit = "https://docs.google.com/forms/d/e/1FAIpQLSekR-eUQAnzrCb_3ulHIcJIK3xwcP18k_ZznDDr7Ru_ebTwKg/viewform?usp=pp_url&entry.71597420=" + m + "&entry.928316273=" + d + "&submit=Submit";
        var NewOpen = window.open(MySubmit);
    }
}

var QuerySet = "Select *"
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(init_2);
function init_2() {
    // var url =
    //     'https://docs.google.com/spreadsheets/d/1Sf8MdFRuaiCb4dxPtqblqEpMu7meLfjRdccyLsW5QXE/gviz/tq?sheet=工作表1';
    var url =
        'https://docs.google.com/spreadsheets/d/1PiUVOLF1Rvq3IV3uCBsV6TDqtqki75gzirph-ias22A/gviz/tq?sheet=表單回應1';
    // var url = "https://docs.google.com/spreadsheets/d/1PiUVOLF1Rvq3IV3uCBsV6TDqtqki75gzirph-ias22A/edit?usp=sharing" 
    var query = new google.visualization.Query(url);
    query.setQuery(QuerySet);
    query.send(processSheetsData_2);
}

function processSheetsData_2(response) {
    var data = response.getDataTable();
    var columns = data.getNumberOfColumns();
    var rows = data.getNumberOfRows();

    // var str = "";
    if (!reverse) {
        for (var r = rows - 1; r >= 0; r--) {
            $("#demo").append(`<div class="reply">
<div class="user">
    <h3>User: ${data.getFormattedValue(r, 1)}</h3><h6>${data.getFormattedValue(r, 0)}</h6>
</div>
<div class="comment">
    ${data.getFormattedValue(r, 2)}
</div><br>
</div><br>`);

            // $("#demo").append(`<img src="${data.getFormattedValue(r, 3)}" height="217px" width="290px">`);

            // str += data.getFormattedValue(r, 0) + "(" + data.getFormattedValue(r, 1) + ")" + " 訂 " + data.getFormattedValue(r, 2) + " : " + data.getFormattedValue(r, 3) + "個 <br />";
        }
    } else {
        for (var r = 0; r < rows; r++) {
            $("#demo").append(`<div class="reply">
<div class="user">
    <h3>User: ${data.getFormattedValue(r, 1)}</h3><h6>${data.getFormattedValue(r, 0)}</h6>
</div>
<div class="comment">
    ${data.getFormattedValue(r, 2)}
</div><br>
</div><br>`);
            // $("#demo").append(`<img src="${data.getFormattedValue(r, 3)}" height="217px" width="290px">`);

            // str += data.getFormattedValue(r, 0) + "(" + data.getFormattedValue(r, 1) + ")" + " 訂 " + data.getFormattedValue(r, 2) + " : " + data.getFormattedValue(r, 3) + "個 <br />";
        }
    }
    // document.getElementById("demo").innerHTML = str;
}

// 用陣列插入卡片
// var photos = ["https://img.kocpc.com.tw/2022/09/1663050159-5f5593f6467ee7c1de6df79c6486a3b0.jpg",
//     "https://storage.googleapis.com/landtop_prod/contentimage/1058/image/eeb98851df8984a0928af9d489908aa7.jpg",
//     "https://imgs.nmplus.hk/wp-content/uploads/2022/08/1-005_product_galaxy_zflip4_borapurple_l30_table_top_hi_118390752762f3646766437-1024x683.jpg",
//     "https://dlcdnwebimgs.asus.com/gain/FB338DAC-B312-4D25-A7A3-DBDBDBC123CA",
//     "https://img.eprice.com.tw/img/mobile/6806/large.png"];
// var words = ["Apple iPhone 14 Pro", "Google Pixel 7 Pro", "Samsung Z flip4", "ROG phone 6 Ultimate", "XiaoMi 12T Pro"];
// for (var i = 0; i < photo.length; i++) {
//     $("#CARDS").append(`< div class="col s12 m6 l3 cards" id = "homepage" >
//             <div class="card">
//                 <div class="card-image waves-effect waves-block waves-light">
//                     <img class="activator" src="${photos[i]}" height="217px" width="290px">
//                 </div>
//                 <div class="card-content">
//                     <span class="card-title activator grey-text text-darken-4">${words[i]}<i class="material-icons right">more_vert</i></span>
//                     <p><a href="#" class="new_page" id="${i}">內容介紹</a></p>
//                 </div>
//                 <div class="card-reveal">
//                     <span class="card-title grey-text text-darken-4">${words[i]}<i class="material-icons right">close</i></span>
//                     <p>點擊詳細資料來查看更多內容！</p>
//                 </div>
//             </div>
//     </div > `);
// $("#CARDS").append(`< div class="detail" id = "detail_${i}" > ${words[i]}</div > `);
// $("#detail_" + i).hide();
// }

//痞客邦文章嵌入


function get(url) {
    var xmlhttp = new XMLHttpRequest();
    // var url = "https://emma.pixnet.cc/mainpage/blog/categories/hot_weekly/24?page=1&per_page=20&api_version=2&format=json";
    // var url = "https://emma.pixnet.cc/blog/articles/search?user=ofeyhong&key=%22聊手機%22&page=1&per_page=3&format=json";
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var myArr = JSON.parse(xmlhttp.responseText);
            myFunction(myArr);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
};

// var cnt = 0; // 數留言??

//插入痞客邦文章
function myFunction(arr) {
    var data = arr.articles;
    var AREA = "";
    var out = "";
    var IMG;
    var LINK;
    var TITLE;
    data.forEach(i => {
        out = "";
        if (i.thumb != "") IMG = i.thumb;
        if (i.title != "") {
            LINK = i.link;
            TITLE = i.title;
        }
        if (i.tags.length != 0) {
            out += '<p class="Tag">Tags: ';
            i.tags.forEach(element => { out += element.tag + ", "; });
            // out = out.substring(0, out.length - 2);
            out = out.slice(0, -2);
            out += '</p>';
        }
        out += '<br /><br /><br />';
        AREA = `
            <div class="col s12 m6 l3" style="width: 95%; height: 30%;">
            <div class="card-panel grey lighten-5" style: height: 30%;>
              <div class="row valign-wrapper">
                <div class="col s2">
                  <img src="${IMG}" alt="" class="responsive-img" style="height: 100%; wigth: 200%;">
                </div>
                <div class="col s10">
                  <span class="black-text">
                  <a href="${LINK}" target="_blank">${TITLE}</a>
                    ${out}
                  </span>
                </div>
              </div>
            </div>
          </div>
            `;
        $(".arti").append(AREA);
    });
    // cnt++;
}
// function myFunction(arr) {
//     var data = arr.articles;
//     var out = "";
//     data.forEach(i => {
//         if (i.thumb != "") out += '<img src="' + i.thumb + '" />';
//         if (i.title != "") out += '<p><a href="' + i.link + '" target="_blank">' + i.title + '</a></p>';
//         if (i.tags.length != 0) {
//             out += '<p class="Tag">Tags: ';
//             i.tags.forEach(element => { out += element.tag + ", "; });
//             // out = out.substring(0, out.length - 2);
//             out = out.slice(0, -2);
//             out += '</p>';
//         }
//         out += '<br /><br /><br />';
//     });
//     document.getElementById("area").innerHTML += out;
// }

// 跳出卡片詳細資訊
$("#CARDS").on("click", ".new_page", function () {
    var id = $(this).attr("id");
    $(".cards").hide();
    $("#detail_" + id).show();
    $("#pre").show();
    $(".menu").hide();
});
$("#CARDS").on("click", ".press", function () {
    $(".detail").hide();
    $("#pre").hide();
    $(".cards").show();
    $(".menu").hide();
});

// Menu icon & 狀態列 點擊效果
$(".det").hide();
$("#pres").hide();

$(".Menu").click("on", function () {
    $(".menu").hide();
});
$(".page").click("on", function () {
    $("#pres").show();
});
$(".Apple").click("on", function () {
    $(".det").hide();
    $("#CARDS").hide();
    $(".apple").show();
});
$(".Google").click("on", function () {
    $(".det").hide();
    $("#CARDS").hide();
    $(".google").show();
});
$(".Samsung").click("on", function () {
    $(".det").hide();
    $("#CARDS").hide();
    $(".samsung").show();
});
$(".ROG").click("on", function () {
    $(".det").hide();
    $("#CARDS").hide();
    $(".rOG").show();
});
$(".XiaoMi").click("on", function () {
    $(".det").hide();
    $("#CARDS").hide();
    $(".xiaoMi").show();
});
$(".discuss").click("on", function () {
    $(".det").hide();
    $("#CARDS").hide();
    $(".disc").show();
});

$(".Article").click("on", function () {
    $(".det").hide();
    $("#CARDS").hide();
    $(".arti").show();
});
// 返回首頁
function show_all() {
    $(".det").hide();
    $(".detail").hide();
    $("#CARDS").show();
    $("#pre").hide();
    $(".cards").show();
    $("#pres").hide();
    $(".menu").hide();
}
$("#pres").click("on", show_all);
$(".homepage").click("on", show_all);


$("#nto").click("on", function () {
    reverse = false;
    $("#demo").html("");
    google.charts.setOnLoadCallback(init_2);
});
$("#otn").click("on", function () {
    reverse = true;
    $("#demo").html("");
    google.charts.setOnLoadCallback(init_2);
});