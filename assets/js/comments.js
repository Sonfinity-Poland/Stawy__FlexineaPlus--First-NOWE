// COUNTDOWN TO MIDNIGHT

function calculateHMSleft() {
  //calculate
  var now = new Date();
  var hoursleft = 23 - now.getHours();
  var minutesleft = 59 - now.getMinutes();
  var secondsleft = 59 - now.getSeconds();

  //format 0 prefixes
  if (minutesleft < 10) minutesleft = "0" + minutesleft;
  if (secondsleft < 10) secondsleft = "0" + secondsleft;

  //display
  $("#HMSremaining").html(
    hoursleft + " h " + minutesleft + " m " + secondsleft + " s"
  );
}

calculateHMSleft();
setInterval(calculateHMSleft, 1000);

// Promocja ważna do dzisiaj

// var today = new Date();
// var dd = String(today.getDate()).padStart(2, "0");
// var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
// var yyyy = today.getFullYear();

// today = mm + "/" + dd + "/" + yyyy;
// document.write(today);

// komentarze

var commentsJSON = [
  {
    nick: "Piotrek",
    date: "15 minut temu",
    content:
      "a mowi się że polacy nie odnosza sukcesow na skale swiatowa. wspaniałe osiągnięcie. Brawa dla naszego rodaka",
    likes: 23,
    hasLiked: false,
  },
  {
    nick: "Kasia",
    date: "35 minut temu",
    content:
      "ja skorzystalam z tych kapsułek, kosztowało tak mało pieniedzy, że szkoda by było nie spróbować. a kolano już nie boli i przestało chrupać i trzeszczeć! czuje się jak nowonarodzona. polecam z calego serca, a dla niedowiarków wrzucam zdj mojego zdrowiutkiego kolana 😁 😁 😁",
    likes: 0,
    pict: "kasia1",
    pict2: "kasia2",
    hasLiked: false,
  },
  {
    nick: "Mamita",
    date: "45 minut temu",
    content:
      "ja też stosowałam na odcinek szyjny kregoslupa oraz nadgarstki, minął ból jak ręką odjął – po pół roku specjalnych masaży i zabiegów które nic nie skutkowały!!!!!!! nie traćcie czasu tylko zastosujcie formułę profesora",
    likes: 3,
    hasLiked: false,
  },
  {
    nick: "Janinka",
    date: "1 godzinę temu",
    content:
      "wow. Właśnie wertowałam portale w poszukiwaniu czegoś dobrego na zapalenie i obrzęk stawów. Już kolejny portal, gdzie opisują tą kurację, muszę to mieć :)",
    likes: 3,
    hasLiked: false,
    answers: [
      {
        nick: "Patiii13",
        date: "1 godzinę temu",
        content:
          "<b>@Janinka</b> kup koniecznie, tym bardziej że teraz jest promocja. Ja już mam to cudo, zobaczymy jak działa ",
        likes: 3,
        hasLiked: false,
        pict: "6",
      },
    ],
  },
  {
    nick: "Stanisław Kuc",
    date: "3 godziny temu",
    content:
      "Szanowni. Wypowiem się, ponieważ męczyłem się z bolącymi plecami przez prawie 6 lat. Lata pracy w branży produkcyjnej na stojąco zrobiły swoje. Na różne środki, opaski i inne cuda wydalem w sumie ponad 7 tysięcy zł, co i tak nie jest dużo, chociaz jak na emeryture przeciętnego kowalskiego to sami panstwo rozumiecie. I żadne proszki nie pomogły, tylko dostałem problemów z żołądkiem. Tak samo te niby opaski magntyczne, naciąganie ludzi na ciezkie pieniadze, o kant dupy to potłuc! A trzy tygodnie temu dostałem od syna ten preparat i aż sam się zdziwilem. Zacząłem łykać i bol minął. Trzasków nie ma, normalnie się ruszam, plecy w ogóle mnie nie bolą. nie wiem czy to na kazdego dziala, na mnie zadzialalo!warto, abyście sprobowali",
    likes: 3,
    hasLiked: false,
  },
  {
    nick: "Motorower",
    date: "5 godzin temu",
    content:
      "Też jestem po kuracji Flexinea+ i świetnie na tym wyszedłem. Używam dopiero od dwóch tygodni, ale już zapomniałem o bólu i nie sądzę że wróci. Wreszcie mogę życ jak normalny człowiek",
    likes: 2,
    hasLiked: false,
    pict: "comment02",
    pict2: "comment02-1",
  },
  {
    nick: "KatePODŁOGA",
    date: "8 godzin temu",
    content:
      "Właśnie przyszło! Jezu, jaram się! Oby w końcu coś zadziałało na moje halluksy! Trzymajcie kciuki kochani!",
    likes: 9,
    hasLiked: false,
  },
  {
    nick: "Marianna Strzelak",
    date: "16 godzin temu",
    content:
      "wchodzac na te strone nie spodziewalam się ze takie cuda wyczytam. Muszę mieć tą kurację w takim razie. Mam już dość okropnego bólu biodra i kolan. Wreszcie się go pozbędę-wspaniale!",
    likes: 5,
    hasLiked: false,
    answers: [
      {
        nick: "Zofia",
        date: "2 godziny temu",
        content:
          "<b>@Marianna Strzelak</b> to faktycznie działa, moje bóle kręgosłupy minęły jak ręką odjął, a ortopeda był zdziwiony, że po rwie kulszowej nie ma ani śladu! Polecam wszystkim!",
        likes: 5,
        hasLiked: false,
        pict: "comment04",
      },
    ],
  },
  {
    nick: "SZALoooNAJolAXXX",
    date: "16 godzin temu",
    content:
      "Stosuję od tygodnia i czuje się swietnie, wielka ulga... nie mam żadnych efektów ubocznych, reakcji alergicznych... jest to najlepsze co mogło mnie spotkać… tyle pieniędzy zmarnowałam na różne wizyty i zabiegi, teraz nie potrzebuję niczego",
    likes: 12,
    hasLiked: false,
  },
  {
    nick: "MESSSI",
    date: "1 dzień temu",
    content:
      "Zamówiłem Flexinea+, bo chcę pozbyć się bólu kręgosłupa. Będę ojcem, więc muszę mieć siłę i mam w końcu motywację, by coś z tym bólem zrobić. Efekt – mega! Ból ustąpił po dobie, nie mogę doczekać się końca kuracji.",
    likes: 2,
    hasLiked: false,
    pict: "comment03-1",
    pict2: "comment03",
  },
  {
    nick: "Paola",
    date: "2 dni temu",
    content:
      "Kiedyś nabawiłam się kontuzji barku, nawet miałam operację, ale niestety do dziś szwankuje. Zamówiłam te kapsułki i od razu poskutkowało, nie ma żadnego bólu, to już 2 tydzień, więc zakres ruchu jest większy. Polecam wszystkim!",
    likes: 0,
    hasLiked: false,
  },
  {
    nick: "Sówka_Z_Malinówka",
    date: "2 dni temu",
    content:
      "Moja mama jest już w podeszłym wieku więc mam pytanie do państwa co stosowali, ile macie lat, czy są tu jakieś osoby w podeszłym wieku 77 lat lub ich rodzina/znajomi? Chcę wiedzieć czy dla mamy jest jakaś szansa. bardzo jej współczuję i martwię się. Proszę o odpowiedź.",
    likes: 0,
    hasLiked: false,
    answers: [
      {
        nick: "Dawid",
        date: "1 dzień temu",
        content:
          "<b>@Sówka_Z_Malinówka</b> odkąd się dowiedziałem o tej kuracji to zacząłem stosować na kręgosłup,pomogło mi więc sprezentowałem tacie, a ma 84 lata więc wiadomo ledwo łaził. A tak mu się poprawiło że założył mamy kapelusz i szlafrok i zaczął tańczyć hehe Więc polecam też tobie i twojej mamie",
        likes: 0,
        hasLiked: false,
      },
      {
        nick: "Sówka_Z_Malinówka",
        date: "3 godziny temu",
        content:
          "<b>@Dawid</b> dziękuję Ci bardzo serdecznie za odpowiedź. w takim razie podaruję mamie tą kurację. Zdrowia dla ciebie i dla taty!",
        likes: 0,
        hasLiked: false,
      },
    ],
  },
  {
    nick: "Stanisława Nowak",
    date: "2 dni temu",
    content:
      "Tez brałam, po operacji na kolano, ból minął w mig, kupujcie póki jest! 😊",
    likes: 0,
    hasLiked: false,
  },
  {
    nick: "Oluuusia99",
    date: "3 dni temu",
    content:
      "najcetniej od razu bym skorzystała,ale mam obawy, czy to na pewno działa. Wydałam już wystarczojąco na nieskuteczne sposoby",
    likes: 0,
    hasLiked: false,
    answers: [
      {
        nick: "Natka",
        date: "1 dzień temu",
        content:
          "<b>@Ola</b> nie masz czego się obawiać, cała moja rodzina to bierze i wszyscy się dobrze czujemy. Mi pomogło na kolano, mojej mamie na biodra, tobie też pewnie pomoże. Spróbuj!",
        likes: 0,
        hasLiked: false,
        pict: "comment05",
        pict2: "comment05-1",
      },
      {
        nick: "Oluuusia99",
        date: "5 godzin temu",
        content:
          "<b>@Natalia</b> a!! właśnie przeczytalam ze na tę kuracje przysługuje Europejska Gwarancja Najwyższej Jakości, w takim razie nie ma obaw. Przekonam się na wlasnej skorze,oby mi pomogło :)",
        likes: 0,
        hasLiked: false,
      },
    ],
  },
  {
    nick: "Roberto Carlos",
    date: "3 dni temu",
    content:
      "Mój brat polecił mi te naturalne kapsułki. Dostałem paczkę w przeciągu 3 dni. Jak na razie rezultaty są oszałamiające – ból pleców minął, a ja z każdym dniem czuję się lepiej! Nie mogę się już doczekać końca!",
    likes: 0,
    hasLiked: false,
  },
  {
    nick: "Filip",
    date: "3 dni temu",
    content:
      "właśnie czekam na przesyłkę z kuracją, niedługo napiszę o efektach",
    likes: 0,
    hasLiked: false,
  },
];

$(document).ready(function () {
  (mockComments = commentsJSON),
    (months = [
      "styczeń",
      "luty",
      "marzec",
      "kwiecień",
      "maj",
      "czerwiec",
      "lipiec",
      "sierpień",
      "wrzesień",
      "październik",
      "listopad",
      "grudzień",
    ]),
    (renderer = $("#cmt-user")),
    (render = $("#cmt-render")),
    (arrayOfUserComments = []),
    (renderedStr = "");
  checkForUserComments();
  renderMockCommetns();
});

function getCurrentDate() {
  var iDO = new Date();
  var dateStr =
    iDO.getDate() +
    " " +
    months[iDO.getMonth()] +
    " " +
    iDO.getFullYear() +
    " o " +
    iDO.getHours() +
    ":" +
    iDO.getMinutes();
  return dateStr;
}

function checkForUserComments() {
  if (localStorage.getItem("comments") != null) {
    arrayOfUserComments = JSON.parse(localStorage.getItem("comments"));
    renderComments();
  }
}

function composeCommentNode(commentObj) {
  var commentEl = document.createElement("div");
  commentEl.classList.add("comment");
  commentEl.classList.add("mt-0");

  var cmtLeft = document.createElement("div");
  cmtLeft.classList.add("cmt-img");
  cmtLeft.innerHTML = '<img src="assets/img/default.jpg" alt="Default">';

  var buttonsSpan = document.createElement("div");
  buttonsSpan.classList.add("cmt-buttons");
  buttonsSpan.innerHTML =
    '<span class="like-btn">Lubię to</span>\n            <svg width="18px" height="18px" style="margin-top: -4px;" viewBox="0 0 543 451" version="1.1" xmlns="http://www.w3.org/2000/svg">\n                <path fill="#30418f" stroke="#30418f" stroke-width="0.09375" opacity="1.00" d=" M 289.9 45.9 C 292.5 44.9 295.3 45.0 298.0 44.9 C 313.7 45.1 329.4 45.0 345.0 45.0 C 350.1 44.6 355.1 48.8 355.0 54.0 C 355.2 64.3 354.8 74.7 355.1 85.0 C 355.5 91.7 352.8 98.0 351.2 104.3 C 349.4 111.2 345.7 117.7 345.9 125.0 C 346.0 144.0 345.9 163.0 345.9 182.1 C 367.3 182.1 388.7 182.2 410.1 182.0 C 412.6 181.9 415.0 182.6 417.1 183.9 C 426.1 189.8 436.1 194.0 445.1 199.9 C 447.5 201.4 447.9 204.4 448.0 207.0 C 447.9 260.3 447.9 313.7 447.9 367.0 C 447.6 375.2 448.5 383.4 447.6 391.5 C 445.9 394.7 442.8 396.8 440.3 399.3 C 430.7 407.7 421.2 416.2 411.7 424.7 C 407.2 428.7 402.7 434.4 396.0 434.0 C 354.7 434.0 313.3 434.0 272.0 434.0 C 266.6 434.0 260.4 435.0 255.9 431.1 C 244.6 422.0 232.7 413.7 221.4 404.6 C 220.4 403.8 219.3 403.0 218.0 403.1 C 209.6 402.5 201.3 403.2 193.1 404.0 C 181.0 404.1 169.0 404.0 156.9 403.9 C 156.8 409.6 157.1 415.3 156.9 421.0 C 156.9 423.6 154.9 425.6 153.7 427.8 C 150.5 428.3 147.3 429.0 144.0 429.0 C 106.7 428.9 69.3 429.0 32.0 429.0 C 28.4 428.9 24.2 428.0 22.4 424.5 C 20.2 419.7 21.2 414.2 21.0 409.0 C 21.0 342.7 21.0 276.3 21.0 210.0 C 21.1 206.9 21.4 203.6 22.8 200.9 C 24.7 197.7 28.7 197.2 32.0 197.0 C 68.6 197.0 105.3 197.1 142.0 196.9 C 145.7 197.1 150.0 196.3 153.2 198.8 C 154.8 200.2 156.9 201.7 156.8 204.1 C 157.2 210.8 156.8 217.6 156.9 224.3 C 179.5 222.0 200.9 210.8 216.3 194.3 C 220.9 190.4 222.8 184.5 225.2 179.2 C 230.7 168.3 235.6 157.0 241.0 145.9 C 246.7 133.1 253.1 120.6 258.8 107.8 C 263.1 99.3 266.4 90.3 270.9 81.9 C 275.2 72.8 279.3 63.7 283.6 54.6 C 285.2 51.4 286.2 47.2 289.9 45.9 M 294.7 73.5 C 292.3 77.1 290.5 81.0 288.9 84.9 C 287.0 89.9 283.4 94.2 282.5 99.6 C 281.9 100.2 281.3 100.9 280.7 101.6 C 278.2 108.0 274.6 113.9 272.5 120.5 C 268.8 126.4 267.0 133.3 263.2 139.2 C 260.6 143.2 259.2 147.8 256.9 152.0 C 254.7 155.8 253.9 160.3 252.0 164.2 C 249.9 169.5 246.1 174.0 244.9 179.6 C 243.8 183.3 241.4 186.3 239.7 189.7 C 237.5 193.3 237.4 198.0 234.2 201.1 C 230.7 205.9 226.0 209.6 221.7 213.7 C 218.0 215.9 216.0 220.1 212.0 221.9 C 208.0 224.7 203.6 226.9 199.6 229.7 C 196.2 232.2 191.9 232.7 188.0 234.1 C 184.3 235.2 181.3 237.7 177.5 238.3 C 171.4 239.7 165.1 241.1 158.8 241.5 C 155.9 243.9 157.0 247.8 156.8 251.0 C 157.0 296.1 156.8 341.1 156.9 386.2 C 167.3 386.1 177.6 385.9 188.0 386.1 C 197.0 386.3 206.0 384.3 215.0 384.8 C 219.9 384.4 225.0 385.0 229.0 387.9 C 235.2 392.8 241.3 397.8 247.7 402.4 C 252.9 407.4 259.4 410.7 264.3 416.0 C 285.2 416.2 306.1 416.0 327.0 416.1 C 349.8 415.9 372.6 416.3 395.5 415.9 C 400.3 412.0 404.7 407.6 409.2 403.3 C 413.3 400.1 417.3 396.8 420.9 393.0 C 423.8 389.9 428.0 387.7 429.8 383.7 C 430.6 380.5 430.2 377.2 430.2 374.0 C 429.9 360.5 430.7 347.0 429.8 333.6 C 430.1 294.4 429.7 255.2 430.0 215.9 C 429.9 214.2 430.0 212.4 429.2 210.8 C 424.4 208.4 419.6 205.8 415.2 202.6 C 410.1 199.5 404.0 198.5 398.0 198.7 C 380.3 198.9 362.7 198.6 345.0 198.9 C 340.2 199.7 335.4 199.0 330.8 197.4 C 328.1 191.7 327.6 185.2 328.0 179.0 C 328.0 161.0 328.0 143.0 327.9 125.0 C 328.0 117.4 331.4 110.5 333.1 103.2 C 335.2 99.1 336.2 94.5 337.1 89.9 C 337.1 82.4 337.4 74.8 336.4 67.3 C 337.0 65.6 337.1 63.8 337.2 62.0 C 325.0 61.7 312.9 62.2 300.7 61.7 C 298.5 65.5 296.3 69.4 294.7 73.5 M 38.8 214.8 C 38.7 225.6 38.3 236.4 39.0 247.2 C 39.1 250.2 39.3 253.1 39.3 256.0 C 39.3 307.6 39.4 359.2 39.3 410.7 C 72.4 410.7 105.6 410.7 138.7 410.7 C 138.6 359.2 138.8 307.6 138.7 256.0 C 138.7 253.1 138.9 250.2 139.0 247.2 C 139.7 236.4 139.3 225.6 139.2 214.8 C 105.7 214.6 72.3 214.6 38.8 214.8 Z" />\n                <path fill="#ffffff" stroke="#ffffff" stroke-width="0.09375" opacity="1.00" d=" M 294.7 73.5 C 296.3 69.4 298.5 65.5 300.7 61.7 C 312.9 62.2 325.0 61.7 337.2 62.0 C 337.1 63.8 337.0 65.6 336.4 67.3 C 329.6 76.7 323.6 86.6 317.1 96.2 C 314.1 100.6 310.8 105.1 310.3 110.6 C 309.4 118.0 309.3 125.4 308.5 132.9 C 306.7 147.5 306.2 162.2 304.4 176.8 C 303.9 180.8 303.4 184.8 303.9 188.9 C 306.7 191.1 310.3 191.7 313.7 192.7 C 319.5 194.0 325.2 195.6 330.8 197.4 C 335.4 199.0 340.2 199.7 345.0 198.9 C 362.7 198.6 380.3 198.9 398.0 198.7 C 404.0 198.5 410.1 199.5 415.2 202.6 C 419.6 205.8 424.4 208.4 429.2 210.8 C 430.0 212.4 429.9 214.2 430.0 215.9 C 429.7 255.2 430.1 294.4 429.8 333.6 C 419.2 343.4 408.4 353.0 398.4 363.4 C 394.5 367.0 391.3 371.8 386.3 374.0 C 380.0 375.6 373.4 374.5 367.0 374.6 C 356.3 374.1 345.7 375.7 335.0 375.7 C 323.6 375.1 312.4 377.0 301.0 376.8 C 291.0 377.0 281.0 375.6 270.9 375.7 C 267.2 375.8 263.3 375.1 260.2 372.8 C 252.3 367.3 244.4 361.9 236.6 356.3 C 233.0 353.6 228.5 352.4 224.0 352.5 C 202.4 352.9 180.9 352.5 159.3 352.7 C 159.4 322.1 159.3 291.6 159.3 261.0 C 159.4 254.5 159.5 248.0 158.8 241.5 C 165.1 241.1 171.4 239.7 177.5 238.3 C 181.3 237.7 184.3 235.2 188.0 234.1 C 191.9 232.7 196.2 232.2 199.6 229.7 C 203.6 226.9 208.0 224.7 212.0 221.9 C 216.0 220.1 218.0 215.9 221.7 213.7 C 226.0 209.6 230.7 205.9 234.2 201.1 C 237.4 198.0 237.5 193.3 239.7 189.7 C 241.4 186.3 243.8 183.3 244.9 179.6 C 246.1 174.0 249.9 169.5 252.0 164.2 C 253.9 160.3 254.7 155.8 256.9 152.0 C 259.2 147.8 260.6 143.2 263.2 139.2 C 267.0 133.3 268.8 126.4 272.5 120.5 C 274.6 113.9 278.2 108.0 280.7 101.6 C 281.3 100.9 281.9 100.2 282.5 99.6 C 283.4 94.2 287.0 89.9 288.9 84.9 C 290.5 81.0 292.3 77.1 294.7 73.5 Z" />\n                <path fill="#e8e9e9" stroke="#e8e9e9" stroke-width="0.09375" opacity="1.00" d=" M 317.1 96.2 C 323.6 86.6 329.6 76.7 336.4 67.3 C 337.4 74.8 337.1 82.4 337.1 89.9 C 336.2 94.5 335.2 99.1 333.1 103.2 C 331.4 110.5 328.0 117.4 327.9 125.0 C 328.0 143.0 328.0 161.0 328.0 179.0 C 327.6 185.2 328.1 191.7 330.8 197.4 C 325.2 195.6 319.5 194.0 313.7 192.7 C 310.3 191.7 306.7 191.1 303.9 188.9 C 303.4 184.8 303.9 180.8 304.4 176.8 C 306.2 162.2 306.7 147.5 308.5 132.9 C 309.3 125.4 309.4 118.0 310.3 110.6 C 310.8 105.1 314.1 100.6 317.1 96.2 Z" />\n                <path fill="#7e8fbe" stroke="#7e8fbe" stroke-width="0.09375" opacity="1.00" d=" M 38.8 214.8 C 72.3 214.6 105.7 214.6 139.2 214.8 C 139.3 225.6 139.7 236.4 139.0 247.2 C 105.7 247.4 72.3 247.4 39.0 247.2 C 38.3 236.4 38.7 225.6 38.8 214.8 Z" />\n                <path fill="#e8e9e9" stroke="#e8e9e9" stroke-width="0.09375" opacity="1.00" d=" M 156.8 251.0 C 157.0 247.8 155.9 243.9 158.8 241.5 C 159.5 248.0 159.4 254.5 159.3 261.0 C 159.3 291.6 159.4 322.1 159.3 352.7 C 180.9 352.5 202.4 352.9 224.0 352.5 C 228.5 352.4 233.0 353.6 236.6 356.3 C 244.4 361.9 252.3 367.3 260.2 372.8 C 263.3 375.1 267.2 375.8 270.9 375.7 C 281.0 375.6 291.0 377.0 301.0 376.8 C 312.4 377.0 323.6 375.1 335.0 375.7 C 345.7 375.7 356.3 374.1 367.0 374.6 C 373.4 374.5 380.0 375.6 386.3 374.0 C 391.3 371.8 394.5 367.0 398.4 363.4 C 408.4 353.0 419.2 343.4 429.8 333.6 C 430.7 347.0 429.9 360.5 430.2 374.0 C 430.2 377.2 430.6 380.5 429.8 383.7 C 428.0 387.7 423.8 389.9 420.9 393.0 C 417.3 396.8 413.3 400.1 409.2 403.3 C 404.7 407.6 400.3 412.0 395.5 415.9 C 372.6 416.3 349.8 415.9 327.0 416.1 C 306.1 416.0 285.2 416.2 264.3 416.0 C 259.4 410.7 252.9 407.4 247.7 402.4 C 241.3 397.8 235.2 392.8 229.0 387.9 C 225.0 385.0 219.9 384.4 215.0 384.8 C 206.0 384.3 197.0 386.3 188.0 386.1 C 177.6 385.9 167.3 386.1 156.9 386.2 C 156.8 341.1 157.0 296.1 156.8 251.0 Z" />\n                <path fill="#6276ae" stroke="#6276ae" stroke-width="0.09375" opacity="1.00" d=" M 39.0 247.2 C 72.3 247.4 105.7 247.4 139.0 247.2 C 138.9 250.2 138.7 253.1 138.7 256.0 C 138.8 307.6 138.6 359.2 138.7 410.7 C 105.6 410.7 72.4 410.7 39.3 410.7 C 39.4 359.2 39.3 307.6 39.3 256.0 C 39.3 253.1 39.1 250.2 39.0 247.2 Z" />\n            </svg>\n            <span class="like-quantity">0</span>\n            <span class="date">przed chwilą</span>';

  var ansButton = document.createElement("div");
  ansButton.classList.add("ans-button");
  ansButton.innerHTML = "Odpowiedz";

  var cmtRight = document.createElement("div");
  cmtRight.classList.add("user-text");

  var whenStr = document.createElement("p");
  whenStr.classList.add("when");
  whenStr.innerHTML = "przed chwilą";

  var signatureStr = document.createElement("p");
  signatureStr.classList.add("commenterName");
  signatureStr.innerHTML = commentObj.signature;

  var dateStr = void 0;

  if (commentObj.dateStr != undefined) {
    dateStr = commentObj.dateStr;
  } else {
    dateStr = getCurrentDate();
  }

  var date = document.createElement("p");
  date.classList.add("date");
  date.innerHTML =
    dateStr +
    '<div class="likes">\n            <i class="fas fa-thumbs-up like-up like"></i>&nbsp;\n            <span id="likes">0</span>&nbsp;&nbsp;&nbsp;\n            <i class="fas fa-thumbs-up like-down like"></i>\n            &nbsp;<span id="likes-down">0</span></div> ';

  var commentStr = document.createElement("p");
  commentStr.innerHTML = commentObj.comment;

  cmtRight.appendChild(whenStr);
  cmtRight.appendChild(signatureStr);
  cmtRight.appendChild(commentStr);
  cmtRight.appendChild(buttonsSpan);
  cmtRight.appendChild(ansButton);
  commentEl.appendChild(cmtLeft);
  commentEl.appendChild(cmtRight);
  return commentEl;
}

function renderComments() {
  arrayOfUserComments.forEach(function (element) {
    var composedNode = composeCommentNode(element);
    renderer.prepend(composedNode);
  });
}

function addNewComment(newCmt) {
  var composedNode = composeCommentNode(newCmt);
  renderer.prepend(composedNode);
}

function addListeners() {
  var likesUp = document.querySelectorAll(".like-btn");
  likesUp.forEach(function (element) {
    element.addEventListener("click", function (e) {
      //Get id of comment
      var likesSpan = $(e.target).siblings(".like-quantity");
      var comentIdx = likesSpan.parent().parent().parent().parent().attr("id");
      if (mockComments[comentIdx].hasLiked == false) {
        likesSpan.html(parseInt(likesSpan.text(), 10) + 1);
        $(e.target).html("Nie lubię");
        mockComments[comentIdx].hasLiked = true;
      } else {
        likesSpan.html(parseInt(likesSpan.text(), 10) - 1);
        $(e.target).html("Lubię to");
        mockComments[comentIdx].hasLiked = false;
      }
    });
  });
}

function renderMockCommetns() {
  var idx = 0;
  mockComments.forEach(function (element) {
    var answerTwmplate = void 0;
    var answerMock = {
      nick: null,
      content: null,
      date: null,
      pict: null,
      pict2: null,
      likes: null,
      hasLiked: false,
    };

    var tempStr =
      '\n            <div class="comment cmt-section" id="' +
      idx +
      '">\n                <div class="first-cmt cmt-section__border">\n                    <div class="cmt-img">\n                        <img src="assets/img/' +
      element.nick +
      '.jpg" alt="' +
      element.nick +
      '" >\n                    </div>\n                    <div class="cmtRight px-3">\n                        <div class="cmt-title">\n                            <span class="commenterName">' +
      element.nick +
      '</span><span class="date">' +
      element.date +
      "</span>\n                        </div>\n                        <p>\n                            " +
      element.content +
      '\n                        </p>\n                        <img class="mb-2 mt-2 imagen" src="assets/img/' +
      element.pict +
      '.png" alt="">\n    <img class="mb-2 mt-2 imagen" src="assets/img/' +
      element.pict2 +
      '.png" alt="">\n                     <div class="cmt-buttons">\n                            <span class="like-btn">Lubię to</span>\n                            <svg width="18px" height="18px" style="margin-top: -4px;" viewBox="0 0 543 451" version="1.1" xmlns="http://www.w3.org/2000/svg">\n                                <path fill="#30418f" stroke="#30418f" stroke-width="0.09375" opacity="1.00" d=" M 289.9 45.9 C 292.5 44.9 295.3 45.0 298.0 44.9 C 313.7 45.1 329.4 45.0 345.0 45.0 C 350.1 44.6 355.1 48.8 355.0 54.0 C 355.2 64.3 354.8 74.7 355.1 85.0 C 355.5 91.7 352.8 98.0 351.2 104.3 C 349.4 111.2 345.7 117.7 345.9 125.0 C 346.0 144.0 345.9 163.0 345.9 182.1 C 367.3 182.1 388.7 182.2 410.1 182.0 C 412.6 181.9 415.0 182.6 417.1 183.9 C 426.1 189.8 436.1 194.0 445.1 199.9 C 447.5 201.4 447.9 204.4 448.0 207.0 C 447.9 260.3 447.9 313.7 447.9 367.0 C 447.6 375.2 448.5 383.4 447.6 391.5 C 445.9 394.7 442.8 396.8 440.3 399.3 C 430.7 407.7 421.2 416.2 411.7 424.7 C 407.2 428.7 402.7 434.4 396.0 434.0 C 354.7 434.0 313.3 434.0 272.0 434.0 C 266.6 434.0 260.4 435.0 255.9 431.1 C 244.6 422.0 232.7 413.7 221.4 404.6 C 220.4 403.8 219.3 403.0 218.0 403.1 C 209.6 402.5 201.3 403.2 193.1 404.0 C 181.0 404.1 169.0 404.0 156.9 403.9 C 156.8 409.6 157.1 415.3 156.9 421.0 C 156.9 423.6 154.9 425.6 153.7 427.8 C 150.5 428.3 147.3 429.0 144.0 429.0 C 106.7 428.9 69.3 429.0 32.0 429.0 C 28.4 428.9 24.2 428.0 22.4 424.5 C 20.2 419.7 21.2 414.2 21.0 409.0 C 21.0 342.7 21.0 276.3 21.0 210.0 C 21.1 206.9 21.4 203.6 22.8 200.9 C 24.7 197.7 28.7 197.2 32.0 197.0 C 68.6 197.0 105.3 197.1 142.0 196.9 C 145.7 197.1 150.0 196.3 153.2 198.8 C 154.8 200.2 156.9 201.7 156.8 204.1 C 157.2 210.8 156.8 217.6 156.9 224.3 C 179.5 222.0 200.9 210.8 216.3 194.3 C 220.9 190.4 222.8 184.5 225.2 179.2 C 230.7 168.3 235.6 157.0 241.0 145.9 C 246.7 133.1 253.1 120.6 258.8 107.8 C 263.1 99.3 266.4 90.3 270.9 81.9 C 275.2 72.8 279.3 63.7 283.6 54.6 C 285.2 51.4 286.2 47.2 289.9 45.9 M 294.7 73.5 C 292.3 77.1 290.5 81.0 288.9 84.9 C 287.0 89.9 283.4 94.2 282.5 99.6 C 281.9 100.2 281.3 100.9 280.7 101.6 C 278.2 108.0 274.6 113.9 272.5 120.5 C 268.8 126.4 267.0 133.3 263.2 139.2 C 260.6 143.2 259.2 147.8 256.9 152.0 C 254.7 155.8 253.9 160.3 252.0 164.2 C 249.9 169.5 246.1 174.0 244.9 179.6 C 243.8 183.3 241.4 186.3 239.7 189.7 C 237.5 193.3 237.4 198.0 234.2 201.1 C 230.7 205.9 226.0 209.6 221.7 213.7 C 218.0 215.9 216.0 220.1 212.0 221.9 C 208.0 224.7 203.6 226.9 199.6 229.7 C 196.2 232.2 191.9 232.7 188.0 234.1 C 184.3 235.2 181.3 237.7 177.5 238.3 C 171.4 239.7 165.1 241.1 158.8 241.5 C 155.9 243.9 157.0 247.8 156.8 251.0 C 157.0 296.1 156.8 341.1 156.9 386.2 C 167.3 386.1 177.6 385.9 188.0 386.1 C 197.0 386.3 206.0 384.3 215.0 384.8 C 219.9 384.4 225.0 385.0 229.0 387.9 C 235.2 392.8 241.3 397.8 247.7 402.4 C 252.9 407.4 259.4 410.7 264.3 416.0 C 285.2 416.2 306.1 416.0 327.0 416.1 C 349.8 415.9 372.6 416.3 395.5 415.9 C 400.3 412.0 404.7 407.6 409.2 403.3 C 413.3 400.1 417.3 396.8 420.9 393.0 C 423.8 389.9 428.0 387.7 429.8 383.7 C 430.6 380.5 430.2 377.2 430.2 374.0 C 429.9 360.5 430.7 347.0 429.8 333.6 C 430.1 294.4 429.7 255.2 430.0 215.9 C 429.9 214.2 430.0 212.4 429.2 210.8 C 424.4 208.4 419.6 205.8 415.2 202.6 C 410.1 199.5 404.0 198.5 398.0 198.7 C 380.3 198.9 362.7 198.6 345.0 198.9 C 340.2 199.7 335.4 199.0 330.8 197.4 C 328.1 191.7 327.6 185.2 328.0 179.0 C 328.0 161.0 328.0 143.0 327.9 125.0 C 328.0 117.4 331.4 110.5 333.1 103.2 C 335.2 99.1 336.2 94.5 337.1 89.9 C 337.1 82.4 337.4 74.8 336.4 67.3 C 337.0 65.6 337.1 63.8 337.2 62.0 C 325.0 61.7 312.9 62.2 300.7 61.7 C 298.5 65.5 296.3 69.4 294.7 73.5 M 38.8 214.8 C 38.7 225.6 38.3 236.4 39.0 247.2 C 39.1 250.2 39.3 253.1 39.3 256.0 C 39.3 307.6 39.4 359.2 39.3 410.7 C 72.4 410.7 105.6 410.7 138.7 410.7 C 138.6 359.2 138.8 307.6 138.7 256.0 C 138.7 253.1 138.9 250.2 139.0 247.2 C 139.7 236.4 139.3 225.6 139.2 214.8 C 105.7 214.6 72.3 214.6 38.8 214.8 Z" />\n                                <path fill="#ffffff" stroke="#ffffff" stroke-width="0.09375" opacity="1.00" d=" M 294.7 73.5 C 296.3 69.4 298.5 65.5 300.7 61.7 C 312.9 62.2 325.0 61.7 337.2 62.0 C 337.1 63.8 337.0 65.6 336.4 67.3 C 329.6 76.7 323.6 86.6 317.1 96.2 C 314.1 100.6 310.8 105.1 310.3 110.6 C 309.4 118.0 309.3 125.4 308.5 132.9 C 306.7 147.5 306.2 162.2 304.4 176.8 C 303.9 180.8 303.4 184.8 303.9 188.9 C 306.7 191.1 310.3 191.7 313.7 192.7 C 319.5 194.0 325.2 195.6 330.8 197.4 C 335.4 199.0 340.2 199.7 345.0 198.9 C 362.7 198.6 380.3 198.9 398.0 198.7 C 404.0 198.5 410.1 199.5 415.2 202.6 C 419.6 205.8 424.4 208.4 429.2 210.8 C 430.0 212.4 429.9 214.2 430.0 215.9 C 429.7 255.2 430.1 294.4 429.8 333.6 C 419.2 343.4 408.4 353.0 398.4 363.4 C 394.5 367.0 391.3 371.8 386.3 374.0 C 380.0 375.6 373.4 374.5 367.0 374.6 C 356.3 374.1 345.7 375.7 335.0 375.7 C 323.6 375.1 312.4 377.0 301.0 376.8 C 291.0 377.0 281.0 375.6 270.9 375.7 C 267.2 375.8 263.3 375.1 260.2 372.8 C 252.3 367.3 244.4 361.9 236.6 356.3 C 233.0 353.6 228.5 352.4 224.0 352.5 C 202.4 352.9 180.9 352.5 159.3 352.7 C 159.4 322.1 159.3 291.6 159.3 261.0 C 159.4 254.5 159.5 248.0 158.8 241.5 C 165.1 241.1 171.4 239.7 177.5 238.3 C 181.3 237.7 184.3 235.2 188.0 234.1 C 191.9 232.7 196.2 232.2 199.6 229.7 C 203.6 226.9 208.0 224.7 212.0 221.9 C 216.0 220.1 218.0 215.9 221.7 213.7 C 226.0 209.6 230.7 205.9 234.2 201.1 C 237.4 198.0 237.5 193.3 239.7 189.7 C 241.4 186.3 243.8 183.3 244.9 179.6 C 246.1 174.0 249.9 169.5 252.0 164.2 C 253.9 160.3 254.7 155.8 256.9 152.0 C 259.2 147.8 260.6 143.2 263.2 139.2 C 267.0 133.3 268.8 126.4 272.5 120.5 C 274.6 113.9 278.2 108.0 280.7 101.6 C 281.3 100.9 281.9 100.2 282.5 99.6 C 283.4 94.2 287.0 89.9 288.9 84.9 C 290.5 81.0 292.3 77.1 294.7 73.5 Z" />\n                                <path fill="#e8e9e9" stroke="#e8e9e9" stroke-width="0.09375" opacity="1.00" d=" M 317.1 96.2 C 323.6 86.6 329.6 76.7 336.4 67.3 C 337.4 74.8 337.1 82.4 337.1 89.9 C 336.2 94.5 335.2 99.1 333.1 103.2 C 331.4 110.5 328.0 117.4 327.9 125.0 C 328.0 143.0 328.0 161.0 328.0 179.0 C 327.6 185.2 328.1 191.7 330.8 197.4 C 325.2 195.6 319.5 194.0 313.7 192.7 C 310.3 191.7 306.7 191.1 303.9 188.9 C 303.4 184.8 303.9 180.8 304.4 176.8 C 306.2 162.2 306.7 147.5 308.5 132.9 C 309.3 125.4 309.4 118.0 310.3 110.6 C 310.8 105.1 314.1 100.6 317.1 96.2 Z" />\n                                <path fill="#7e8fbe" stroke="#7e8fbe" stroke-width="0.09375" opacity="1.00" d=" M 38.8 214.8 C 72.3 214.6 105.7 214.6 139.2 214.8 C 139.3 225.6 139.7 236.4 139.0 247.2 C 105.7 247.4 72.3 247.4 39.0 247.2 C 38.3 236.4 38.7 225.6 38.8 214.8 Z" />\n                                <path fill="#e8e9e9" stroke="#e8e9e9" stroke-width="0.09375" opacity="1.00" d=" M 156.8 251.0 C 157.0 247.8 155.9 243.9 158.8 241.5 C 159.5 248.0 159.4 254.5 159.3 261.0 C 159.3 291.6 159.4 322.1 159.3 352.7 C 180.9 352.5 202.4 352.9 224.0 352.5 C 228.5 352.4 233.0 353.6 236.6 356.3 C 244.4 361.9 252.3 367.3 260.2 372.8 C 263.3 375.1 267.2 375.8 270.9 375.7 C 281.0 375.6 291.0 377.0 301.0 376.8 C 312.4 377.0 323.6 375.1 335.0 375.7 C 345.7 375.7 356.3 374.1 367.0 374.6 C 373.4 374.5 380.0 375.6 386.3 374.0 C 391.3 371.8 394.5 367.0 398.4 363.4 C 408.4 353.0 419.2 343.4 429.8 333.6 C 430.7 347.0 429.9 360.5 430.2 374.0 C 430.2 377.2 430.6 380.5 429.8 383.7 C 428.0 387.7 423.8 389.9 420.9 393.0 C 417.3 396.8 413.3 400.1 409.2 403.3 C 404.7 407.6 400.3 412.0 395.5 415.9 C 372.6 416.3 349.8 415.9 327.0 416.1 C 306.1 416.0 285.2 416.2 264.3 416.0 C 259.4 410.7 252.9 407.4 247.7 402.4 C 241.3 397.8 235.2 392.8 229.0 387.9 C 225.0 385.0 219.9 384.4 215.0 384.8 C 206.0 384.3 197.0 386.3 188.0 386.1 C 177.6 385.9 167.3 386.1 156.9 386.2 C 156.8 341.1 157.0 296.1 156.8 251.0 Z" />\n                                <path fill="#6276ae" stroke="#6276ae" stroke-width="0.09375" opacity="1.00" d=" M 39.0 247.2 C 72.3 247.4 105.7 247.4 139.0 247.2 C 138.9 250.2 138.7 253.1 138.7 256.0 C 138.8 307.6 138.6 359.2 138.7 410.7 C 105.6 410.7 72.4 410.7 39.3 410.7 C 39.4 359.2 39.3 307.6 39.3 256.0 C 39.3 253.1 39.1 250.2 39.0 247.2 Z" />\n                            </svg>\n                            <span class="like-quantity">' +
      element.likes +
      '</span>\n                        </div>\n <div class="ans-button">Odpowiedz</div>\n                    </div>\n                </div>\n        ';

    if (element.hasOwnProperty("answers")) {
      element.answers.forEach(function (answer, answerIdx) {
        idx++;
        answerMock = answer;
        answerTwmplate =
          '\n                        <div class="cmt-answers" id="' +
          idx +
          '">\n                            <div class="comment answer cmt-section__border">\n                                <div class="cmt-img">\n                                    <img src="assets/img/' +
          answerMock.nick +
          '.jpg" alt="' +
          answerMock.nick +
          '">\n                                </div>\n                                <div class="cmtRight px-3">\n                                    <div class="cmt-title">\n                                        <span class="commenterName">' +
          answerMock.nick +
          '</span>\n                                        <span class="date">' +
          answerMock.date +
          "</span>\n                                    </div>\n                                    <p>\n                                        " +
          answerMock.content +
          '\n                                    </p>\n                                    <img class="mb-2 mt-2 imagen" src="assets/img/' +
          answerMock.pict +
          '.png" alt="">\n     <img class="mb-2 mt-2 imagen" src="assets/img/' +
          answerMock.pict2 +
          '.png" alt="">\n                                 <div class="cmt-buttons">\n                                        <span class="like-btn">Lubię to</span>\n                                        <svg width="18px" height="18px" style="margin-top: -4px;" viewBox="0 0 543 451" version="1.1" xmlns="http://www.w3.org/2000/svg">\n                                            <path fill="#30418f" stroke="#30418f" stroke-width="0.09375" opacity="1.00" d=" M 289.9 45.9 C 292.5 44.9 295.3 45.0 298.0 44.9 C 313.7 45.1 329.4 45.0 345.0 45.0 C 350.1 44.6 355.1 48.8 355.0 54.0 C 355.2 64.3 354.8 74.7 355.1 85.0 C 355.5 91.7 352.8 98.0 351.2 104.3 C 349.4 111.2 345.7 117.7 345.9 125.0 C 346.0 144.0 345.9 163.0 345.9 182.1 C 367.3 182.1 388.7 182.2 410.1 182.0 C 412.6 181.9 415.0 182.6 417.1 183.9 C 426.1 189.8 436.1 194.0 445.1 199.9 C 447.5 201.4 447.9 204.4 448.0 207.0 C 447.9 260.3 447.9 313.7 447.9 367.0 C 447.6 375.2 448.5 383.4 447.6 391.5 C 445.9 394.7 442.8 396.8 440.3 399.3 C 430.7 407.7 421.2 416.2 411.7 424.7 C 407.2 428.7 402.7 434.4 396.0 434.0 C 354.7 434.0 313.3 434.0 272.0 434.0 C 266.6 434.0 260.4 435.0 255.9 431.1 C 244.6 422.0 232.7 413.7 221.4 404.6 C 220.4 403.8 219.3 403.0 218.0 403.1 C 209.6 402.5 201.3 403.2 193.1 404.0 C 181.0 404.1 169.0 404.0 156.9 403.9 C 156.8 409.6 157.1 415.3 156.9 421.0 C 156.9 423.6 154.9 425.6 153.7 427.8 C 150.5 428.3 147.3 429.0 144.0 429.0 C 106.7 428.9 69.3 429.0 32.0 429.0 C 28.4 428.9 24.2 428.0 22.4 424.5 C 20.2 419.7 21.2 414.2 21.0 409.0 C 21.0 342.7 21.0 276.3 21.0 210.0 C 21.1 206.9 21.4 203.6 22.8 200.9 C 24.7 197.7 28.7 197.2 32.0 197.0 C 68.6 197.0 105.3 197.1 142.0 196.9 C 145.7 197.1 150.0 196.3 153.2 198.8 C 154.8 200.2 156.9 201.7 156.8 204.1 C 157.2 210.8 156.8 217.6 156.9 224.3 C 179.5 222.0 200.9 210.8 216.3 194.3 C 220.9 190.4 222.8 184.5 225.2 179.2 C 230.7 168.3 235.6 157.0 241.0 145.9 C 246.7 133.1 253.1 120.6 258.8 107.8 C 263.1 99.3 266.4 90.3 270.9 81.9 C 275.2 72.8 279.3 63.7 283.6 54.6 C 285.2 51.4 286.2 47.2 289.9 45.9 M 294.7 73.5 C 292.3 77.1 290.5 81.0 288.9 84.9 C 287.0 89.9 283.4 94.2 282.5 99.6 C 281.9 100.2 281.3 100.9 280.7 101.6 C 278.2 108.0 274.6 113.9 272.5 120.5 C 268.8 126.4 267.0 133.3 263.2 139.2 C 260.6 143.2 259.2 147.8 256.9 152.0 C 254.7 155.8 253.9 160.3 252.0 164.2 C 249.9 169.5 246.1 174.0 244.9 179.6 C 243.8 183.3 241.4 186.3 239.7 189.7 C 237.5 193.3 237.4 198.0 234.2 201.1 C 230.7 205.9 226.0 209.6 221.7 213.7 C 218.0 215.9 216.0 220.1 212.0 221.9 C 208.0 224.7 203.6 226.9 199.6 229.7 C 196.2 232.2 191.9 232.7 188.0 234.1 C 184.3 235.2 181.3 237.7 177.5 238.3 C 171.4 239.7 165.1 241.1 158.8 241.5 C 155.9 243.9 157.0 247.8 156.8 251.0 C 157.0 296.1 156.8 341.1 156.9 386.2 C 167.3 386.1 177.6 385.9 188.0 386.1 C 197.0 386.3 206.0 384.3 215.0 384.8 C 219.9 384.4 225.0 385.0 229.0 387.9 C 235.2 392.8 241.3 397.8 247.7 402.4 C 252.9 407.4 259.4 410.7 264.3 416.0 C 285.2 416.2 306.1 416.0 327.0 416.1 C 349.8 415.9 372.6 416.3 395.5 415.9 C 400.3 412.0 404.7 407.6 409.2 403.3 C 413.3 400.1 417.3 396.8 420.9 393.0 C 423.8 389.9 428.0 387.7 429.8 383.7 C 430.6 380.5 430.2 377.2 430.2 374.0 C 429.9 360.5 430.7 347.0 429.8 333.6 C 430.1 294.4 429.7 255.2 430.0 215.9 C 429.9 214.2 430.0 212.4 429.2 210.8 C 424.4 208.4 419.6 205.8 415.2 202.6 C 410.1 199.5 404.0 198.5 398.0 198.7 C 380.3 198.9 362.7 198.6 345.0 198.9 C 340.2 199.7 335.4 199.0 330.8 197.4 C 328.1 191.7 327.6 185.2 328.0 179.0 C 328.0 161.0 328.0 143.0 327.9 125.0 C 328.0 117.4 331.4 110.5 333.1 103.2 C 335.2 99.1 336.2 94.5 337.1 89.9 C 337.1 82.4 337.4 74.8 336.4 67.3 C 337.0 65.6 337.1 63.8 337.2 62.0 C 325.0 61.7 312.9 62.2 300.7 61.7 C 298.5 65.5 296.3 69.4 294.7 73.5 M 38.8 214.8 C 38.7 225.6 38.3 236.4 39.0 247.2 C 39.1 250.2 39.3 253.1 39.3 256.0 C 39.3 307.6 39.4 359.2 39.3 410.7 C 72.4 410.7 105.6 410.7 138.7 410.7 C 138.6 359.2 138.8 307.6 138.7 256.0 C 138.7 253.1 138.9 250.2 139.0 247.2 C 139.7 236.4 139.3 225.6 139.2 214.8 C 105.7 214.6 72.3 214.6 38.8 214.8 Z" />\n                                            <path fill="#ffffff" stroke="#ffffff" stroke-width="0.09375" opacity="1.00" d=" M 294.7 73.5 C 296.3 69.4 298.5 65.5 300.7 61.7 C 312.9 62.2 325.0 61.7 337.2 62.0 C 337.1 63.8 337.0 65.6 336.4 67.3 C 329.6 76.7 323.6 86.6 317.1 96.2 C 314.1 100.6 310.8 105.1 310.3 110.6 C 309.4 118.0 309.3 125.4 308.5 132.9 C 306.7 147.5 306.2 162.2 304.4 176.8 C 303.9 180.8 303.4 184.8 303.9 188.9 C 306.7 191.1 310.3 191.7 313.7 192.7 C 319.5 194.0 325.2 195.6 330.8 197.4 C 335.4 199.0 340.2 199.7 345.0 198.9 C 362.7 198.6 380.3 198.9 398.0 198.7 C 404.0 198.5 410.1 199.5 415.2 202.6 C 419.6 205.8 424.4 208.4 429.2 210.8 C 430.0 212.4 429.9 214.2 430.0 215.9 C 429.7 255.2 430.1 294.4 429.8 333.6 C 419.2 343.4 408.4 353.0 398.4 363.4 C 394.5 367.0 391.3 371.8 386.3 374.0 C 380.0 375.6 373.4 374.5 367.0 374.6 C 356.3 374.1 345.7 375.7 335.0 375.7 C 323.6 375.1 312.4 377.0 301.0 376.8 C 291.0 377.0 281.0 375.6 270.9 375.7 C 267.2 375.8 263.3 375.1 260.2 372.8 C 252.3 367.3 244.4 361.9 236.6 356.3 C 233.0 353.6 228.5 352.4 224.0 352.5 C 202.4 352.9 180.9 352.5 159.3 352.7 C 159.4 322.1 159.3 291.6 159.3 261.0 C 159.4 254.5 159.5 248.0 158.8 241.5 C 165.1 241.1 171.4 239.7 177.5 238.3 C 181.3 237.7 184.3 235.2 188.0 234.1 C 191.9 232.7 196.2 232.2 199.6 229.7 C 203.6 226.9 208.0 224.7 212.0 221.9 C 216.0 220.1 218.0 215.9 221.7 213.7 C 226.0 209.6 230.7 205.9 234.2 201.1 C 237.4 198.0 237.5 193.3 239.7 189.7 C 241.4 186.3 243.8 183.3 244.9 179.6 C 246.1 174.0 249.9 169.5 252.0 164.2 C 253.9 160.3 254.7 155.8 256.9 152.0 C 259.2 147.8 260.6 143.2 263.2 139.2 C 267.0 133.3 268.8 126.4 272.5 120.5 C 274.6 113.9 278.2 108.0 280.7 101.6 C 281.3 100.9 281.9 100.2 282.5 99.6 C 283.4 94.2 287.0 89.9 288.9 84.9 C 290.5 81.0 292.3 77.1 294.7 73.5 Z" />\n                                            <path fill="#e8e9e9" stroke="#e8e9e9" stroke-width="0.09375" opacity="1.00" d=" M 317.1 96.2 C 323.6 86.6 329.6 76.7 336.4 67.3 C 337.4 74.8 337.1 82.4 337.1 89.9 C 336.2 94.5 335.2 99.1 333.1 103.2 C 331.4 110.5 328.0 117.4 327.9 125.0 C 328.0 143.0 328.0 161.0 328.0 179.0 C 327.6 185.2 328.1 191.7 330.8 197.4 C 325.2 195.6 319.5 194.0 313.7 192.7 C 310.3 191.7 306.7 191.1 303.9 188.9 C 303.4 184.8 303.9 180.8 304.4 176.8 C 306.2 162.2 306.7 147.5 308.5 132.9 C 309.3 125.4 309.4 118.0 310.3 110.6 C 310.8 105.1 314.1 100.6 317.1 96.2 Z" />\n                                            <path fill="#7e8fbe" stroke="#7e8fbe" stroke-width="0.09375" opacity="1.00" d=" M 38.8 214.8 C 72.3 214.6 105.7 214.6 139.2 214.8 C 139.3 225.6 139.7 236.4 139.0 247.2 C 105.7 247.4 72.3 247.4 39.0 247.2 C 38.3 236.4 38.7 225.6 38.8 214.8 Z" />\n                                            <path fill="#e8e9e9" stroke="#e8e9e9" stroke-width="0.09375" opacity="1.00" d=" M 156.8 251.0 C 157.0 247.8 155.9 243.9 158.8 241.5 C 159.5 248.0 159.4 254.5 159.3 261.0 C 159.3 291.6 159.4 322.1 159.3 352.7 C 180.9 352.5 202.4 352.9 224.0 352.5 C 228.5 352.4 233.0 353.6 236.6 356.3 C 244.4 361.9 252.3 367.3 260.2 372.8 C 263.3 375.1 267.2 375.8 270.9 375.7 C 281.0 375.6 291.0 377.0 301.0 376.8 C 312.4 377.0 323.6 375.1 335.0 375.7 C 345.7 375.7 356.3 374.1 367.0 374.6 C 373.4 374.5 380.0 375.6 386.3 374.0 C 391.3 371.8 394.5 367.0 398.4 363.4 C 408.4 353.0 419.2 343.4 429.8 333.6 C 430.7 347.0 429.9 360.5 430.2 374.0 C 430.2 377.2 430.6 380.5 429.8 383.7 C 428.0 387.7 423.8 389.9 420.9 393.0 C 417.3 396.8 413.3 400.1 409.2 403.3 C 404.7 407.6 400.3 412.0 395.5 415.9 C 372.6 416.3 349.8 415.9 327.0 416.1 C 306.1 416.0 285.2 416.2 264.3 416.0 C 259.4 410.7 252.9 407.4 247.7 402.4 C 241.3 397.8 235.2 392.8 229.0 387.9 C 225.0 385.0 219.9 384.4 215.0 384.8 C 206.0 384.3 197.0 386.3 188.0 386.1 C 177.6 385.9 167.3 386.1 156.9 386.2 C 156.8 341.1 157.0 296.1 156.8 251.0 Z" />\n                                            <path fill="#6276ae" stroke="#6276ae" stroke-width="0.09375" opacity="1.00" d=" M 39.0 247.2 C 72.3 247.4 105.7 247.4 139.0 247.2 C 138.9 250.2 138.7 253.1 138.7 256.0 C 138.8 307.6 138.6 359.2 138.7 410.7 C 105.6 410.7 72.4 410.7 39.3 410.7 C 39.4 359.2 39.3 307.6 39.3 256.0 C 39.3 253.1 39.1 250.2 39.0 247.2 Z" />\n                                        </svg>\n                                        <span class="like-quantity">' +
          answerMock.likes +
          '</span>\n                                    </div>\n<div class="ans-button">Odpowiedz</div>\n                                </div>\n                            </div>\n                        </div>';
        //If there is no more answers to comment end answers section with additional div tag.
        if (element.answers[answerIdx + 1] == undefined) {
          tempStr = tempStr + answerTwmplate + "</div>";
        } else {
          tempStr = tempStr + answerTwmplate;
        }
      });
    } else {
      tempStr = tempStr + "</div>";
    }
    renderedStr += tempStr;
    idx++;
  });
  render.html(renderedStr);
  addListeners();
}

var that = this;
$("#addCommentBtn").mousedown(function () {
  var signature = $("#signature").val();
  var comment = $("#comment").val();
  if (signature && comment != "") {
    var dateStr = that.getCurrentDate();
    var newCmt = {
      signature: signature,
      comment: comment,
      dateStr: dateStr,
    };
    that.arrayOfUserComments.push(newCmt);
    localStorage.setItem("comments", JSON.stringify(that.arrayOfUserComments));
    that.addNewComment(newCmt);
  }
});
