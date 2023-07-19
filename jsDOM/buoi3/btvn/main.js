

        const users = [
            {
                name: "John Doe",
                quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                image: "https://randomuser.me/api/portraits/men/41.jpg",
                color: "#FF5733"
            },
            {
                name: "Jane Smith",
                quote: "Praesent non nulla eget mi mollis posuere in at elit.",
                image: "https://randomuser.me/api/portraits/women/50.jpg",
                color: "#33FF57"
            },
            {
                name: "Sarah Johnson",
                quote: "Duis vel massa eget elit blandit suscipit vitae quis elit.",
                image: "https://randomuser.me/api/portraits/women/22.jpg",
                color: "#5733FF"
            },
            {
                name: "Hua",
                quote: "Duis vel massa eget elit blandit suscipit vitae quis elit.",
                image: "https://randomuser.me/api/portraits/women/76.jpg",
                color: "#743654"
            },
            {
                name: "Athur",
                quote: "Praesent non nulla eget mi mollis posuere in at elit.",
                image: "https://randomuser.me/api/portraits/women/50.jpg",
                color: "#282889"
            }
            
        ];
        function showUser(index) {
            const selectedAuthor = document.querySelector(".author.selected");
            if (selectedAuthor) {
                selectedAuthor.classList.remove("selected");
            }
        
            const selectedImage = document.querySelectorAll(".author img")[index];
            selectedImage.parentElement.classList.add("selected");
        
            const activeImages = document.querySelectorAll(".author img.active");
            for (const img of activeImages) {
                img.classList.remove("active");
            }
            selectedImage.classList.add("active");
        
            const quoteElement = document.querySelector(".text");
            quoteElement.textContent = users[index].quote;
        
            const nameElement = document.querySelector(".name");
            nameElement.textContent = users[index].name;
        
            const testimonialsContainer = document.querySelector(".testimonials-container");
            testimonialsContainer.style.background = users[index].color;
        }
        