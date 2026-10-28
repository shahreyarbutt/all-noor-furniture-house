import { useState } from 'react'

const PHONE_SAQIB = '923208424265'
const PHONE_ATIF = '923084734825'

const copy = {
  en: {
    announcement: 'Handcrafted furniture • Delivery across Pakistan',
    navHome: 'Home',
    navCollection: 'Collection',
    navCustom: 'Custom Orders',
    navContact: 'Contact',
    heroEyebrow: 'ALL NOOR FURNITURE HOUSE · LAHORE',
    heroTitle: <>Comfort made to feel<br /><em>like home.</em></>,
    heroText: 'Wooden sofa sets, sofa-cum-beds, dining furniture and custom designs made around your needs.',
    explore: 'Explore collection',
    whatsapp: 'Chat on WhatsApp',
    madeForYou: 'Made for your home',
    craftedLabel: 'Furniture made with care',
    collectionEyebrow: 'FIND YOUR STYLE',
    collectionTitle: 'Furniture for every corner',
    collectionText: 'Browse our main categories, then message us to discuss the design, size, fabric and finish you have in mind.',
    galleryEyebrow: 'MADE AT ALL NOOR',
    galleryTitle: 'A look at our sofa designs',
    galleryText: 'Explore a selection of sofa styles and finishes. Message us to discuss a design that suits your home.',
    galleryCaption: 'Sofa design',
    categories: [
      ['Sofa Sets', 'Comfortable centrepieces for your living room.'],
      ['Sofa-Cum-Beds', 'Flexible comfort for sitting and sleeping.'],
      ['Cushions', 'Finishing touches for your furniture.'],
      ['Dining Sets', 'Bring everyone together around the table.'],
      ['Chairs', 'Practical seating for everyday living.'],
      ['Custom Furniture', 'Your idea, tailored to your space.'],
    ],
    placeholder: 'PHOTO PLACEHOLDER',
    customEyebrow: 'MADE AROUND YOUR IDEA',
    customTitle: <>Have a design<br />in mind?</>,
    customText: 'Send us a reference photo or tell us what you need. We can discuss custom sizes, colours, upholstery and design details with you.',
    customButton: 'Discuss a custom order',
    stepsTitle: 'A simple way to get started',
    steps: [
      ['01', 'Share your idea', 'Tell us which furniture you need or send a reference image.'],
      ['02', 'Discuss the details', 'Talk through size, style, fabric, finish and pricing directly with us.'],
      ['03', 'Plan your order', 'Confirm the details with our team before your order moves forward.'],
    ],
    whyEyebrow: 'WHY ALL NOOR',
    whyTitle: 'Personal service, from first idea to final details.',
    benefits: [
      ['Custom design conversations', 'Discuss a design that suits your home, space and preferences.'],
      ['Furniture for daily living', 'Explore options for lounges, bedrooms and dining spaces.'],
      ['Delivery across Pakistan', 'Contact us to discuss delivery arrangements for your location.'],
    ],
    contactEyebrow: 'LET’S TALK FURNITURE',
    contactTitle: 'Tell us what you’re looking for.',
    contactText: 'Have a question about a design or want to request custom furniture? Get in touch with Saqib on WhatsApp or call us during business hours.',
    primaryContact: 'Primary contact',
    secondaryContact: 'Also available',
    call: 'Call',
    message: 'WhatsApp Saqib',
    locationTitle: 'Visit or contact us',
    location: 'Nakhuda Chowk, near Butt Chair House, Lahore, Pakistan',
    hoursTitle: 'Business hours',
    hours: 'Every day · 10:00 AM – 10:00 PM',
    footerLine: 'Furniture for your home, made around your needs.',
    footerSmall: 'Please contact us to confirm design options, pricing and delivery details.',
    language: 'اردو',
    whatsappPrefill: 'Assalam-o-Alaikum! I found All Noor Furniture House online and would like to ask about your furniture designs.',
    customPrefill: 'Assalam-o-Alaikum! I would like to discuss a custom furniture order. I can share my design and requirements.',
    categoryPrefill: 'Assalam-o-Alaikum! I would like to ask about your',
  },
  ur: {
    announcement: 'ہاتھ سے تیار فرنیچر • پاکستان بھر میں ڈیلیوری',
    navHome: 'ہوم',
    navCollection: 'کلیکشن',
    navCustom: 'کسٹم آرڈر',
    navContact: 'رابطہ',
    heroEyebrow: 'آل نور فرنیچر ہاؤس · لاہور',
    heroTitle: <>آرام ایسا جو<br /><em>گھر جیسا لگے۔</em></>,
    heroText: 'لکڑی کے صوفہ سیٹ، صوفہ کم بیڈ، ڈائننگ فرنیچر اور آپ کی ضرورت کے مطابق کسٹم ڈیزائن۔',
    explore: 'کلیکشن دیکھیں',
    whatsapp: 'واٹس ایپ پر رابطہ کریں',
    madeForYou: 'آپ کے گھر کے لیے',
    craftedLabel: 'محنت اور توجہ سے تیار فرنیچر',
    collectionEyebrow: 'اپنا انداز منتخب کریں',
    collectionTitle: 'گھر کے ہر کونے کے لیے فرنیچر',
    collectionText: 'ہماری بنیادی کیٹیگریز دیکھیں اور اپنے پسندیدہ ڈیزائن، سائز، کپڑے اور فنش کے بارے میں بات کرنے کے لیے رابطہ کریں۔',
    galleryEyebrow: 'آل نور میں تیار کردہ',
    galleryTitle: 'ہمارے صوفوں کے ڈیزائن',
    galleryText: 'صوفوں کے مختلف انداز اور فنش دیکھیں۔ اپنے گھر کے مطابق ڈیزائن پر بات کرنے کے لیے رابطہ کریں۔',
    galleryCaption: 'صوفے کا ڈیزائن',
    categories: [
      ['صوفہ سیٹ', 'آپ کے لاؤنج کے لیے آرام دہ صوفے۔'],
      ['صوفہ کم بیڈ', 'بیٹھنے اور سونے کے لیے کارآمد انتخاب۔'],
      ['کشن', 'فرنیچر کی خوبصورتی مکمل کرنے کے لیے۔'],
      ['ڈائننگ سیٹ', 'گھر والوں کے ساتھ کھانے کے لیے۔'],
      ['کرسیاں', 'روزمرہ استعمال کے لیے آرام دہ نشست۔'],
      ['کسٹم فرنیچر', 'آپ کی جگہ اور پسند کے مطابق ڈیزائن۔'],
    ],
    placeholder: 'تصویر کی جگہ',
    customEyebrow: 'آپ کے آئیڈیا کے مطابق',
    customTitle: <>ذہن میں کوئی<br />ڈیزائن ہے؟</>,
    customText: 'اپنی پسند کی تصویر بھیجیں یا اپنی ضرورت بتائیں۔ سائز، رنگ، کپڑے اور ڈیزائن کی تفصیلات پر ہمارے ساتھ بات کریں۔',
    customButton: 'کسٹم آرڈر پر بات کریں',
    stepsTitle: 'آغاز کرنے کا آسان طریقہ',
    steps: [
      ['۰۱', 'اپنا آئیڈیا بتائیں', 'بتائیں کہ آپ کو کون سا فرنیچر چاہیے یا ڈیزائن کی تصویر بھیجیں۔'],
      ['۰۲', 'تفصیلات طے کریں', 'سائز، انداز، کپڑے، فنش اور قیمت پر براہ راست بات کریں۔'],
      ['۰۳', 'آرڈر کی منصوبہ بندی', 'آرڈر آگے بڑھانے سے پہلے ہماری ٹیم کے ساتھ تفصیلات کی تصدیق کریں۔'],
    ],
    whyEyebrow: 'آل نور کیوں؟',
    whyTitle: 'پہلے آئیڈیا سے آخری تفصیل تک ذاتی توجہ۔',
    benefits: [
      ['آپ کے مطابق ڈیزائن', 'اپنے گھر، جگہ اور پسند کے مطابق ڈیزائن پر بات کریں۔'],
      ['روزمرہ کے لیے فرنیچر', 'لاؤنج، بیڈروم اور ڈائننگ کے لیے مختلف انتخاب دیکھیں۔'],
      ['پاکستان بھر میں ڈیلیوری', 'اپنے شہر میں ڈیلیوری کے انتظامات جاننے کے لیے رابطہ کریں۔'],
    ],
    contactEyebrow: 'فرنیچر کے بارے میں بات کریں',
    contactTitle: 'بتائیں آپ کیا تلاش کر رہے ہیں۔',
    contactText: 'کسی ڈیزائن کے بارے میں پوچھنا ہے یا کسٹم فرنیچر بنوانا ہے؟ سقیب سے واٹس ایپ پر رابطہ کریں یا کاروباری اوقات میں کال کریں۔',
    primaryContact: 'بنیادی رابطہ',
    secondaryContact: 'متبادل رابطہ',
    call: 'کال کریں',
    message: 'سقیب کو واٹس ایپ کریں',
    locationTitle: 'پتہ اور رابطہ',
    location: 'نخدا چوک، بٹ چیئر ہاؤس کے قریب، لاہور، پاکستان',
    hoursTitle: 'کاروباری اوقات',
    hours: 'روزانہ · صبح ۱۰ بجے سے رات ۱۰ بجے تک',
    footerLine: 'آپ کی ضرورت کے مطابق آپ کے گھر کا فرنیچر۔',
    footerSmall: 'ڈیزائن، قیمت اور ڈیلیوری کی تفصیلات کی تصدیق کے لیے رابطہ کریں۔',
    language: 'English',
    whatsappPrefill: 'السلام علیکم! مجھے آل نور فرنیچر ہاؤس کے فرنیچر ڈیزائنز کے بارے میں معلومات چاہیے۔',
    customPrefill: 'السلام علیکم! میں کسٹم فرنیچر بنوانے کے بارے میں بات کرنا چاہتا/چاہتی ہوں۔ میں اپنا ڈیزائن اور تفصیلات بھیج سکتا/سکتی ہوں۔',
    categoryPrefill: 'السلام علیکم! مجھے آپ کے اس فرنیچر کے بارے میں معلومات چاہیے: ',
  },
}

function waLink(phone, message) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

function ArrowIcon() {
  return <span aria-hidden="true" className="arrow-icon">↗</span>
}

function BrandMark() {
  return (
    <div className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M8 38V15L24 5L40 15V38" />
        <path d="M14 38V22H34V38M20 22V38M28 22V38M8 16H40" />
        <path d="M4 41H44" />
      </svg>
    </div>
  )
}

function App() {
  const [lang, setLang] = useState('en')
  const [menuOpen, setMenuOpen] = useState(false)
  const t = copy[lang]
  const isUrdu = lang === 'ur'

  const categoryIcons = ['sofa', 'bed', 'cushion', 'dining', 'chair', 'custom']
  const categoryNamesEn = ['Sofa Sets', 'Sofa-Cum-Beds', 'Cushions', 'Dining Sets', 'Chairs', 'Custom Furniture']
  const galleryPhotos = Array.from({ length: 14 }, (_, i) => `/images/sofa-${String(i + 1).padStart(2, '0')}.jpg`)

  return (
    <div className={`site-shell ${isUrdu ? 'urdu-mode' : ''}`} dir={isUrdu ? 'rtl' : 'ltr'} lang={isUrdu ? 'ur' : 'en'}>
      <div className="announcement">
        <span className="announcement-dot" />
        <span>{t.announcement}</span>
      </div>

      <header className="site-header">
        <a href="#home" className="brand" aria-label="All Noor Furniture House home">
          <BrandMark />
          <span className="brand-copy">
            <strong>ALL NOOR</strong>
            <small>FURNITURE HOUSE</small>
          </span>
        </a>

        <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>

        <nav className={`main-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          <a href="#home" onClick={() => setMenuOpen(false)}>{t.navHome}</a>
          <a href="#collection" onClick={() => setMenuOpen(false)}>{t.navCollection}</a>
          <a href="#custom" onClick={() => setMenuOpen(false)}>{t.navCustom}</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>{t.navContact}</a>
          <button className="language-switch" onClick={() => { setLang(isUrdu ? 'en' : 'ur'); setMenuOpen(false) }}>{t.language}</button>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span />{t.heroEyebrow}</div>
            <h1>{t.heroTitle}</h1>
            <p className="hero-description">{t.heroText}</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#collection">{t.explore}<ArrowIcon /></a>
              <a className="button button-light" href={waLink(PHONE_SAQIB, t.whatsappPrefill)} target="_blank" rel="noreferrer">{t.whatsapp}<ArrowIcon /></a>
            </div>
            <div className="hero-footnote">
              <span className="tiny-star">✳</span>
              <span>{t.madeForYou}</span>
              <span className="footnote-line" />
              <span>{t.craftedLabel}</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="All Noor Furniture House sofa design">
            <div className="hero-photo-placeholder hero-photo-real">
              <img src="/images/sofa-02.jpg" alt={isUrdu ? 'آل نور کا نیلے رنگ کا صوفہ سیٹ' : 'Blue sofa set by All Noor Furniture House'} />
            </div>
            <div className="hero-stamp">
              <span>ALL NOOR</span>
              <strong>Made<br />for living.</strong>
              <span className="stamp-line" />
            </div>
            <div className="hero-number">01 <span>/ 06</span></div>
          </div>
        </section>

        <section className="collection-section section-wrap" id="collection">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span />{t.collectionEyebrow}</div>
              <h2>{t.collectionTitle}</h2>
            </div>
            <p>{t.collectionText}</p>
          </div>
          <div className="category-grid">
            {t.categories.map((category, index) => (
              <article className={`category-card category-${index + 1}`} key={`${lang}-${category[0]}`}>
                <div className={`category-art art-${categoryIcons[index]}`}>
                  <div className="art-placeholder">
                    <span className="placeholder-icon">✳</span>
                    <span>{t.placeholder}</span>
                  </div>
                  <span className="category-index">0{index + 1}</span>
                </div>
                <div className="category-card-copy">
                  <div>
                    <h3>{category[0]}</h3>
                    <p>{category[1]}</p>
                  </div>
                  <a className="round-arrow" href={waLink(PHONE_SAQIB, `${t.categoryPrefill}${categoryNamesEn[index]}.`)} target="_blank" rel="noreferrer" aria-label={`Enquire about ${categoryNamesEn[index]}`}><ArrowIcon /></a>
                </div>
              </article>
            ))}
          </div>
          <p className="image-note">{isUrdu ? 'مزید صوفوں کے ڈیزائن نیچے دیکھیں۔' : 'See more of our sofa designs below.'}</p>
        </section>

        <section className="gallery-section section-wrap" aria-labelledby="gallery-title">
          <div className="section-heading gallery-heading">
            <div>
              <div className="eyebrow"><span />{t.galleryEyebrow}</div>
              <h2 id="gallery-title">{t.galleryTitle}</h2>
            </div>
            <p>{t.galleryText}</p>
          </div>
          <div className="photo-gallery">
            {galleryPhotos.map((photo, index) => (
              <figure className={`gallery-photo gallery-photo-${(index % 6) + 1}`} key={photo}>
                <img src={photo} alt={`${t.galleryCaption} ${String(index + 1).padStart(2, '0')}`} loading={index < 3 ? 'eager' : 'lazy'} />
                <figcaption><span>{t.galleryCaption}</span><span>{String(index + 1).padStart(2, '0')}</span></figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="custom-section section-wrap" id="custom">
          <div className="custom-visual">
            <div className="custom-visual-inner">
              <span className="custom-mark">AN</span>
              <div className="custom-visual-label">
                <span>{isUrdu ? 'آپ کا خیال' : 'YOUR IDEA'}</span>
                <span className="custom-label-line" />
                <span>{isUrdu ? 'ہماری توجہ' : 'OUR CRAFT'}</span>
              </div>
            </div>
          </div>
          <div className="custom-copy">
            <div className="eyebrow"><span />{t.customEyebrow}</div>
            <h2>{t.customTitle}</h2>
            <p>{t.customText}</p>
            <a className="button button-dark" href={waLink(PHONE_SAQIB, t.customPrefill)} target="_blank" rel="noreferrer">{t.customButton}<ArrowIcon /></a>
            <div className="custom-caption"><span className="caption-line" />{isUrdu ? 'اپنی پسند کے مطابق بنوائیں' : 'Designed around your preferences'}</div>
          </div>
        </section>

        <section className="process-section section-wrap">
          <div className="section-heading process-heading">
            <div>
              <div className="eyebrow"><span />{isUrdu ? 'کیسے شروع کریں' : 'HOW IT WORKS'}</div>
              <h2>{t.stepsTitle}</h2>
            </div>
          </div>
          <div className="process-grid">
            {t.steps.map((step) => (
              <article className="process-card" key={step[0]}>
                <span className="process-number">{step[0]}</span>
                <div className="process-rule" />
                <h3>{step[1]}</h3>
                <p>{step[2]}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="benefits-section">
          <div className="section-wrap benefits-inner">
            <div className="benefits-heading">
              <div className="eyebrow eyebrow-light"><span />{t.whyEyebrow}</div>
              <h2>{t.whyTitle}</h2>
            </div>
            <div className="benefits-list">
              {t.benefits.map((benefit, index) => (
                <article className="benefit-row" key={benefit[0]}>
                  <span className="benefit-number">0{index + 1}</span>
                  <div><h3>{benefit[0]}</h3><p>{benefit[1]}</p></div>
                  <span className="benefit-check">✳</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-main">
            <div className="eyebrow"><span />{t.contactEyebrow}</div>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactText}</p>
            <div className="contact-buttons">
              <a className="button button-dark" href={waLink(PHONE_SAQIB, t.whatsappPrefill)} target="_blank" rel="noreferrer">{t.message}<ArrowIcon /></a>
              <a className="button button-outline" href={`tel:+${PHONE_SAQIB}`}>{t.call}<ArrowIcon /></a>
            </div>
          </div>
          <div className="contact-details">
            <div className="contact-person primary-person">
              <div className="person-avatar">SC</div>
              <div className="person-info">
                <span className="person-label">{t.primaryContact}</span>
                <h3>Saqib Ch.</h3>
                <a href={`tel:+${PHONE_SAQIB}`}>0320 8424265</a>
              </div>
              <a className="person-whatsapp" href={waLink(PHONE_SAQIB, t.whatsappPrefill)} target="_blank" rel="noreferrer" aria-label="WhatsApp Saqib"><ArrowIcon /></a>
            </div>
            <div className="contact-person">
              <div className="person-avatar">AC</div>
              <div className="person-info">
                <span className="person-label">{t.secondaryContact}</span>
                <h3>Atif Ch.</h3>
                <a href={`tel:+${PHONE_ATIF}`}>0308 4734825</a>
              </div>
              <a className="person-whatsapp" href={waLink(PHONE_ATIF, t.whatsappPrefill)} target="_blank" rel="noreferrer" aria-label="WhatsApp Atif"><ArrowIcon /></a>
            </div>
            <div className="contact-meta">
              <div className="meta-icon">⌖</div>
              <div><span>{t.locationTitle}</span><p>{t.location}</p></div>
            </div>
            <div className="contact-meta">
              <div className="meta-icon">◷</div>
              <div><span>{t.hoursTitle}</span><p>{t.hours}</p></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <a href="#home" className="brand">
            <BrandMark />
            <span className="brand-copy"><strong>ALL NOOR</strong><small>FURNITURE HOUSE</small></span>
          </a>
          <p>{t.footerLine}</p>
        </div>
        <div className="footer-right">
          <a href="#home">{t.navHome}</a>
          <a href="#collection">{t.navCollection}</a>
          <a href="#custom">{t.navCustom}</a>
          <a href="#contact">{t.navContact}</a>
          <span className="footer-copy">© {new Date().getFullYear()} All Noor Furniture House</span>
        </div>
        <div className="footer-note">{t.footerSmall}</div>
      </footer>

      <a className="floating-whatsapp" href={waLink(PHONE_SAQIB, t.whatsappPrefill)} target="_blank" rel="noreferrer" aria-label="Contact All Noor Furniture House on WhatsApp">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.3-4.7A8.5 8.5 0 1 1 20.5 11.8Z" /><path d="M8.2 7.7c-.2-.5-.5-.5-.8-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.6s1.1 3 1.3 3.2c.2.2 2.2 3.5 5.4 4.7 2.7 1.1 3.2.9 3.8.8.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.3.2-1.5-.1-.1-.3-.2-.7-.4l-2.1-1c-.3-.1-.5-.2-.7.2-.2.3-.8 1-1-1-.2-.2-.4-.2-.7-.1-.3.1-1.2.5-2.3 1.3-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6Z" /></svg>
      </a>
    </div>
  )
}

export default App
