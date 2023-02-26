const BaseUrl = "https://far-second-lighter.glitch.me/";
const newUserData = {
  id: 3,
  title: "Test swagger",
  body: "Testujemy swaggera",
  user_id: 3,
  date: "2023-02-17",
  image: ".\\data\\images\\256\\jeremy-hynes-HxxNVun8HEc-unsplash.jpg",
};

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
});
