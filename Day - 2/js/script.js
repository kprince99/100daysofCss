	const event_start = document.querySelector("#box"); 
       const span = document.querySelector(".one"),
            span2 = document.querySelector(".two"),
            span3 = document.querySelector(".three");

	event_start.addEventListener("click", function()
    {

        span.classList.remove("no-animation");
        span2.classList.remove("no-animation");
        span3.classList.remove("no-animation");
        
        span.classList.toggle("active");
        span2.classList.toggle("active2");
        span3.classList.toggle("active3");    


    })