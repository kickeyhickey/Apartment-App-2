# require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  describe "GET /index" do
   it "gets a list of apts" do
    Apartment.create(
      street: 'rabble',
      city: 'dabble',
      state: 'CA',
      manager: 'me',
      email: 'you@you',
      price: 'too much',
      bedrooms: 1,
      bathrooms: 2,
      pets: 'NO'
       )
       get '/apartments'

       apartment = JSON.parse(response.body)
       expect(response).to have_http_status(200)
  end
end
end
