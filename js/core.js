$('.primary-nav-items').click(function(){
	$('.primary-nav-items').removeClass('active');
	$(this).addClass('active');
});

$('.primary-nav-items').not('#index-fold-2').click(function(){
	$('.viewFramework-sidebar2').show();
	$('body').removeClass('fold2');
	$('body').addClass('open2');
});

$('#index-fold-2').click(function(){
	$('.viewFramework-sidebar2').hide();
	$('.viewFramework-sidebar2-items li').removeClass('open');
	$('.iframepage').attr("src","index.html");
	$('body').removeClass('open2');
});

$('#wdyx').click(function(){
	$('.viewFramework-sidebar2-items').hide();
	$('.viewFramework-sidebar2 .wdyx').show();
});

$('#yxys').click(function(){
	$('.viewFramework-sidebar2-items').hide();
	$('.viewFramework-sidebar2 .yxys').show();
});

$('#yxch').click(function(){
	$('.viewFramework-sidebar2-items').hide();
	$('.viewFramework-sidebar2 .yxch').show();
	$('.iframepage').attr("src","wdyx.html");
});

$('#zsk').click(function(){
	$('.viewFramework-sidebar2-items').hide();
	$('.viewFramework-sidebar2 .zsk').show();
	$('.iframepage').attr("src","wdyx.html");
});

$('#zxkz').click(function(){
	$('.viewFramework-sidebar2-items').hide();
	$('.viewFramework-sidebar2 .zxkz').show();
	$('.iframepage').attr("src","wdyx.html");
});

$('#yxfx').click(function(){
	$('.viewFramework-sidebar2-items').hide();
	$('.viewFramework-sidebar2 .yxfx').show();
	$('.iframepage').attr("src","wdyx.html");
});

$('#xthtgl').click(function(){
	$('.viewFramework-sidebar2-items').hide();
	$('.viewFramework-sidebar2 .xthtgl').show();
	$('.iframepage').attr("src","wdyx.html");
});

$('.viewFramework-sidebar2-items li').click(function(){
	$(this).parent().children('li').removeClass('open');
	$(this).addClass('open');
});

$('.sponsor-acrivity-link').click(function(){
	$('.iframepage').attr("src","sponsor-activity.html");
});

$('.mbkhq-link').click(function(){
	$('.iframepage').attr("src","mbkhq.html");
});

$('.yxskzb-link').click(function(){
	$('.iframepage').attr("src","yxskzb.html");
	$('body').addClass('fold fold2');
});


/* 左侧边栏隐藏 */
$('.sidebar-fold').click(function(){
	$('body').toggleClass('fold');
});

$('.sidebar-fold2').click(function(){
	$('body').toggleClass('fold2');
});


$(function() {
	/* 左侧边栏隐藏后提示tips */
	$('.nav-icon span').tipso({
		width: 'auto',
		delay: null,
		position: 'right',
		background: '#4F555D',
		speed: 50
	});
});

$('body').click(function(e) {
    var _allFunction = $('.all-function '); // 设置目标区域
    if (!_allFunction.is(e.target) && _allFunction.has(e.target).length === 0) { 
   	 	$('.all-function').removeClass('open');
    } else {
    		$('.all-function').toggleClass('open');
    }
    
    var _fastNewBuilt = $('.fast-new-built'); // 设置目标区域
    if (!_fastNewBuilt.is(e.target) && _fastNewBuilt.has(e.target).length === 0) { 
   	 	$('.fast-new-built').removeClass('open');
    } else {
    		$('.fast-new-built').toggleClass('open');
    }
    
    var _waitMeTask = $('.wait-me-task'); // 设置目标区域
    if (!_waitMeTask.is(e.target) && _waitMeTask.has(e.target).length === 0) { 
   	 	$('.wait-me-task').removeClass('open');
    } else {
    		$('.wait-me-task').toggleClass('open');
    }
    
    var _userProfile = $('.user-profile'); // 设置目标区域
    if (!_userProfile.is(e.target) && _userProfile.has(e.target).length === 0) { 
   	 	$('.user-profile').removeClass('open');
    } else {
    		$('.user-profile').toggleClass('open');
    }
});
 
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