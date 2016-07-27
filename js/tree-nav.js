/* 树形菜单js */
$(function(){
        $(".tree").treemenu({delay:300}).openActive();
   });

$('.tree-third-items').click(function(){
	$('.tree-third-items,.no-chirld').removeClass('active');
	$(this).addClass('active');
});

$('.no-chirld').click(function(){
	$('.no-chirld,.tree-third-items').removeClass('active');
	$(this).addClass('active');
});
