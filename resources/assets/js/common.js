$(document).ready(function () {
    $("#header").append(Header());

    function Header() {
        return `
        <div class="container">
        <a href="메인.html" class="header-logo">
            <img src="img/logo.png" alt="">
        </a>
        <nav class="navber">
            <ul>
                <li><a href="#">회원</a></li>
                <li><a href="#">그린티관리</a></li>
                <li><a href="#">락업관리</a></li>
                <li><a href="#">원화관리</a></li>
                <li><a href="#">알림관리</a></li>
                <li><a href="#">관리자</a></li>
            </ul>
        </nav>
    </div>
    `;
    }

    // 모달 열기 버튼 클릭 이벤트
    $(".open-modal").click(function () {
        var modalId = $(this).data("modal-id");
        $("#" + modalId).addClass("active");
        $("body").css("overflow", "hidden");
    });
    // 모달 닫기 버튼 및 모달 바깥 영역 클릭 이벤트
    $(".btn-modal-close, .modal-wrap").click(function () {
        $(".modal-wrap").removeClass("active");
        $("body").css("overflow", "auto");
    });
    // 모달 내부 클릭 시 닫기 방지
    $(".modal-content").click(function (e) {
        e.stopPropagation();
    });

});

class MobilePopup {
    constructor(popupId) {
        this.popupId = popupId;
        this.openBtn = $(`.open-popup-btn[data-popup-id="${popupId}"]`);
        this.closeBtn = $(`.close-popup-btn[data-popup-id="${popupId}Close"]`);
        this.popupContainer = $(`#${popupId}`);
        this.popupContent = this.popupContainer.find('.popup-content');

        this.setupEvents();
    }

    setupEvents() {
        this.openBtn.on('click', () => this.openPopup());
        this.closeBtn.on('click', () => this.closePopup());
    }

    openPopup() {
        this.popupContainer.css('display', 'block');
        setTimeout(() => {
            this.popupContent.css('transform', 'translateY(0)');
        }, 10);
    }

    closePopup() {
        this.popupContent.css('transform', 'translateY(100%)');
        setTimeout(() => {
            this.popupContainer.css('display', 'none');
        }, 300);
    }
}

$(document).ready(function () {
    const gradePopup = new MobilePopup('gradePopup');
    const productCategoryPopup = new MobilePopup('productCategoryPopup');
    const popuperiodPopupp2 = new MobilePopup('periodPopup');
});