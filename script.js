// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const mobileMenu = document.getElementById("mobileMenu")

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active")

    // Animate hamburger icon
    const spans = mobileMenuBtn.querySelectorAll("span")
    if (mobileMenu.classList.contains("active")) {
      spans[0].style.transform = "rotate(45deg) translateY(10px)"
      spans[1].style.opacity = "0"
      spans[2].style.transform = "rotate(-45deg) translateY(-10px)"
    } else {
      spans[0].style.transform = "none"
      spans[1].style.opacity = "1"
      spans[2].style.transform = "none"
    }
  })

  // Close mobile menu when clicking on a link
  const mobileMenuLinks = mobileMenu.querySelectorAll("a")
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active")
      const spans = mobileMenuBtn.querySelectorAll("span")
      spans[0].style.transform = "none"
      spans[1].style.opacity = "1"
      spans[2].style.transform = "none"
    })
  })
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const headerOffset = 70
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Header scroll effect
let lastScroll = 0
const header = document.querySelector(".site-header")

if (header) {
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset

    if (currentScroll <= 0) {
      header.style.boxShadow = "none"
    } else {
      header.style.boxShadow = "0 4px 20px rgba(0, 206, 209, 0.1)"
    }

    lastScroll = currentScroll
  })
}

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe feature cards and pricing cards
const animatedElements = document.querySelectorAll(
  ".feature-card, .pricing-card, .team-card, .guide-card, .success-card",
)
if (animatedElements.length > 0) {
  animatedElements.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(card)
  })
}

// Add hover effect to buttons
const buttons = document.querySelectorAll(".btn-primary, .btn-secondary")
if (buttons.length > 0) {
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)"
    })

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })
}
