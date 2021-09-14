function toast ( {
    title:''
    message: '';
    type: 'info'
    duration = 3000
} ) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');

        toast.classList.add('toast');

        toast.innerHTML = `
            <div class="toast toast__success">
            <div class="toast__icon">
                <i class="fas fa-check"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">succedfull</h3>
                <p calss="toast__msg">đã được kết nối</p>
            </div>
            <div class="toast__close">
                <i class="fas fa-times"></i>
            </div>
        `;
        main.appendChild(toast)
    }
}

toast( {
    title: 'success';
    message: 'thành công';
    type: 'success';
    duration = 3000
});