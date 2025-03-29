document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const contentFrame = document.getElementById('contentFrame');
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.querySelector('.sidebar');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');
            contentFrame.src = `${link.dataset.page}.html`;
        });
    });

    hamburger.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const updateStats = () => {
        //@ref api endpiont

        document.getElementById('totalVideosWatched').textContent = `${videos} Videos Watched`;
        document.getElementById('avgQuizScore').textContent = `${score}% Quiz Average`;
        document.getElementById('totalTopics').textContent = `${topics} Topics Covered`;
    };

    updateStats();
    setInterval(updateStats, 5000);
});
