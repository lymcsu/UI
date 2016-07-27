/*  placeholder兼容js  */
jQuery('[placeholder]').focus(function() {
  var input = jQuery(this);
  if (input.val() == input.attr('placeholder')) {
    input.val('');
    input.removeClass('placeholder');
  }
}).blur(function() {
  var input = jQuery(this);
  if (input.val() == '' || input.val() == input.attr('placeholder')) {
    input.addClass('placeholder');
    input.val(input.attr('placeholder'));
  }
}).blur().parents('form').submit(function() {
  jQuery(this).find('[placeholder]').each(function() {
    var input = jQuery(this);
    if (input.val() == input.attr('placeholder')) {
      input.val('');
    }
  })
});
/*  placeholder兼容js end  */


/*  dropdown、select打开ul js  */

$('body').click(function(e) {
    var _allFunction = $('.dropdown-body '); // 设置目标区域
    if (!_allFunction.is(e.target) && _allFunction.has(e.target).length === 0) { 
   	 	$('.dropdown-body').removeClass('open');
    } else {
    		$('.dropdown-body').toggleClass('open');
    }
    
    var _fastNewBuilt = $('.SpanSelect'); // 设置目标区域
    if (!_fastNewBuilt.is(e.target) && _fastNewBuilt.has(e.target).length === 0) { 
   	 	$('.SpanSelect').removeClass('open');
    } else {
    		$('.SpanSelect').toggleClass('open');
    }
    
    var _waitMeTask = $('.DeepColorSelect'); // 设置目标区域
    if (!_waitMeTask.is(e.target) && _waitMeTask.has(e.target).length === 0) { 
   	 	$('.DeepColorSelect').removeClass('open');
    } else {
    		$('.DeepColorSelect').toggleClass('open');
    }
});
/*  dropdown、select打开ul js end */

/*  select选中改变btn文本 js  */
$(function(){
	var	btnMenuChooseText = $('.select-menu li.choosed').text();
	$('.select-btn p').text(btnMenuChooseText);
})

$('.select-menu li').click(function(){
	$('.select-menu li').removeClass('choosed');
	$(this).addClass('choosed');
	var	btnMenuChooseText = $('.select-menu li.choosed').text();
	$('.select-btn p').text(btnMenuChooseText);
});
/*  select选中改变btn文本 js end */

/*  DeepColorselect选中改变btn文本 js  */
$(function(){
	var	btnMenuChooseText = $('.DeepColor-select-menu li.choosed').text();
	$('.DeepColor-select-btn p').text(btnMenuChooseText);
})

$('.DeepColor-select-menu li').click(function(){
	$('.DeepColor-select-menu li').removeClass('choosed');
	$(this).addClass('choosed');
	var	btnMenuChooseText = $('.DeepColor-select-menu li.choosed').text();
	$('.DeepColor-select-btn p').text(btnMenuChooseText);
});
/*  DeepColorselect选中改变btn文本 js end */

/* 分页 */
$('.pagination').twbsPagination({
	totalPages: 35,
	visiblePages: 1
});

/* 规则客户群树形第四级菜单提示tips */
$(function() {
	$('.tree-third-items + ul li span').tipso({
		width: 'auto',
		delay: null,
		position: 'right',
		background: '#4F555D',
		speed: 50
	});
});

/* 开关js */
$('.switches').not('.disabled').click(function(){
	$(this).toggleClass('open');
});

/* checkeboxes radiobuttons */
$('.radio-buttons').not('.disabled').click(function(){
	$('.demo-radiobuttons .radio-buttons').not('.disabled').removeClass('checked');
	$(this).addClass('checked');
});

$('.checked-box').not('.disabled').click(function(){
	$(this).toggleClass('checked');
});

$('.checked-box.all-checked-btn').click(function(){
	if ($('.checked-box.all-checked-btn').hasClass('checked')){
		$('.checked-box').not('.disabled').addClass('checked');
	} else {
		$('.checked-box').not('.disabled').removeClass('checked');
	}
});
