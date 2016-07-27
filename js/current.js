$('input,textarea').not('input.ipt.form-control.gotoPageNo').bind('input propertychange change', function() {
	var inputVal = $(this).val();
	$input = $(this);
	$placeholder = $(this).parent().children('.placeholder');
	if(inputVal == "") {
		$placeholder.show();
	} else {
		$placeholder.hide();
	}
});

$('.choose-phone-number input').keyup(function() {
	var c = $(this);
	if(/[^\d]/.test(c.val())) {
		var temp_amount = c.val().replace(/[^\d]/g, '');
		$(this).val(temp_amount);
	};
});

$('input.ipt.form-control.gotoPageNo').keyup(function() {
	var c = $(this);
	if(/[^\d]/.test(c.val())) {
		var temp_amount = c.val().replace(/[^\d]/g, '');
		$(this).val(temp_amount);
	};

	if(c.val() > 35 || c.val() < 1) {
		c.css({
			"border-color": "#E85F5C",
			"color": "#E85F5C"
		});
		$(this).parent().next('.page-tips').show();
	} else {
		c.css({
			"border-color": "#24AC7E",
			"color": "#555"
		});
		$(this).parent().next(".page-tips").hide();
	};
});

$('input.ipt.form-control.gotoPageNo').blur(function() {
	var c = $(this);
	if(c.val().length <= 0) {
		c.css({
			"border-color": "#CCC",
			"color": "#555"
		});
		$(this).parent().next(".page-tips").hide();
	}
});

$('.search-phoneNum').keyup(function() {
	var c = $(this);
	if(/[^\d]/.test(c.val())) {
		var temp_amount = c.val().replace(/[^\d]/g, '');
		$(this).val(temp_amount);
	};
});

$('.tree-secondary-items_search button').click(function() {
	var inputVal = $('.tree-secondary-items_search input').val();
	$('span.tree-third-items').each(function() {
		if(inputVal === $(this).text()) {
			$('span.tree-third-items').removeClass('active');
			$(this).addClass('active');
			$(this).parent('li').parent('ul').addClass('open');
		}
	});
});

$('.tree-secondary-items_search input').keydown(function(e) {
	if(e.keyCode == 13) {
		var inputVal = $('.tree-secondary-items_search input').val();
		$('span.tree-third-items').each(function() {
			if(inputVal === $(this).text()) {
				$('span.tree-third-items').removeClass('active');
				$(this).addClass('active');
				$(this).parent('li').parent('ul').addClass('open');
			}
		});
	}
});

$('body').on('click', '.right-alert-closeBg,.right-alert-closeBtn', function() {
	$('.right-alert').animate({
		marginRight: "-875px",
	}, 300).fadeOut();
});

$(function() {
	$('.date_selector').on('click',function(e) {
		e.stopPropagation();
	});
});

$('body').click(function(e) {
    var _fastNewBuilt = $('.fast-new-built'); // 设置目标区域
    // 防止点击ifarme，无法获取父窗口对象
    _fastNewBuilt = _fastNewBuilt.length > 0 ? _fastNewBuilt : parent.$('.fast-new-built'); 
    if (!_fastNewBuilt.is(e.target) && _fastNewBuilt.has(e.target).length === 0) { 
   	 	_fastNewBuilt.removeClass('open');
    } else {
    		_fastNewBuilt.toggleClass('open');
    }
    
    var _waitMeTask = $('.wait-me-task'); // 设置目标区域
    // 防止点击ifarme，无法获取父窗口对象
    _waitMeTask = _waitMeTask.length > 0 ? _waitMeTask : parent.$('.wait-me-task'); 
    if (!_waitMeTask.is(e.target) && _waitMeTask.has(e.target).length === 0) { 
   	 	_waitMeTask.removeClass('open');
    } else {
    		_waitMeTask.toggleClass('open');
    }
    
    var _userProfile = $('.user-profile'); // 设置目标区域
    // 防止点击ifarme，无法获取父窗口对象
    _userProfile =_userProfile.length > 0 ? _userProfile : parent.$('.user-profile'); 
    if (!_userProfile.is(e.target) && _userProfile.has(e.target).length === 0) { 
   	 	_userProfile.removeClass('open');
    } else {
    		_userProfile.toggleClass('open');
    }
    
    var _myCollect = $('.my-collect'); // 设置目标区域
    // 防止点击ifarme，无法获取父窗口对象
    _myCollect =_myCollect.length > 0 ? _myCollect : parent.$('.user-profile'); 
    if (!_myCollect.is(e.target) && _myCollect.has(e.target).length === 0) { 
   	 	_myCollect.removeClass('open');
    } else {
    		_myCollect.toggleClass('open');
    }
});