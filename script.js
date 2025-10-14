$(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $("#header").addClass("scrolled");
      } else {
        $("#header").removeClass("scrolled");
      }

      // Parallax background effect
      let scrollTop = $(this).scrollTop();
      $(".hero").css("background-position", "center " + scrollTop * 0.4 + "px");
    });

document.addEventListener("DOMContentLoaded", function () {
   const modalOverlay = document.getElementById("payment-method-modal");
        const openModalBtn = document.getElementById("open-payment-modal-btn");
        // Tìm nút đóng và hủy bằng class đã đặt tên
        const closeBtn = document.querySelector(".payment-modal-close");
        const cancelBtn = document.querySelector(".payment-modal-cancel-btn");

        // Hàm để mở modal
        function openModal() {
            closeModalBooking(); // Đóng modal đặt phòng sau khi chọn
            modalOverlay.style.display = "flex";
        }

        // Hàm để đóng modal
        function closeModal() {
            modalOverlay.style.display = "none";
        }

        // Gán sự kiện click cho các nút
        openModalBtn.addEventListener("click", openModal);
        closeBtn.addEventListener("click", closeModal);
        cancelBtn.addEventListener("click", closeModal);

        // Đóng modal khi người dùng click ra ngoài vùng nội dung modal
        window.addEventListener("click", function(event) {
            if (event.target === modalOverlay) {
                closeModal();
            }
        });

      const bookingModal = document.getElementById('bookingModal');
      function closeModalBooking() {
        bookingModal.classList.remove('active');
      }

        // Tùy chọn: Thêm hành động khi một phương thức được chọn
        const paymentOptions = document.querySelectorAll('.payment-option-item');
        paymentOptions.forEach(option => {
            option.addEventListener('click', () => {
                console.log('Đã chọn phương thức:', option.id);
                // Ở đây bạn có thể thêm logic chuyển hướng hoặc xử lý tiếp theo
                closeModal(); // Đóng modal sau khi chọn
            });
        });
})