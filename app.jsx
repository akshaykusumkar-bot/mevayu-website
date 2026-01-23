import React, { useState, useEffect } from 'react';

// ============================================
// MEVAYU - FULLY RESPONSIVE WEBSITE
// Mobile-First Design with Complete Content
// ============================================

const MevayuResponsive = () => {
  // State management
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDay, setActiveDay] = useState(1);
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('all');
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  // Handle scroll and resize
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleResize = () => setWindowWidth(window.innerWidth);
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Responsive breakpoints
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024;

  // Close menu when clicking outside
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  // Data
  const dayThemes = [
    { day: 1, theme: "Brain & Focus", icon: "🧠", color: "#8B7355", desc: "Omega-3s + glucose + blood sugar stability", sachetA: "5 Almonds + 2 Walnuts", sachetB: "1 Dry Date + Cinnamon", sachetC: "1 tsp Pumpkin Seeds" },
    { day: 2, theme: "Energy & Iron", icon: "⚡", color: "#C17F59", desc: "Vitamin C enhances iron absorption", sachetA: "Peanuts + 3 Almonds", sachetB: "2 Dates + Dried Amla", sachetC: "Sunflower + Sesame + Charoli" },
    { day: 3, theme: "Gut Health", icon: "🌿", color: "#7A9A7E", desc: "Chia gel sweeps colon, fennel prevents gas", sachetA: "2 Almonds + 5 Cashews", sachetB: "2 Figs + Chia Seeds", sachetC: "Fennel + Cardamom" },
    { day: 4, theme: "Immunity", icon: "🛡️", color: "#9B8AA6", desc: "Selenium + Vitamin A + antioxidants", sachetA: "6 Pistachios + 2 Almonds + Brazil Nut", sachetB: "2 Apricots + Golden Raisins", sachetC: "Golden Berries" },
    { day: 5, theme: "Skin Glow", icon: "✨", color: "#D4A574", desc: "Iron for hemoglobin + oils for hydration", sachetA: "4 Mamra Almonds + 1 Walnut", sachetB: "Halim + 4 Goji Berries", sachetC: "Muskmelon Seeds + Rose Petals" },
    { day: 6, theme: "Muscle Repair", icon: "💪", color: "#8B6E5A", desc: "Complete protein + potassium + magnesium", sachetA: "2 Almonds + 5 Hazelnuts", sachetB: "2 Prunes + Black Currants", sachetC: "Hemp Seeds + Cacao Nibs" },
    { day: 7, theme: "Detox Reset", icon: "🍃", color: "#6B9080", desc: "Cooling, alkaline water for body reset", sachetA: "4 Almonds + Black Sesame", sachetB: "Sabja + Green Raisins + Mishri", sachetC: "Roasted Makhana + Saffron" },
    { day: 8, theme: "Deep Focus", icon: "🎯", color: "#7B6B8D", desc: "Anthocyanins increase brain blood flow", sachetA: "4 Almonds + Black Raisins + 2 Pecans", sachetB: "Dried Blueberries + Pumpkin Seeds", sachetC: "Roasted Flax Seeds" },
    { day: 9, theme: "Stamina", icon: "🔥", color: "#B8860B", desc: "MCTs for instant energy, no crash", sachetA: "1 Walnut + 6 Cashews", sachetB: "3 Munakka + 1 Date", sachetC: "Watermelon Seeds + Coconut" },
    { day: 10, theme: "Digestion II", icon: "🌾", color: "#8FBC8F", desc: "Papain enzyme + ajwain relaxes gut", sachetA: "5 Almonds + Peanuts", sachetB: "Dried Papaya + 1 Fig", sachetC: "Ajwain + Sunflower + Dried Kiwi" },
    { day: 11, theme: "Anti-Inflammatory", icon: "🌸", color: "#DEB887", desc: "Curcumin needs fat — we provide it", sachetA: "6 Pistachios", sachetB: "Cranberries + Chia + Turmeric", sachetC: "White Sesame + 2 Hazelnuts" },
    { day: 12, theme: "Hair & Nails", icon: "💎", color: "#A0522D", desc: "Zinc + Iron = keratin production", sachetA: "3 Mamra Almonds", sachetB: "Halim + 1 Apricot", sachetC: "Pine Nuts + Muskmelon + Mulberries" },
    { day: 13, theme: "Metabolism", icon: "🔄", color: "#CD853F", desc: "Rare Omega-7 + Omega-3 combination", sachetA: "3 Almonds + 1 Macadamia", sachetB: "2 Dates + Black Currants", sachetC: "Hemp + Roasted Flax" },
    { day: 14, theme: "Total Flush", icon: "🌊", color: "#5F9EA0", desc: "Lemon cleanses, ginger ignites fire", sachetA: "4 Almonds + Green Raisins", sachetB: "Dried Lemon + Mukhwas", sachetC: "Dried Ginger (Sonth)" },
  ];

  const faqs = [
    { q: "What exactly do I get in the 14-day kit?", a: "42 sachets total — 3 per day for 14 days. Each day includes: Sachet A (Soak & Drain), Sachet B (Soak & Drink), and Sachet C (Eat As-Is). Over 60+ unique premium ingredients thoughtfully sequenced for maximum nutritional synergy." },
    { q: "Why is soaking divided into 'drain' and 'drink'?", a: "Different ingredients interact differently with water. Some release beneficial compounds you should consume (like Vitamin C from amla). Others are better when you drain the water to keep minerals in the nut. We've done the research so you don't have to." },
    { q: "Is ₹2,000 expensive for nuts and seeds?", a: "At ₹143/day for 60+ curated ingredients with proper methodology, it's competitive with a single Starbucks coffee. Buying all these individually would cost ₹5,000-8,000+ upfront, plus you'd face storage issues and food waste." },
    { q: "What's the science behind '30+ plant varieties'?", a: "The American Gut Project (15,000+ participants) found that people eating 30+ different plant foods per week had significantly higher gut microbial diversity. Mevayu delivers 60+ unique ingredients in 14 days — 2x the research threshold." },
    { q: "Can I customize for allergies?", a: "Currently, our kits are pre-designed for optimal synergy. However, we list all ingredients clearly. If you have specific allergies, please contact us before ordering and we'll help you determine if Mevayu is right for you." },
    { q: "How long should I soak the ingredients?", a: "8-12 hours (overnight) is the sweet spot for most ingredients. Simply prepare Sachets A and B before bed, and they'll be ready by morning. Sachet C requires no soaking at all." },
  ];

  const ingredients = [
    { name: "Almonds", category: "nuts", icon: "🥜", benefit: "Vitamin E, brain health" },
    { name: "Mamra Almonds", category: "nuts", icon: "🥜", benefit: "50-60% oil, premium" },
    { name: "Walnuts", category: "nuts", icon: "🧠", benefit: "Omega-3, cognitive support" },
    { name: "Cashews", category: "nuts", icon: "🥜", benefit: "Copper, easy digestion" },
    { name: "Pistachios", category: "nuts", icon: "💚", benefit: "B6, antibody production" },
    { name: "Brazil Nut", category: "nuts", icon: "🛡️", benefit: "175% DV Selenium" },
    { name: "Hazelnuts", category: "nuts", icon: "🌰", benefit: "Manganese, tissue repair" },
    { name: "Pecans", category: "nuts", icon: "🧠", benefit: "Flavonoids, neuroprotection" },
    { name: "Macadamia", category: "nuts", icon: "✨", benefit: "Rare Omega-7" },
    { name: "Pine Nuts", category: "nuts", icon: "💎", benefit: "Zinc for hair/nails" },
    { name: "Peanuts", category: "nuts", icon: "⚡", benefit: "Niacin, energy" },
    { name: "Dates", category: "fruits", icon: "🌴", benefit: "Natural glucose, iron" },
    { name: "Dried Figs", category: "fruits", icon: "🌿", benefit: "Pectin fiber, prebiotic" },
    { name: "Apricots", category: "fruits", icon: "🍑", benefit: "Vitamin A, barriers" },
    { name: "Prunes", category: "fruits", icon: "💪", benefit: "Potassium, anti-cramp" },
    { name: "Raisins", category: "fruits", icon: "🍇", benefit: "Phenolics, alkalizing" },
    { name: "Blueberries", category: "fruits", icon: "💜", benefit: "Anthocyanins, brain flow" },
    { name: "Cranberries", category: "fruits", icon: "🔴", benefit: "UTI prevention" },
    { name: "Goji Berries", category: "fruits", icon: "👁️", benefit: "Zeaxanthin, eye health" },
    { name: "Amla", category: "fruits", icon: "🍋", benefit: "Vitamin C powerhouse" },
    { name: "Chia Seeds", category: "seeds", icon: "🌱", benefit: "Mucilage gel, Omega-3" },
    { name: "Flax Seeds", category: "seeds", icon: "🌾", benefit: "Lignans, hormonal balance" },
    { name: "Pumpkin Seeds", category: "seeds", icon: "🎃", benefit: "Zinc, neurotransmitters" },
    { name: "Hemp Seeds", category: "seeds", icon: "💪", benefit: "Complete protein" },
    { name: "Halim", category: "seeds", icon: "🩸", benefit: "100mg iron/100g" },
    { name: "Sabja Seeds", category: "seeds", icon: "❄️", benefit: "Cooling gel" },
    { name: "Sesame", category: "seeds", icon: "⚪", benefit: "Calcium, zinc" },
    { name: "Turmeric", category: "spices", icon: "🟡", benefit: "Curcumin, anti-inflammatory" },
    { name: "Cinnamon", category: "spices", icon: "🟤", benefit: "Blood sugar stability" },
    { name: "Saffron", category: "spices", icon: "🧡", benefit: "Mood support" },
    { name: "Fennel", category: "spices", icon: "🌿", benefit: "Reduces gas/bloating" },
    { name: "Ginger", category: "spices", icon: "🔥", benefit: "Digestive fire" },
  ];

  const filteredIngredients = activeTab === 'all' 
    ? ingredients 
    : ingredients.filter(i => i.category === activeTab);

  // Styles
  const styles = {
    // Base
    container: {
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      background: "linear-gradient(180deg, #FAF7F2 0%, #F5EDE3 100%)",
      minHeight: "100vh",
      color: "#3D3225",
      overflowX: "hidden",
    },
    
    // Navigation
    nav: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: isScrolled ? (isMobile ? "12px 20px" : "12px 40px") : (isMobile ? "16px 20px" : "24px 40px"),
      background: isScrolled ? "rgba(250, 247, 242, 0.98)" : "transparent",
      backdropFilter: isScrolled ? "blur(20px)" : "none",
      borderBottom: isScrolled ? "1px solid rgba(139, 115, 85, 0.1)" : "none",
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    
    logo: {
      fontSize: isMobile ? "22px" : "28px",
      fontWeight: "600",
      letterSpacing: "3px",
      color: "#5D4E37",
    },
    
    // Mobile menu
    hamburger: {
      display: isMobile ? "flex" : "none",
      flexDirection: "column",
      gap: "5px",
      cursor: "pointer",
      padding: "8px",
      zIndex: 1001,
    },
    
    hamburgerLine: (index) => ({
      width: "24px",
      height: "2px",
      background: "#5D4E37",
      transition: "all 0.3s",
      transform: isMenuOpen 
        ? index === 0 ? "rotate(45deg) translate(5px, 5px)" 
        : index === 2 ? "rotate(-45deg) translate(5px, -5px)" 
        : "scaleX(0)"
        : "none",
    }),
    
    mobileMenu: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "#FAF7F2",
      zIndex: 999,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "32px",
      transform: isMenuOpen ? "translateX(0)" : "translateX(100%)",
      transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    },
    
    desktopNav: {
      display: isMobile ? "none" : "flex",
      gap: "40px",
      alignItems: "center",
    },
    
    navLink: {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: "13px",
      letterSpacing: "1.5px",
      textTransform: "uppercase",
      color: "#6B5D4D",
      textDecoration: "none",
      cursor: "pointer",
      transition: "color 0.3s",
    },
    
    mobileNavLink: {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: "18px",
      letterSpacing: "2px",
      textTransform: "uppercase",
      color: "#3D3225",
      textDecoration: "none",
    },
    
    // Buttons
    primaryBtn: {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: isMobile ? "13px" : "14px",
      letterSpacing: "2px",
      textTransform: "uppercase",
      padding: isMobile ? "16px 32px" : "18px 40px",
      background: "linear-gradient(135deg, #5D4E37 0%, #8B7355 100%)",
      color: "#FAF7F2",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      transition: "all 0.4s",
      boxShadow: "0 4px 20px rgba(93, 78, 55, 0.3)",
      width: isMobile ? "100%" : "auto",
    },
    
    secondaryBtn: {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: "12px",
      letterSpacing: "2px",
      textTransform: "uppercase",
      padding: "14px 28px",
      background: "#5D4E37",
      color: "#FAF7F2",
      border: "none",
      borderRadius: "2px",
      cursor: "pointer",
    },
    
    // Section styles
    section: {
      padding: isMobile ? "60px 20px" : isTablet ? "80px 40px" : "120px 60px",
    },
    
    sectionDark: {
      padding: isMobile ? "60px 20px" : isTablet ? "80px 40px" : "120px 60px",
      background: "#3D3225",
      color: "#FAF7F2",
    },
    
    sectionAlt: {
      padding: isMobile ? "60px 20px" : isTablet ? "80px 40px" : "120px 60px",
      background: "#F5EDE3",
    },
    
    // Typography
    heroTitle: {
      fontSize: isMobile ? "36px" : isTablet ? "48px" : "60px",
      fontWeight: "400",
      lineHeight: "1.15",
      marginBottom: isMobile ? "20px" : "32px",
    },
    
    sectionTitle: {
      fontSize: isMobile ? "28px" : isTablet ? "36px" : "48px",
      fontWeight: "400",
      marginBottom: isMobile ? "16px" : "24px",
      textAlign: "center",
    },
    
    label: {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: "11px",
      letterSpacing: "3px",
      textTransform: "uppercase",
      color: "#8B7355",
      marginBottom: "16px",
    },
    
    bodyText: {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: isMobile ? "15px" : "17px",
      lineHeight: "1.8",
      color: "#6B5D4D",
    },
    
    // Cards
    card: {
      background: "#FFFFFF",
      borderRadius: isMobile ? "16px" : "20px",
      padding: isMobile ? "24px" : "40px",
      boxShadow: "0 10px 40px rgba(93, 78, 55, 0.08)",
    },
    
    // Grid layouts
    grid2: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: isMobile ? "24px" : "40px",
    },
    
    grid3: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3, 1fr)",
      gap: isMobile ? "20px" : "32px",
    },
    
    grid4: {
      display: "grid",
      gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : isTablet ? "repeat(3, 1fr)" : "repeat(4, 1fr)",
      gap: isMobile ? "12px" : "20px",
    },
  };

  return (
    <div style={styles.container}>
      
      {/* ==================== NAVIGATION ==================== */}
      <nav style={styles.nav}>
        <div style={styles.logo}>MEVAYU</div>
        
        {/* Desktop Navigation */}
        <div style={styles.desktopNav}>
          {["How It Works", "14-Day Journey", "Ingredients", "Science", "FAQ"].map(item => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              style={styles.navLink}
            >
              {item}
            </a>
          ))}
          <button style={styles.secondaryBtn}>Order Now</button>
        </div>
        
        {/* Mobile Hamburger */}
        <div style={styles.hamburger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {[0, 1, 2].map(i => <div key={i} style={styles.hamburgerLine(i)} />)}
        </div>
      </nav>
      
      {/* Mobile Menu Overlay */}
      <div style={styles.mobileMenu}>
        {["How It Works", "14-Day Journey", "Ingredients", "Science", "FAQ"].map(item => (
          <a 
            key={item}
            href={`#${item.toLowerCase().replace(/ /g, '-')}`}
            style={styles.mobileNavLink}
            onClick={() => setIsMenuOpen(false)}
          >
            {item}
          </a>
        ))}
        <button style={{...styles.primaryBtn, marginTop: "20px"}} onClick={() => setIsMenuOpen(false)}>
          Order Now — ₹2,000
        </button>
      </div>

      {/* ==================== HERO SECTION ==================== */}
      <section style={{
        ...styles.section,
        paddingTop: isMobile ? "100px" : "140px",
        minHeight: isMobile ? "auto" : "100vh",
        display: "flex",
        alignItems: "center",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "40px" : "60px",
            alignItems: "center",
          }}>
            {/* Hero Content */}
            <div>
              <div style={styles.label}>The 14-Day Wellness Ritual</div>
              <h1 style={styles.heroTitle}>
                60+ Ingredients.
                <br />
                <span style={{ fontStyle: "italic", color: "#8B7355" }}>Zero</span> Decisions.
              </h1>
              <p style={{...styles.bodyText, marginBottom: "32px", maxWidth: "480px"}}>
                Stop trying to eat healthy. Start living a healthy ritual. 
                Pre-portioned, pre-sequenced daily sachets that eliminate decision fatigue 
                and maximize nutritional variety.
              </p>
              
              <div style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: "16px",
                alignItems: isMobile ? "stretch" : "center",
                marginBottom: "40px",
              }}>
                <button style={styles.primaryBtn}>
                  Start Your Ritual — ₹2,000
                </button>
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  color: "#8B7355",
                  textAlign: isMobile ? "center" : "left",
                }}>
                  Just ₹143/day
                </span>
              </div>
              
              {/* Trust Badges */}
              <div style={{
                display: "flex",
                gap: isMobile ? "24px" : "40px",
                justifyContent: isMobile ? "center" : "flex-start",
              }}>
                {[
                  { number: "60+", label: "Ingredients" },
                  { number: "14", label: "Days" },
                  { number: "0", label: "Decisions" }
                ].map((stat, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: isMobile ? "28px" : "36px", fontWeight: "300", color: "#5D4E37" }}>
                      {stat.number}
                    </div>
                    <div style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "10px",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      color: "#8B7355",
                    }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Hero Visual */}
            <div style={{
              background: "linear-gradient(145deg, #FFFFFF 0%, #F5EDE3 100%)",
              borderRadius: isMobile ? "20px" : "24px",
              padding: isMobile ? "32px" : "48px",
              boxShadow: "0 20px 60px rgba(93, 78, 55, 0.12)",
            }}>
              {/* Three Sachets */}
              <div style={{
                display: "flex",
                gap: isMobile ? "12px" : "16px",
                justifyContent: "center",
                marginBottom: "32px",
              }}>
                {[
                  { letter: "A", label: "Soak & Drain", color: "#C17F59" },
                  { letter: "B", label: "Soak & Drink", color: "#7A9A7E" },
                  { letter: "C", label: "Eat As-Is", color: "#8B7355" }
                ].map((sachet, i) => (
                  <div key={i} style={{
                    width: isMobile ? "80px" : "100px",
                    height: isMobile ? "110px" : "140px",
                    background: `linear-gradient(180deg, ${sachet.color}15 0%, ${sachet.color}30 100%)`,
                    borderRadius: "8px",
                    border: `2px solid ${sachet.color}40`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    transform: `rotate(${(i - 1) * 5}deg)`,
                  }}>
                    <div style={{
                      fontSize: isMobile ? "22px" : "28px",
                      fontWeight: "600",
                      color: sachet.color,
                    }}>{sachet.letter}</div>
                    <div style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: isMobile ? "8px" : "9px",
                      letterSpacing: "0.5px",
                      textTransform: "uppercase",
                      color: sachet.color,
                      marginTop: "6px",
                      textAlign: "center",
                      padding: "0 4px",
                    }}>{sachet.label}</div>
                  </div>
                ))}
              </div>
              
              <div style={{ textAlign: "center" }}>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#8B7355",
                }}>Day 1 of 14</div>
                <div style={{ fontSize: isMobile ? "18px" : "22px", color: "#5D4E37", marginTop: "4px" }}>
                  Brain & Focus
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PROBLEM SECTION ==================== */}
      <section style={styles.sectionDark}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{...styles.label, color: "#C17F59", textAlign: "center"}}>The Hidden Problem</div>
          <h2 style={{...styles.sectionTitle, color: "#FAF7F2", marginBottom: isMobile ? "32px" : "48px"}}>
            You don't fail because you lack motivation.
            <br />
            <span style={{ fontStyle: "italic", opacity: 0.7 }}>You fail because healthy eating demands too many decisions.</span>
          </h2>
          
          <div style={styles.grid3}>
            {[
              { stat: "8-10", label: "Same ingredients eaten repeatedly your whole life", icon: "🔁" },
              { stat: "15+", label: "Daily micro-decisions causing decision fatigue", icon: "🧠" },
              { stat: "40%", label: "Food waste from ingredients that expire unused", icon: "🗑️" }
            ].map((item, i) => (
              <div key={i} style={{
                padding: isMobile ? "24px" : "32px",
                background: "rgba(255,255,255,0.03)",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.05)",
                textAlign: "center",
              }}>
                <div style={{ fontSize: "28px", marginBottom: "12px" }}>{item.icon}</div>
                <div style={{
                  fontSize: isMobile ? "36px" : "48px",
                  fontWeight: "300",
                  color: "#C17F59",
                  marginBottom: "8px",
                }}>{item.stat}</div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: isMobile ? "13px" : "14px",
                  lineHeight: "1.6",
                  opacity: 0.8,
                }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== HOW IT WORKS ==================== */}
      <section id="how-it-works" style={styles.section}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? "40px" : "60px" }}>
            <div style={styles.label}>The System</div>
            <h2 style={styles.sectionTitle}>
              Three Sachets. <span style={{ fontStyle: "italic" }}>Perfect</span> Nutrition.
            </h2>
          </div>
          
          <div style={styles.grid3}>
            {[
              {
                letter: "A",
                title: "Soak & Drain",
                subtitle: "Preserve Minerals",
                desc: "Ingredients that benefit from overnight soaking. Drain the water to remove compounds that interfere with absorption while keeping minerals in the food.",
                color: "#C17F59",
                example: "Almonds, Walnuts, Cashews",
                icon: "💧"
              },
              {
                letter: "B",
                title: "Soak & Drink",
                subtitle: "Capture Nutrients",
                desc: "Ingredients that release beneficial compounds into water. Drink the enriched water along with the ingredients for maximum nutrient absorption.",
                color: "#7A9A7E",
                example: "Dates + Amla, Chia Seeds",
                icon: "🥤"
              },
              {
                letter: "C",
                title: "Eat As-Is",
                subtitle: "Ready to Consume",
                desc: "Ingredients most nutritious when eaten dry. No soaking required — heat-sensitive nutrients and aromatic compounds stay intact.",
                color: "#8B7355",
                example: "Pumpkin Seeds, Cinnamon",
                icon: "✨"
              }
            ].map((sachet, i) => (
              <div key={i} style={styles.card}>
                <div style={{
                  width: isMobile ? "60px" : "70px",
                  height: isMobile ? "60px" : "70px",
                  background: `linear-gradient(135deg, ${sachet.color}20 0%, ${sachet.color}40 100%)`,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}>
                  <span style={{ fontSize: isMobile ? "24px" : "28px" }}>{sachet.icon}</span>
                </div>
                
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: sachet.color,
                  marginBottom: "6px",
                }}>Sachet {sachet.letter}</div>
                
                <h3 style={{
                  fontSize: isMobile ? "22px" : "26px",
                  fontWeight: "500",
                  marginBottom: "4px",
                }}>{sachet.title}</h3>
                
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "12px",
                  color: "#8B7355",
                  marginBottom: "16px",
                  fontStyle: "italic",
                }}>{sachet.subtitle}</div>
                
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: isMobile ? "13px" : "14px",
                  lineHeight: "1.7",
                  color: "#6B5D4D",
                  marginBottom: "20px",
                }}>{sachet.desc}</p>
                
                <div style={{
                  padding: "12px 16px",
                  background: `${sachet.color}10`,
                  borderRadius: "8px",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "12px",
                  color: sachet.color,
                }}>
                  <strong>Example:</strong> {sachet.example}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 14-DAY JOURNEY ==================== */}
      <section id="14-day-journey" style={styles.sectionAlt}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? "32px" : "48px" }}>
            <div style={styles.label}>Your 14-Day Journey</div>
            <h2 style={styles.sectionTitle}>
              Each Day, a New <span style={{ fontStyle: "italic" }}>Theme</span>
            </h2>
          </div>
          
          {/* Day Selector - Horizontal Scroll on Mobile */}
          <div style={{
            display: "flex",
            flexWrap: isMobile ? "nowrap" : "wrap",
            justifyContent: isMobile ? "flex-start" : "center",
            gap: "8px",
            marginBottom: isMobile ? "24px" : "40px",
            overflowX: isMobile ? "auto" : "visible",
            paddingBottom: isMobile ? "12px" : "0",
            WebkitOverflowScrolling: "touch",
          }}>
            {dayThemes.map((day) => (
              <button
                key={day.day}
                onClick={() => setActiveDay(day.day)}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: isMobile ? "11px" : "12px",
                  padding: isMobile ? "10px 14px" : "12px 18px",
                  background: activeDay === day.day ? day.color : "transparent",
                  color: activeDay === day.day ? "#FAF7F2" : "#6B5D4D",
                  border: `1px solid ${activeDay === day.day ? day.color : "#C4B8A8"}`,
                  borderRadius: "24px",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  transition: "all 0.3s",
                }}
              >
                <span>{day.icon}</span>
                <span>Day {day.day}</span>
              </button>
            ))}
          </div>
          
          {/* Active Day Display */}
          <div style={{
            ...styles.card,
            padding: isMobile ? "24px" : "48px",
          }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 2fr",
              gap: isMobile ? "24px" : "48px",
            }}>
              {/* Day Info */}
              <div>
                <div style={{
                  fontSize: isMobile ? "56px" : "72px",
                  fontWeight: "200",
                  color: dayThemes[activeDay - 1].color,
                  lineHeight: "1",
                }}>
                  {String(activeDay).padStart(2, '0')}
                </div>
                <div style={{
                  fontSize: isMobile ? "24px" : "30px",
                  color: "#3D3225",
                  marginTop: "8px",
                }}>
                  {dayThemes[activeDay - 1].theme}
                </div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: isMobile ? "13px" : "14px",
                  color: "#8B7355",
                  marginTop: "16px",
                  lineHeight: "1.7",
                }}>
                  {dayThemes[activeDay - 1].desc}
                </div>
              </div>
              
              {/* Sachets */}
              <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                gap: isMobile ? "12px" : "16px",
              }}>
                {[
                  { letter: "A", title: "Soak & Drain", color: "#C17F59", content: dayThemes[activeDay - 1].sachetA },
                  { letter: "B", title: "Soak & Drink", color: "#7A9A7E", content: dayThemes[activeDay - 1].sachetB },
                  { letter: "C", title: "Eat As-Is", color: "#8B7355", content: dayThemes[activeDay - 1].sachetC }
                ].map((sachet, i) => (
                  <div key={i} style={{
                    background: `${sachet.color}08`,
                    border: `1px solid ${sachet.color}20`,
                    borderRadius: "12px",
                    padding: isMobile ? "16px" : "20px",
                  }}>
                    <div style={{
                      width: isMobile ? "36px" : "42px",
                      height: isMobile ? "36px" : "42px",
                      background: sachet.color,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#FAF7F2",
                      fontSize: isMobile ? "16px" : "18px",
                      fontWeight: "600",
                      marginBottom: "12px",
                    }}>
                      {sachet.letter}
                    </div>
                    <div style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "10px",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      color: sachet.color,
                      marginBottom: "8px",
                    }}>{sachet.title}</div>
                    <div style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: isMobile ? "12px" : "13px",
                      color: "#5D4E37",
                      lineHeight: "1.5",
                    }}>{sachet.content}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SCIENCE SECTION ==================== */}
      <section id="science" style={styles.section}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? "32px" : "48px" }}>
            <div style={styles.label}>Research-Backed</div>
            <h2 style={styles.sectionTitle}>
              The Science of <span style={{ fontStyle: "italic" }}>Variety</span>
            </h2>
          </div>
          
          {/* Key Research Card */}
          <div style={{
            background: "linear-gradient(135deg, #3D3225 0%, #5D4E37 100%)",
            borderRadius: isMobile ? "16px" : "24px",
            padding: isMobile ? "28px" : "48px",
            color: "#FAF7F2",
            marginBottom: isMobile ? "24px" : "40px",
          }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1.5fr 1fr",
              gap: isMobile ? "28px" : "48px",
              alignItems: "center",
            }}>
              <div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "10px",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "#C17F59",
                  marginBottom: "12px",
                }}>
                  American Gut Project • 15,000+ Participants
                </div>
                <h3 style={{
                  fontSize: isMobile ? "22px" : "32px",
                  fontWeight: "400",
                  lineHeight: "1.3",
                  marginBottom: "16px",
                }}>
                  People eating <span style={{ color: "#C17F59" }}>30+ plant varieties</span> per week 
                  had significantly higher gut microbial diversity.
                </h3>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: isMobile ? "13px" : "15px",
                  lineHeight: "1.7",
                  opacity: 0.8,
                }}>
                  Greater diversity correlates with better metabolic health, stronger immunity, 
                  and reduced inflammation.
                </p>
              </div>
              
              <div style={{ textAlign: "center" }}>
                <div style={{
                  fontSize: isMobile ? "56px" : "72px",
                  fontWeight: "200",
                  color: "#C17F59",
                }}>60+</div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  opacity: 0.7,
                  marginBottom: "12px",
                }}>Ingredients in 14 Days</div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "12px",
                  padding: "8px 16px",
                  background: "rgba(193, 127, 89, 0.2)",
                  borderRadius: "20px",
                  color: "#C17F59",
                  display: "inline-block",
                }}>
                  2x the Research Threshold
                </div>
              </div>
            </div>
          </div>
          
          {/* Supporting Research */}
          <div style={styles.grid2}>
            {[
              { title: "Vitamin C + Iron Synergy", source: "Hallberg & Hultén, 2000", finding: "Vitamin C significantly enhances non-heme iron absorption from plant foods." },
              { title: "Fat + Curcumin Absorption", source: "Nutritional Biochemistry", finding: "Curcumin is fat-soluble — dietary fats increase bioavailability dramatically." },
              { title: "Garden Cress Iron Content", source: "Tufail et al., 2024", finding: "~100mg iron per 100g — one of nature's richest plant-based iron sources." },
              { title: "Chia Seed Benefits", source: "Multiple Studies", finding: "Mucilage gel supports gut health, slows digestion, has prebiotic effects." }
            ].map((research, i) => (
              <div key={i} style={{
                padding: isMobile ? "20px" : "28px",
                background: "#FAF7F2",
                borderRadius: "12px",
                border: "1px solid rgba(139, 115, 85, 0.1)",
              }}>
                <h4 style={{
                  fontSize: isMobile ? "16px" : "18px",
                  marginBottom: "6px",
                }}>{research.title}</h4>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "10px",
                  color: "#8B7355",
                  marginBottom: "10px",
                }}>{research.source}</div>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: isMobile ? "13px" : "14px",
                  lineHeight: "1.6",
                  color: "#6B5D4D",
                }}>{research.finding}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== INGREDIENTS SECTION ==================== */}
      <section id="ingredients" style={styles.sectionAlt}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? "32px" : "48px" }}>
            <div style={styles.label}>Premium Sourcing</div>
            <h2 style={styles.sectionTitle}>
              60+ <span style={{ fontStyle: "italic" }}>Curated</span> Ingredients
            </h2>
          </div>
          
          {/* Category Tabs */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: isMobile ? "8px" : "12px",
            marginBottom: isMobile ? "24px" : "40px",
            flexWrap: "wrap",
          }}>
            {[
              { id: 'all', label: 'All' },
              { id: 'nuts', label: 'Nuts' },
              { id: 'fruits', label: 'Dried Fruits' },
              { id: 'seeds', label: 'Seeds' },
              { id: 'spices', label: 'Spices' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: isMobile ? "12px" : "13px",
                  padding: isMobile ? "10px 16px" : "12px 20px",
                  background: activeTab === tab.id ? "#3D3225" : "transparent",
                  color: activeTab === tab.id ? "#FAF7F2" : "#5D4E37",
                  border: `1px solid ${activeTab === tab.id ? "#3D3225" : "#8B7355"}40`,
                  borderRadius: "24px",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
          {/* Ingredients Grid */}
          <div style={styles.grid4}>
            {filteredIngredients.map((ingredient, i) => (
              <div key={i} style={{
                background: "#FFFFFF",
                borderRadius: "12px",
                padding: isMobile ? "16px" : "20px",
                border: "1px solid rgba(139, 115, 85, 0.08)",
                textAlign: "center",
              }}>
                <div style={{ fontSize: isMobile ? "24px" : "28px", marginBottom: "8px" }}>
                  {ingredient.icon}
                </div>
                <h4 style={{
                  fontSize: isMobile ? "13px" : "15px",
                  fontWeight: "500",
                  marginBottom: "4px",
                }}>{ingredient.name}</h4>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: isMobile ? "11px" : "12px",
                  color: "#8B7355",
                  lineHeight: "1.4",
                }}>{ingredient.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== COMPARISON SECTION ==================== */}
      <section style={styles.section}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? "32px" : "48px" }}>
            <h2 style={styles.sectionTitle}>
              Traditional vs. <span style={{ fontStyle: "italic" }}>Mevayu</span>
            </h2>
          </div>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            background: "#FFFFFF",
            borderRadius: isMobile ? "16px" : "24px",
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(93, 78, 55, 0.1)",
          }}>
            {/* Traditional */}
            <div style={{
              padding: isMobile ? "24px" : "40px",
              borderBottom: isMobile ? "1px solid rgba(139, 115, 85, 0.1)" : "none",
              borderRight: isMobile ? "none" : "1px solid rgba(139, 115, 85, 0.1)",
            }}>
              <div style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "#8B7355",
                marginBottom: "20px",
              }}>Traditional Approach</div>
              
              {[
                "₹5,000-8,000+ upfront",
                "8-10 varieties repeated",
                "60 containers to store",
                "15+ daily decisions",
                "40% food waste",
                "Trial and error soaking"
              ].map((item, i) => (
                <div key={i} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 0",
                  borderBottom: i < 5 ? "1px solid rgba(139, 115, 85, 0.08)" : "none",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: isMobile ? "13px" : "14px",
                  color: "#6B5D4D",
                }}>
                  <span style={{ color: "#C17F59" }}>✗</span>
                  {item}
                </div>
              ))}
            </div>
            
            {/* Mevayu */}
            <div style={{
              padding: isMobile ? "24px" : "40px",
              background: "linear-gradient(180deg, rgba(122, 154, 126, 0.05) 0%, rgba(193, 127, 89, 0.05) 100%)",
            }}>
              <div style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "#7A9A7E",
                marginBottom: "20px",
              }}>The Mevayu Way</div>
              
              {[
                "₹2,000 — just ₹143/day",
                "60+ unique ingredients",
                "14 compact sachets",
                "Zero daily decisions",
                "Zero waste",
                "Science-backed methods"
              ].map((item, i) => (
                <div key={i} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 0",
                  borderBottom: i < 5 ? "1px solid rgba(122, 154, 126, 0.15)" : "none",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: isMobile ? "13px" : "14px",
                  color: "#3D3225",
                  fontWeight: "500",
                }}>
                  <span style={{ color: "#7A9A7E" }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ SECTION ==================== */}
      <section id="faq" style={styles.sectionAlt}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? "32px" : "48px" }}>
            <div style={styles.label}>Questions Answered</div>
            <h2 style={styles.sectionTitle}>Frequently Asked</h2>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: "#FFFFFF",
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "1px solid rgba(139, 115, 85, 0.1)",
                }}
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  style={{
                    width: "100%",
                    padding: isMobile ? "20px" : "24px",
                    background: "none",
                    border: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: "16px",
                  }}
                >
                  <span style={{
                    fontSize: isMobile ? "15px" : "17px",
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "#3D3225",
                  }}>{faq.q}</span>
                  <span style={{
                    fontSize: "24px",
                    color: "#8B7355",
                    transform: activeFaq === i ? "rotate(45deg)" : "rotate(0)",
                    transition: "transform 0.3s",
                    flexShrink: 0,
                  }}>+</span>
                </button>
                
                <div style={{
                  maxHeight: activeFaq === i ? "400px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.4s ease-out",
                }}>
                  <p style={{
                    padding: isMobile ? "0 20px 20px" : "0 24px 24px",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: isMobile ? "14px" : "15px",
                    lineHeight: "1.8",
                    color: "#6B5D4D",
                  }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section style={{
        padding: isMobile ? "80px 20px" : "120px 60px",
        background: "linear-gradient(135deg, #3D3225 0%, #5D4E37 50%, #8B7355 100%)",
        textAlign: "center",
        color: "#FAF7F2",
      }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{
            fontSize: isMobile ? "32px" : "48px",
            fontWeight: "400",
            marginBottom: "20px",
            lineHeight: "1.2",
          }}>
            Begin Your <span style={{ fontStyle: "italic" }}>Ritual</span>
          </h2>
          
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: isMobile ? "15px" : "17px",
            opacity: 0.85,
            marginBottom: "36px",
            lineHeight: "1.7",
          }}>
            14 days. 60+ ingredients. Zero decisions.
            <br />
            Transform "What should I eat?" into simply opening today's sachets.
          </p>
          
          <button style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: isMobile ? "13px" : "14px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            padding: isMobile ? "18px 40px" : "20px 48px",
            background: "#FAF7F2",
            color: "#3D3225",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
            width: isMobile ? "100%" : "auto",
          }}>
            Order Now — ₹2,000
          </button>
          
          <div style={{
            marginTop: "20px",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "13px",
            opacity: 0.6,
          }}>
            Just ₹143/day • Free Shipping • 100% Natural
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer style={{
        padding: isMobile ? "48px 20px 32px" : "80px 60px 40px",
        background: "#2C241C",
        color: "#FAF7F2",
      }}>
        <div style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "2fr 1fr 1fr 1fr",
            gap: isMobile ? "32px" : "40px",
            marginBottom: "40px",
          }}>
            {/* Brand */}
            <div>
              <div style={{
                fontSize: isMobile ? "24px" : "28px",
                fontWeight: "600",
                letterSpacing: "3px",
                marginBottom: "16px",
              }}>MEVAYU</div>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                lineHeight: "1.7",
                color: "rgba(250, 247, 242, 0.7)",
                maxWidth: "280px",
              }}>
                The 14-Day Wellness Ritual. Science-backed nutrition made effortless.
              </p>
            </div>
            
            {/* Links */}
            {[
              { title: "Product", links: ["How It Works", "Ingredients", "Pricing", "FAQ"] },
              { title: "Company", links: ["About Us", "Science", "Blog", "Contact"] },
              { title: "Legal", links: ["Privacy", "Terms", "Shipping", "Returns"] }
            ].map((col, i) => (
              <div key={i}>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "rgba(250, 247, 242, 0.5)",
                  marginBottom: "16px",
                }}>{col.title}</div>
                {col.links.map(link => (
                  <a key={link} href="#" style={{
                    display: "block",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "14px",
                    color: "rgba(250, 247, 242, 0.7)",
                    textDecoration: "none",
                    marginBottom: "10px",
                  }}>{link}</a>
                ))}
              </div>
            ))}
          </div>
          
          {/* Bottom Bar */}
          <div style={{
            paddingTop: "24px",
            borderTop: "1px solid rgba(250, 247, 242, 0.1)",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "center" : "flex-start",
            gap: "12px",
            textAlign: isMobile ? "center" : "left",
          }}>
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "13px",
              color: "rgba(250, 247, 242, 0.5)",
            }}>
              © 2025 Mevayu. All rights reserved.
            </div>
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "12px",
              color: "rgba(250, 247, 242, 0.4)",
            }}>
              *Results may vary. Not medical advice.
            </div>
          </div>
        </div>
      </footer>

      {/* ==================== GLOBAL STYLES ==================== */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        /* Hide scrollbar for day selector on mobile */
        ::-webkit-scrollbar {
          height: 4px;
        }
        
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(139, 115, 85, 0.3);
          border-radius: 4px;
        }
        
        ::selection {
          background: rgba(193, 127, 89, 0.3);
          color: #3D3225;
        }
        
        /* Prevent text selection on buttons */
        button {
          user-select: none;
        }
        
        /* Smooth transitions */
        a, button {
          transition: all 0.3s ease;
        }
        
        /* Focus states for accessibility */
        button:focus, a:focus {
          outline: 2px solid #8B7355;
          outline-offset: 2px;
        }
        
        /* Active states for mobile */
        @media (hover: none) {
          button:active {
            transform: scale(0.98);
          }
        }
      `}</style>
    </div>
  );
};

export default MevayuResponsive;