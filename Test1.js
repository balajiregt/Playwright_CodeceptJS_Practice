import { Selector } from 'testcafe';

fixture `Example`
    .page `https://devexpress.github.io/testcafe/example/`;

test('Click test', async t => {
      const selectBasedOnText = Selector('label').withText('I have tried TestCafe');
      //const username=Selector('#article-header').withExactText('Thank you, Balaji.K!')
      
    await t
        .click(selectBasedOnText)
        .typeText('#developer-name', 'Balaji')
        .click('#submit-button')
        .expect(Selector('#article-header').innerText).eql('Thank you, Balaji!')
        
})