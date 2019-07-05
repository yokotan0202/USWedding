//Page Loading//
function hideLoader() {
    $('#loading').hide();
}
$(window).ready(hideLoader);
setTimeout(hideLoader, 20 * 1000);

//NavBar Scrolled Effect//
$(function(){
	$(document).scroll(function(){
		let $nav = $(".navbar-default");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});

//NavBar Scrolled Logo Change Effect//
$(function(){
	$(window).scroll(function(){
	 if($(this).scrollTop()>5){
		 $(".navbar .navbar-brand img") .attr("src","https://previews.dropbox.com/p/thumb/AAdaadUAcljc9iwqX1qEfDxX4thNn6E1a732UgwPQD6zTnhwMss7l7BUuggb5FTgIQbof0fcyE4eoPxt0xYXkk7jIL7DECbibcM-kmfBi4-17hh0dn0kQiRxVUPHPwhDL214yLcxjtLKJM7Rt9d53rSw9Pc3y0mf3f1bSsArvPa2yRF0CrPu6hHDxk4iL4oTdrUNvpP4-Milofjmu-VeObD-YCr0JKv-s9c2F6joZhU-qPo6p2RXrwtlfSVPAn2tw9bnO1gilTKX-fH2vSuQKnLKQKHSJh65yAcF4vGQN7fGtrCi5jyk_ClrhRY5_Sy730i4-lxrm35i-gRcQz42NUGI/p.png?fv_content=true&size_mode=5");
	 }

	 else{
		$(".navbar .navbar-brand img") .attr("src","https://previews.dropbox.com/p/thumb/AAfsk3QFuavQDNC0zye4T1FEanjAPr0Ti3kwjSgsT9RILniNJbBI0I_70MvuQmaGzVq93glVkPRVs6Ovj7El56t8HBQCzPGyw2i-r9o2Ts1kIuqKibqTbro0LEjab1k7oZS6QYjQXtkAGp2KXByxkguvnh944e3CxNm1rWv6h5pBlB4u8rcpgmgCu1w6h2N1Bpx6NjmanGc3Ca4djtijfdQrdoLWbhzCKL4AKacRCZFpgu7mCD6YgpJNZT1sfKJ1AzwkmbY-sJ5DP3UCnp9qENkllLiaJG4JvHYL9gej5Jc_IVATD-gYS17thZYdvVII9xvZ0IMOyQRVhX0OZjVBjJXx/p.png?fv_content=true&size_mode=5");
                
	 }
	});
});
