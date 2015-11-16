require 'rails_helper'

feature 'signup' do
  scenario 'has a page to sign up' do 
    visit new_user_path
    expect(page).to have_content "Username:"
  end

  feature 'post signup process' do
    scenario 'username appears correctly after signup', js: true do
      visit new_user_path
      fill_in 'user-username', :with => 'koopa'
      fill_in 'user-password', :with => 'password'
      click_on "Sign Up"
      expect(page).to have_content 'koopa'
    end

    scenario 'users are brought to their profile page after signup', js: true do
      visit new_user_path
      fill_in 'user-username', :with => 'goomba'
      fill_in 'user-password', :with => 'password'
      click_on "Sign Up"
      expect(page).to have_content 'Update Info'
    end
  end
end

feature 'sign in' do
  scenario 'has a page to sign up' do 
    visit new_session_path
    expect(page).to have_content "Demo Account"
  end

  feature 'guest log in' do
    before(:each) do
      User.create!({ username: 'Mario', password: 'mari0passw0rd'})
      User.create!({ username: 'Bowser', password: 'bows3rpassw0rd'})
    end
    
    scenario 'guests can log in as mario', js: true do
      visit new_session_path
      click_on 'demo-show-button'
      click_on 'm-demo-btn'
      expect(page).to_not have_content 'Demo Account'
      expect(page).to have_content 'Mario'
    end

    scenario 'guests can log in as bowser', js: true do
      visit new_session_path
      click_on 'demo-show-button'
      click_on 'b-demo-btn'
      expect(page).to_not have_content 'Demo Account'
      expect(page).to have_content 'Bowser'
    end
  end
end

