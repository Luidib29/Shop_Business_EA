// ============================================
// DATI MODIFICABILI - SILVER BULLET EA
// ============================================
// Modifica questi valori per aggiornare la landing page

const CONFIG = {
    // STATISTICHE PRINCIPALI
    stats: {
        totalTrades: 57,
        wins: 41,
        losses: 16,
        winrate: 71.93, // Calcolato automaticamente: (41/57)*100
        avgProfit: 2.8, // Profitto medio % per trade
        maxDrawdown: 8.5, // Drawdown massimo %
        monthlyReturn: 12.4, // Return medio mensile %
    },

    // PREZZI
    pricing: {
        ea: {
            price: "297",
            currency: "€",
            features: [
                "Codice sorgente completo",
                "Installazione illimitata",
                "Aggiornamenti lifetime",
                "Setup personalizzato",
                "Supporto Telegram 24/7"
            ]
        },
        signals: {
            price: "30",
            currency: "$",
            period: "/mese",
            features: [
                "Copia automatica trades",
                "Segnali real-time",
                "Performance verificate",
                "Rischio controllato",
                "Cancellazione in qualsiasi momento"
            ]
        }
    },

    // LINKS
    links: {
        signalsPage: "index.html", // Link alla tua pagina segnali GitHub
        telegram: "https://t.me/tuocanale", // Inserisci il tuo link Telegram
        facebook: "https://facebook.com/groups/tuogruppo", // Tuo gruppo FB
        email: "info@silverbulletea.com" // Tua email
    },

    // STRUMENTI SUPPORTATI
    instruments: [
        { name: "XAUUSD", icon: "🥇", description: "Gold - Principale" },
        { name: "XAGUSD", icon: "🥈", description: "Silver" },
        { name: "GBPUSD", icon: "💷", description: "Cable" },
        { name: "EURUSD", icon: "💶", description: "Fiber (coming soon)" }
    ],

    // EQUITY CURVE (dati esempio - mese per mese)
    equityCurve: [
        { month: "Set", balance: 10000 },
        { month: "Ott", balance: 11200 },
        { month: "Nov", balance: 12500 },
        { month: "Dic", balance: 13800 },
        { month: "Gen", balance: 15400 },
        { month: "Feb", balance: 16200 }
    ],

    // TESTIMONIANZE (opzionale - puoi aggiungerne)
    testimonials: [
        {
            name: "Marco R.",
            text: "Finalmente un EA che segue davvero le logiche Smart Money. Risultati costanti!",
            rating: 5
        },
        {
            name: "Giulia T.",
            text: "Il winrate è impressionante. Uso i segnali da 3 mesi, mai delusa.",
            rating: 5
        }
    ],

    // FAQ
    faq: [
        {
            question: "Su quali broker funziona l'EA?",
            answer: "L'EA è compatibile con tutti i broker MetaTrader 4. Consigliamo broker ECN con spread bassi come RoboForex, IC Markets, o FBS."
        },
        {
            question: "Serve un VPS?",
            answer: "Consigliato per operatività 24/7, ma non obbligatorio. Un VPS garantisce esecuzioni più veloci e nessuna interruzione."
        },
        {
            question: "Capitale minimo richiesto?",
            answer: "Minimo consigliato: $500 per account standard, $50 per account cent. Il rischio è gestito automaticamente dall'EA."
        },
        {
            question: "Posso provare prima di acquistare?",
            answer: "Sì! Puoi abbonarti ai segnali per 30$/mese e testare la strategia prima di acquistare l'EA completo."
        },
        {
            question: "Come funziona il supporto?",
            answer: "Supporto diretto via Telegram 24/7. Setup assistito e configurazione personalizzata inclusa nell'acquisto EA."
        }
    ]
};

// Non modificare sotto questa linea
// ============================================
