query = url.substring(url.indexOf("=") + 1);
var itemObjects = arrObjects.filter(item => item.disease == query);

function fillCatalog() {
    var breadcrumbActive = document.getElementsByName('item-name-active');

    breadcrumbActive.forEach(element => {
        element.innerHTML = itemObjects[0].class;
    }); // два элемента меняет, поэтому цикл

    var katalogItemGroup = document.getElementsByClassName('katalog-item-group');

    for (var i = 0; i < katalogItemGroup.length; i++) {
        katalogItemGroup[i].innerHTML = itemObjects[i].class;
    };

    var katalogItemName = document.getElementsByClassName('katalog-item-name');

    for (var i = 0; i < katalogItemName.length; i++) {
        katalogItemName[i].innerHTML = itemObjects[i].name;
    };

    var katalogItemCount = document.getElementsByClassName('katalog-item-count');

    for (var i = 0; i < katalogItemCount.length; i++) {
        katalogItemCount[i].innerHTML = itemObjects[i].count;
    };
    
    var katalogItemProducter = document.getElementsByClassName('katalog-item-producter');

    for (var i = 0; i < katalogItemProducter.length; i++) {
        katalogItemProducter[i].innerHTML = itemObjects[i].producter;
    };

    var katalogItemImage = document.getElementsByClassName('katalog-img');
    for (var i = 0; i < katalogItemImage.length; i++) {
        var itemUrlImg = itemObjects[i].img;
        katalogItemImage[i].src = itemUrlImg;
    };

    // /template.html?id=0
    var katalogLinkImg = document.getElementsByName('link-to-template-img');
    for (var i = 0; i < katalogLinkImg.length; i++) {
        katalogLinkImg[i].href = `/template.html?category=${query}&id=${i}`;
    };

    var katalogLink = document.getElementsByName('link-to-template');
    for (var i = 0; i < katalogLink.length; i++) {
        katalogLink[i].href = `/template.html?category=${query}&id=${i}`;
    };

}

fillCatalog();