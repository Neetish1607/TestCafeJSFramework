import { Selector, test } from "testcafe"


fixture `Invalid User Attempt`

test('Invalid Email Test', async t =>{

    const emailText = 'Wrong email'
    await t
        .click('.ico-register')
        .click('#gender-male')
        .typeText('#FirstName','ntsh')
        .typeText('#LastName','shrm')
        .typeText("select[name='DateOfBirthDay']",'16')
        .typeText("select[name='DateOfBirthMonth']",'May')
        .typeText("select[name='DateOfBirthYear']",'1990')
        .typeText('#Email','t@t')
        .typeText('#Company','test')
        .typeText('#Password','tester@123')
        .typeText('#ConfirmPassword','tester@123')
        .click('#register-button')
        .wait(2000)
    await t.expect(Selector('div.message-error').textContent).contains(emailText)

})