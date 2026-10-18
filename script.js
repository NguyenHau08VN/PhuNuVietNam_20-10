/* DANH SÁCH BẠN: key = mã sau ?id= | name | wish | reminder ("" = dùng nhắc mặc định) */
const FRIENDS = {
  C201: {
    name: "Thanh Xuân",
    wish: "Chúc Thanh Xuân luôn rạng rỡ như chính cái tên của mình. Mong mỗi ngày của cậu đều có niềm vui, những điều mới mẻ và thật nhiều người yêu thương.",
    reminder: "Lên đại học mong bạn sẽ có thêm những năm tháng vui vẻ và nhiều kỉ niệm, cảm ơn bạn đã đồng hành cùng mình trong suốt cấp 3."
  },
  C202: {
    name: "Kim Anh",
    wish: "Nắng hong mái tóc, gió vờn làn mây, Chúc Kim Anh rạng rỡ tháng ngày mê say. Đường đời dẫu có đổi thay, Mong nàng luôn được đong đầy yêu thương.",
    reminder: "Kim Anh lên đại học đừng quên tui nha, được ngồi cùng bàn với Kim Anh cho tui nhiều kỉ niệm lắm đó, giàu đừng quên tui."
  },
  C203: {
    name: "Trâm Anh",
    wish: "Thế gian này lắm bộn bề, chúc Trâm Anh 20/10 đuề huề niềm vui.",
    reminder: "Không biết Trâm Anh hiện tại thế nào nhưng mà cũng mong Trâm Anh sẽ gặp được nhiều may mắn và đạt được những thứ mà mình mong muốn (giàu đừng quên t)."
  },
  C204: {
    name: "Vân Anh",
    wish: "Hoa giữa vườn là hoa chỉ khoe sắc, Hoa giữa đời là hoa ắt nên hương, Chúc Vân Anh xinh đẹp trên mọi nẻo đường Vân Anh đi.",
    reminder: "Cảm ơn vì đã cùng mình đồng hành trong khoảng thời gian ngắn này, mong Vân Anh sau này sẽ đạt được thành công siu to lớn."
  },
  C207: {
    name: "Như Hạ",
    wish: "Tháng Mười khẽ gọi nàng thơ, Gửi ngàn lời chúc vào thơ dịu dàng. Chúc Như Hạ nhan sắc rỡ ràng, Niềm vui gõ cửa, bình an ghé nhà.",
    reminder: "20/10 vui vẻ nhá, mong Hạ sẽ có được nhiều thành công và con đường học tập thuận lợi nè."
  },
  C208: {
    name: "Thu Hằng",
    wish: "Ước gì gom hết sao trời, Gói thành quà nhỏ gửi người hôm nay. Chúc Thu Hằng hạnh phúc đong đầy, Bao điều mong ước sớm ngày thành công.",
    reminder: "20/10 vui vẻ nhá, mong Hằng lên đại học vẫn sẽ vui vẻ và nhận thêm nhiều điều ý nghĩa."
  },
  C210: {
    name: "Uyên Nhi",
    wish: "Trời xanh đâu chỉ có mây, Niềm vui đâu chỉ một ngày tháng Mười. Chúc Uyên Nhi mãi đẹp nụ cười, Trong tim luôn có một trời bình yên.",
    reminder: "20/10 vui vẻ nhá, mong Nhi sẽ thành công, con đường học tập sẽ thuận lợi (giàu đừng quên t)."
  },
  C212: {
    name: "Lưu Ly",
    wish: "Sen thanh chẳng ngại bùn sâu, Người hay chẳng ngại bắt đầu gian nan. Chúc Lưu Ly cuộc sống ngập tràn, Thành công rực rỡ, bình an mỗi ngày.",
    reminder: "20/10 vui vẻ nhá, mong Ly sẽ thuận lợi và gặp nhiều may mắn trên con đường học tập cũng như công việc sau này."
  },
  C213: {
    name: "Hiểu Minh",
    wish: "Chẳng cần làm nắng trên cao, Chỉ cần em sống ngọt ngào là xinh. Chúc Hiểu Minh luôn giữ nét mình, Tự tin tỏa sáng, hành trình thênh thang.",
    reminder: "20/10 vui vẻ nhá, mong Minh sẽ luôn cười tươi, gặp thật nhiều may mắn từ học tập đến công việc."
  },
  C214: {
    name: "Tuyết Nga",
    wish: "Chẳng cần vương miện trên đầu, Vẫn là công chúa trong màu nắng thu. Chúc Tuyết Nga xinh đẹp vô ưu, Được chiều, được quý, được yêu thật nhiều.",
    reminder: "20/10 vui vẻ nhá, cảm ơn vì đã trở thành 1 phần thanh xuân của tui dù khoảng thời gian không dài, cảm ơn vì đã cho tui nhiều kỉ niệm. Nhớ cười nhiều và vui vẻ hơn nha tyfciml."
  },
  C215: {
    name: "Ánh Ngọc",
    wish: "Mắt cười tựa ánh ban mai, Má hồng như cánh đào phai cuối mùa. Chúc Ánh Ngọc duyên dáng như thơ, Tháng ngày rực rỡ, ước mơ chẳng tàn.",
    reminder: "20/10 vui vẻ nhá, mong bạn sẽ gặp thuận lợi trong học tập và công việc sau này, ngồi cùng bàn đã cho tui nhiều kỉ niệm lắm (giàu đừng quên t nha)."
  },
  C216: {
    name: "Nguyệt Nhi",
    wish: "Mỗi loài hoa có mùa riêng, Mỗi người đều có một miền trời xanh. Chúc Nguyệt Nhi vững bước trưởng thành, Đúng thời, đúng lúc, công danh rạng ngời.",
    reminder: "20/10 vui vẻ nhá, mong Nhi sẽ thuận lợi trên con đường học tập và làm việc sau này nè."
  },
  C217: {
    name: "Thảo Nhi",
    wish: "Nắng chiều có lúc nhạt phai, Mong niềm vui ấy chẳng phai trong lòng. Chúc Thảo Nhi gặp được người mong, Đời trao điều tốt, ước mong vẹn tròn.",
    reminder: "20/10 vui vẻ nhá, mong Nhi sẽ gặp nhiều may mắn, hạnh phúc hơn nữa."
  },
  C218: {
    name: "Triệu Vy",
    wish: "Đời người đâu phải cuộc đua, Chậm nhanh chẳng ngại, nắng mưa chẳng màng. Chúc Triệu Vy tâm trí an nhàn, Sống vui, sống khỏe, ngập tràn yêu thương.",
    reminder: "20/10 vui vẻ nhá, mong Vy sẽ luôn nỗ lực thật nhiều để đạt được thành công mà mình mong muốn nè."
  },
  C219: {
    name: "Tuyết Nhi",
    wish: "Tháng Mười hẹn gió cùng mây, Hẹn thêm một đóa hoa đầy sắc hương. Chúc Tuyết Nhi vạn dặm yêu thương, Mỗi nơi đặt bước đều vương tiếng cười.",
    reminder: "20/10 vui vẻ nhá, mong Nhi sẽ đạt được nhiều thành công trong công việc và học tập, giữ sức khoẻ."
  },
  C220: {
    name: "Quỳnh Như",
    wish: "Vườn kia hoa nở nhờ mưa, Tim vui hoa nở chẳng chừa ngày nao. Chúc Quỳnh Như hạnh phúc dâng trào, Bao điều tốt đẹp nối nhau tìm về.",
    reminder: "20/10 vui vẻ nhá, mong Như sẽ luôn cười tươi như lúc còn học chung, học tập và việc làm trở nên thuận lợi hơn."
  },
  C221: {
    name: "Thúy Quỳnh",
    wish: "Hồng khoe sắc thắm, lan khoe hương, Mỗi hoa mỗi vẻ, mỗi phương diệu kỳ. Chúc Thuý Quỳnh cứ sống như ý, Chẳng cần giống bất kỳ ai trên đời.",
    reminder: "20/10 vui vẻ nhá, mong Quỳnh sẽ có 1 cuộc sống học tập và làm việc thuận lợi hơn, giữ sức khoẻ."
  },
  C222: {
    name: "Phương Thanh",
    wish: "Trăm hoa đua nở ngoài vườn, Riêng Phương Thanh tỏa sáng chẳng cần phấn son. Chúc nàng hạnh phúc vuông tròn, Thanh xuân rực rỡ, chẳng còn ưu phiền.",
    reminder: "20/10 vui vẻ nhá, mong Thanh sẽ gặp thêm nhiều người bạn mới tuyệt vời, giữ sức khoẻ."
  },
  C224: {
    name: "Thanh Thảo",
    wish: "Mây xanh gửi nắng lên trời, Mình xin gửi chúc đến người hôm nay. Chúc Thanh Thảo luôn gặp điều may, Mười phần hạnh phúc, đong đầy yêu thương.",
    reminder: "Được Thảo làm lớp trưởng và dẫn dắt làm tui có nhiều kỉ niệm mặc dù khoảng thời gian không dài, mong Thảo sau này giữ gìn sức khoẻ."
  },
  C225: {
    name: "Phương Thảo",
    wish: "Đêm qua hoa nở trong mơ, Sáng nay xin gửi đôi lời thành thơ. Chúc Phương Thảo đẹp tựa nàng thơ, Ước gì được nấy, đợi chờ hóa vui.",
    reminder: "20/10 vui vẻ nhá, mong Thảo sẽ luôn giữ được sự hồn nhiên, biết tận hưởng hiện tại và không ngại mở lòng đón nhận những điều tốt đẹp đang chờ ở phía trước."
  },
  C226: {
    name: "Anh Thư",
    wish: "Mười phân nhan sắc vẹn mười, Mười phần may mắn, nụ cười chẳng phai. Chúc Anh Thư hạnh phúc lâu dài, Học hành tấn tới, tương lai huy hoàng.",
    reminder: "20/10 vui vẻ nhá, mong Thư luôn được làm những điều khiến mình tự hào, được ở cạnh người khiến mình thoải mái và được trân trọng cả khi vui vẻ lẫn lúc chưa ổn."
  },
  C227: {
    name: "Võ Thư",
    wish: "Một phần nhan sắc trời ban, Hai phần duyên dáng, muôn vàn đáng yêu. Chúc Thư may mắn thật nhiều, Mười phần hạnh phúc, vạn điều hanh thông.",
    reminder: "20/10 vui vẻ nhá, mong Thư sẽ gặp nhiều may mắn trong học tập và công việc, giữ gìn sức khoẻ nhá."
  },
  C228: {
    name: "Hoài Thương",
    wish: "May your smile shine brighter than the sun, May your days be filled with joy and fun. Stay lovely, happy, and true, The world is more beautiful because of you!",
    reminder: "20/10 vui vẻ nhá, mong Thương sẽ luôn gặp nhiều may mắn và hạnh phúc, làm được nhiều điều khiến mình tự hào, t muốn solo tiếng anhhhhhhh."
  },
  C229: {
    name: "Phương Thùy",
    wish: "Trời thu khoác áo dịu dàng, Tháng Mười tô điểm sắc vàng trời mây. Chúc Phương Thuỳ xinh đẹp mỗi ngày, Hôm nay tỏa sáng, ngày mai huy hoàng.",
    reminder: "20/10 vui vẻ nhá, mong Thuỳ sẽ gặp được 1 chàng bạch mã hoàng tử tuyệt vời, sau này giàu đừng quên t nha."
  },
  C230: {
    name: "Bích Thùy",
    wish: "May flowers bloom wherever you go, May happiness find you wherever you roam. May all your dreams come shining through, And may the world be kind to you!",
    reminder: "20/10 vui vẻ nhá, mong Thuỳ sẽ đạt được nhiều thứ mà Thuỳ mong muốn, solo tiếng anh lại với ttttttt"
  },
  C231: {
    name: "Ánh Tiên",
    wish: "Ngoài vườn hoa nở vì xuân, Trong tim vui vẻ bởi gần người thương. Chúc Ánh Tiên rạng rỡ muôn phương, Buồn phiền gửi gió, yêu thương giữ hoài.",
    reminder: "20/10 vui vẻ nhá, mong Tiên sẽ gặp được nhiều điều tốt đẹp hơn trong cuộc sống."
  },
  C232: {
    name: "Huyền Trâm",
    wish: "Gửi nàng một nhánh hoa thơm, Gửi thêm lời chúc đẹp hơn nắng vàng. Chúc Huyền Trâm cuộc sống nhẹ nhàng, Tình thân ấm áp, mơ màng tình duyên.",
    reminder: "20/10 vui vẻ nhá, mong Trâm sẽ gặp nhiều niềm vui trên đại học và sẽ học tập suôn sẻ, giữ gìn sức khoẻ."
  },
  C233: {
    name: "Huế Trân",
    wish: "Trăm hoa khoe sắc đua hương, Chúc Huế Trân gặp được người thương thật lòng. Yêu đời, yêu cả mùa đông, Tình duyên cập bến, ấm nồng quanh năm.",
    reminder: "20/10 vui vẻ nhá, Trân là 1 tổ trưởng tuyệt vời, mong Trân sẽ luôn giữ được tinh thần lạc quan và năng lượng tích cực."
  },
  C234: {
    name: "Phương Uyên",
    wish: "Chúc Phương Uyên 20/10 này sẽ hạnh phúc và nhận được nhiều hoa.",
    reminder: "20/10 vui vẻ nhá, cảm ơn vì đã là 1 người bạn cùng bàn tốt với t, giữ gìn sức khoẻ nhá."
  },
  C235: {
    name: "Nhã Vy",
    wish: "Hồng kiêu sa, cúc dịu dàng, Mỗi hoa mỗi sắc, mỗi nàng mỗi duyên. Chúc Nhã Vy hạnh phúc bình yên, Sống theo cách bạn, tự nhiên tỏa ngời.",
    reminder: "20/10 vui vẻ nhá, mong Vy sẽ có một cuộc sống thật sự hạnh phúc và tràn đầy năng lượng."
  },
  C236: {
    name: "Như Ý",
    wish: "Bầu trời rộng có muôn sao, Mỗi người một ánh sáng trao cho đời. Chúc Như Ý cứ mãi rạng ngời, Chẳng cần so sánh với người nào đâu.",
    reminder: "20/10 vui vẻ nhá, mong Ý sẽ bình an, lạc quan và gặp nhiều niềm vui."
  },
  C238: {
    name: "Mỹ Phương",
    wish: "Chẳng cần danh hiệu hoa khôi, Chỉ cần tự thấy mình vui mỗi ngày. Chúc Mỹ Phương luôn vững đôi tay, Tự tin tỏa sáng, tương lai huy hoàng.",
    reminder: "20/10 vui vẻ, mong Phương sẽ luôn giữ mãi nụ cười tươi như hồi cấp 3, thành công nhé."
  },
  C240: {
    name: "Tường Lan",
    wish: "Chúc Tường Lan luôn duyên dáng, hạnh phúc và tràn đầy năng lượng. Mong ngày 20/10 của cậu thật đặc biệt và chặng đường phía trước sẽ có nhiều điều đáng mong chờ.",
    reminder: "Mong cậu luôn có thể sống chậm lại khi cần, lắng nghe bản thân và dành thời gian cho những điều khiến trái tim cảm thấy ấm áp."
  },
  C242: {
    name: "Phương Dung",
    wish: "Trang thiệp khép lại vần thơ, Nhưng lời chúc đẹp vẫn chờ mỗi ngày. Chúc Phương Dung hạnh phúc đong đầy, Hai mươi tháng Mười, vui hoài chẳng quên!",
    reminder: "20/10 vui vẻ nhá, Chúc Dung sẽ thành công trên con đường mình chọn, sẽ giữ mãi được nụ cười tươi hehe."
  },
  HUIT01: {
    name: "Bùi Thị Hiền Hoà",
    wish: "Bầu trời rộng có muôn sao, Mỗi người một ánh sáng trao cho đời. Chúc Hiền Hoà cứ mãi rạng ngời, Chẳng cần so sánh với người nào đâu.",
    reminder: "20/10 vui vẻ nhá, Chúc Hoà sẽ có thêm nhiều kỉ niệm và gặp gỡ thêm nhiều người bạn tốt trên Huit nàyyy"
  },
  HUIT02: {
    name: "Nguyễn Thuỳ Dung",
    wish: "Chim chuyền cành đón bình minh, May mắn gõ cửa, niềm tin ghé nhà. Chúc Thuỳ Dung chẳng ngại đường xa, Bao nhiêu dự định nở hoa đúng mùa.",
    reminder: "20/10 vui vẻ nhá, mong Dung sẽ luôn giữ mãi nụ cười tươi và gặp nhiều may mắn."
  },
  TuongVy: {
    name: "Nguyễn Tường Vy",
    wish: "Trang thiệp khép lại vần thơ, Nhưng lời chúc đẹp vẫn chờ mỗi ngày. Chúc Tường Vy hạnh phúc đong đầy, Hai mươi tháng Mười, vui hoài chẳng quên!",
    reminder: "20/10 vui vẻ nhá, chúc Vy giàu sớm , lấy chồng đại gia nhiều nhà nhiều xe."
  }
};

/* CÀI ĐẶT CHUNG */
const SETTINGS = {
  sender: "",
  defaultReminder: "Nhớ uống đủ nước, ngủ đủ giấc và luôn mỉm cười thật tươi nhé!",
  photoDir: "img/",
  photoExts: ["jpg", "jpeg", "png", "webp"],
  maxPhotos: 8
};

(() => {
  'use strict';

  const $ = (s) => document.querySelector(s);
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const rand = (a, b) => a + Math.random() * (b - a);

  /* HOA RƠI (canvas) */
  const Fx = (() => {
    const canvas = $('#petals');
    const ctx = canvas.getContext('2d');
    let W = 0, H = 0, dpr = 1, last = 0, running = false;
    const parts = [];
    const sprites = { petals: [], blossoms: [], sparks: [] };

    const mk = (s) => { const c = document.createElement('canvas'); c.width = c.height = s; return c; };

    // cánh hoa
    function makePetal(c1, c2, s) {
      const cv = mk(s), g = cv.getContext('2d');
      g.translate(s / 2, s / 2);
      const gr = g.createLinearGradient(0, -s * .42, 0, s * .42);
      gr.addColorStop(0, c1); gr.addColorStop(1, c2);
      g.fillStyle = gr;
      g.beginPath();
      g.moveTo(0, -s * .44);
      g.bezierCurveTo(s * .42, -s * .3, s * .36, s * .26, 0, s * .44);
      g.bezierCurveTo(-s * .36, s * .26, -s * .42, -s * .3, 0, -s * .44);
      g.fill();
      g.strokeStyle = 'rgba(255,255,255,.55)'; g.lineWidth = s * .02;
      g.beginPath(); g.moveTo(0, -s * .3); g.quadraticCurveTo(s * .05, 0, 0, s * .34); g.stroke();
      return cv;
    }

    // bông hoa nhiều lớp
    function makeBlossom(a, b, c, s, layers) {
      const cv = mk(s), g = cv.getContext('2d');
      g.translate(s / 2, s / 2);
      g.shadowColor = 'rgba(255,140,190,.5)'; g.shadowBlur = s * .05;
      for (let L = 0; L < layers; L++) {
        const n = L === 0 ? 6 : 5, r = s * (L === 0 ? .42 : .29);
        for (let i = 0; i < n; i++) {
          g.save();
          g.rotate(i * Math.PI * 2 / n + L * .55);
          const gr = g.createLinearGradient(0, 0, 0, -r);
          gr.addColorStop(0, b); gr.addColorStop(.6, a); gr.addColorStop(1, a);
          g.fillStyle = gr;
          g.beginPath(); g.moveTo(0, 0);
          g.bezierCurveTo(-r * .66, -r * .15, -r * .62, -r * .98, -r * .09, -r * .99);
          g.lineTo(0, -r * .9); g.lineTo(r * .09, -r * .99);
          g.bezierCurveTo(r * .62, -r * .98, r * .66, -r * .15, 0, 0);
          g.fill();
          g.shadowBlur = 0;
          g.strokeStyle = 'rgba(255,255,255,.6)'; g.lineWidth = s * .012; g.stroke();
          g.strokeStyle = 'rgba(214,102,143,.28)';
          g.beginPath(); g.moveTo(0, -r * .12); g.lineTo(0, -r * .7); g.stroke();
          g.restore();
        }
      }
      g.shadowBlur = 0;
      const cg = g.createRadialGradient(0, 0, 0, 0, 0, s * .08);
      cg.addColorStop(0, '#fff7cf'); cg.addColorStop(1, c);
      g.fillStyle = cg; g.beginPath(); g.arc(0, 0, s * .07, 0, 7); g.fill();
      g.strokeStyle = c; g.fillStyle = c; g.lineWidth = s * .009;
      for (let i = 0; i < 12; i++) {
        const an = i * Math.PI * 2 / 12, r1 = s * .06, r2 = s * (.11 + (i % 2) * .02);
        g.beginPath(); g.moveTo(Math.cos(an) * r1, Math.sin(an) * r1); g.lineTo(Math.cos(an) * r2, Math.sin(an) * r2); g.stroke();
        g.beginPath(); g.arc(Math.cos(an) * r2, Math.sin(an) * r2, s * .013, 0, 7); g.fill();
      }
      return cv;
    }

    // sao lấp lánh
    function makeSpark(col, s) {
      const cv = mk(s), g = cv.getContext('2d'), r = s * .4;
      g.translate(s / 2, s / 2);
      const gl = g.createRadialGradient(0, 0, 0, 0, 0, s / 2);
      gl.addColorStop(0, 'rgba(255,255,255,.9)'); gl.addColorStop(.35, col); gl.addColorStop(1, 'rgba(255,255,255,0)');
      g.globalAlpha = .55; g.fillStyle = gl; g.beginPath(); g.arc(0, 0, s / 2, 0, 7); g.fill();
      g.globalAlpha = 1; g.fillStyle = '#fff';
      g.beginPath();
      g.moveTo(0, -r); g.quadraticCurveTo(0, 0, r, 0); g.quadraticCurveTo(0, 0, 0, r);
      g.quadraticCurveTo(0, 0, -r, 0); g.quadraticCurveTo(0, 0, 0, -r); g.fill();
      return cv;
    }

    function buildSprites() {
      const pal = [['#fff2f7', '#ffb2cf'], ['#ffe3ee', '#f48fb1'], ['#ffffff', '#f8c8dc'],
                   ['#f3e8ff', '#c9a6ff'], ['#fff0e0', '#ffc4a3'], ['#ffeaf3', '#ff9ec4']];
      pal.forEach(([a, b]) => sprites.petals.push(makePetal(a, b, 72)));
      sprites.blossoms.push(
        makeBlossom('#fff3f8', '#ffa6c6', '#f0a53c', 168, 2),
        makeBlossom('#ffe6f0', '#f782ac', '#f4b84a', 168, 2),
        makeBlossom('#f6edff', '#b995ff', '#f4b84a', 168, 2),
        makeBlossom('#fff1e6', '#ffb08a', '#e8923a', 168, 2),
        makeBlossom('#ffffff', '#ffc2da', '#f4b84a', 168, 1)
      );
      ['#fff1b0', '#ffd6e7', '#e6dbff'].forEach((c) => sprites.sparks.push(makeSpark(c, 48)));
    }

    const pick = (arr) => arr[(Math.random() * arr.length) | 0];
    const small = () => W < 600;

    function spawn(initial) {
      const t = Math.random();
      const kind = t < .6 ? 'petal' : t < .86 ? 'blossom' : 'spark';
      const k = small() ? .8 : 1;
      let size, img;
      if (kind === 'petal') { size = rand(16, 32) * k; img = pick(sprites.petals); }
      else if (kind === 'blossom') { size = rand(30, 62) * k; img = pick(sprites.blossoms); }
      else { size = rand(12, 26) * k; img = pick(sprites.sparks); }
      parts.push({
        kind, img, size,
        x: rand(-.05, 1.05) * W, y: initial ? rand(0, H) : rand(-90, -20),
        vy: kind === 'spark' ? rand(14, 34) : rand(28, 72) * (size > 40 ? .75 : 1),
        vx: rand(-10, 14), amp: rand(14, 46), ph: rand(0, 6.28), sw: rand(.6, 1.5),
        rot: rand(0, 6.28), vr: rand(-1.2, 1.2), fl: rand(0, 6.28), vf: rand(1, 3),
        a: kind === 'spark' ? 1 : rand(.72, .98), burst: false
      });
    }

    function burst(x, y, n) {
      for (let i = 0; i < n; i++) {
        const kind = Math.random() < .55 ? 'petal' : Math.random() < .6 ? 'blossom' : 'spark';
        const img = kind === 'petal' ? pick(sprites.petals) : kind === 'blossom' ? pick(sprites.blossoms) : pick(sprites.sparks);
        const size = kind === 'blossom' ? rand(26, 48) : kind === 'petal' ? rand(14, 28) : rand(12, 24);
        const an = rand(0, Math.PI * 2), sp = rand(140, 460);
        parts.push({
          kind, img, size, x, y,
          vx: Math.cos(an) * sp, vy: Math.sin(an) * sp - 160,
          amp: 0, ph: 0, sw: 0, rot: rand(0, 6.28), vr: rand(-4, 4), fl: rand(0, 6.28), vf: rand(2, 5),
          a: 1, burst: true, ttl: rand(1.8, 3.2), life: 0
        });
      }
    }

    // số hoa rơi cùng lúc (giảm số nếu máy yếu)
    function baseCount() { return reduceMotion ? 10 : small() ? 26 : 56; }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth; H = window.innerHeight;
      canvas.width = W * dpr; canvas.height = H * dpr;
    }

    function frame(t) {
      if (!running) return;
      const dt = Math.min((t - last) / 1000, .05); last = t;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let calm = 0;
      for (let i = parts.length - 1; i >= 0; i--) {
        const p = parts[i];
        if (p.burst) {
          p.life += dt;
          p.vx *= Math.pow(.985, dt * 60); p.vy = p.vy * Math.pow(.985, dt * 60) + 230 * dt;
          p.x += p.vx * dt; p.y += p.vy * dt;
          p.a = Math.max(0, 1 - p.life / p.ttl);
          if (p.life >= p.ttl) { parts.splice(i, 1); continue; }
        } else {
          calm++;
          p.ph += p.sw * dt;
          p.y += p.vy * dt;
          p.x += (p.vx + Math.cos(p.ph) * p.amp) * dt;
          if (p.y > H + 90 || p.x < -120 || p.x > W + 120) { parts.splice(i, 1); continue; }
        }
        p.rot += p.vr * dt; p.fl += p.vf * dt;

        let sx = 1, sy = 1, al = p.a;
        if (p.kind === 'petal') sx = .3 + .7 * Math.abs(Math.cos(p.fl));
        else if (p.kind === 'blossom') { sx = .72 + .28 * Math.abs(Math.cos(p.fl)); sy = .85 + .15 * Math.abs(Math.sin(p.fl * .7)); }
        else al = p.a * (.35 + .65 * Math.abs(Math.sin(p.fl)));

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.globalAlpha = al;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.scale(sx, sy);
        ctx.drawImage(p.img, -p.size / 2, -p.size / 2, p.size, p.size);
      }
      ctx.globalAlpha = 1;

      // bù hoa rơi liên tục
      const need = baseCount() - calm;
      for (let k = 0; k < need && k < 2; k++) spawn(false);

      requestAnimationFrame(frame);
    }

    function start() {
      if (running) return;
      running = true; last = performance.now();
      requestAnimationFrame(frame);
    }

    function init() {
      buildSprites(); resize();
      for (let i = 0; i < baseCount(); i++) spawn(true);
      start();
      let lw = W;
      window.addEventListener('resize', () => {
        if (Math.abs(window.innerWidth - lw) > 40 || Math.abs(window.innerHeight - H) > 140) { lw = window.innerWidth; resize(); }
      });
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) running = false; else start();
      });
    }

    return {
      init, burst,
      blossomURL: (i) => sprites.blossoms[i % sprites.blossoms.length].toDataURL('image/png')
    };
  })();

  /* STICKER (SVG) */
  const FACE = `<circle cx="%x1" cy="%y" r="3.2" fill="#6b3a52"/><circle cx="%x2" cy="%y" r="3.2" fill="#6b3a52"/>
    <ellipse cx="%bx1" cy="%by" rx="5" ry="3" fill="#ff8fb1" opacity=".7"/><ellipse cx="%bx2" cy="%by" rx="5" ry="3" fill="#ff8fb1" opacity=".7"/>
    <path d="M%m1 %my q6 7 12 0" stroke="#6b3a52" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;
  const face = (x1, x2, y, by, my) => FACE
    .replace(/%x1/g, x1).replace(/%x2/g, x2).replace(/%y/g, y)
    .replace(/%bx1/g, x1 - 6).replace(/%bx2/g, x2 + 6).replace(/%by/g, by)
    .replace(/%m1/g, ((x1 + x2) / 2) - 6).replace(/%my/g, my);

  const STICKERS = [
    // hoa
    `<svg viewBox="0 0 100 100"><g fill="#ffb3cf"><circle cx="50" cy="20" r="17"/><circle cx="79" cy="41" r="17"/><circle cx="68" cy="75" r="17"/><circle cx="32" cy="75" r="17"/><circle cx="21" cy="41" r="17"/></g><circle cx="50" cy="52" r="26" fill="#ffe08a"/>${face(41, 59, 49, 58, 57)}</svg>`,
    // tim
    `<svg viewBox="0 0 100 100"><path d="M50 88C18 64 8 44 14 28 20 13 41 12 50 28 59 12 80 13 86 28 92 44 82 64 50 88Z" fill="#ff8fb1"/><path d="M26 30q4-8 12-6" stroke="#fff" stroke-width="4" stroke-linecap="round" fill="none" opacity=".7"/>${face(38, 62, 46, 55, 54)}</svg>`,
    // sao
    `<svg viewBox="0 0 100 100"><polygon points="50,6 62,35 93,38 69,58 77,89 50,72 23,89 31,58 7,38 38,35" fill="#ffd36e" stroke="#ffd36e" stroke-width="6" stroke-linejoin="round"/>${face(42, 58, 50, 58, 57)}</svg>`,
    // mây
    `<svg viewBox="0 0 100 100"><g fill="#d9c8ff"><circle cx="34" cy="58" r="20"/><circle cx="58" cy="46" r="25"/><circle cx="78" cy="62" r="16"/><rect x="22" y="58" width="64" height="20" rx="10"/></g>${face(44, 66, 58, 66, 66)}</svg>`
  ];

  /* TIỆN ÍCH */
  const params = new URLSearchParams(location.search);
  const rawId = (params.get('id') || '').trim().toUpperCase();

  function showSection(id) { $(id).classList.remove('hidden'); }

  // mỗi chữ 1 span, mỗi từ không bị ngắt dòng
  function prepareText(el, text) {
    el.textContent = '';
    const frag = document.createDocumentFragment();
    const chars = [];
    text.normalize('NFC').split(/(\s+)/).forEach((tok) => {
      if (!tok) return;
      if (/^\s+$/.test(tok)) { frag.appendChild(document.createTextNode(' ')); return; }
      const w = document.createElement('span'); w.className = 'word';
      for (const ch of tok) {
        const s = document.createElement('span'); s.className = 'ch'; s.textContent = ch;
        w.appendChild(s); chars.push(s);
      }
      frag.appendChild(w);
    });
    el.appendChild(frag);
    return chars;
  }

  let runId = 0;
  function typeChars(chars, my) {
    return new Promise((res) => {
      let i = 0;
      const step = () => {
        if (my !== runId || i >= chars.length) return res();
        const c = chars[i++];
        c.classList.add('on');
        const t = c.textContent;
        const d = reduceMotion ? 3 : /[,.!?;:]/.test(t) ? 220 : 44;
        if (!reduceMotion && i % 12 === 0) {
          const r = c.getBoundingClientRect();
          if (r.bottom > window.innerHeight - 90) window.scrollBy({ top: 90, behavior: 'smooth' });
        }
        setTimeout(step, d);
      };
      step();
    });
  }

  /* ẢNH: tự dò file, tự căn đều */
  const probe = (url) => new Promise((res) => {
    const im = new Image();
    im.onload = () => res(url);
    im.onerror = () => res(null);
    im.src = url;
  });

  async function findPhotos(id) {
    const list = [];
    for (let i = 1; i <= SETTINGS.maxPhotos; i++) {
      const names = i === 1 ? [`${id}-1`, `${id}`] : [`${id}-${i}`];
      const tries = [];
      names.forEach((n) => SETTINGS.photoExts.forEach((e) => tries.push(probe(`${SETTINGS.photoDir}${n}.${e}`))));
      const found = (await Promise.all(tries)).find(Boolean);
      if (!found) break;
      list.push(found);
    }
    return list;
  }

  function buildGallery(photos, name) {
    const g = $('#gallery');
    g.innerHTML = '';
    const n = photos.length;

    // không có ảnh: khung hoa mặc định
    if (n === 0) {
      g.dataset.cols = '1';
      const f = document.createElement('figure');
      f.className = 'photo placeholder';
      f.style.setProperty('--i', 0);
      const ph = document.createElement('div'); ph.className = 'ph';
      const fl = document.createElement('img'); fl.className = 'ph-flower'; fl.alt = '';
      fl.src = Fx.blossomURL(Math.abs(hash(name)) % 5);
      ph.appendChild(fl);
      const cap = document.createElement('div'); cap.className = 'ph-cap';
      cap.textContent = 'Một đóa hoa dành cho ' + name.split(' ').slice(-1)[0];
      f.append(ph, cap); g.appendChild(f);
      return;
    }

    // 1 ảnh = 1 cột, 2-4 = 2 cột, 5+ = 3 cột (điện thoại tối đa 2)
    g.dataset.cols = n === 1 ? '1' : n <= 4 ? '2' : '3';
    photos.forEach((src, i) => {
      const f = document.createElement('figure');
      f.className = 'photo'; f.style.setProperty('--i', i);
      const im = document.createElement('img');
      im.src = src; im.alt = 'Ảnh của ' + name; im.decoding = 'async';
      im.addEventListener('error', () => f.remove());
      f.appendChild(im); g.appendChild(f);
    });
  }

  function hash(s) { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return h; }

  /* TRANG LỖI / DANH SÁCH (?list) */
  function showNotFound() {
    $('#stage').classList.add('hidden');
    showSection('#notFound');
    $('#nfText').textContent = rawId
      ? `Mã "${rawId}" chưa có trong danh sách. Bạn kiểm tra lại đường dẫn hoặc quét lại mã QR nhé.`
      : 'Bạn hãy quét mã QR hoặc mở đường dẫn được gửi nhé.';
  }
  function showList() {
    $('#stage').classList.add('hidden');
    showSection('#notFound');
    $('#nfTitle').textContent = 'Danh sách đường dẫn';
    $('#nfText').textContent = `Có ${Object.keys(FRIENDS).length} thiệp.`;
    const ul = $('#nfList');
    Object.entries(FRIENDS).forEach(([id, d]) => {
      const li = document.createElement('li');
      const a = document.createElement('a'); a.href = '?id=' + id; a.textContent = `${id} – ${d.name.trim()}`;
      li.appendChild(a); ul.appendChild(li);
    });
  }

  /* CHẠY CHÍNH */
  async function main() {
    Fx.init();

    if (params.has('list')) return showList();
    const data = FRIENDS[rawId];
    if (!data) return showNotFound();

    const name = data.name.trim();
    const wish = (data.wish || '').trim();
    const reminder = (data.reminder || '').trim() || SETTINGS.defaultReminder;

    document.title = 'Thiệp 20/10 · ' + name;
    $('#envName').textContent = name;
    $('#letterName').textContent = name;
    $('#toName').textContent = name;

    // tải ảnh ngầm khi còn ở màn phong bì
    const photosPromise = findPhotos(rawId);

    const wishChars = prepareText($('#wish'), wish);
    const remChars = prepareText($('#reminder'), reminder);
    const noteBox = $('#noteBox'), sign = $('#sign'), gallery = $('#gallery');

    if (SETTINGS.sender) sign.textContent = SETTINGS.sender;
    else sign.classList.add('hidden');

    // hoa 4 góc + sticker
    ['c-tl', 'c-tr', 'c-bl', 'c-br'].forEach((c, i) => { document.querySelector('.' + c).src = Fx.blossomURL(i); });
    $('#stickers').innerHTML = STICKERS.map((s, i) => `<div class="sticker s${i + 1}">${s}</div>`).join('');

    // chữ hiện lần lượt: lời chúc, nhắc nhỏ, thử thách
        // chữ hiện lần lượt: lời chúc, rồi nhắc nhỏ
    async function playText() {
      const my = ++runId;
      wishChars.concat(remChars).forEach((c) => c.classList.remove('on'));
      noteBox.classList.remove('in'); sign.classList.remove('in');
      await typeChars(wishChars, my); if (my !== runId) return;
      noteBox.classList.add('in'); await sleep(450); if (my !== runId) return;
      await typeChars(remChars, my); if (my !== runId) return;
      sign.classList.add('in');
    }

    // mở phong bì
    const env = $('#envelope');
    let opened = false;
    async function openEnvelope() {
      if (opened) return; opened = true;
      env.classList.add('open');
      const r = env.getBoundingClientRect();
      Fx.burst(r.left + r.width / 2, r.top + r.height * .55, 70);
      $('.tap').style.visibility = 'hidden';

      const photos = await Promise.all([photosPromise, sleep(2300)]).then((v) => v[0]);
      buildGallery(photos, name);

      $('#stage').classList.add('leave');
      await sleep(700);
      $('#stage').classList.add('hidden');
      showSection('#cardStage');
      window.scrollTo(0, 0);
      requestAnimationFrame(() => {
        $('#cardStage').classList.add('show');
        Fx.burst(window.innerWidth / 2, window.innerHeight * .35, 110);
      });
      await sleep(900);
      gallery.classList.add('in');
      await sleep(photos.length ? 900 : 500);
      playText();
    }
    env.addEventListener('click', openEnvelope);
    env.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openEnvelope(); } });

    // nút xem lại
    $('#replay').addEventListener('click', (e) => {
      const r = e.currentTarget.getBoundingClientRect();
      Fx.burst(r.left + r.width / 2, r.top, 90);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(playText, 500);
    });
  }

  main();
})();