/**
 * LUMINA GALLERY - Premium Image Experience
 * Fully-featured image gallery with filtering, effects, and lightbox
 */

// Image Data
const images = [
  { id: 1, category: 'nature', title: 'Mountain Mist', desc: 'Serene mountain peaks shrouded in morning fog.', src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200' },
  { id: 2, category: 'mountains', title: 'Alpine Sunset', desc: 'Golden hour hitting the snow-capped Dolomites.', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1200' },
  { id: 3, category: 'ocean', title: 'Turquoise Tides', desc: 'Crystal clear waters crashing against white sand.', src: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&q=80&w=1200' },
  { id: 4, category: 'urban', title: 'Urban: Neon Nights', desc: 'A stunning cyberpunk-inspired cinematic view of Tokyo at night.', src: 'https://images.unsplash.com/photo-1503891450247-ee5f8bb36a2a?auto=format&fit=crop&q=80&w=1200' },
  { id: 6, category: 'wildlife', title: 'Primal Grace', desc: 'A majestic lion surveys its kingdom at dawn.', src: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&q=80&w=1200' },
  { id: 7, category: 'nature', title: 'Forest Path', desc: 'Sunlight filtering through ancient redwood trees.', src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200' },
  { id: 8, category: 'ocean', title: 'Deep Blue', desc: 'The rhythmic motion of the Atlantic ocean.', src: 'https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&q=80&w=1200' },
  { id: 9, category: 'mountains', title: 'Summit Reach', desc: 'Climbers navigating the ridges of the Himalayas.', src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200' },
  { id: 10, category: 'urban', title: 'Urban: City Geometry', desc: 'Minimalist architectural shot highlighting the geometric patterns of modern skyscrapers.', src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200' },
  { id: 13, category: 'urban', title: 'Street Echo', desc: 'A rainy afternoon in New York City.', src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=1200' },
  { id: 15, category: 'urban', title: 'Metro Pulse', desc: 'The architectural beauty of the London Underground.', src: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&q=80&w=1200' },
  { id: 16, category: 'urban', title: 'Golden Gate', desc: 'The iconic bridge shrouded in morning mist.', src: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=1200' },
  { id: 17, category: 'nature', title: 'Emerald Valley', desc: 'Lush green valleys of the Faroe Islands.', src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=1200' },
  { id: 18, category: 'mountains', title: 'Purple Peak', desc: 'The Matterhorn reflecting in a still alpine lake.', src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200' },
  { id: 19, category: 'ocean', title: 'Coral Reef', desc: 'Vibrant underwater ecosystems of the Great Barrier Reef.', src: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&q=80&w=1200' },
  { id: 20, category: 'sky', title: 'Northern Lights', desc: 'The Aurora Borealis dancing over Iceland.', src: 'https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?auto=format&fit=crop&q=80&w=1200' },
  { id: 21, category: 'wildlife', title: 'Desert Wanderer', desc: 'A lone camel crossing the vast Sahara dunes.', src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200' },
  { id: 23, category: 'mountains', title: 'Icelandic Highs', desc: 'Dramatic volcanic peaks under a moody sky.', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1200' },
  { id: 24, category: 'ocean', title: 'Wave Power', desc: 'A massive barrel wave breaking in slow motion.', src: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&q=80&w=1200' },
  { id: 25, category: 'sky', title: 'Solar Flare', desc: 'The sun setting behind a distant horizon.', src: 'https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?auto=format&fit=crop&q=80&w=1200' },
  { id: 28, category: 'nature', title: 'Autumn Flame', desc: 'Vibrant maple leaves in the Canadian wilderness.', src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200' },
  // Newly Added Premium Images
  { id: 29, category: 'urban', title: 'Neon Nightscape', desc: 'A cinematic shot of a futuristic neon-lit city street at night.', src: '/assets/images/urban_night.png' },
  { id: 30, category: 'urban', title: 'Sunset Skyline', desc: 'Luxury rooftop view overlooking a modern city skyline at sunset.', src: '/assets/images/urban_skyline.png' },
  { id: 31, category: 'sky', title: 'Aurora Borealis', desc: 'Vibrant northern lights dancing over a snow-covered pine forest.', src: '/assets/images/sky_aurora.png' },
  { id: 32, category: 'sky', title: 'Cosmic Nebula', desc: 'A deep space nebula with vibrant colors of blue and magenta.', src: '/assets/images/sky_nebula.png' },
  { id: 33, category: 'wildlife', title: 'Forest Stalker', desc: 'A majestic panther with piercing eyes in the rainforest.', src: '/assets/images/wildlife_leopard.png' },
  { id: 34, category: 'wildlife', title: 'Moonlit Howl', desc: 'A powerful wolf standing on a rocky outcrop under a full moon.', src: '/assets/images/wildlife_wolf.png' },
  { id: 35, category: 'urban', title: 'Reflective Rain', desc: 'City lights reflecting in puddles after a rainstorm.', src: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=80&w=1200' },
  { id: 37, category: 'wildlife', title: 'Royal Tiger', desc: 'A Bengal tiger surveying its territory with intense gaze.', src: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&q=80&w=1200' }
];

// State Management
let currentCategory = 'all';
let currentEffect = 'none';
let currentLayout = 'grid'; // grid or masonry
let currentIndex = 0;

// DOM Elements
const gallery = document.getElementById('gallery');
const categoryFilters = document.getElementById('category-filters');
const effectFilters = document.getElementById('effect-filters');
const gridBtn = document.getElementById('grid-view');
const masonryBtn = document.getElementById('masonry-view');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const thumbStrip = document.getElementById('thumbnail-strip');

/**
 * Initialize Gallery
 */
function init() {
  renderGallery();
  renderThumbnails();
  setupEventListeners();
}

/**
 * Render Gallery Items
 */
function renderGallery() {
  const filteredImages = currentCategory === 'all' 
    ? images 
    : images.filter(img => img.category === currentCategory);

  gallery.innerHTML = '';
  
  filteredImages.forEach((img, index) => {
    const card = document.createElement('div');
    card.className = `card filter-${currentEffect}`;
    card.innerHTML = `
      <img src="${img.src}" alt="${img.title}" loading="lazy" onerror="this.closest('.card').style.display='none'">
      <div class="card-overlay">
        <div class="category-badge">${img.category}</div>
        <div class="card-info">
          <h3>${img.title}</h3>
          <p>${img.desc}</p>
        </div>
      </div>
    `;
    
    card.addEventListener('click', () => openLightbox(images.indexOf(img)));
    gallery.appendChild(card);
  });
}

/**
 * Render Thumbnails for Lightbox
 */
function renderThumbnails() {
  thumbStrip.innerHTML = '';
  images.forEach((img, index) => {
    const thumb = document.createElement('img');
    thumb.src = img.src;
    thumb.onerror = () => thumb.style.display = 'none';
    thumb.className = `thumb ${index === currentIndex ? 'active' : ''}`;
    thumb.addEventListener('click', () => {
      currentIndex = index;
      updateLightbox();
    });
    thumbStrip.appendChild(thumb);
  });
}

/**
 * Lightbox Logic
 */
function openLightbox(index) {
  currentIndex = index;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
  updateLightbox();
}

function updateLightbox() {
  const img = images[currentIndex];
  lightboxImg.src = img.src;
  document.getElementById('lightbox-title').innerText = img.title;
  document.getElementById('lightbox-desc').innerText = img.desc;
  document.getElementById('lightbox-category').innerText = img.category;
  document.getElementById('lightbox-counter').innerText = `${currentIndex + 1} / ${images.length}`;
  
  // Highlight active thumbnail
  const thumbs = document.querySelectorAll('.thumb');
  thumbs.forEach((t, i) => {
    t.classList.toggle('active', i === currentIndex);
  });

  // Scroll active thumbnail into view
  const activeThumb = thumbs[currentIndex];
  activeThumb.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateLightbox();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateLightbox();
}

/**
 * Event Listeners
 */
function setupEventListeners() {
  // Category Filters
  categoryFilters.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      categoryFilters.querySelector('.active').classList.remove('active');
      btn.classList.add('active');
      currentCategory = btn.dataset.category;
      renderGallery();
    });
  });

  // Effect Filters
  effectFilters.querySelectorAll('.effect-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      effectFilters.querySelector('.active').classList.remove('active');
      btn.classList.add('active');
      currentEffect = btn.dataset.effect;
      renderGallery();
    });
  });

  // Layout Toggles
  gridBtn.addEventListener('click', () => {
    gridBtn.classList.add('active');
    masonryBtn.classList.remove('active');
    gallery.classList.add('grid-layout');
    gallery.classList.remove('masonry-layout');
    currentLayout = 'grid';
  });

  masonryBtn.addEventListener('click', () => {
    masonryBtn.classList.add('active');
    gridBtn.classList.remove('active');
    gallery.classList.add('masonry-layout');
    gallery.classList.remove('grid-layout');
    currentLayout = 'masonry';
  });

  // Lightbox Navigation
  closeBtn.addEventListener('click', closeLightbox);
  nextBtn.addEventListener('click', nextImage);
  prevBtn.addEventListener('click', prevImage);
  
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard Support
  window.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  });
}

// Start the application
document.addEventListener('DOMContentLoaded', init);
