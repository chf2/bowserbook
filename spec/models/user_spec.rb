require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:bowserbookuser) do
    User.new({
      username: 'bowserbookuser',
      password: 'p@ssw0rd',
    })
  end

  describe 'validations' do
    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_presence_of(:session_token) }
    it { should validate_length_of(:password).is_at_least(6) }
    it { should validate_length_of(:username).is_at_most(16) }
  end

  describe 'associations' do
    it { should have_many(:posts) }
    it { should have_many(:wall_posts) }
    it { should have_many(:comments) }
    it { should have_many(:sent_messages) }
    it { should have_many(:received_messages) }
    it { should have_many(:notifications) }
  end

  describe '#short_username' do
    it 'shortens long usernames' do
      expect(bowserbookuser.short_username).to eq('bowserbook...')
    end
  end
end
