require 'rails_helper'

RSpec.describe Apartment, type: :model do
    let(:user){User.create email: 'kickey@testing.com', password: 'testing123', password_confirmation: '12345'}

    it 'should have  a valid street' do
      apartment = Apartment.create street: 'hickey', city: 'sd', state: 'ca', manager: '', email: 'hickey@hickey.com', price: '1000', bedrooms: 2, bathrooms: 2, pets: 'no'
      expect(apartment.errors[:manager]).to include "can't be blank"
    end
    it 'should have  a valid user' do
        apartment = Apartment.create street: 'hickey', city: 'sd', state: 'ca', manager: '', email: 'hickey@hickey.com', price: '1000', bedrooms: 2, bathrooms: 2, pets: 'no'
        expect(apartment.errors[:user]).to include "must exist"
  end
end