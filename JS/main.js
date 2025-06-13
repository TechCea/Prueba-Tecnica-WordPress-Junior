document.addEventListener('DOMContentLoaded', function() {
        const toggle = document.getElementById('theme-toggle');
        const icon = toggle.querySelector('i');
        
    
        let currentIndex = 0;
        let timer;
        let isLightMode = false;
    
        function toggleTheme(event) {
            event.preventDefault();
            document.documentElement.classList.toggle('light-mode');
            isLightMode = document.documentElement.classList.contains('light-mode');
    
            if (isLightMode) {
                icon.classList.remove('bx-moon');
                icon.classList.add('bx-sun');
                toggle.setAttribute('data-label', 'Modo Claro');
                localStorage.setItem('theme', 'light');
            } else {
                icon.classList.remove('bx-sun');
                icon.classList.add('bx-moon');
                toggle.setAttribute('data-label', 'Modo Noche');
                localStorage.setItem('theme', 'dark');
            }

        }
    
        // Recuperar el tema del localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.documentElement.classList.add('light-mode');
            isLightMode = true;
            icon.classList.remove('bx-moon');
            icon.classList.add('bx-sun');
            toggle.setAttribute('data-label', 'Modo Claro');
        } else {
            document.documentElement.classList.remove('light-mode');
            isLightMode = false;
            icon.classList.remove('bx-sun');
            icon.classList.add('bx-moon');
            toggle.setAttribute('data-label', 'Modo Noche');
        }
    
        toggle.addEventListener('click', toggleTheme);
    });