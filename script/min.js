//page_ local_brand
$(window).on("load", function () {
    // 페이지가 로드되면 탭 스와이프 초기화 함수를 호출합니다.
    initTabSwipers();
});

function initTabSwipers() {
    $(".local_swiper").each(function (index) {
        const $container = $(this);

        // 각 탭 스와이프 컨테이너에 클래스를 추가합니다.
        $container.addClass(`local_swiper_${index}`);

        // Swiper 라이브러리를 사용하여 탭 스와이프를 초기화합니다.
        const swiper = new Swiper(`.local_swiper_${index}`, {
            slidesPerView: "auto",
            preventClicks: true,
            preventClicksPropagation: false,
            observer: true, // 슬라이드 변경 관찰 활성화
            observeParents: true // 부모 요소의 변경도 관찰
        });

        // 탭 항목이 클릭 되면 실행할 함수를 연결합니다.
        $container.on("click", ".swiper-slide.keyword_t botton", function (e) {
            e.preventDefault();
            const $item = $(this).parent();

            // 클릭 된 항목을 활성 상태로 표시하고 나머지 항목 비활성화
            $container.find(".swiper-slide.keyword_t").removeClass("active");
            $item.addClass("active");

            // 클릭한 항목을 가운데 정렬하는 함수 호출
            centerTabItem($item);
        });

        // 페이지 로드 후에 active 클래스가 있는 항목을 가운데 정렬
        const $activeItem = $container.find(".swiper-slide.keyword_t.active");
        if ($activeItem.length > 0) {
            centerTabItem($activeItem);
        }

        function centerTabItem($target) {
            const $wrapper = $container.find(".swiper-wrapper.keyword");
            const targetPos = $target.position();
            const containerWidth = $container.width();
            let newPosition = 0;
            let listWidth = 0;

            // 모든 슬라이드의 너비를 합산하여 리스트 전체 너비 계산
            $wrapper.find(".swiper-slide.keyword_t").each(function () {
                listWidth += $(this).outerWidth();
            });

            // 클릭한 항목을 가운데 정렬하기 위한 위치 계산
            const selectTargetPos = targetPos.left + $target.outerWidth() / 2;
            if (containerWidth < listWidth) {
                if (selectTargetPos <= containerWidth / 2) {
                    newPosition = 0; // 왼쪽
                } else if (listWidth - selectTargetPos <= containerWidth / 2) {
                    newPosition = listWidth - containerWidth; // 오른쪽
                } else {
                    newPosition = selectTargetPos - containerWidth / 2;
                }
            }

            // 슬라이드를 새 위치로 이동시키는 애니메이션 설정
            $wrapper.css({
                transform: `translate3d(${-newPosition}px, 0, 0)`,
                "transition-duration": "500ms"
            });
        }
    });
}
