require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  let(:user) do
    User.create email: 'sarah@test.com', password: '123456', password_confirmation: '123456'
  end

  # -----index-----
  describe "GET /index" do
    it 'gets all the apartments' do
      Apartment.create street: '221c Baker Street', city: 'London', state: 'England', manager: 'Ms. Hudson', email: 'mzhud@email.com', price: '1000', bedrooms: 2, bathrooms: 2, pets: 'no', user_id: user.id

      get '/apartments'

      apartments = JSON.parse(response.body)
      expect(apartments.length).to eq 1
      expect(response).to have_http_status(200)

      apartment = apartments.first
      expect(apartment['street']).to eq '221c Baker Street'
      expect(apartment['city']).to eq 'London'
      expect(apartment['state']).to eq 'England'
      expect(apartment['manager']).to eq 'Ms. Hudson'
      expect(apartment['email']).to eq 'mzhud@email.com'
    end
  end

    # create

    describe "POST /apartments" do
      it 'creates a new apartment' do
      apartment_params = {
        apartment: {
        street: 'hickey',
        city: 'sd',
        state: 'ca',
        manager: 'hickey',
        email: 'hickey@hickey.com',
        price: '10000',
        bedrooms: 2,
        bathrooms: 3,
        pets: 'no',
        user_id: user.id
      }
    }
    post '/apartments', params: apartment_params
    apartment_response= JSON.parse(response.body)
    expect(apartment_response['street']).to eq 'hickey'
    expect(apartment_response['email']).to eq 'hickey@hickey.com'
    expect(apartment_response['bathrooms']).to eq 3
   end

   it "can't create an apartment without manager" do
      apartment_params = {
        apartment: {
          street: 'hickey',
          city: 'sd',
          state: 'ca',
          manager: '',
          email: 'hickey@hickey.com',
          price: '10000',
          bedrooms: 2,
          bathrooms: 3,
          pets: 'no',
          user_id: user.id
        }
      }

    post '/apartments', params: apartment_params
    apartment_errors = JSON.parse(response.body)
    expect(response).to have_http_status(422)
    json = JSON.parse(response.body)
    expect(json['manager']).to include "can't be blank"
    end
    it 'can not create an apartment without bathrooms' do
      apartment_params = {
        apartment: {
          street: 'hickey',
          city: 'sd',
          state: 'ca',
          manager: '',
          email: 'hickey@hickey.com',
          price: '10000',
          bedrooms: 2,
          bathrooms: '',
          pets: 'no',
          user_id: user.id
        }
      }
      post '/apartments', params: apartment_params
      json = JSON.parse(response.body)
      expect(json['bathrooms']).to include "can't be blank"
    end
    it 'can not create an apartment without a city' do
      apartment_params = {
        apartment: {
          street: 'hickey',
          city: '',
          state: 'ca',
          manager: '',
          email: 'hickey@hickey.com',
          price: '10000',
          bedrooms: 2,
          bathrooms: '',
          pets: 'no',
          user_id: user.id
        }
      }
      post '/apartments', params: apartment_params
      json = JSON.parse(response.body)
      expect(json['city']).to include "can't be blank"
     end
  end

    # update-----

    describe 'PUT /apartments' do
      it 'edits an apartment' do
      apartment = Apartment.create(
        street: 'hickey',
        city: 'sd',
        state: 'ca',
        manager: 'hickey',
        email: 'hickey@hickey.com',
        price: '10000',
        bedrooms: 2,
        bathrooms: 2,
        pets: 'no',
        user_id: user.id
      )

      update_apartment_params = {
        apartment: {
          street: 'kylie blvd',
          city: 'esco',
          state: 'ca',
          manager: 'hickey',
          email: 'hickey@hickey.com',
          price: '60000',
          bedrooms: 1,
          bathrooms: 5,
          pets: 'yes',
          user_id: user.id
        }
      }
    patch "/apartments/#{apartment.id}", params: update_apartment_params
    
    updated_apartment_response = JSON.parse(response.body)
    expect(updated_apartment_response['street']).to eq "kylie blvd"
    expect(updated_apartment_response['price']).to eq '60000'
    expect(updated_apartment_response['pets']).to eq "yes"
    end
  end

  # DELETE-------------

    describe 'DELETE /apartments' do
      it 'deletes an apartment' do
        apartment_params ={
          apartment: {
        street: 'hickey',
        city: 'sd',
        state: 'ca',
        manager: 'hickey',
        email: 'hickey@hickey.com',
        price: '10000',
        bedrooms: 2,
        bathrooms: 2,
        pets: 'no',
        user_id: user.id
      }
    }
      post '/apartments', params: apartment_params
      apartment = Apartment.first
      delete "/apartments/#{apartment.id}"
      apartments = Apartment.all

      expect(apartments.length).to eq 0 
      expect(apartments).to be_empty
      expect(response).to have_http_status(200)
    end
  end
end