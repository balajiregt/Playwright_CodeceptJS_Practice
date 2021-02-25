Feature('Amazon ecommerce site action assertions');

Scenario('prelogin', ({ I }) => {
    I.amOnPage('/');
    I.see('Amazon');
    I.see('Hello, Sign in',{id: 'nav-link-accountList-nav-line-1'}) //before login there wont be any name, it will be hello
    I.see('0',{id: 'nav-cart-count'}) //before login the cart count is 0
});

Scenario('loginnowAssertions',({I}) =>{
I.moveCursorTo({id:'nav-link-accountList'});
I.click('Sign in'); //tap the Sign-in in the header bar
I.wait(5)
I.see('Sign-In','h1'); //after tapping Sign-in from header bar
I.click('Continue');
I.see('Enter your email or mobile phone number') //alert when phone number or email is not entered
I.fillField('email','123456');
I.click('Continue');
I.seeElement('//h4[normalize-space()="Incorrect phone number"]')
I.see('Incorrect phone number') //alert when phone number is incorrectly entered and there is no match in the DB
I.clearField('email')
I.fillField('email','balaji.regt@gmail')
I.click('Continue');
I.seeElement('//h4[normalize-space()="There was a problem"]')
I.see('We cannot find an account with that email address') //alert when email is incorrectly entered and there is no match in the DB
    //pause();
})

Scenario('afterloginAssertions',({I}) =>{

})

Scenario('searchfieldAssertions',({I}) =>{

})

Scenario('sortingAssertion',({I}) =>{

})