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

$('body').on('click', '.delete-condition', function() {
    $(this).parent('.condition-content').remove();
});

$('body').on('click', '.delete-condition2', function() {
    $(this).parent('.condition-content2').remove();
});

/* 树形菜单js */
$('.tree').on('click', '.tree-primary-items,.tree-secondary-items', function() {
    $(this).toggleClass('open');//三级菜单添加open
	$(this).parent().children('ul').slideToggle('fast');//兄弟元素ul 打开
});

//三级菜单有四级菜单点击事件
$('.tree').on('click', '.tree-third-items.have-chirld', function() {
    $(this).toggleClass('active');//点击添加active
    $(this).parent().children('ul').slideToggle('fast');//兄弟元素ul 打开
});

//三级菜单没有四级菜单点击事件
$('#new-rule-customer-base .tree .tree-third-items.no-chirld').click(function(){
	$('#new-rule-customer-base .tree .tree-third-items,.no-chirld').removeClass('active');//三级菜单没有四级菜单的移除class active
	$(this).addClass('active');//点击的这个添加active
});

//三级菜单没有四级菜单点击事件
$('#customer-base-control .tree .tree-third-items.no-chirld').click(function(){
	$('#customer-base-control .tree .tree-third-items,.no-chirld').removeClass('active');//三级菜单没有四级菜单的移除class active
	$(this).addClass('active');//点击的这个添加active
});

$('.viewFramework-main .tree-third-items').click(function(){
	$('.viewFramework-main .tree-third-items').removeClass('active');//三级菜单没有四级菜单的移除class active
	$(this).addClass('active');//点击的这个添加active
});

$('.special-tree').on('click','.special-tree-btn',function(){
	$(this).toggleClass('open');
	$(this).siblings('ul').slideToggle();
})
