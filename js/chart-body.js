$('.chart--btn li button.huo').click(function(){
	$('.chart-body').append("<div class='condition-content animated3 fadeIn'><button class='condition-btn'>或</button><button class='delete-condition'><i class='iconfont icon-delete'></i></button></div>");
});

$('.chart--btn li button.qie').click(function(){
	$('.chart-body').append("<div class='condition-content animated3 fadeIn'><button class='condition-btn'>且</button><button class='delete-condition'><i class='iconfont icon-delete'></i></button></div>");
});

$('.chart--btn li button.fei').click(function(){
	$('.chart-body').append("<div class='condition-content animated3 fadeIn'><button class='condition-btn'>非</button><button class='delete-condition'><i class='iconfont icon-delete'></i></button></div>");
});

$('.chart--btn li button.zuo').click(function(){
	$('.chart-body').append("<div class='condition-content animated3 fadeIn'><button class='condition-btn'>(</button><button class='delete-condition'><i class='iconfont icon-delete'></i></button></div>");
});

$('.chart--btn li button.you').click(function(){
	$('.chart-body').append("<div class='condition-content animated3 fadeIn'><button class='condition-btn'>)</button><button class='delete-condition'><i class='iconfont icon-delete'></i></button></div>");
});

$('body').on('click', '.delete-condition', function() {
    $(this).parent('.condition-content').remove();
});

$('body').on('click', '.delete-btn', function(){
	$('.chart-body').children(' .condition-content,.condition-content2').remove();
});


$('.tree_choose-alrte-div .ok-btn').click(function(){
	if ($('.tree_choose-alrte-div_body .col-1-2 li').hasClass('checked')){
		var spanText = $('#liuliangyunying .checked span').text();
		$('.chart-body').append("<div class='condition-content2 animated3 fadeIn'><span>"+ spanText +"</span><a class='delete-condition2'><i class='iconfont icon-close'></a></div>");
	}
});

$('body').on('click', '.delete-condition2', function() {
    $(this).parent('.condition-content2').remove();
});

$('.js-tabs-div2 .tabs_nav .tabs_nav-left button').click(function(){
	var name = $('.js-tabs-div2 .tabs_nav .tabs_nav-left input').val();
		tableTbody = $('.tabs_body-right-finish table tbody');
	tableTbody.append("<tr><th>"+ name +"</th><th class='operation'><button>修改</button> <button>估算</button> <button class='dlt'>删除</button></th></tr>");
});


$('body').on('click', '.tabs_body-right-finish table tbody .operation button.dlt', function() {
    $(this).parent('.operation').parent('tr').remove();
});
