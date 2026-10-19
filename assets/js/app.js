'use strict';

/* Render configurable client content into the semantic page slots. */
(() => {
  const data = window.siteData || (typeof siteData !== 'undefined' ? siteData : null);
  if (!data) return;
  const byId = (id) => document.getElementById(id);
  const escapeHtml = (value = '') => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
  const put = (id, value) => { const node = byId(id); if (node) node.textContent = value || ''; };
  const setLink = (selector, href, label) => document.querySelectorAll(selector).forEach((node) => { node.href = href; if (label) node.textContent = label; });
  const render = (id, items, template) => { const node = byId(id); if (node) node.innerHTML = items.map(template).join(''); };
  const phoneHref = `tel:${data.businessInfo.phone.replace(/[^+\d]/g, '')}`;

  document.querySelectorAll('[data-business-name]').forEach((node) => { node.textContent = data.businessInfo.name; });
  document.title = `${data.businessInfo.name} | Taxi Service in Una`;
  setLink('[data-call-link]', phoneHref);
  setLink('[data-phone-link]', phoneHref, data.businessInfo.phone);
  const email = document.querySelector('[data-email-link]');
  if (email) { email.href = `mailto:${data.businessInfo.email}`; email.textContent = data.businessInfo.email; }
  put('hero-kicker', data.hero.kicker);
  put('hero-title', data.hero.title);
  put('hero-text', data.hero.text);
  document.querySelectorAll('[data-site-image]').forEach((image) => { image.src = data.images[image.dataset.siteImage] || ''; });
  const aboutImage = byId('about-image');
  if (aboutImage) aboutImage.src = data.about.image;
  const heroImage = byId('hero-image');
  if (heroImage) { heroImage.src = data.hero.image; heroImage.alt = data.hero.imageAlt; }
  put('about-title', `Comfortable journeys, thoughtfully planned`);
  put('about-description', data.about.description);
  put('founder-note', data.about.founderNote);
  put('special-drops-note', `${data.specialDrops.availability} Routes include ${data.specialDrops.destinations.join(', ')}.`);
  put('footer-address', data.businessInfo.address);
  put('footer-tagline', data.businessInfo.tagline);
  put('copyright-year', new Date().getFullYear());

  render('services-container', data.services, (item) => `<li><article class="service-card"><span class="service-icon" aria-hidden="true">✦</span><h3 class="h3">${escapeHtml(item.title)}</h3><p>${escapeHtml(item.desc)}</p></article></li>`);
  render('fleet-container', data.fleetPricing, (item) => `<li><article class="popular-card fleet-card"><figure class="card-banner"><img src="${escapeHtml(item.image || './assets/images/hero-banner.png')}" loading="lazy" alt="${escapeHtml(item.imageAlt || item.car)}" class="img-cover"></figure><div class="card-content"><div class="card-wrapper"><span class="card-price">${escapeHtml(item.price)}</span></div><h3 class="card-title">${escapeHtml(item.car)}</h3><p class="card-location">${escapeHtml(item.features)}</p></div></article></li>`);
  render('values-container', [
    { title: 'Our Mission', desc: data.about.mission, icon: 'compass' },
    { title: 'Our Vision', desc: data.about.vision, icon: 'eye' },
    { title: 'Our Values', desc: data.about.values, icon: 'heart' }
  ], (item) => `<li class="about-item"><div class="about-item-icon"><ion-icon name="${item.icon}"></ion-icon></div><div class="about-item-content"><h3 class="h3 about-item-title">${escapeHtml(item.title)}</h3><p class="about-item-text">${escapeHtml(item.desc)}</p></div></li>`);
  render('destinations-container', data.placesToVisit, (item, index) => `<li class="${index < 2 ? 'w-50' : ''}"><article class="destination-card"><figure class="card-banner">${item.image ? `<img src="${escapeHtml(item.image)}" loading="lazy" alt="${escapeHtml(item.name)}" class="img-cover">` : `<div class="destination-placeholder" aria-hidden="true">⌁</div>`}</figure><div class="card-content"><p class="card-subtitle">Himachal Pradesh</p><h3 class="h3 card-title">${escapeHtml(item.name)}</h3><p class="destination-desc">${escapeHtml(item.desc)}</p></div></article></li>`);
  render('packages-container', data.tourPackages, (item, index) => `<li><article class="popular-card"><figure class="card-banner"><img src="${escapeHtml(item.image || data.placesToVisit[index % data.placesToVisit.length]?.image || './assets/images/hero-banner.png')}" loading="lazy" alt="${escapeHtml(item.title)}" class="img-cover"><span class="card-badge${item.offer === 'new-customer' ? ' offer-badge' : ''}">${escapeHtml(item.tag)}</span></figure><div class="card-content"><div class="card-wrapper"><div class="card-price">Custom quote</div></div><h3 class="card-title">${escapeHtml(item.title)}</h3><p class="card-location">${escapeHtml(item.desc)}</p></div></article></li>`);
  render('areas-container', data.serviceAreas, (area) => `<li><a href="#destinations" class="footer-link">${escapeHtml(area)}</a></li>`);

  const rating = Math.min(5, Math.max(0, Number(data.reviews.rating) || 0));
  put('review-score', rating.toFixed(1));
  const stars = byId('review-stars');
  if (stars) stars.innerHTML = `${'★'.repeat(Math.round(rating))}<span class="visually-hidden"> out of 5 stars</span>`;
  const reviewItems = data.reviews.items || [];
  const reviewCard = (item, duplicate = false) => {
    const initials = item.name.trim().split(/\s+/).map((part) => part[0]).join('').slice(0, 2).toUpperCase();
    const itemStars = Math.min(5, Math.max(0, Number(item.rating) || 5));
    return `<li class="review-slide"${duplicate ? ' aria-hidden="true"' : ''}><article class="review-card"><div class="review-person"><span class="review-avatar" aria-hidden="true">${escapeHtml(initials)}</span><div><h3>${escapeHtml(item.name)}</h3><span class="review-sample-label">Sample review</span></div></div><p class="review-stars" aria-label="${itemStars} out of 5 stars">${'★'.repeat(itemStars)}</p><p class="review-quote">“${escapeHtml(item.text)}”</p></article></li>`;
  };
  const reviewTrack = byId('reviews-container');
  if (reviewTrack) reviewTrack.innerHTML = reviewItems.map((item) => reviewCard(item)).join('') + reviewItems.map((item) => reviewCard(item, true)).join('');
  render('social-container', data.socialLinks || [], (item) => `<li><a href="${escapeHtml(item.url)}" class="social-link" aria-label="${escapeHtml(item.label)}" target="_blank" rel="noopener noreferrer"><ion-icon name="${escapeHtml(item.icon)}"></ion-icon></a></li>`);
})();
