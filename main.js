function toast({
    title = '',
    message = '',
    type = '',
    duration = 3000,
}) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');
        
        main.appendChild(toast);

        const autoRemoved = setTimeout(function() {
        main.removeChild(toast);      // ấn x đê tắt
        }, duration + 1000)

        toast.onclick = function(e) {
            if(e.target.closest('.toast_close')) {
                main.removerChild(toast);
            }
        }
        const delay = (duration / 1000).toFixed(2);
        toast.classList.add('toast', `toast__${type}`);
        toast.style.animation = ` animation: slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards;`
        toast.innerHTML = `
        <div class="toast__icon">
        <i class="fas fa-check"></i>
        </div>
        <div class="toast__body">
        <h3 class='toast__title'>${title}</h3>
        <p class='toast__msg'>${message}</p>
        </div>
        <div class='toast__close'>
        <i class="fas fa-times"></i>
        </div>
        `;

    }
}

function showSuccessToast() {
    toast({
    title: 'Success',
    message: "đã kết nối thành công vào internet",
    type: 'success',
    duration: 5000,
    })
}