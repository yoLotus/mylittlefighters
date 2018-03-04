IMAGES_FIXTURE_ROOT = Rails.root.join('spec/fixtures/images')

FactoryBot.define do
  factory :character do
    name {
      [
        'Xena',
        'Dark Vador',
        'The Warrior',
        'Gargamel',
        'Jean-Paul',
        'Moriarty',
        'Lex Luthor',
        'The Joker',
        'Kitty'
      ].sample
    }
    toughness { (1..10).to_a.sample }
    power { (1..10).to_a.sample }
    avatar { File.new(IMAGES_FIXTURE_ROOT.join(IMAGES_FIXTURE_ROOT.entries[2..-1].sample).to_s) }
  end
end
