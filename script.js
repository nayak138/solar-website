// Mobile Navigation Toggle
const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
  navToggle.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    navToggle.classList.remove("active")
  })
})

// Smooth scrolling for navigation links
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

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)"
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)"
    navbar.style.boxShadow = "none"
  }
})

// Intersection Observer for fade-in animations
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

// Add fade-in class to elements and observe them
document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll(
    ".service-card, .benefit-item, .testimonial-card, .hero-content, .benefits-image",
  )

  elementsToAnimate.forEach((el) => {
    el.classList.add("fade-in")
    observer.observe(el)
  })
})

// Contact form handling
const contactForm = document.getElementById("contactForm")

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form data
  const formData = new FormData(contactForm)
  const name = formData.get("name")
  const email = formData.get("email")
  const phone = formData.get("phone")
  const message = formData.get("message")

  // Simple validation
  if (!name || !email) {
    alert("Please fill in all required fields.")
    return
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.")
    return
  }

  // Simulate form submission
  const submitButton = contactForm.querySelector('button[type="submit"]')
  const originalText = submitButton.textContent

  submitButton.textContent = "Sending..."
  submitButton.disabled = true

  // Simulate API call delay
  setTimeout(() => {
    alert("Thank you for your interest! We'll contact you within 24 hours to schedule your free solar consultation.")
    contactForm.reset()
    submitButton.textContent = originalText
    submitButton.disabled = false
  }, 1500)
})

// Add some interactive features
document.addEventListener("DOMContentLoaded", () => {
  // Add hover effects to service cards
  const serviceCards = document.querySelectorAll(".service-card")
  serviceCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px)"
    })

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(-5px)"
    })
  })

  // Add click handlers to CTA buttons
  const ctaButtons = document.querySelectorAll(".btn-primary")
  ctaButtons.forEach((button) => {
    if (button.textContent.includes("Quote")) {
      button.addEventListener("click", () => {
        document.getElementById("contact").scrollIntoView({
          behavior: "smooth",
        })
      })
    }
  })

  // Add typing effect to hero title (optional enhancement)
  const heroTitle = document.querySelector(".hero-title")
  if (heroTitle) {
    const text = heroTitle.innerHTML
    heroTitle.innerHTML = ""
    let i = 0

    const typeWriter = () => {
      if (i < text.length) {
        heroTitle.innerHTML += text.charAt(i)
        i++
        setTimeout(typeWriter, 50)
      }
    }

    // Start typing effect after a short delay
    setTimeout(typeWriter, 500)
  }
})

// Add scroll-to-top functionality
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

// Create scroll-to-top button
const createScrollToTopButton = () => {
  const button = document.createElement("button")
  button.innerHTML = '<i class="fas fa-arrow-up"></i>'
  button.className = "scroll-to-top"
  button.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--primary);
        color: var(--primary-foreground);
        border: none;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: var(--shadow);
    `

  button.addEventListener("click", scrollToTop)
  document.body.appendChild(button)

  // Show/hide button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      button.style.opacity = "1"
      button.style.visibility = "visible"
    } else {
      button.style.opacity = "0"
      button.style.visibility = "hidden"
    }
  })
}

// Initialize scroll-to-top button
createScrollToTopButton()
