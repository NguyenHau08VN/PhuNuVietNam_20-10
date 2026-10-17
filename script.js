
"use strict";

/* =========================================
   PETAL & POETRY — 20/10
   36 người nhận, một website duy nhất
========================================= */

/*
  QUY ƯỚC MÃ:
  Số 1  -> C201
  Số 2  -> C202
  Số 14 -> C214
  Huit01 và Huit02 giữ nguyên.

  Mỗi người có:
  name   = tên hiển thị
  wish   = lời chúc trên thiệp
  secret = thông điệp bí mật riêng
*/

const recipients = {
  C201: {
    name: " Thanh Xuân",
    wish: "Chúc Thanh Xuân luôn rạng rỡ như chính cái tên của mình. Mong mỗi ngày của cậu đều có niềm vui, những điều mới mẻ và thật nhiều người yêu thương.",
    secret: "Lên đại học mong bạn sẽ có thêm những năm tháng vui vẻ và nhiều kỉ niệm , cảm ơn bạn đã đồng hành cũng mình trong suốt cấp 3."
  },

  C202: {
    name: "Kim Anh",
    wish: "Chúc Kim Anh có một ngày 20/10 thật ngọt ngào, luôn xinh đẹp, tự tin và gặp thật nhiều điều may mắn.",
    secret: "Kim Anh lên đại học đừng quên tui nha , được ngồi cùng bàn với Kim Anh cho tui nhiều kỉ niệm lắm đó , giàu đừng quên tui."
  },

  C203: {
    name: "Trâm Anh",
    wish: "Chúc Trâm Anh có một ngày 20/10 thật ý nghĩa , hạnh phúc và vui vẻ nhá.",
    secret: "Không biết Trâm Anh hiện tại thế nào nhưng mà cũng mong Trâm Anh sẽ gặp được nhiều may mắn và đạt được những thứ mà mình mong muốn (giàu đừng quên t)."
  },

  C204: {
    name: " Vân Anh",
    wish: "Chúc Vân Anh một ngày 20/10 ngập tràn hoa, quà và những lời yêu thương.",
    secret: "Cảm ơn vì đã cũng mình đồng hành trong khoảng thời gian ngắn này , mong Vân Anh sau này sẽ đạt được thành công siu to lớn."
  },

  C207: {
    name: "Như Hạ",
    wish: "Chúc Như Hạ sẽ có 1 ngày 20/10 thật hạnh phúc và ý nghĩa nhá.",
    secret: "Mong Hạ sẽ có được nhiều thành công và con đường học tập thuận lợi nè."
  },

  C208: {
    name: "Thu Hằng",
    wish: "Chúc Thu Hằng sẽ có 1 ngày 20/10 thật ý nghĩa và có nhiều hoa.",
    secret: "Mong Hằng lên đại học vẫn sẽ vui vẻ và nhận thêm nhiều điều ý nghĩa ."
  },

  C210: {
    name: "Uyên Nhi",
    wish: "Chúc Uyên Nhi một ngày 20/10 thật đáng nhớ và vui vẻ.",
    secret: "Chúc Nhi sẽ thành công , con đường học tập sẽ thuận lợi ( giàu đừng quên t)."
  },

  C212: {
    name: "Lưu Ly",
    wish: "Chúc Lưu Ly sẽ có được 1 ngày 20/10 thật ý nghĩa và hạnh phúc.",
    secret: "Mong bạn sẽ thuận lợi và gặp nhiều may mắn trên con đường học tập cũng như công việc sau này nhá."
  },

  C213: {
    name: "Hiểu Minh",
    wish: "Chúc Hiểu Minh có một ngày 20/10 vui vẻ , luôn cười tươi.",
    secret: "Mong Minh sẽ luôn cười tươi , gặp thật nhiều may mắn từ học tập đến công việc."
  },

  C214: {
    name: "Tuyết Nga",
    wish: "Chúc Tuyết Nga có một ngày 20/10 thật sự ý nghĩa , cười nhiều lên nhá.",
    secret: "Cảm ơn vì đã trở thành 1 phần thanh xuân của tui dù khoảng thời gian không dài , cảm ơn vì đã cho tui nhiều kỉ niệm . Nhớ cười nhiều và vui vẻ hơn nha tyfciml."
  },

  C215: {
    name: "Ánh Ngọc",
    wish: "Chúc Ánh Ngọc 20/10 sẽ có nhiều quà và hoa nhá.",
    secret: "Mong gặp sẽ gặp thuận lợi trong học tập và công việc sau này , ngồi cùng bàn đã cho tui nhiều kỉ niệm lắm (giàu đừng quên t nha)."
  },

  C216: {
    name: "Nguyệt Nhi",
    wish: "Chúc Nguyệt Nhi 20/10 sẽ có nhiều quà và hoa nhá.",
    secret: "Mong Nhi sẽ thuận lợi trên con đường học tập và làm việc sau này nè ."
  },

  C217: {
    name: "Thảo Nhi",
    wish: "Chúc Thảo Nhi 20/10 sẽ có nhiều tiếng cười và hạnh phúc.",
    secret: "Mong Nhi sẽ gặp nhiều may mắn , hạnh phúc hơn nữa nhá."
  },

  C218: {
    name: "Nguyễn Đỗ Triệu Vy",
    wish: "Chúc Triệu Vy có 1 ngày 20/10 thật vui vẻ và đầy hạnh phúc.",
    secret: "Mong Vy sẽ luôn nổ lực thật nhiều để đạt được thành công mà mình mong muốn nhá ."
  },

  C219: {
    name: "Tuyết Nhi",
    wish: "Chúc Tuyết Nhi có một ngày 20/10 thật vui vẻ và đầy hạnh phúc nhá.",
    secret: "Mong Nhi sẽ đạt được nhiều thành công trong công việc và học tạpa , giữ sức khoẻ nhá."
  },

  C220: {
    name: "Quỳnh Như",
    wish: "Chúc Quỳnh Như sẽ có 1 ngày 20/10 thật hạnh phúc và vui vẻ, siêu nhiều hoa.",
    secret: "Mong Như sẽ luôn cười tươi như lúc còn học chung , học tập và việc làm trở nên thuận lợi hơn."
  },

  C221: {
    name: " Thúy Quỳnh",
    wish: "Chúc Thúy Quỳnh 20/10 này sẽ có được nhiều may mắn , hạnh phúc tràn đầy.",
    secret: "Mong Quỳnh sẽ có 1 cuộc sống học tập và làm việc thuận lợi hơn , giữ sức khoẻ nhá."
  },

  C222: {
    name: " Phương Thanh",
    wish: "Chúc Phương Thanh sẽ có 1 ngày 20/10 thật đáng nhớ và hạnh phúc.",
    secret: "Mong Thanh sẽ gặp thêm nhiều người bạn mới tuyệt vời như t , giữ sức khoẻ nhá."
  },

  C224: {
    name: "Vũ Nguyễn Thanh Thảo",
    wish: "Chúc Thanh Thảo sẽ có 1 ngày 20/10 thật đáng nhớ và được tặng nhiều hoa.",
    secret: "Được Thảo làm lớp trưởng và dẫn dắt làm tui có nhiều kỉ niệm mặc dù khoảng thời gian không dài , mong Thảo sau này giữ gìn sức khoẻ."
  },

  C225: {
    name: "Phương Thảo",
    wish: "Phương Thảo ơi, chúc cậu một ngày 20/10 thật nhiều hoa xinh, quà dễ thương và niềm vui bất ngờ. Mong mỗi ngày đều nhẹ nhàng và ngọt ngào với cậu.",
    secret: "Mong cậu sẽ luôn giữ được sự hồn nhiên, biết tận hưởng hiện tại và không ngại mở lòng đón nhận những điều tốt đẹp đang chờ ở phía trước."
  },

  C226: {
    name: " Anh Thư",
    wish: "Chúc Anh Thư sẽ có một ngày 20/10 thật hạnh phúc và nhận dược nhiều hoa.",
    secret: "Mong Thư luôn được làm những điều khiến mình tự hào, được ở cạnh người khiến mình thoải mái và được trân trọng cả khi vui vẻ lẫn lúc chưa ổn."
  },

  C227: {
    name: "Võ Thư",
    wish: "Chúc Thư  ngày 20/10 sẽ đầy sự ấm áp và dễ thương .",
    secret: "Mong Thư sẽ gặp nhiều may mắn trong học tập và công việc , giữ gìn sức khoẻ nhá."
  },

  C228: {
    name: " Hoài Thương",
    wish: "Chúc Hoài Thương có một ngày 20/10 thật ấm áp và được nhiều hoa  .",
    secret: "."
  },

  C229: {
    name: "Phương Thùy",
    wish: "Chúc Phương Thùy có 1 ngày 20/10 thật ấm áp và sẽ nhận được nhiều hoa.",
    secret: "Chúc Thuỳ sẽ gặp được 1 chàng bạch mã hoàng tử tuyệt vời , sau này giàu đừng quên t nha."
  },

  C230: {
    name: " Bích Thùy",
    wish: "Chúc Bích Thùy sẽ nhận được nhiều sự hạnh phúc vào 20/10 này .",
    secret: "."
  },

  C231: {
    name: "Ánh Tiên",
    wish: "Chúc Ánh Tiên 20/10 này sẽ thật hạnh phúc và nhận được nhiều hoa.",
    secret: "Mong Tiên sẽ luôn hạnh phúc với người yêu của Tiên nhá hehe , cưới nhớ mời t."
  },

  C232: {
    name: "Huyền Trâm",
    wish: "Chúc Huyền Trâm có một ngày 20/10 bình an và trần ngập hạnh phúc .",
    secret: "Mong Trâm sẽ gặp nhiều niềm vui trên đại học và sẽ học tập suông sẻ , giữ gìn sức khoẻ nhá."
  },

  C233: {
    name: " Huế Trân",
    wish: "Chúc Huế Trân sẽ có một ngày 20/10 thật ý nghĩa , sẽ thật hạnh phúc.",
    secret: "Cảm ơn đã làm 1 tổ trưởng cho t , mong Huế sẽ gặp được 1 chàng bạch mã hoàng tử tuyệt vời , hehee."
  },

  C234: {
    name: "Phương Uyên",
    wish: "Chúc Phương Uyên 20/10 này sẽ hạnh phúc và nhận được nhiều hoa.",
    secret: "Cảm ơn vì đã là 1 người bạn cùng bàn tốt với t , giữ gìn sức khoẻ nhá ."
  },

  C235: {
    name: "Hồ Trần Thị Nhã Vy",
    wish: "Chúc Nhã Vy luôn vui vẻ, xinh đẹp và tự tin theo đuổi những điều mình yêu thích. Mong cậu nhận được thật nhiều yêu thương trong ngày đặc biệt này.",
    secret: "Mong cậu luôn nhớ rằng sự khác biệt của mình là điều đáng trân trọng. Không cần trở thành bản sao của ai khác để có một cuộc sống thật rực rỡ."
  },

  C236: {
    name: "Như Ý",
    wish: "Chúc Như Ý mọi điều như ý, niềm vui như hoa nở và may mắn ghé thăm mỗi ngày. Mong cậu luôn khỏe mạnh, xinh đẹp và gặp nhiều điều bất ngờ dễ thương.",
    secret: "Tên cậu là Như Ý, vậy mong những điều cậu thật lòng mong muốn sẽ dần thành hiện thực. Và nếu đôi khi mọi chuyện khác dự tính, mong cậu vẫn tìm được một con đường đẹp."
  },

  C238: {
    name: "Mỹ Phương",
    wish: "Chúc Mỹ Phương có một ngày 20/10 thật hạnh phúc và bình an.",
    secret: "Mong Vy sẽ luôn giữ mãi nụ cười tươi như hồi cấp 3 , giữ gìn sức khoẻ nhá."
  },

  C240: {
    name: "Đinh Thị Tường Lan",
    wish: "Chúc Tường Lan luôn duyên dáng, hạnh phúc và tràn đầy năng lượng. Mong ngày 20/10 của cậu thật đặc biệt và chặng đường phía trước sẽ có nhiều điều đáng mong chờ.",
    secret: "Mong cậu luôn có thể sống chậm lại khi cần, lắng nghe bản thân và dành thời gian cho những điều khiến trái tim cảm thấy ấm áp."
  },

  C241: {
    name: "Nguyễn Phương Dung",
    wish: "Chúc Phương Dung 20/10 này sẽ nhận dược nhiều hoa, nhiều niềm vui.",
    secret: "Chúc Dung sẽ thành công trên con đường mình chọn , sẽ giữ mãi được nụ cười tươi hehe."
  },

  Huit01: {
    name: "Bùi Thị Huyền Hoà",
    wish: "Chúc Huyền Hoà sẽ có một ngày 20/10 tràn đầy niềm vui và hạnh phúc nhá.",
    secret: "Mong Huyền Hoà sẽ học tốt , gặp được nhiều người bạn để lại những kỉ niệm đẹp ở HUIT nàyyy."
  },

  Huit02: {
    name: "Nguyễn Thuỳ Dung",
    wish: "Chúc Thuỳ Dung sẽ có 1 ngày 20/10 thật ý nghĩa và đáng nhớ.",
    secret: "Mong Thuỳ Dung (Tiểu đội phó) sẽ có thêm những kỉ niệm đẹp ở HUIT này cùng với nhưng người bạn tuyệt vời giống tui , hehe ."
  }
};


/* =========================================
   LẤY THÔNG TIN NGƯỜI NHẬN TỪ URL
========================================= */

const params = new URLSearchParams(window.location.search);
const requestedId = params.get("id") || "";
const recipient = recipients[requestedId] || null;

const recipientPreview = document.getElementById("recipient-preview");
const letterName = document.getElementById("letter-name");
const letterBody = document.getElementById("letter-body");
const secretText = document.getElementById("secret-text");

const envelopeScene = document.getElementById("envelope-scene");
const openButton = document.getElementById("open-letter");
const openButtonText = document.getElementById("open-button-text");
const envelopeHint = document.getElementById("envelope-hint");

const messageSection = document.getElementById("message-section");
const revealSecretButton = document.getElementById("reveal-secret");
const secretMessage = document.getElementById("secret-message");
const replayButton = document.getElementById("replay-letter");
const toast = document.getElementById("toast");

let isOpened = false;
let secretOpened = false;
let typingTimer = null;
let toastTimer = null;
let motionReduced = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;


/* =========================================
   KHỞI TẠO THIỆP
========================================= */

function initializeCard() {
  if (recipient) {
    recipientPreview.textContent = recipient.name;
    letterName.textContent = recipient.name;
    letterBody.textContent = "";
    secretText.textContent = recipient.secret;

    document.title = "Gửi " + recipient.name + " ♡";
  } else {
    recipientPreview.textContent = "Một người thật đặc biệt";
    letterName.textContent = "cậu";
    letterBody.textContent =
      "Chúc cậu có một ngày 20/10 thật vui vẻ, bình an, xinh đẹp và nhận được thật nhiều yêu thương.";

    secretText.textContent =
      "Mong những điều tốt đẹp sẽ luôn đồng hành cùng cậu. Chúc cậu có một ngày thật hạnh phúc.";

    document.title = "Gửi cậu, một điều thật xinh đẹp ♡";

    if (requestedId) {
      showToast("Mã thiệp chưa đúng. Đây là lời chúc chung dành cho cậu nhé!");
    }
  }

  createPetals();
  createSparkles();
}


/* =========================================
   CÁNH HOA RƠI
========================================= */

function createPetals() {
  const layer = document.getElementById("petal-layer");
  layer.replaceChildren();

  if (motionReduced) return;

  // Giảm số lượng trên màn hình nhỏ để giữ độ mượt.
  const mobile = window.matchMedia("(max-width: 600px)").matches;
  const count = mobile ? 24 : 42;

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < count; i++) {
    const petal = document.createElement("span");
    petal.className = "petal";

    petal.style.setProperty("--left", Math.random() * 100 + "%");
    petal.style.setProperty("--size", (7 + Math.random() * 13) + "px");
    petal.style.setProperty("--opacity", (0.35 + Math.random() * 0.5).toFixed(2));
    petal.style.setProperty("--rotation", Math.random() * 360 + "deg");
    petal.style.setProperty("--duration", (10 + Math.random() * 13) + "s");
    petal.style.setProperty("--delay", (-Math.random() * 20) + "s");

    fragment.appendChild(petal);
  }

  layer.appendChild(fragment);
}


/* =========================================
   ÁNH SÁNG LẤP LÁNH
========================================= */

function createSparkles() {
  const layer = document.getElementById("sparkle-layer");
  layer.replaceChildren();

  if (motionReduced) return;

  const mobile = window.matchMedia("(max-width: 600px)").matches;
  const count = mobile ? 14 : 25;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < count; i++) {
    const sparkle = document.createElement("span");
    sparkle.className = "sparkle";

    sparkle.style.setProperty("--left", Math.random() * 100 + "%");
    sparkle.style.setProperty("--top", Math.random() * 100 + "%");
    sparkle.style.setProperty("--size", (2 + Math.random() * 3) + "px");
    sparkle.style.setProperty("--duration", (1.5 + Math.random() * 3) + "s");
    sparkle.style.setProperty("--delay", (-Math.random() * 4) + "s");

    fragment.appendChild(sparkle);
  }

  layer.appendChild(fragment);
}


/* =========================================
   THÔNG BÁO NHỎ
========================================= */

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}


/* =========================================
   HIỆU ỨNG CHỮ HIỆN TỪNG KÝ TỰ
========================================= */

function typeText(element, text, speed = 28) {
  clearTimeout(typingTimer);
  element.textContent = "";

  if (motionReduced) {
    element.textContent = text;
    return;
  }

  let index = 0;

  function typeNext() {
    if (index >= text.length) return;

    // Array.from xử lý tiếng Việt và ký tự Unicode tốt hơn
    // so với việc truy cập từng vị trí của chuỗi.
    const characters = Array.from(text);

    element.textContent += characters[index];
    index++;

    typingTimer = setTimeout(typeNext, speed);
  }

  typeNext();
}


/* =========================================
   MỞ PHONG BÌ
========================================= */


function openLetter() {
  if (isOpened) {
    return;
  }

  isOpened = true;

  envelopeScene.classList.add("opened");
  openButtonText.textContent = "Đã mở thư ♡";
  envelopeHint.textContent = "Một lời chúc nhỏ, dành riêng cho cậu ♡";

  openButton.disabled = true;

  const wish = recipient
    ? recipient.wish
    : "Chúc cậu luôn vui vẻ, bình an, xinh đẹp và gặp thật nhiều điều tốt đẹp trong cuộc sống.";

  const delay = motionReduced ? 0 : 850;

  setTimeout(() => {
    typeText(letterBody, wish, 23);
    openButton.disabled = false;
  }, delay);
}



/* =========================================
   THÔNG ĐIỆP BÍ MẬT
========================================= */

function revealSecret() {
  if (secretOpened) {
    secretMessage.classList.remove("hidden");
    secretMessage.scrollIntoView({
      behavior: motionReduced ? "auto" : "smooth",
      block: "center"
    });
    return;
  }

  secretOpened = true;
  secretMessage.classList.remove("hidden");

  revealSecretButton.innerHTML =
    "<span>♡</span> Thông điệp dành riêng cho cậu <span>♡</span>";

  revealSecretButton.disabled = true;

  if (!motionReduced) {
    secretText.textContent = "";
    typeText(secretText, recipient ? recipient.secret : (
      "Mong những điều tốt đẹp sẽ luôn đồng hành cùng cậu. Chúc cậu có một ngày thật hạnh phúc."
    ), 35);
  }

  setTimeout(() => {
    revealSecretButton.disabled = false;
  }, 500);

  setTimeout(() => {
    secretMessage.scrollIntoView({
      behavior: motionReduced ? "auto" : "smooth",
      block: "center"
    });
  }, 150);
}


/* =========================================
   ĐỌC LẠI THIỆP
========================================= */

function replayLetter() {
  clearTimeout(typingTimer);

  isOpened = false;
  secretOpened = false;

  envelopeScene.classList.remove("opened");
  messageSection.classList.add("hidden");
  secretMessage.classList.add("hidden");

  openButton.disabled = false;
  openButtonText.textContent = "Mở thư của cậu";

  envelopeHint.textContent =
    "Một điều dễ thương đang chờ cậu bên trong";

  letterBody.textContent = "";
  secretText.textContent = recipient
    ? recipient.secret
    : "Mong những điều tốt đẹp sẽ luôn đồng hành cùng cậu.";

  revealSecretButton.disabled = false;
  revealSecretButton.innerHTML =
    "<span>✧</span> Mở thông điệp bí mật <span>✧</span>";

  document.querySelector(".letter-section").scrollIntoView({
    behavior: motionReduced ? "auto" : "smooth",
    block: "start"
  });
}


/* =========================================
   GẮN SỰ KIỆN
========================================= */

openButton.addEventListener("click", openLetter);
revealSecretButton.addEventListener("click", revealSecret);
replayButton.addEventListener("click", replayLetter);


/* =========================================
   KHỞI ĐỘNG
========================================= */

initializeCard();

