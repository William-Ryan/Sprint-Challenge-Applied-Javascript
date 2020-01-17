// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(res => {
    console.log(res);
    const cardContainer = document.querySelector(".cards-container");
    res.data.articles.bootstrap.forEach(el => {
        const newCard = createCard(el);
        cardContainer.append(newCard);
    });
})
.catch(err => {
    console.log("This is an Error",err);
})

function createCard(obj){
    
    const card = document.createElement("div");
    const headline = document.createElement("div");
    const author = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const name = document.createElement("span");

    card.append(headline);
    card.append(author);
    author.append(imgContainer);
    imgContainer.append(img);
    author.append(name);

    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");

    headline.textContent = obj.headline;
    img.src = obj.authorPhoto;
    author.textContent = obj.authorName;

    return card;
}