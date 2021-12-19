

document.addEventListener("DOMContentLoaded", () =>{
    let main = document.getElementById('main_block')
    let grd = document.getElementById('anouncements')
    let hg = document.getElementById("header_grid")

    let load_bth = document.getElementById('load')

    load_bth.addEventListener("click", ()=>{
        fetch('anounsment.html').then(resp => resp.text()).then(res => {
            grd.insertAdjacentHTML('beforeend', res)
        })
    })

    fetch('anounsment.html')
        .then(resp => resp.text())
        .then(res=> {
            for(let i =0; i<4; i++)
                grd.insertAdjacentHTML('beforeend', res)
        })



    let sign_in_button = document.getElementById('sign_in')


    sign_in_button.addEventListener("click", () => {
        fetch('modal_signin.html').then(response => response.text()).then(value => {
            let md = new DOMParser().parseFromString(value, "text/html").getElementById('bg')
            document.getElementById('body').insertAdjacentElement('afterbegin',md)
            window.addEventListener('click', e =>  {
                if (!document.getElementById('sign_window').contains(e.target)) { //если клик вне элемента
                    md.remove()
                }
            });
        })
    })

    let sign_out_button = document.getElementById('sign_out')
    sign_out_button.addEventListener("click", () =>{
        fetch('modal_signout.html').then(response => response.text()).then(value => {
            let md = new DOMParser().parseFromString(value, "text/html").getElementById('bg')
            document.getElementById('body').insertAdjacentElement('afterbegin',md)
            window.addEventListener('click', e =>  {
                if (!document.getElementById('sign_window').contains(e.target)) { //если клик вне элемента
                    md.remove()
                }
            });
        })
    })

})