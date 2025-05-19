<script>
    document.addEventListener("DOMContentLoaded", function () {
        const cities = [
            "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata",
            "Pune", "Ahmedabad", "Jaipur", "Lucknow", "Chandigarh", "Bhopal",
            "Indore", "Nagpur", "Patna", "Surat", "Visakhapatnam", "Kochi",
            "Coimbatore", "Thiruvananthapuram", "Goa", "Guwahati", "Bhubaneswar"
        ];

        const citySelect = document.getElementById("citySelect");

        if (citySelect) {
            cities.forEach((city, index) => {
                const option = document.createElement("option");
                option.value = city;
                option.textContent = city;
                option.style.opacity = "0"; // Initially hidden for fade-in effect

                citySelect.appendChild(option);

                // Apply fade-in animation with a small delay for each city
                setTimeout(() => {
                    option.style.transition = "opacity 0.5s ease-in-out";
                    option.style.opacity = "1";
                }, index * 100); // Staggered animation effect
            document.addEventListener("DOMContentLoaded", () => {
    const floatingElements = document.querySelectorAll(".floating");

    floatingElements.forEach((element, index) => {
        setInterval(() => {
            element.style.transform = `translateY(${Math.random() * 20 - 10}px)`;
        }, 2000 + index * 500);
    });
});

</script>
