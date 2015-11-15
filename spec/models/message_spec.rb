require 'rails_helper'

RSpec.describe Message, type: :model do
  subject(:message) do 
    Message.new({ 
      sender_id: 1, 
      recipient_id: 2,
      body: "This is a test message. This is a test message. This is a test message."
    })
  end

  let(:short_message) do
    Message.new({
      sender_id: 1, 
      recipient_id: 2,
      body: "Short message."
    })
  end

  describe 'validations' do
    it { should validate_presence_of(:sender) }
    it { should validate_presence_of(:recipient) }
    it { should validate_presence_of(:body) }
  end

  describe 'associations' do
    it { should belong_to(:sender) }
    it { should belong_to(:recipient) }
  end

  describe '#preview' do
    it 'truncates long messages' do 
      expect(message.preview).to eq("This is a test me...")
    end

    it 'does not truncate short messages' do
      expect(short_message.preview).to eq("Short message.")
    end
  end
end
