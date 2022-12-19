beforeEach(() => {
  cy.visit("/");
  cy.login("bropet@mail.ru", "123");
});

describe("Test add books", () => {
  it("Add book", () => {
    cy.addBook(
      "Властелин колец",
      "Роман-эпопея английского писателя Дж. Р. Р. Толкина, одно из самых известных произведений жанра фэнтези",
      "Дж. Р. Р. Толкина"
    );
    cy.contains("Дж. Р. Р. Толкина").should("be.visible");
  });

  it("Add to favorite", () => {
    cy.addToFavorite(
      "Братство Кольца",
      "С друзьями-хоббитами Сэмом, Мерри и Пиппином Фродо отправляется в обитель эльфов — Ривенделл, чтобы избавиться от опасного подарка",
      "Дж. Р. Р. Толкина"
    );
    cy.contains("Братство Кольца").should("be.visible");
  });

  it("Delete books in favorite", () => {
    cy.get("h4").click();
    cy.deleteBook(
      "Братство Кольца",
      "С друзьями-хоббитами Сэмом, Мерри и Пиппином Фродо отправляется в обитель эльфов — Ривенделл, чтобы избавиться от опасного подарка",
      "Дж. Р. Р. Толкина"
      );
  });

  it("Should login successfuly", () => {
    cy.contains('Books list');
    cy.login("bropet@mail.ru", "123");
    cy.contains('Добро пожаловать bropet@mail.ru').should("be.visible");
  });

});