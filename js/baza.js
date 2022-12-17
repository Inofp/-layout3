const arrObjects = [
  {
    name: "Супрастин",
    type: "лекарство",
    disease: "аллергия",
    group: "Аптечка в отпуск",
    mnn: "Хлоропирамин",
    count: "ТАБ. 25МГ №20",
    class: "Противоаллергенные препараты",
    img: "/img/shop_images/13894_1527245715.5746.jpg",
    producter: "Эгис ФЗ ОАО",
        compound1: "активные вещества: хлоропирамина гидрохлорида - 25 мг;",
        compound2: "вспомогательные вещества: стеариновая кислота, желатин, натрия карбоксиметил крахмал (тип А), тальк, крахмал картофельный, лактозы моногидрат (116 мг).",

    description:
      "Хлоропирамин — хлорированный аналог трипеленамина (пирибензамина) — классический антигистаминный препарат, принадлежащий к группе этилендиаминовых антигистаминных препаратов.",
  },
  {
    name: "КЛАРИТИН",
    type: "лекарство",
    disease: "аллергия",
    group: "Антигистаминные",
    mnn: "ЛОРАТАДИН",
    count: "ТАБ. 10МГ №30",
    class: "Противоаллергенные препараты",
    img: "/img/shop_images/6544_1527245799.5597.jpeg",
    producter: "Байер ЗАО/пр.Шеринг-Плау Лабо Н.В.",
        compound1: "активное вещество: лоратадин 10 мг;",
        compound2: "вспомогательные вещества: лактозы моногидрат 71,3 мг, крахмал кукурузный 18 мг, магния стеарат 0,7 мг.",
        
    description:
      "Хлоропирамин — хлорированный аналог трипеленамина (пирибензамина) — классический антигистаминный препарат, принадлежащий к группе этилендиаминовых антигистаминных препаратов.",
  },
];

const url = window.location.href;
const pageId = parseInt(url.substring(url.indexOf("=") + 1));
const item = arrObjects[pageId]; // current item

function fillTemplate() {
  var breadClass = document.getElementById("bread-class");
  breadClass.innerHTML = item.class;

  var breadActive = document.getElementById("breadcrumb-active");
  breadActive.innerHTML = item.name;

  var templateName = document.getElementById("temp-name");
  templateName.innerHTML = item.name;

  var templateMms = document.getElementById("mms");
  templateMms.innerHTML = item.count;

  var infoProducter = document.getElementById("info-producter-text");
  infoProducter.innerHTML = item.producter;

  var infoMnn = document.getElementById("info-mnn-text");
  infoMnn.innerHTML = item.mnn;

  var infoGroup = document.getElementById("info-group-text");
  infoGroup.innerHTML = item.group;

  var infoClass = document.getElementById("info-class-text");
  infoClass.innerHTML = item.class;

  var infoDescription = document.getElementById("info-description-text");
    infoDescription.innerHTML = item.description;
    
    var compound1 = document.getElementById('info-compound-text1');
    compound1.innerHTML = item.compound1;

    var compound2 = document.getElementById('info-compound-text2');
    compound2.innerHTML = item.compound2;

    var tempImage = document.getElementById('template-img');
    tempImage.setAttribute('src', item.img);
}

fillTemplate();
