function fillTemplate() {
    var breadClass = document.getElementById("bread-class");
    breadClass.innerHTML = itemId.class;
  
    var breadActive = document.getElementById("breadcrumb-active");
    breadActive.innerHTML = itemId.name;
  
    var templateName = document.getElementById("temp-name");
    templateName.innerHTML = itemId.name;
  
    var templateMms = document.getElementById("mms");
    templateMms.innerHTML = itemId.count;
  
    var infoProducter = document.getElementById("info-producter-text");
    infoProducter.innerHTML = itemId.producter;
  
    var infoMnn = document.getElementById("info-mnn-text");
    infoMnn.innerHTML = itemId.mnn;
  
    var infoGroup = document.getElementById("info-group-text");
    infoGroup.innerHTML = itemId.group;
  
    var infoClass = document.getElementById("info-class-text");
    infoClass.innerHTML = itemId.class;
  
    var infoDescription = document.getElementById("info-description-text");
    infoDescription.innerHTML = itemId.description;
      
     var compound1 = document.getElementById('info-compound-text1');
     compound1.innerHTML = itemId.compound1;
  
    var compound2 = document.getElementById('info-compound-text2');
    compound2.innerHTML = itemId.compound2;
  
    var tempImage = document.getElementById('template-img');
     tempImage.setAttribute('src', itemId.img);
      
  
  var analogObjectsGroup = arrObjects.filter(item => item.group == itemId.group);
  analogObjectsGroup = analogObjectsGroup.filter(item => item.class == itemId.class);
  var analogObjectsClass = arrObjects.filter(item => item.class == itemId.class);
  
  var analogObjects = analogObjectsGroup.concat(analogObjectsClass);
  analogObjects = analogObjects.slice(0, 9);
  analogObjects = new Set(analogObjects);
  analogObjects = Array.from(analogObjects); // Массив с уникальными значениями, сначала идут препараты у которых схожи и класс и группа, а потом только со схожим классом

  console.log(analogObjects);
  var analogImage = document.getElementsByName('analog-img');
    for (var i = 0; i < analogImage.length; i++) {
      analogImage[i].src = analogObjects[i].img;
        };
  


  var analogName = document.getElementsByClassName('temp-name');
    for (var i = 0; i < analogName.length; i++) {
      analogName[i].innerHTML = analogObjects[i].name;
        };

  var analogMms = document.getElementsByClassName('mms');
    for (var i = 0; i < analogMms.length; i++) {
      analogMms[i].innerHTML = analogObjects[i].count;
        };

  var analogMnn = document.getElementsByClassName('info-mnn');
    for (var i = 0; i < analogMnn.length; i++) {
      analogMnn[i].innerHTML = analogObjects[i].mnn;
        };

  }
  
  fillTemplate();