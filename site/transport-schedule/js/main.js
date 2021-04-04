$(document).ready(function() {
    // Годиник
	var pos = document.getElementById("time");

	function time() {
		var today = new Date();
		var hours_ = today.getHours();
		var min_ = today.getMinutes();
		var sec_ = today.getSeconds();
        var zeroh = "";
        var zerom =  "";
        var zeros = "";
        if(hours_ < 10) zeroh = '0';
        if(min_ < 10) zerom = '0';
        if(sec_ < 10) zeros = '0';
        var nowTime = zeroh + hours_ +':'+ zerom + min_;
        var displayTime = hours_ +':'+ zerom + min_;
        // console.log(nowTime);
        pos.innerHTML = displayTime + ':'+zeros+sec_;
        return nowTime;
	}
	setInterval(time, 1);

	var nowTimeHM = time();

    console.log(nowTimeHM);

    // Перебор графика
    var schedule = [];

    // debugger


    var tableItems = document.querySelectorAll( "table.so_ts_table" );
    var dataTimeItems;
    var currentTable;
    var counter;

    console.log(tableItems[4]);

    for (var y = 0; y < tableItems.length; y++) {
        counter = 0;
        console.log(y);
        currentTable = tableItems[y];
        console.log(tableItems[y]);

        dataTimeItems = currentTable.querySelectorAll( 'td[data-time]' );

        for (var i = 0; i < dataTimeItems.length; i++) {
            var tableTime = dataTimeItems[i].getAttribute("data-time");
            console.log(nowTimeHM);

            if (tableTime > nowTimeHM) {
                if (counter < 3 ){
                    counter++;
                    dataTimeItems[i].classList.add("mark_time_" + counter);
                    console.log(dataTimeItems[i].getAttribute("data-time"));
                }
            }
        }
    }

    function scrollTo( target ) {
        if( target.length ) {
            $("html, body").stop().animate( { scrollTop: target.offset().top }, 1000);
        }
    }

    $(".scroll-link").on("click", function(e) {
        e.preventDefault();
        var href = $(this).attr('href');
        scrollTo( $(href) );
    });
});
