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
		 $(".navbar .navbar-brand img") .attr("src","https://lh3.googleusercontent.com/6QTlJ-t8x1jInG9OlmA8PeXtj4gFtAj6T0HdRGyzCp__gDqPjiGUQik6uW9vxnrb8wkzBz8xLhlkvc7A4kbQ25zFpKhiPwECH-wJrhC5BewUkphEvRkjefYUh-NAw3Ckrv8zelboHByQr6kXkTuC4oX_XKH8kmlmOzzVb8hVZJVAqIZaqPmTLbVgwyo9iUyqCgSGXXbkugeYlwtOwUV4CaMcwJ2NI-iswkgFHCnZxAo06vI4SnAQG4Il4bNQtmHYX9nL4pdyRkCxYPFw7H_OeCC9u2vbqZiCtYACg38Rf7wpgd1YOexEPzxObOezKVwbwW8x4KuJRJ_Uwlb1QQj6_Y2EufyGjmA974J0wPyl4JIhIwrXp1-h_dQSzfurL8JXwzj63znXtF2ZXBg4hGniuUCofdgQDyJwXULo8xKDnvgDPiUBEjt4gVQBE-e06zPkZrtTbeaoSZa7yfUJO7j381SWOHrliglW4kFzLmeJWRIlK2LLrz7ozQashuRirycY3_eg1St5sLeo6jjGbuUxffPi5oXb3SIB47qafVqJ_Tn6nkNrpoKuPXA_Vb3Kmf6ZEjkvMj7JHeIPD5UynrNHLqgHVfF76vWH4wfnCGTWvP6cPPY9E3LdAY871DauCFbo1rPx3t4h--2dIUxA-qFsH1I4_kElLfdc-gAFt4dEbSQPjOcpzkXZtO8ls27bUBLzzTJ6jKGoq-N0CwXgBPz3YkA=s100-no");
	 }

	 else{
		$(".navbar .navbar-brand img") .attr("src","https://lh3.googleusercontent.com/zGd8bFiQ_PeyaVoaTpmrGSoxjYaL-FynpPQFgLSSXao8d4IbxhyTY-qLimrG1c_vfTna5KOTrrqg3WDMP7NwNlWj_d7AnPgSlX6o90lRghStqhb8V53dMugp8xU4MhzlNDh8mItHUUBToFiji10T3e_ESx8lEjHA5MW5tpCXm1E0sK6OYq5TNIs0OmOX3-1_pMRtVJ0BmEZZ02aGMgNIRTEgqMr2X4KVoReuQWYJi7hzaYN_Bhxb-sSNA-mjttpIkXRiJqoE7jpUdYp6h0eNxZ2WSZmkWuJ-9ORs81ugLTc29UyVesH_KUc-HufdxGjlXexumsJ7ESK9Cq8BLCRluLFnnXvRNZ83Pyb-X1VCE8YCrTfu92qvR0N72ITo0y8zT1hTgb_aiR-CkTKqdhtyzJYCuPifzYN8ATNfMpRSWh8Mf_U5_PwwVPDlBIMfzXKyzPWMaYjWahavOvlgRRmkJWd9A-ZHgYfVrIOpaXYT8RY9G7CSgVqUizE-ZM422gGfZCUfvkWimZWlvXsKRnUWgQo93_e0JCjsfrN6FYlRZkFnXEruraCtg5dmBJzMU1-ZdsIgLC10NApUWViUkL1bGDUy9DRZSHeoISsHBNB3x3tNLDGB410UZc5Mrf36y396GZ2hTtdWaeXviUOxeFuV9TwNJpCRdphEHV5LzepAp-0uOyMGuTDARpFPak5oaDQD2uNF4-l49rHjpR-WqU8WREA=s100-no");
                
	 }
	});
});
