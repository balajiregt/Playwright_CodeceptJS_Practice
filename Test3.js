import { Selector } from 'testcafe';

fixture `demoqa`
    .page('https://demoqa.com/books');

test('successful_login', async t => {
    await t
    .click('#login')
    .typeText('#userName','balajitest')
    .typeText('#password','Balaji@1507')
    .click('#login.btn.btn-primary')
});


    


