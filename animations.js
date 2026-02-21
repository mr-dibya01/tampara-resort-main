// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const mobileNav = document.getElementById("mobileNav")

mobileMenuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden")
})

// Close mobile menu when clicking on a link
const links = mobileNav.querySelectorAll("a")
links.forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.add("hidden")
  })
})

// Room Tabs with smooth animations
const roomTabs = document.querySelectorAll(".room-tab")
const roomContents = document.querySelectorAll(".room-content")

roomTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const tabIndex = tab.getAttribute("data-tab")

    // Remove active class and styling from all tabs
    roomTabs.forEach((t) => {
      t.classList.remove("active")
      t.style.backgroundColor = ""
      t.style.color = ""
    })

    // Hide all room contents with fade out
    roomContents.forEach((content) => {
      content.classList.add("hidden")
      content.style.opacity = "0"
    })

    // Add active class to clicked tab with styling
    tab.classList.add("active")
    tab.style.backgroundColor = "rgba(172, 141, 86, 0.1)"
    tab.style.color = "#AC8D56"
    tab.style.borderLeftColor = "#AC8D56"

    // Show selected room content with fade in
    roomContents[tabIndex].classList.remove("hidden")
    roomContents[tabIndex].style.opacity = "1"
    roomContents[tabIndex].style.animation = "fadeInUp 0.8s ease-out"
  })
})

// Facility Cards Intersection Observer - Smooth scroll animations
const facilityCards = document.querySelectorAll(".facility-card")
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

facilityCards.forEach((card) => {
  observer.observe(card)
})

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Parallax scrolling effect on hero section
const heroSection = document.getElementById("home")
if (heroSection) {
  window.addEventListener("scroll", () => {
    const scrollPosition = window.pageYOffset
    heroSection.style.backgroundPosition = `center ${scrollPosition * 0.5}px`
  })
}

// Enhanced scroll reveal animations
const revealElements = document.querySelectorAll('[class*="animate-"]')

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
      }
    })
  },
  {
    threshold: 0.1,
  },
)

revealElements.forEach((el) => {
  revealObserver.observe(el)
})

// Add staggered animation on page load
window.addEventListener("load", () => {
  const animatedElements = document.querySelectorAll('[class*="animate-"]')
  animatedElements.forEach((el, index) => {
    if (!el.style.animationDelay) {
      el.style.animationDelay = `${index * 0.05}s`
    }
  })
})

// Mouse move parallax effect for cards
const cards = document.querySelectorAll(".card-hover")
cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
  })

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)"
  })
})

// Smooth scroll progress indicator (optional)
window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  const scrollPercent = (scrollTop / docHeight) * 100

  // You can use this for a progress bar if needed
})
