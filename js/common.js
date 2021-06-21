// global vars
var textAreaPaddtop = 15;
var dataBarHeight = 40;
var osver_name = "Don\'t know";
var devicename = "Don\'t know";
var storename = "Don\'t know";
var fontSize ="";
var futtxt="";

$(document).ready(function () {
    // set continer height
    setMainContHeight();

    // focus on load
    $("textarea").focus();

    // resize funstions
    $(window).resize(function () {
        setMainContHeight()
    });

    // count 
    $("textarea").on('keyup propertychange paste', function () {
        $("#characterCount").text($(this).val().length); //characters
        countRows(); //rows
        wordCount(); // word counter 
        $("#changeTime").text(getCurrentTime());// set last saved
        $("#texttocpy").text("Hey,\nI downloaded the app from "+ storename+".\nOS: " + osver_name +"\nDevice: "+ devicename+"\n\n"+$("#textArea").val());
    });

     $("#fontSize").on('change', function () {
                fontSize = $(this).val();
                changesize();
                // settext();
            });

     $("#device_name").on('change', function () {
                devicename = $(this).val();
                // $("textarea").val("Hey,\nI downloaded the app from "+ storename+".\nOS: " + osver_name +"\nDevice: "+ devicename+"\n\n");
                settext();
            });

     $("#android_name").on('change', function () {
                osver_name = $(this).val();
                // $("textarea").val("Hey,\nI downloaded the app from "+ storename+".\nOS: " + osver_name +"\nDevice: "+ devicename+"\n\n");
                settext();
            });

     $("#appstore_name").on('change', function () {
                storename = $(this).val();
                // $("textarea").val("Hey,\nI downloaded the app from "+ storename+".\nOS: " + osver_name +"\nDevice: "+ devicename+"\n\n");
                settext();
            }); 

   /* $('.dropdown-item').on('click',  function(){
        var btnObj = $(this).parent().siblings('button');
        $(btnObj).text($(this).text());
        $(btnObj).val($(this).text());

        // osver = $(this).text();
        // // var strUser = e.value;

        // $("#textArea").text(osver+", "+ devicename+", "+storename);
    });*/
    /*$("#osver li").click(function(){
        $("#osver_sel").text($(this).text());
        osver_name = $(this).text();
        settext();
    });

    $("#devname li").click(function(){
        $("#devname_sel").text($(this).text());
        devicename = $(this).text();
        settext();
    });

    $("#storename li").click(function(){
        $("#storename_sel").text($(this).text());
        storename = $(this).text();
        settext();
    });

    $("#fsize li").click(function(){
        $("#fsize_sel").text($(this).text());
        fontSize = $(this).text();
        changesize();
        settext();
    });*/

    $("#copytxt").click(function(){
        // futtxt=$("#textArea").val();
    // $("textarea").text("Hey,\nI downloaded the app from "+ storename+".\nOS: " + osver_name +"\nDevice: "+ devicename+"\n\n"+futtxt);
    // $("textarea").val("Hey,\nI downloaded the app from "+ storename+".\nOS: " + osver_name +"\nDevice: "+ devicename+"\n\n");
    $("textarea").select();
    document.execCommand('copy');
    });

    // osver= $("#osver").value;//text();

});
function changesize(){
    $("textarea").css("font-size", fontSize + "px");
}
function settext()
{
    $("#textArea").val("Hey,\nI downloaded the app from "+ storename+".\nOS: " + osver_name +"\nDevice: "+ devicename+"\n\n The issue I am currently facing is ");
    lstxt();
    // settextformal();
}
function settextstd()
{
    $("#textArea").text("OS: " + osver_name +"\nDevice: "+ devicename+"\nStorename: "+storename);
    // settextformal();
}

function settextformal()
{
    $("#textArea").text("Hey,\n I am facing an issue on " + devicename +" running "+ osver_name+". I downloaded the app from "+storename+".");
}

// set continer height
function setMainContHeight()
{
    dataBarHeight = $("#classOne")[0].scrollHeight+75;
    textAreaPaddtop = $("#classTwo")[0].scrollHeight;
    // $("#textAreaCont").height($(window).height());
    $("textArea").height($(window).height() - (dataBarHeight + textAreaPaddtop));
    // $("textArea").height((dataBarHeight + textAreaPaddtop));
}


// count number of rows
function countRows() {
    var t = $("textarea")[0];
    $("#linecount").text(t.value.substr(0, t.selectionStart).split("\n").length);
}

function getCurrentTime()
{
    var currentdate = new Date();
    var datetime = currentdate.getDate() + "/"
                    + (currentdate.getMonth() + 1) + "/"
                    + currentdate.getFullYear() + " @ "
                    + currentdate.getHours() + ":"
                    + (currentdate.getMinutes() < 10 ? '0' : '') + currentdate.getMinutes();

    return datetime;

}
// word count
function wordCount(){

    var value = $('#textArea').val();

    if (value.length == 0) {
        $('#wordCount').html(0);
        return;
    }

    var regex = /\s+/gi;
    var wordCount = value.trim().replace(regex, ' ').split(' ').length;
    $('#wordCount').html(wordCount); //update word count on the UI

}

