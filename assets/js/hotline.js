const hotlineButton = document.getElementById('draggable-hotline');

let isDragging = false;
let hasMoved = false;
let offsetX, offsetY;



// Bắt đầu kéo (trên điện thoại)
hotlineButton.addEventListener(
  'touchstart',
  e => {
    isDragging = true;
    hasMoved = false;

    const touch = e.touches[0];
    offsetX = touch.clientX - hotlineButton.getBoundingClientRect().left;
    offsetY = touch.clientY - hotlineButton.getBoundingClientRect().top;

    hotlineButton.style.transition = 'none';
  },
  { passive: false },
);


// Đang kéo (trên điện thoại)
document.addEventListener(
  'touchmove',
  e => {
    if (!isDragging) return;
    hasMoved = true;
    e.preventDefault();

    const touch = e.touches[0];
    let newX = touch.clientX - offsetX;
    let newY = touch.clientY - offsetY;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const buttonWidth = hotlineButton.offsetWidth;
    const buttonHeight = hotlineButton.offsetHeight;

    newX = Math.max(0, Math.min(newX, screenWidth - buttonWidth));
    newY = Math.max(0, Math.min(newY, screenHeight - buttonHeight));

    hotlineButton.style.left = `${newX}px`;
    hotlineButton.style.top = `${newY}px`;
    hotlineButton.style.right = 'auto';
    hotlineButton.style.bottom = 'auto';
  },
  { passive: false },
);

// Thả nút
const stopDragging = () => {
  isDragging = false;
  hotlineButton.style.transition = 'box-shadow 0.2s'; // Bật lại transition
};

document.addEventListener('mouseup', stopDragging);
document.addEventListener('touchend', stopDragging);
dragElement(hotlineButton)

// Xử lý sự kiện click: chỉ thực hiện hành động khi không kéo
hotlineButton.addEventListener('click', e => {
  // Nếu nút đã bị kéo, ngăn hành động mặc định (gọi điện)
  if (hasMoved) {
    e.preventDefault();
  }
});
