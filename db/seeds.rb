test_user = User.create(email: 'ruby@testing.com', password: 'testing123', password_confirmation: 'testing123')

apartments = [
  {
    street: '123 Street',
    city: 'SD',
    state: 'CA',
    manager: 'Joe',
    email: 'joe@testing.com',
    price: '1000',
    bedrooms: 2,
    bathrooms: 3,
    pets: 'all pets welcome'
  },
  {
    street: '456 Street',
    city: 'SD',
    state: 'CA',
    manager: 'Joe',
    email: 'joe@testing.com',
    price: '1000',
    bedrooms: 2,
    bathrooms: 3,
    pets: 'no snakes'
  }
]

apartments.each do |attribute|
  test_user.apartments.create attribute
end
