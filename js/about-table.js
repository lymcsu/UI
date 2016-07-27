/* 表格 ckeck */
$('.checked-box').not('.all-choose-btn .checked-box').click(function() {
	$(this).toggleClass('checked');
});

$('.all-choose-btn .checked-box').click(function() {
	if ($(this).hasClass('checked')) {
		$('.all-choose-btn .checked-box').removeClass('checked');
		$(this).parent().parent().parent().parent().children('tbody').children().children().children('.checked-box').removeClass('checked');
	} else {
	$('.all-choose-btn .checked-box').addClass('checked');
	$(this).parent().parent().parent().parent().children('tbody').children().children().children('.checked-box').addClass('checked');
	}
});

$('body').click(function(e) {
    var _bulkOperation = $('.bulk-operation'); // 设置目标区域
    if (!_bulkOperation.is(e.target) && _bulkOperation.has(e.target).length === 0) { 
   	 	_bulkOperation.removeClass('open');
    } else {
    		_bulkOperation.toggleClass('open');
    }
});

/* 右侧弹窗设置 */
$(function() {
	$('.dialog').hDialog({
		box: '#Hbox', //弹框默认选择器
		modalBg: 'rgba(0,0,0,0.5)', //遮罩默认背景颜色
		closeBg: '#cccccc', //弹框关闭按钮默认背景颜色
		width: 883, //弹框默认宽度 
		positions: 'right', //弹框位置(默认center：居中，top：顶部居中，left：顶部居左，bottom：底部居右)
		effect: 'fadeOutRight', //弹框关闭效果(结合animate.css里的动画，默认：zoomOut)
	});

});

/* bootstrap 分页 */
$('.pagination').twbsPagination({
	totalPages: 35,
	visiblePages: 1
});

/* 右侧弹窗tab js */
$('.right-alert-tabs_menu li:first-child').click(function() {
	$('.right-alert-tabs_menu li').removeClass('current');
	$(this).addClass('current');
	$('.right-alert_content').children().removeClass('current');
	$('.right-alert_content').children('.right-alert-content-main:first-child').addClass('current');
});

$('.right-alert-tabs_menu li:nth-child(2)').click(function() {
	$('.right-alert-tabs_menu li').removeClass('current');
	$(this).addClass('current');
	$('.right-alert_content').children().removeClass('current');
	$('.right-alert_content').children('.right-alert-content-main:nth-child(2)').addClass('current');
});

$('.right-alert-tabs_menu li:last-child').click(function() {
	$('.right-alert-tabs_menu li').removeClass('current');
	$(this).addClass('current');
	$('.right-alert_content').children().removeClass('current');
	$('.right-alert_content').children('.right-alert-content-main:last-child').addClass('current');
});
