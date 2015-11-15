require 'rails_helper'

RSpec.describe Post, type: :model do
  describe 'validations' do
    it { should validate_presence_of(:author) }
    it { should validate_presence_of(:about) }
    it { should validate_presence_of(:body) }
    it { should validate_length_of(:body).is_at_most(255) }
  end

  describe 'associations' do
    it { should belong_to(:author) }
    it { should belong_to(:about) }
    it { should have_many(:comments) }
  end
end
