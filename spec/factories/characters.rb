FactoryBot.define do
  factory :character do
    name ['Xena', 'Dark Vador', 'The Warrior', 'Gargamel', 'Jean-Paul'].sample
    toughness (1..10).to_a.sample
    power (1..10).to_a.sample
  end
end
