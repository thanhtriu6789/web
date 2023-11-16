var btnBrand = document.querySelectorAll(".btn_brand");
var itemBox = document.querySelectorAll(".item_box");

btnBrand.forEach(btn=>{
    btn.addEventListener("click", e=>{
        let btnType = e.currentTarget.getAttribute('type')

        itemBox.forEach(item=>{
            let itemType = item.getAttribute('type')

            if ( btnType == itemType ) {
                item.classList.remove('hide')
            } else {
                item.classList.add('hide')
            }
        })
    })
})