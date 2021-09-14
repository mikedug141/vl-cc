function toast ( {
    title = '';
    message = '';
    type = 'info';
    duration = 3000;
} ) {
    const main = document.getElementsById('toast');
    if (main) {
        const toast = document.createElement('div');
        toast.classList.add('toast');
        toast.innerHTML = `
        <div class="toast__icon">;
        <i class="fas fa-check"></i>;
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title} </h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fas fa-times"></i>
                </div> 
                `;
                main.appendChild(toast);
    }
}
toast ({
    title: 'success';
    message: 'vô đi nhó';
    type: 'success';
    duration: 3000
});