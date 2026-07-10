        function startLiveClock() {
    
            const now = new Date();
            
            const currentTime = now.toLocaleTimeString();
            
            document.getElementById('clock').textContent = currentTime;
        }

        startLiveClock();

        setInterval(startLiveClock, 1000);
