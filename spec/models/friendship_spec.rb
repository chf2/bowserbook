require 'rails_helper'

RSpec.describe Friendship, type: :model do
  describe 'validations' do
    it { should validate_presence_of(:friender) }
    it { should validate_presence_of(:friended) }
  end

  describe 'associations' do
    it { should belong_to(:friender) }
    it { should belong_to(:friended) }
  end
end
