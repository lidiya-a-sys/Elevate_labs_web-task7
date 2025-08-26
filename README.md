# 👥 User Data from Public API (Fetch API Project)

## Features

* Fetches user data from a *public API* (JSONPlaceholder)
* Displays *Name, Email, and Address* for each user
* Reload button to fetch fresh data
* Error handling with friendly message if request fails
* Responsive grid layout with CSS
* Lightweight and mobile-friendly

---

## Data Source

Data is fetched from the free test API:  
👉 [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)

---

## Installation

No installation required. Simply:

1. Clone the repository:
   bash
   git clone https://github.com/<your-username>/fetch-api-project
`

2. Open index.html in any modern browser (Chrome, Firefox, Edge).
3. Or run with a local server (e.g., VS Code Live Server).

---

## Customization

1. *Change API Endpoint* → Update API_URL in script.js to fetch from another API.
2. *Modify Displayed Data* → Edit displayUsers() in script.js to show phone, website, or company.
3. *Styling* → Change background, colors, or grid layout in style.css.
4. *Add More Interactivity* → Search, filter, or pagination can be added with extra JS.

---

## Testing

1. *Basic Test*

   * Open page → Users should load and display in cards
   * Click *Reload Data* → Should fetch again

2. *Edge Cases*

   * Disable internet → Should show an error message ⚠
   * Invalid API URL → Should display error message
   * Slow connection → Should show "Loading..."

---

## Best Practices Implemented

* ✔ Async/Await with fetch()
* ✔ Error handling with try...catch
* ✔ Responsive grid layout with CSS
* ✔ Separation of HTML, CSS, JS files
* ✔ User-friendly error messages

---

## Screenshot

![App Screenshot](screenshot.png)

---

## Author

👩‍💻 *Your Name*
GitHub: [@your-username](https://github.com/your-username)
