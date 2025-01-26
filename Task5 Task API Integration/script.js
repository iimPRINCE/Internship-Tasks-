
const fetchButton = document.getElementById('fetchButton');
const userInfo = document.getElementById('userInfo');

fetchButton.addEventListener('click', () => {
    userInfo.innerHTML = "Loading...";
    
    // Updated user data
    const user = {
        name: { first: "Prince Kumar", last: "Patel" },
        email: "prince.patel484771@gmail.com",
        location: { city: "Indore", country: "M.P, India" },
        picture: { large: "https://avatars.githubusercontent.com/u/145700319?v=4" }
    };
    
    // Simulate a dynamic fetch by displaying static data
    setTimeout(() => {
        userInfo.innerHTML = `
            <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
            <img src="${user.picture.large}" alt="User Picture" />
        `;
    }, 500);
});
