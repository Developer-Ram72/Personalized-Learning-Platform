document.addEventListener('DOMContentLoaded', () => {
   const menu = document.getElementById('menuButton')
   const sideMenu = document.getElementById('sideMenu')

 const navItems = document.querySelectorAll('.nav-item')
      const content = document.getElementById('contentFrame')


menu.addEventListener('click', () => {
sideMenu.classList.toggle('visible')
})


navItems.forEach(item => {
item.addEventListener('click', (e) => {
        e.preventDefault()
navItems.forEach(nav => nav.classList.remove('active'))
             item.classList.add('active')

const page = item.dataset.page
content.src = `${page}.html`
sideMenu.classList.remove('visible')  
      })
        })  
    })
