import { Selector } from 'testcafe';

fixture `My fixture`
    .page `https://demoqa.com/books`
    .beforeEach( async t => {
        await t
            .click('#login')
            .typeText('#userName','balajitest')
            .typeText('#password','Balaji@1507')
            .click('#login.btn.btn-primary')
    });

    test('Profile_Screen', async t => {
        const logoutButton  = Selector('#submit.btn.btn-primary').exists;
        const gotobookstoreButton  = Selector('#gotoStore').exists;
        const logoutButton  = Selector('#submit.btn.btn-primary').exists;

        await t
        .expect(Selector('#userName-value').innerText).eql('balajitest')
        .expect(logoutButton).ok()
        .expect(gotobookstoreButton).ok()

    });


