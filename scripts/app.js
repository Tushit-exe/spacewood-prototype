/**
 * SpaceWood Interiors — Studio Prototype JavaScript
 * Business: Modular kitchens and wardrobes in Hubballi, Karnataka
 * In business since 2016
 */

// ==========================================================================
// 1. CONFIGURATION & CONSTANTS
// Change this single constant to update the recipient WhatsApp number.
// Format: Country code without '+' followed by 10-digit number.
// ==========================================================================
const WHATSAPP_NUMBER = '919739077177';

document.addEventListener('DOMContentLoaded', () => {
  initProjectCarousel();
  initKitchenConfigurator();
  initBookingForm();
  initLayoutDiagram();
  initCursorSpotlight();
  initScrollReveal();
  initHeaderScrollAndNav();
});

// ==========================================================================
// 2. FEATURED PROJECT CAROUSEL
// ==========================================================================
const PROJECTS = [
  {
    serial: '01 / 04',
    title: 'The Shirur Park Minimalist Kitchen',
    desc: 'A clean parallel modular kitchen blending matte basalt cabinetry with warm natural oak accents. Fully fitted with German Hettich Sensys soft-close mechanisms and quartz worktop.',
    finish: 'Matt Basalt & Natural Oak',
    size: '14 ft × 10 ft Parallel',
    area: 'Shirur Park, Hubballi',
    hardware: 'Hettich Sensys Soft-Close',
    accentColor: '#3d3027',
    image: 'assets/hero_modular_kitchen.jpg'
  },
  {
    serial: '02 / 04',
    title: 'Deshpande Nagar Master Wardrobe',
    desc: 'Floor-to-ceiling modular wardrobe engineered with fluted tinted glass panels, integrated sensor LED illumination, and custom shoe and accessory pull-outs.',
    finish: 'PU Satin Charcoal & Bronze Fluted Glass',
    size: '12 ft Floor-to-Ceiling',
    area: 'Deshpande Nagar, Hubballi',
    hardware: 'Ebco Soft-Close Sliding Track',
    accentColor: '#2b2622',
    image: 'assets/collection_wardrobe.jpg'
  },
  {
    serial: '03 / 04',
    title: 'Vidyanagar 3BHK Turnkey Interior',
    desc: 'Comprehensive turnkey living space including modular kitchen, master and kids wardrobes, bespoke TV console unit, and foyer storage cut to millimetre precision.',
    finish: 'American Walnut Veneer & Sand Matte',
    size: '1,450 sq.ft Complete Home',
    area: 'Vidyanagar, Hubballi',
    hardware: 'Hettich Standard + Hafele Upgrades',
    accentColor: '#453123',
    image: 'assets/collection_turnkey.svg'
  },
  {
    serial: '04 / 04',
    title: 'Gokul Road Executive Studio',
    desc: 'Architectural executive furniture setup featuring cable-concealed work desks, full-height storage credentials, and acoustic acoustic fluted wall cladding.',
    finish: 'Smoked Ash Laminate & Black Metal',
    size: '650 sq.ft Studio Suite',
    area: 'Gokul Road, Hubballi',
    hardware: 'Ebco Heavy Duty Fittings',
    accentColor: '#202224',
    image: 'assets/collection_office.svg'
  }
];

function initProjectCarousel() {
  let currentIndex = 0;
  const track = document.getElementById('carousel-track');
  const counterEl = document.getElementById('carousel-counter');
  const titleEl = document.getElementById('carousel-title');
  const descEl = document.getElementById('carousel-desc');
  const finishEl = document.getElementById('spec-finish');
  const sizeEl = document.getElementById('spec-size');
  const areaEl = document.getElementById('spec-area');
  const hardwareEl = document.getElementById('spec-hardware');
  const visualEl = document.getElementById('carousel-visual-slot');
  const visualImg = document.getElementById('carousel-visual-img');
  const badgeSpec = document.getElementById('carousel-photo-badge');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');

  if (!track || !titleEl) return;

  function updateSlide(index) {
    currentIndex = (index + PROJECTS.length) % PROJECTS.length;
    const project = PROJECTS[currentIndex];

    // Update textual details
    counterEl.textContent = project.serial;
    titleEl.textContent = project.title;
    descEl.textContent = project.desc;
    finishEl.textContent = project.finish;
    sizeEl.textContent = project.size;
    areaEl.textContent = project.area;
    hardwareEl.textContent = project.hardware;

    if (badgeSpec) {
      badgeSpec.textContent = `${project.area} · ${project.finish}`;
    }

    // Smooth image transition
    if (visualImg && project.image) {
      visualImg.style.opacity = '0';
      setTimeout(() => {
        visualImg.src = project.image;
        visualImg.style.opacity = '1';
      }, 200);
    }
  }

  if (prevBtn) prevBtn.addEventListener('click', () => updateSlide(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => updateSlide(currentIndex + 1));

  // Touch Swipe for mobile (390px baseline)
  let touchStartX = 0;
  let touchEndX = 0;
  const carouselWrapper = document.getElementById('carousel-wrapper');
  if (carouselWrapper) {
    carouselWrapper.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carouselWrapper.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        updateSlide(currentIndex + 1); // Swiped left
      } else if (touchEndX - touchStartX > 50) {
        updateSlide(currentIndex - 1); // Swiped right
      }
    }, { passive: true });
  }

  // Initial render
  updateSlide(0);
}

// ==========================================================================
// 3. KITCHEN CONFIGURATOR & PRICING ESTIMATION
// ==========================================================================
const CONFIG_PRICES = {
  layoutFactors: {
    straight: { factor: 1.0, label: 'Straight Line' },
    l_shape: { factor: 1.25, label: 'L-Shape' },
    u_shape: { factor: 1.55, label: 'U-Shape' },
    parallel: { factor: 1.4, label: 'Parallel / Galley' }
  },
  finishes: {
    matt_laminate: { ratePerFt: 14500, label: 'Matt Laminate' },
    acrylic_gloss: { ratePerFt: 18000, label: 'Acrylic Gloss' },
    pu_finish: { ratePerFt: 21500, label: 'PU Finish' },
    walnut_veneer: { ratePerFt: 25000, label: 'Walnut Veneer' }
  },
  countertops: {
    granite: { ratePerFt: 2200, label: 'Granite (South Black)' },
    quartz: { ratePerFt: 4600, label: 'Quartz (20mm Engineered)' }
  }
};

let currentConfig = {
  layout: 'l_shape',
  finish: 'matt_laminate',
  countertop: 'quartz',
  lengthFeet: 12
};

function initKitchenConfigurator() {
  const layoutButtons = document.querySelectorAll('[data-config-layout]');
  const finishButtons = document.querySelectorAll('[data-config-finish]');
  const countertopButtons = document.querySelectorAll('[data-config-countertop]');
  const lengthSlider = document.getElementById('config-length-slider');
  const lengthDisplay = document.getElementById('config-length-val');
  const priceDisplay = document.getElementById('config-price-display');
  const shareWhatsAppBtn = document.getElementById('config-whatsapp-btn');

  let prevLow = 185000;
  let prevHigh = 235000;
  let priceAnimFrame = null;
  const formatINR = (val) => '₹' + Math.round(val).toLocaleString('en-IN');

  function animatePrice(targetLow, targetHigh) {
    if (priceAnimFrame) cancelAnimationFrame(priceAnimFrame);
    const startLow = prevLow;
    const startHigh = prevHigh;
    const startTime = performance.now();
    const duration = 280;

    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      const currentLow = Math.round(startLow + (targetLow - startLow) * ease);
      const currentHigh = Math.round(startHigh + (targetHigh - startHigh) * ease);

      if (priceDisplay) {
        priceDisplay.textContent = `${formatINR(currentLow)} – ${formatINR(currentHigh)}`;
      }

      if (progress < 1) {
        priceAnimFrame = requestAnimationFrame(step);
      } else {
        prevLow = targetLow;
        prevHigh = targetHigh;
      }
    }

    priceAnimFrame = requestAnimationFrame(step);
  }

  function calculateAndRender(isInitial = false) {
    const layout = CONFIG_PRICES.layoutFactors[currentConfig.layout];
    const finish = CONFIG_PRICES.finishes[currentConfig.finish];
    const countertop = CONFIG_PRICES.countertops[currentConfig.countertop];
    const length = currentConfig.lengthFeet;

    // Base calculation including carcass, shutters, and standard hardware
    const baseUnitRate = finish.ratePerFt + countertop.ratePerFt;
    const estimatedBase = length * baseUnitRate * layout.factor;

    const lowEstimate = Math.round((estimatedBase * 0.92) / 1000) * 1000;
    const highEstimate = Math.round((estimatedBase * 1.10) / 1000) * 1000;

    if (priceDisplay) {
      if (isInitial) {
        priceDisplay.textContent = `${formatINR(lowEstimate)} – ${formatINR(highEstimate)}`;
        prevLow = lowEstimate;
        prevHigh = highEstimate;
      } else {
        animatePrice(lowEstimate, highEstimate);
      }
    }

    if (lengthDisplay) {
      lengthDisplay.textContent = `${length} ft`;
    }

    updateLayoutSVG(currentConfig.layout);
  }

  // Bind layout chips
  layoutButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      layoutButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentConfig.layout = btn.getAttribute('data-config-layout');
      calculateAndRender(false);
    });
  });

  // Bind finish chips
  finishButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      finishButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentConfig.finish = btn.getAttribute('data-config-finish');
      calculateAndRender(false);
    });
  });

  // Bind countertop chips
  countertopButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      countertopButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentConfig.countertop = btn.getAttribute('data-config-countertop');
      calculateAndRender(false);
    });
  });

  // Bind length slider
  if (lengthSlider) {
    lengthSlider.addEventListener('input', (e) => {
      currentConfig.lengthFeet = parseInt(e.target.value, 10);
      calculateAndRender(false);
    });
  }

  // Pre-fill WhatsApp message on Share button
  if (shareWhatsAppBtn) {
    shareWhatsAppBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const layoutLabel = CONFIG_PRICES.layoutFactors[currentConfig.layout].label;
      const finishLabel = CONFIG_PRICES.finishes[currentConfig.finish].label;
      const countertopLabel = CONFIG_PRICES.countertops[currentConfig.countertop].label;
      const priceText = priceDisplay ? priceDisplay.textContent : 'Custom Estimate';

      const message = 
`Hello SpaceWood Interiors,
I configured a custom Modular Kitchen on your website:
• Layout: ${layoutLabel}
• Finish: ${finishLabel}
• Countertop: ${countertopLabel}
• Counter Length: ${currentConfig.lengthFeet} ft
• Estimated Sample Budget: ${priceText}
• Hardware: Hettich / Ebco Soft-Close

I would like to discuss next steps and schedule a site measurement in Hubballi.`;

      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    });
  }

  calculateAndRender(true);
}

// Visual Floorplan Wireframe SVG for Kitchen Configurator
function initLayoutDiagram() {
  updateLayoutSVG('l_shape');
}

function updateLayoutSVG(layoutType) {
  const container = document.getElementById('layout-diagram-box');
  if (!container) return;

  const colorPrimary = '#C8A87D'; // Champagne
  const colorMuted = 'rgba(255, 255, 255, 0.15)';

  let svgContent = '';

  switch (layoutType) {
    case 'straight':
      svgContent = `
        <svg viewBox="0 0 160 90" class="layout-preview-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="36" width="120" height="22" rx="3" fill="${colorPrimary}" fill-opacity="0.25" stroke="${colorPrimary}" stroke-width="1.8"/>
          <circle cx="45" cy="47" r="4" fill="${colorPrimary}"/>
          <rect x="75" y="42" width="35" height="10" rx="1.5" stroke="${colorPrimary}" stroke-dasharray="2 2"/>
          <text x="80" y="78" fill="${colorPrimary}" font-size="9" text-anchor="middle" font-family="sans-serif" letter-spacing="1">STRAIGHT COUNTER</text>
        </svg>
      `;
      break;
    case 'l_shape':
      svgContent = `
        <svg viewBox="0 0 160 90" class="layout-preview-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 20 H135 V42 H47 V75 H25 V20 Z" fill="${colorPrimary}" fill-opacity="0.25" stroke="${colorPrimary}" stroke-width="1.8"/>
          <circle cx="85" cy="31" r="4" fill="${colorPrimary}"/>
          <rect x="30" y="50" width="12" height="18" rx="1.5" stroke="${colorPrimary}" stroke-dasharray="2 2"/>
          <text x="80" y="85" fill="${colorPrimary}" font-size="9" text-anchor="middle" font-family="sans-serif" letter-spacing="1">L-SHAPE CORNER</text>
        </svg>
      `;
      break;
    case 'u_shape':
      svgContent = `
        <svg viewBox="0 0 160 90" class="layout-preview-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 20 H135 V75 H113 V42 H47 V75 H25 V20 Z" fill="${colorPrimary}" fill-opacity="0.25" stroke="${colorPrimary}" stroke-width="1.8"/>
          <circle cx="80" cy="31" r="4" fill="${colorPrimary}"/>
          <text x="80" y="85" fill="${colorPrimary}" font-size="9" text-anchor="middle" font-family="sans-serif" letter-spacing="1">U-SHAPE ENCLOSED</text>
        </svg>
      `;
      break;
    case 'parallel':
      svgContent = `
        <svg viewBox="0 0 160 90" class="layout-preview-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="18" width="110" height="20" rx="3" fill="${colorPrimary}" fill-opacity="0.25" stroke="${colorPrimary}" stroke-width="1.8"/>
          <rect x="25" y="55" width="110" height="20" rx="3" fill="${colorPrimary}" fill-opacity="0.25" stroke="${colorPrimary}" stroke-width="1.8"/>
          <circle cx="55" cy="28" r="4" fill="${colorPrimary}"/>
          <circle cx="95" cy="65" r="4" fill="${colorPrimary}"/>
          <text x="80" y="86" fill="${colorPrimary}" font-size="9" text-anchor="middle" font-family="sans-serif" letter-spacing="1">PARALLEL GALLEY</text>
        </svg>
      `;
      break;
  }

  container.innerHTML = svgContent;
}

// ==========================================================================
// 4. BOOK A SITE VISIT FORM
// Dynamic Next 7 Days Picker, Hubli Locality Autocomplete & WhatsApp submission
// ==========================================================================
let bookingData = {
  selectedDate: '',
  selectedSlot: '10:30 AM – 1:00 PM',
  locality: 'Deshpande Nagar'
};

function initBookingForm() {
  const daysContainer = document.getElementById('days-picker');
  const slotButtons = document.querySelectorAll('[data-time-slot]');
  const localityChips = document.querySelectorAll('.locality-chip');
  const localityInput = document.getElementById('booking-area');
  const nameInput = document.getElementById('booking-name');
  const phoneInput = document.getElementById('booking-phone');
  const noteInput = document.getElementById('booking-note');
  const bookingSubmitBtn = document.getElementById('booking-submit-btn');

  // Generate Next 7 Calendar Days dynamically starting from tomorrow
  if (daysContainer) {
    daysContainer.innerHTML = '';
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    for (let i = 1; i <= 7; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);

      const dayName = dayNames[d.getDay()];
      const dayNum = d.getDate();
      const monthName = monthNames[d.getMonth()];
      const fullDateStr = `${dayName}, ${dayNum} ${monthName}`;

      const pill = document.createElement('div');
      pill.className = `day-pill ${i === 1 ? 'active' : ''}`;
      pill.setAttribute('data-full-date', fullDateStr);
      pill.innerHTML = `
        <span class="day-name">${dayName}</span>
        <span class="day-date">${dayNum} ${monthName}</span>
      `;

      pill.addEventListener('click', () => {
        document.querySelectorAll('.day-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        bookingData.selectedDate = fullDateStr;
      });

      daysContainer.appendChild(pill);

      if (i === 1) {
        bookingData.selectedDate = fullDateStr;
      }
    }
  }

  // Time Slot Selection
  slotButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      slotButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      bookingData.selectedSlot = btn.getAttribute('data-time-slot');
    });
  });

  // Locality Chips Quick Selection
  localityChips.forEach(chip => {
    chip.addEventListener('click', () => {
      localityChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const localityName = chip.getAttribute('data-locality');
      bookingData.locality = localityName;
      if (localityInput) {
        localityInput.value = localityName;
      }
    });
  });

  // Sync manual locality typing with chips
  if (localityInput) {
    localityInput.addEventListener('input', (e) => {
      bookingData.locality = e.target.value;
      localityChips.forEach(chip => {
        if (chip.getAttribute('data-locality').toLowerCase() === e.target.value.toLowerCase().trim()) {
          chip.classList.add('active');
        } else {
          chip.classList.remove('active');
        }
      });
    });
  }

  // Handle Form Submit
  if (bookingSubmitBtn) {
    bookingSubmitBtn.addEventListener('click', (e) => {
      e.preventDefault();

      const name = nameInput ? nameInput.value.trim() : '';
      const phone = phoneInput ? phoneInput.value.trim() : '';
      const area = localityInput ? localityInput.value.trim() : bookingData.locality;
      const note = noteInput ? noteInput.value.trim() : '';

      // Validation
      if (!name) {
        alert('Please enter your full name.');
        nameInput.focus();
        return;
      }

      if (!phone || phone.replace(/\D/g, '').length < 10) {
        alert('Please enter a valid 10-digit mobile number.');
        phoneInput.focus();
        return;
      }

      if (!area) {
        alert('Please enter your locality in Hubballi.');
        localityInput.focus();
        return;
      }

      const bookingMessage = 
`Hello SpaceWood Interiors,
I would like to schedule a Free Site Visit at my home in Hubballi:
• Name: ${name}
• Contact: ${phone}
• Locality: ${area}, Hubballi
• Preferred Date: ${bookingData.selectedDate}
• Preferred Time: ${bookingData.selectedSlot}
${note ? `• Requirement Note: ${note}` : ''}

Please confirm our appointment slot.`;

      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(bookingMessage)}`;
      window.open(whatsappUrl, '_blank');
    });
  }
}

// ==========================================================================
// 5. INTERACTIVE CURSOR SPOTLIGHT (Desktop Architectural Glow)
// ==========================================================================
function initCursorSpotlight() {
  // Only activate on pointer-fine devices (desktop mouse)
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const spotlight = document.createElement('div');
  spotlight.className = 'ambient-cursor-spotlight';
  document.body.appendChild(spotlight);

  let mouseX = -1000, mouseY = -1000;
  let currentX = -1000, currentY = -1000;
  let isMoving = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!isMoving) {
      spotlight.style.opacity = '1';
      isMoving = true;
    }
  }, { passive: true });

  document.addEventListener('mouseleave', () => {
    spotlight.style.opacity = '0';
    isMoving = false;
  });

  function renderSpotlight() {
    currentX += (mouseX - currentX) * 0.12;
    currentY += (mouseY - currentY) * 0.12;
    spotlight.style.left = `${currentX}px`;
    spotlight.style.top = `${currentY}px`;
    requestAnimationFrame(renderSpotlight);
  }
  requestAnimationFrame(renderSpotlight);
}

// ==========================================================================
// 6. SCROLL-DRIVEN REVEAL ANIMATIONS
// ==========================================================================
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (!elements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08
    });

    elements.forEach(el => observer.observe(el));
  } else {
    // Fallback
    elements.forEach(el => el.classList.add('is-revealed'));
  }
}

// ==========================================================================
// 7. FROSTED GLASS HEADER SCROLL & NAVIGATION SPY
// ==========================================================================
function initHeaderScrollAndNav() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 25) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // Navigation Spy
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-btn-pill');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-pill');

  function updateActiveNav() {
    let currentId = '';
    const scrollPos = window.scrollY + 140;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    if (currentId) {
      desktopNavLinks.forEach(link => {
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });

      mobileNavLinks.forEach(link => {
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
}


