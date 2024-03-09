const { Selector } = require("testcafe")
const { enterName, typeComment, submitForm } = require("../helper/helper")


fixture`My Fixture`

test('My Test', async t =>{
    const name = 'John Heart'

    await enterName(name)
    await typeComment('here is what i think ...')
    await submitForm()
    await t.expect(Selector('#article-header').textContent).contains(name)
}).page`https://devexpress.github.io/testcafe/example/`