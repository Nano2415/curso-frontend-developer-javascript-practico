const navEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector('.desktop-menu')
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const shoppingCartContainer= document.querySelector("#shoppingCartContainer")
const burguerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const cardsContainer = document.querySelector(".cards-container")
const productDetailontainer = document.querySelector("#productDetail")
const closet = document.querySelector(".product-detail-close")





navEmail.addEventListener('click',toggleDesktopMenu)
burguerMenu.addEventListener('click',toggleMobileMenu)
menuCarritoIcon.addEventListener('click',toggleCarritoAside)
closet.addEventListener('click',closeProductDetailAside,)




function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive')
        
    }
    desktopMenu.classList.toggle('inactive')

    const isProductDetail = productDetailontainer.classList.contains('inactive')

    if (!isProductDetail) {
        productDetailontainer.classList.add('inactive')
        
    }

}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive')
        
    }

    mobileMenu.classList.toggle('inactive')

    const isProductDetail = productDetailontainer.classList.contains('inactive')

    if (!isProductDetail) {
        productDetailontainer.classList.add('inactive')
        
    }

    
    
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


    shoppingCartContainer.classList.toggle('inactive')

    const isProductDetail = productDetailontainer.classList.contains('inactive')

    if (!isProductDetail) {
        productDetailontainer.classList.add('inactive')
        
    }
    
}


function openProductDetailAside() {
    productDetailontainer.classList.remove('inactive')

    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive')
        
    }
    //desktopMenu.classList.toggle('inactive')

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    
    if (!isDesktopMenuClosed) {
       desktopMenu.classList.add('inactive') 
    }

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
        
    }


   // shoppingCartContainer.classList.toggle('inactive')


    
}

function closeProductDetailAside() {
    productDetailontainer.classList.add('inactive')
    
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

    productImg.addEventListener('click',openProductDetailAside)

    function toggleShoppingCartContainer() {

        
    }

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