const tabs = document.getElementsByClassName('tab-link')
// console.log(tabs)

const articles = document.getElementsByClassName('tab-content')
// console.log(articles);

tabs[0].classList.add('tab-link--active')
articles[0].classList.add('tab-content--active')

for(let i = 0; i < tabs.length; i++)  {
    tabs[i].addEventListener('click', () => {
        for (let tab of tabs) {
            tab.classList.remove('tab-link--active')
        }
        for (let art of articles) {
            art.classList.remove('tab-content--active')
        }
        tabs[i].classList.add('tab-link--active')
        articles[i].classList.add('tab-content--active')
    })
}
const worksLinks = document.getElementsByClassName('works-link')
// console.log(worksLinks)
for(let i = 0; i < worksLinks.length; i++) {
    worksLinks[i].addEventListener('click', () => {
        for (let tab of tabs) {
            tab.classList.remove('tab-link--active')
        }
        for (let art of articles) {
            art.classList.remove('tab-content--active')
        }
        tabs[i].classList.add('tab-link--active')
        articles[i].classList.add('tab-content--active')
    
    })
}
