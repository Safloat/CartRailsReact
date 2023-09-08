# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Beverage = Category.create!(title: "Beverage")

Pharmacy = Category.create!(title: "Pharmacy")

  Item.create!(
    [
      {
        title: "CocaCola",
        category: Beverage,
        price: 50
             
      },
      {
        title: "7up",
        category: Beverage,
        price: 50
        
      },
      {
        title: "Orange Juice",
        category: Beverage,
        price: 40
      },
      {
        title: "Coffee",
        category: Beverage,
        price: 80
      }
    ]
  )