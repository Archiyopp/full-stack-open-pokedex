describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })
  it('a particular pokemon page can be opened', function (){
    cy.visit('http://localhost:5000')
    cy.contains('charmander')
    cy.contains('charmander').click()
    cy.contains('blaze')
    cy.contains('solar power')
  })
})
