// ============================================
// SILVER BULLET EA - LANDING PAGE SCRIPTS
// ============================================

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeCharts();
    initializeInteractions();
    populateContent();
    initializeCandlesAnimation();
});

// ============================================
// CANDLES ANIMATION
// ============================================
function initializeCandlesAnimation() {
    const canvas = document.getElementById('candlesCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Candle data
    const candles = [];
    const candleWidth = 40;
    const candleSpacing = 60;
    const numCandles = Math.ceil(canvas.width / candleSpacing) + 2;
    
    // Initialize candles
    for (let i = 0; i < numCandles; i++) {
        candles.push({
            x: i * candleSpacing,
            open: Math.random() * 100 + 1800,
            close: Math.random() * 100 + 1800,
            high: 0,
            low: 0,
            bullish: Math.random() > 0.5
        });
    }
    
    // Calculate high/low
    candles.forEach(candle => {
        candle.high = Math.max(candle.open, candle.close) + Math.random() * 20;
        candle.low = Math.min(candle.open, candle.close) - Math.random() * 20;
    });
    
    function drawCandle(candle, baseY) {
        const scale = 0.5;
        const open = baseY - (candle.open * scale);
        const close = baseY - (candle.close * scale);
        const high = baseY - (candle.high * scale);
        const low = baseY - (candle.low * scale);
        
        // Wick
        ctx.strokeStyle = candle.bullish ? '#4CAF50' : '#FF5252';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(candle.x, high);
        ctx.lineTo(candle.x, low);
        ctx.stroke();
        
        // Body
        ctx.fillStyle = candle.bullish ? '#4CAF5080' : '#FF525280';
        const bodyTop = Math.min(open, close);
        const bodyHeight = Math.abs(close - open);
        ctx.fillRect(candle.x - candleWidth/2, bodyTop, candleWidth, bodyHeight);
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const baseY = canvas.height / 2 + 500;
        
        // Draw candles
        candles.forEach(candle => {
            drawCandle(candle, baseY);
            candle.x -= 0.2; // Slow scroll
        });
        
        // Reset candles that go off screen
        candles.forEach((candle, i) => {
            if (candle.x < -candleSpacing) {
                candle.x = candles[candles.length - 1].x + candleSpacing;
                candle.open = Math.random() * 100 + 1800;
                candle.close = Math.random() * 100 + 1800;
                candle.bullish = Math.random() > 0.5;
                candle.high = Math.max(candle.open, candle.close) + Math.random() * 20;
                candle.low = Math.min(candle.open, candle.close) - Math.random() * 20;
            }
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // Resize handler
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ============================================
// COUNTER ANIMATIONS
// ============================================
function initializeAnimations() {
    // Animate stats counters
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.stat-number').forEach(stat => {
        observer.observe(stat);
    });
}

function animateCounter(element) {
    const target = parseFloat(element.getAttribute('data-count'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        // Format number
        if (target % 1 !== 0) {
            element.textContent = current.toFixed(2);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ============================================
// CHARTS
// ============================================
function initializeCharts() {
    const ctx = document.getElementById('equityChart');
    if (!ctx) return;
    
    const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(255, 215, 0, 0.4)');
    gradient.addColorStop(1, 'rgba(255, 215, 0, 0.0)');
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: CONFIG.equityCurve.map(d => d.month),
            datasets: [{
                label: 'Balance ($)',
                data: CONFIG.equityCurve.map(d => d.balance),
                borderColor: '#FFD700',
                backgroundColor: gradient,
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#FFD700',
                pointBorderColor: '#0a0a0f',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: '#1a1a24',
                    titleColor: '#FFD700',
                    bodyColor: '#E8E8E8',
                    borderColor: '#FFD700',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            return '$' + context.parsed.y.toLocaleString();
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    grid: {
                        color: 'rgba(255, 215, 0, 0.1)',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#A0A0A8',
                        callback: function(value) {
                            return '$' + value.toLocaleString();
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#A0A0A8'
                    }
                }
            }
        }
    });
}

// ============================================
// POPULATE CONTENT FROM DATA
// ============================================
function populateContent() {
    // Update hero stats
    document.getElementById('heroWinrate').textContent = CONFIG.stats.winrate + '%';
    document.getElementById('heroTrades').textContent = CONFIG.stats.totalTrades;
    document.getElementById('heroReturn').textContent = '+' + CONFIG.stats.monthlyReturn + '%';
    
    // Update pricing
    document.getElementById('eaPrice').textContent = CONFIG.pricing.ea.price;
    document.getElementById('signalsPrice').textContent = CONFIG.pricing.signals.price;
    
    // Populate EA features
    const eaFeatures = document.getElementById('eaFeatures');
    CONFIG.pricing.ea.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        eaFeatures.appendChild(li);
    });
    
    // Populate signals features
    const signalsFeatures = document.getElementById('signalsFeatures');
    CONFIG.pricing.signals.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        signalsFeatures.appendChild(li);
    });
    
    // Populate instruments
    const instrumentsGrid = document.getElementById('instrumentsGrid');
    CONFIG.instruments.forEach(instrument => {
        const card = document.createElement('div');
        card.className = 'instrument-card';
        card.innerHTML = `
            <div class="instrument-icon">${instrument.icon}</div>
            <div class="instrument-name">${instrument.name}</div>
            <div class="instrument-desc">${instrument.description}</div>
        `;
        instrumentsGrid.appendChild(card);
    });
    
    // Populate FAQ
    const faqGrid = document.getElementById('faqGrid');
    CONFIG.faq.forEach(item => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.innerHTML = `
            <div class="faq-question">
                ${item.question}
                <span class="faq-icon">▼</span>
            </div>
            <div class="faq-answer">
                ${item.answer}
            </div>
        `;
        faqGrid.appendChild(faqItem);
    });
    
    // Update links
    document.getElementById('signalsLink').href = CONFIG.links.signalsPage;
    document.getElementById('signalsPricingLink').href = CONFIG.links.signalsPage;
    document.getElementById('telegramLink').href = CONFIG.links.telegram;
    document.getElementById('facebookLink').href = CONFIG.links.facebook;
    document.getElementById('emailLink').href = 'mailto:' + CONFIG.links.email;
    
    // Random subscriber count (300-500)
    const subscribers = Math.floor(Math.random() * 200) + 300;
    const subsElement = document.getElementById('subscribers');
    if (subsElement) {
        subsElement.textContent = subscribers;
    }
}

// ============================================
// INTERACTIONS
// ============================================
function initializeInteractions() {
    // FAQ accordion
    document.addEventListener('click', function(e) {
        if (e.target.closest('.faq-item')) {
            const item = e.target.closest('.faq-item');
            item.classList.toggle('active');
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Navbar background on scroll
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10,10,15,0.95)';
        } else {
            navbar.style.background = 'rgba(10,10,15,0.9)';
        }
    });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Format number with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Calculate winrate
function calculateWinrate(wins, total) {
    return ((wins / total) * 100).toFixed(2);
}

// ============================================
// EXPORT FOR EXTERNAL USE
// ============================================
window.SilverBulletEA = {
    config: CONFIG,
    formatNumber,
    calculateWinrate
};
