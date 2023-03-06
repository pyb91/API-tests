const BaseUrl = "https://unequaled-valley-seagull.glitch.me/";
const newUserData = {
  id: 3,
  title: "Test swagger",
  body: "Testujemy swaggera",
  user_id: 3,
  date: "2023-02-17",
  image: ".\\data\\images\\256\\jeremy-hynes-HxxNVun8HEc-unsplash.jpg",
};
const newArticle = {
  title: "2 new article",
  body: "dodajemy nowy artykuł",
  user_id: 1,
  date: "2023-02-30",
  image: ".\\data\\images\\256\\sharon-mccutcheon--8a5eJ1-mmQ-unsplash.jpg",
};
const editArticle = {
    body: "artykuł po edycji",
    date: "2023-02-31",
    image: ".\\data\\images\\256\\sharon-mccutcheon--8a5eJ1-mmQ-unsplash.jpg",
    title: "brand new article2",
    user_id: 1,
}

describe("APi tests", () => {
  it("should get users", () => {
    cy.request({
      method: "GET",
      url: BaseUrl + "api/users",
    })
      .its("body")
      .should("have.length", 9);
  });
  it("edits article 3", () => {
    let userID;
    cy.request({
      method: "PUT",
      url: BaseUrl + "api/articles/3",
      body: newUserData,
    }).then((response) => {
      expect(response.status).to.eq(200);
      userID = response.body.user_id;
    });
  });
  it("should post and edit an article", () => {
    let articleID;
    cy.request({
      method: "POST",
      url: BaseUrl + "api/articles",
      body: newArticle,
    }).then((response) => {
      expect(response.status).to.eq(201);
      articleID = response.body.id;
    })
    cy.request({
      method: "PUT",
      url: BaseUrl + "api/articles/" + articleID,
      body: editArticle,
    }).then((response) => {
      expect(response.status).to.eq(200);
    })
  })
});
