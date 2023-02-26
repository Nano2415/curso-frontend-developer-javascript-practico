const navEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector('.desktop-menu')
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product-detail")
const burguerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const cardsContainer = document.querySelector(".cards-container")



navEmail.addEventListener('click',toggleDesktopMenu)
burguerMenu.addEventListener('click',toggleMobileMenu)
menuCarritoIcon.addEventListener('click',toggleCarritoAside)


function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive')

    if (!isAsideClosed) {
        aside.classList.add('inactive')
        
    }
    desktopMenu.classList.toggle('inactive')

}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive')

    if (!isAsideClosed) {
        aside.classList.add('inactive')
        
    }

    mobileMenu.classList.toggle('inactive')
    
    
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    
    if (!isDesktopMenuClosed) {
       desktopMenu.classList.add('inactive') 
    }

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
        
    }


    aside.classList.toggle('inactive')
    
}

const productList = [];
productList.push({
    name: "Tv",
    price: 200,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});

productList.push({
    name: "compu",
    price: 650,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});

productList.push({
    name: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});

productList.push({
    name: "tlf",
    price: 250,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});

for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg= document.createElement('img');
    productImg.setAttribute('src', "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    
    const productInfoDiv = document.createElement('div')

    const productPrice = document.createElement('p')
     productPrice.innerHTML = '$' + product.price
    const productName = document.createElement('p')
    productName.innerHTML = product.name

    productInfoDiv.append(productPrice,productName)

    const productInfoFigure = document.createElement('figure')
    const productImgCard = document.createElement('img')
     productImgCard.setAttribute('src',"./icons/bt_add_to_cart.svg")


     productInfoFigure.appendChild(productImgCard)

     productInfo.append(productInfoDiv,productInfoFigure)

    productCard.append(productImg,productInfo)

    cardsContainer.appendChild(productCard)

   


}