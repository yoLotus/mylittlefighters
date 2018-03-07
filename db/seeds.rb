# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts 'Fill the database with characters...'

5.times do
  FactoryBot.create(:character)
end

puts '...and make them fights'

fighters = Character.all.shuffle

fighters.each do |fighter|
  # remove current loop fighter to not make him fight against himself
  opponents = fighters.reject { |f| fighter.id == f.id }

  opponents.each do |opponent|
    FightService.new(fighter.id, opponent.id).run
  end
end

puts 'done ! Run `rails s` and visit 0.0.0.0:3000'
