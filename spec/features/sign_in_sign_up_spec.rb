require 'rails_helper'

feature 'signup' do
  scenario 'has a page to sign up' do 
    visit new_user_url
    expect(page).to have_content "Sign Up"
  end

  scenario 'post signup process' do 
    before(:each) do 
      visit new_user_url
      fill_in 'user-username', with: 'koopa'
      fill_in 'user-password', with: 'password'
      click_on 'Sign Up'
    end

    scenario 'username appears correctly after signup' do
      expect(page).to have_content 'koopa'
    end

    scenario 'users are brought to their profile page after signup' do
      expect(page).to have_content 'Update Info'
    end
  end
end