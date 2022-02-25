it('sanity check', () => {
    expect(3+5).to.equal(8)
})

describe('form stuff', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    it('can add text to the box', () => {
        cy.get('input[name=name]').type('johnny')
    })

    it('able to select mulitple toppings', () => {
        cy.get('[type="checkbox"]').check()
    })

    it('submit button works correctly', () => {
        cy.get('form').submit()
    })
})