const colorSwitcher = () => {
    const body = document.querySelector('body')
    if(body.classList.contains('dark')){
        body.classList.remove('dark')
        localStorage.removeItem('class', 'dark')
    }else{
        body.classList.add('dark')
        localStorage.setItem('class', 'dark')
    }

    
}


export default (colorSwitcher)