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
    pictures: 'https://images1.apartments.com/i2/rqqajQZet7EN8srK-QV16jiFR7HZZQk2ZG78gjuP4Us/117/la-scala-apartments-san-diego-ca-other.jpg'
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
    pets: 'no snakes',
    pictures: 'https://images1.apartments.com/i2/K2JBTPd9KDE_dMwah4DYjjYfXllTd22q2YbxOZQoJDU/117/avia-la-jolla-ii-senior-55-community-san-diego-ca-building-photo.jpg'
  }
]

apartments.each do |attribute|
  test_user.apartments.create attribute
end
