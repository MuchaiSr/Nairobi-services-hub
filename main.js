const services = [
    {
    name: "John's Plumbing",
    description: "Affordable plumbing services available 24/7.",
    contact: "tel:+254700000000",
    featured: true,
    },
    {
     name: "Mercy Home Tutoring",
    description: "Math and English tutoring for primary students.",
    contact: "tel:+254701234567",
    featured: false,
    },
    {
    name: "Graphic Genius Studio",
    description: "Professional logos, posters, and branding help.",
    contact: "https://wa.me/254712345678",
    featured: true,
    }
    ];

const list = document.getElementById("service-list");
services.forEach(service => {
    const card = document.createElement("div");
    card.className = "card" + (service.featured ? " featured" : "");
    card.innerHTML = `<h2>${service.name}</h2>
    <p>${service.description}</p>
    <a href="${service.contact}" target="_blank">Contact</a>
    `;
    list.appendChild(card);
});