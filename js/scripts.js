document.addEventListener('DOMContentLoaded', function() {
    // 캐릭터 카드 클릭 이벤트 처리
    const characterCards = document.querySelectorAll('.character-card');
    
    characterCards.forEach(card => {
        card.addEventListener('click', function() {
            const character = this.getAttribute('data-character');
            window.location.href = `${character}.html`;
        });
    });
    
    // 카드에 호버 효과 추가
    characterCards.forEach(card => {
        const character = card.getAttribute('data-character');
        
        // 캐릭터별 호버 효과 커스터마이징
        card.addEventListener('mouseenter', function() {
            const emblem = this.querySelector('.card-emblem');
            emblem.style.transform = 'scale(1.1) rotate(10deg)';
            emblem.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            const emblem = this.querySelector('.card-emblem');
            emblem.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}); 