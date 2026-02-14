---
title: "Blog"
layout: single
showToc: false
hideMeta: true
url: "/blog/"
---



<div class="blog-list">

  <a href="/blog/first-post/" class="blog-item">
    <div class="blog-item-inner">
      <div class="blog-item-main">
        <h3 class="blog-item-title">So… What Am I Going to Write Here?</h3>
        <span class="blog-item-date">Dec 02, 2025</span>
      </div>
      <div class="blog-item-action">
        <span class="blog-pill">Read</span>
      </div>
    </div>
  </a>

</div>

<style>
.blog-list {
  max-width: 800px;
  margin: 3rem auto;
  padding: 0 1.5rem;
}

.blog-item {
  display: block;
  text-decoration: none;
  color: var(--primary);
  border-bottom: 2px solid rgba(128,128,128,0.1);
  padding: 2.2rem 0;
  transition: all 0.2s ease;
}

.blog-item:hover {
  border-bottom-color: #500000; /* Maroon accent */
}

html.dark .blog-item:hover,
[data-theme="dark"] .blog-item:hover {
  border-bottom-color: #ddd8d8; /* Creamy white in dark mode */
}

.blog-item-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.blog-item-main {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.blog-item-title {
  margin: 0;
  font-family: var(--font-heading), sans-serif;
  font-size: 1.4rem;
  font-weight: 400; /* Non-bold as requested */
  line-height: 1.3;
  letter-spacing: -0.01em;
}

.blog-item-date {
  font-size: 1rem;
  opacity: 0.6;
  font-weight: 400;
  color: var(--secondary);
  font-variant-numeric: tabular-nums;
}

/* Premium Pill Design - Matching Projects page */
.blog-pill {
  padding: 0.45rem 1.1rem;
  border-radius: 4px;
  text-decoration: none !important;
  font-size: 0.75rem;
  background: #500000; /* Maroon */
  color: #fff !important;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  border: none !important;
}

.blog-item:hover .blog-pill {
  background: #7a0019; /* Lighter maroon on item hover */
  transform: translateY(-1px);
}

html.dark .blog-pill,
[data-theme="dark"] .blog-pill {
  background: #ddd8d8; /* Creamy in dark mode */
  color: #500000 !important;
}

html.dark .blog-item:hover .blog-pill,
[data-theme="dark"] .blog-item:hover .blog-pill {
  background: #ffffff;
}

@media (max-width: 600px) {
  .blog-item-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.2rem;
  }
}
</style>
