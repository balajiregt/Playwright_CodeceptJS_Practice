import { Selector } from 'testcafe';

fixture `Example`
    .page `https://devexpress.github.io/testcafe/example/`;

test('Click test2', async t => {
    const selectBasedOnText = Selector('label').withExactText('Support for testing on remote');//This test will fail, since the text is not correct

    await t
        .click(selectBasedOnText)   
})