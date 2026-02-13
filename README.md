# 🎯 Silver Bullet EA - Landing Page

Landing page professionale dark/gold per la vendita dell'Expert Advisor Silver Bullet e servizio segnali.

## 📁 Struttura File

```
silver-bullet-landing/
├── index.html          # Pagina principale
├── style.css           # Stili dark/gold premium
├── script.js           # Animazioni e interattività
├── data.js            # DATI MODIFICABILI (← modifica questo!)
└── README.md          # Questo file
```

## 🚀 Deployment su GitHub Pages

### Opzione 1: Upload Diretto

1. **Crea un nuovo repository su GitHub**
   - Nome: `silver-bullet-ea` (o qualsiasi nome)
   - Pubblico o Privato

2. **Carica i file**
   - Trascina tutti i file nella root del repository
   - Commit: "Initial landing page"

3. **Attiva GitHub Pages**
   - Vai su Settings → Pages
   - Source: Deploy from branch
   - Branch: main / (root)
   - Salva

4. **La tua landing sarà live su:**
   ```
   https://tuousername.github.io/silver-bullet-ea/
   ```

### Opzione 2: Da Terminale

```bash
# Nella cartella silver-bullet-landing
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tuousername/silver-bullet-ea.git
git push -u origin main
```

Poi attiva GitHub Pages come sopra.

## ✏️ Come Modificare i Contenuti

### File `data.js` - Tutti i dati modificabili

**1. Statistiche Trading**
```javascript
stats: {
    totalTrades: 57,      // Modifica qui
    wins: 41,             // Modifica qui
    losses: 16,           // Modifica qui
    winrate: 71.93,       // Si aggiorna automaticamente
    avgProfit: 2.8,       // Profitto medio %
    maxDrawdown: 8.5,     // Drawdown massimo %
    monthlyReturn: 12.4   // Return medio mensile %
}
```

**2. Prezzi**
```javascript
pricing: {
    ea: {
        price: "297",     // Prezzo EA
        currency: "€"
    },
    signals: {
        price: "30",      // Prezzo segnali
        currency: "$",
        period: "/mese"
    }
}
```

**3. Link**
```javascript
links: {
    signalsPage: "index.html",           // La tua pagina segnali
    telegram: "https://t.me/tuocanale",  // Tuo Telegram
    facebook: "https://facebook.com...", // Tuo gruppo FB
    email: "info@tuodominio.com"         // Tua email
}
```

**4. Equity Curve (Grafico)**
```javascript
equityCurve: [
    { month: "Set", balance: 10000 },
    { month: "Ott", balance: 11200 },
    // Aggiungi/modifica mesi
]
```

**5. FAQ**
Aggiungi/modifica domande frequenti:
```javascript
faq: [
    {
        question: "Nuova domanda?",
        answer: "Nuova risposta..."
    }
]
```

## 🎨 Personalizzazione Colori

Nel file `style.css` puoi modificare il tema colori:

```css
:root {
    --color-gold: #FFD700;        /* Oro principale */
    --color-gold-dark: #B8860B;   /* Oro scuro */
    --color-bg: #0a0a0f;          /* Sfondo principale */
    /* ... altri colori ... */
}
```

## 📊 Features della Landing

✅ **Design dark/gold premium**
✅ **Candele animate in background**
✅ **Statistiche con animazioni**
✅ **Grafico equity interattivo**
✅ **Sezione EA e Segnali**
✅ **Pricing cards**
✅ **FAQ accordion**
✅ **100% responsive mobile**
✅ **Smooth scroll**
✅ **Performance ottimizzate**

## 🔧 Dipendenze

- **Chart.js** (CDN) - Per i grafici
- **Google Fonts** (CDN) - Font Inter
- Nessuna installazione richiesta!

## 📱 Responsive

La landing è completamente responsive:
- Desktop (1200px+)
- Tablet (768px - 1200px)
- Mobile (< 768px)

## 🎯 Conversioni Ottimizzate

- Call-to-Action chiari e visibili
- Statistiche impattanti
- Prove sociali (winrate, trades)
- FAQ per gestire obiezioni
- Design professionale e credibile

## 🔄 Aggiornamenti Futuri

Per aggiornare la landing:

1. Modifica `data.js` con nuovi dati
2. Commit e push su GitHub
3. Automaticamente live in 1-2 minuti

## 📞 Link alla Pagina Segnali

La landing punta alla tua pagina segnali esistente su GitHub.
Aggiorna il link in `data.js`:

```javascript
links: {
    signalsPage: "index.html"  // o "signals.html" se diverso
}
```

## ⚡ Performance

- Caricamento rapido
- Animazioni fluide a 60fps
- Immagini ottimizzate
- CSS/JS minificabili (opzionale)

## 🎬 Demo

Dopo il deployment, la tua landing includerà:

1. Hero con candele animate
2. Statistiche live
3. Logiche ICT spiegate
4. Grafico performance
5. Sezione segnali
6. Pricing comparativo
7. FAQ complete
8. Form contatti

## 📝 Note

- I dati delle statistiche sono reali (57 trades, 41 wins, 16 loss)
- Il grafico equity usa dati di esempio ma realistici
- Tutti i testi sono personalizzabili in `data.js`
- La landing è SEO-friendly

## 🆘 Supporto

Se hai problemi:
1. Controlla che tutti i file siano nella root del repo
2. Verifica che GitHub Pages sia attivo
3. Aspetta 2-3 minuti per la pubblicazione
4. Controlla Console browser per errori

---

**Creato per Luigi's Silver Bullet EA** 🚀
Dark/Gold Premium Theme | ICT Smart Money
