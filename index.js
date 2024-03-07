document.addEventListener("mousemove", parallax);
        function parallax(event) {
            this.querySelectorAll(".mouse").forEach((shift) => {
                const position = shift.getAttribute("value");
                const x = (window.innerWidth - event.pageX * position) / 80;
                const y = (window.innerHeight - event.pageY * position) / 80;
 
                shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
            });
        }