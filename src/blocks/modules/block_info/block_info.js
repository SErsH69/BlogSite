const BlockInfo = class BlockInfo {
    constructor(){}
    infoInit() {
        document.addEventListener('DOMContentLoaded', function() {
            const blockInfo = document.querySelector('.block_info');
            const closeButton = document.querySelector('.close-js');
        
            // Check if the block is hidden in local storage
            if (localStorage.getItem('blockInfoHidden') === 'true') {
                blockInfo.classList.add('isHidden');
            }
        
            // Add click event to close button
            closeButton.addEventListener('click', function() {
                blockInfo.classList.add('isHidden');
                localStorage.setItem('blockInfoHidden', 'true');
            });
        });
    }
    init() {
        this.infoInit();
    }
}

export default BlockInfo;