/* =====================================================
FIN APPS
Application Database
===================================================== */

const apps = {

```
/* =================================================
   FIN - QUẢN LÝ CHI TIÊU
================================================= */

expense: {

    name: "Fin",

    subtitle: "Quản lý chi tiêu cá nhân",

    category: "Tài chính",

    version: "1.0",

    icon: "images/expense-icon.png",

    description:
        "Fin là ứng dụng quản lý chi tiêu cá nhân giúp bạn theo dõi thu nhập, chi tiêu, quản lý nhiều ví và hiểu rõ hơn về tình hình tài chính của mình.",

    features: [

        {
            icon: "⚡",
            title: "Ghi chép nhanh",
            text:
                "Ghi lại các khoản thu nhập và chi tiêu hàng ngày chỉ với vài thao tác."
        },

        {
            icon: "💰",
            title: "Quản lý nhiều ví",
            text:
                "Theo dõi tiền mặt, tài khoản ngân hàng và các nguồn tài chính tại một nơi."
        },

        {
            icon: "📊",
            title: "Báo cáo trực quan",
            text:
                "Phân tích các khoản chi tiêu bằng biểu đồ và thống kê trực quan."
        },

        {
            icon: "☁️",
            title: "Sao lưu dữ liệu",
            text:
                "Hỗ trợ sao lưu và khôi phục dữ liệu để giúp bạn bảo vệ thông tin tài chính."
        },

        {
            icon: "🔎",
            title: "Tìm kiếm và bộ lọc",
            text:
                "Dễ dàng tìm lại giao dịch và lọc lịch sử theo nhu cầu."
        },

        {
            icon: "📁",
            title: "Xuất dữ liệu",
            text:
                "Hỗ trợ xuất dữ liệu để bạn có thể lưu trữ và quản lý thông tin."
        }

    ],

    screenshots: [

        "images/expense-screen1.png",
        "images/expense-screen2.png",
        "images/expense-screen3.png",
        "images/expense-screen4.png"

    ],

    playStore:
        "https://play.google.com/store/apps/details?id=com.trinhtrung.qlct&pcampaignid=web_share"

},


/* =================================================
   FIN - QUẢN LÝ MẬT KHẨU
================================================= */

password: {

    name: "Fin",

    subtitle: "Quản lý mật khẩu",

    category: "Công cụ",

    version: "1.0",

    icon: "images/password-icon.png",

    description:
        "Fin - Quản lý mật khẩu giúp bạn lưu trữ và quản lý tài khoản, mật khẩu một cách thuận tiện, với các cơ chế bảo vệ dữ liệu được tích hợp ngay trên thiết bị.",

    features: [

        {
            icon: "🔐",
            title: "Mã hóa AES",
            text:
                "Dữ liệu tài khoản và mật khẩu được bảo vệ bằng cơ chế mã hóa mạnh."
        },

        {
            icon: "🔢",
            title: "Bảo vệ bằng PIN",
            text:
                "Sử dụng mã PIN để hạn chế truy cập trái phép vào dữ liệu."
        },

        {
            icon: "👆",
            title: "Sinh trắc học",
            text:
                "Hỗ trợ xác thực sinh trắc học trên các thiết bị tương thích."
        },

        {
            icon: "🔎",
            title: "Tìm kiếm nhanh",
            text:
                "Nhanh chóng tìm kiếm tài khoản và thông tin đăng nhập."
        },

        {
            icon: "💾",
            title: "Sao lưu và khôi phục",
            text:
                "Cho phép sao lưu và khôi phục dữ liệu đã được bảo vệ."
        },

        {
            icon: "🛡️",
            title: "Tập trung vào quyền riêng tư",
            text:
                "Thiết kế hướng đến việc bảo vệ dữ liệu cá nhân của người dùng."
        }

    ],

    screenshots: [

        "images/password-screen1.png",
        "images/password-screen2.png",
        "images/password-screen3.png"

    ],

    playStore:
        "https://play.google.com/store/apps/details?id=com.trinhtrung.accountmanagement&pcampaignid=web_share"

}
```

};

/* =====================================================
HOME PAGE
===================================================== */

function renderApps() {

```
const container = document.getElementById("appsGrid");

if (!container) return;


container.innerHTML = "";


Object.keys(apps).forEach(id => {

    const app = apps[id];


    const card = document.createElement("a");

    card.href = `app.html?app=${id}`;

    card.className = "app-card";


    card.innerHTML = `

        <div class="app-card-top">

            <img
                src="${app.icon}"
                alt="${app.name} - ${app.subtitle}"
                class="app-icon"
            >

            <span class="app-category">
                ${app.category}
            </span>

        </div>


        <div class="app-card-content">

            <h3>
                ${app.name}
            </h3>

            <h4>
                ${app.subtitle}
            </h4>

            <p>
                ${app.description}
            </p>

        </div>


        <div class="app-card-footer">

            <span>
                Xem chi tiết
            </span>

            <span class="arrow">
                →
            </span>

        </div>

    `;


    container.appendChild(card);

});
```

}

/* =====================================================
APPLICATION DETAIL PAGE
===================================================== */

function renderAppDetail() {

```
const container =
    document.getElementById("appDetail");

if (!container) return;


const params =
    new URLSearchParams(window.location.search);

const id =
    params.get("app");


const app =
    apps[id];


if (!app) {

    container.innerHTML = `

        <section class="not-found">

            <h1>Không tìm thấy ứng dụng</h1>

            <p>
                Ứng dụng bạn đang tìm kiếm không tồn tại.
            </p>

            <a href="index.html" class="primary-button">
                ← Quay lại ứng dụng
            </a>

        </section>

    `;

    return;

}


document.title =
    `${app.name} - ${app.subtitle} | Fin Apps`;


container.innerHTML = `

    <!-- APP HERO -->

    <section class="app-hero">

        <div class="app-hero-inner">

            <img
                src="${app.icon}"
                alt="${app.name}"
                class="app-detail-icon"
            >


            <div class="app-hero-info">

                <span class="section-label">
                    ${app.category}
                </span>

                <h1>
                    ${app.name}
                </h1>

                <h2>
                    ${app.subtitle}
                </h2>

                <p>
                    ${app.description}
                </p>


                <div class="app-actions">

                    <a
                        href="${app.playStore}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="play-button"
                    >

                        <span class="play-symbol">▶</span>

                        <span>
                            <small>Tải ứng dụng trên</small>
                            Google Play
                        </span>

                    </a>

                </div>

            </div>

        </div>

    </section>


    <!-- FEATURES -->

    <section class="detail-section">

        <div class="section-heading">

            <div>

                <span class="section-label">
                    TÍNH NĂNG
                </span>

                <h2>
                    Mọi thứ bạn cần
                </h2>

            </div>

        </div>


        <div class="features-grid">

            ${app.features.map(feature => `

                <div class="feature-card">

                    <div class="feature-icon">
                        ${feature.icon}
                    </div>

                    <h3>
                        ${feature.title}
                    </h3>

                    <p>
                        ${feature.text}
                    </p>

                </div>

            `).join("")}

        </div>

    </section>


    <!-- SCREENSHOTS -->

    <section class="screenshots-section">

        <div class="section-heading">

            <div>

                <span class="section-label">
                    GIAO DIỆN
                </span>

                <h2>
                    Khám phá ứng dụng
                </h2>

            </div>

        </div>


        <div class="screenshots">

            ${app.screenshots.map(image => `

                <div class="screenshot">

                    <img
                        src="${image}"
                        alt="${app.name} screenshot"
                        loading="lazy"
                    >

                </div>

            `).join("")}

        </div>

    </section>


    <!-- DOWNLOAD -->

    <section class="download-section">

        <div>

            <span class="section-label">
                GOOGLE PLAY
            </span>

            <h2>
                Sẵn sàng trải nghiệm?
            </h2>

            <p>
                Tải ${app.name} - ${app.subtitle}
                ngay từ Google Play.
            </p>

        </div>


        <a
            href="${app.playStore}"
            target="_blank"
            rel="noopener noreferrer"
            class="play-button large"
        >

            <span class="play-symbol">
                ▶
            </span>

            <span>

                <small>
                    TẢI XUỐNG TRÊN
                </small>

                Google Play

            </span>

        </a>

    </section>

`;
```

}

/* =====================================================
START
===================================================== */

document.addEventListener(
"DOMContentLoaded",
() => {

```
    renderApps();

    renderAppDetail();

}
```

);
