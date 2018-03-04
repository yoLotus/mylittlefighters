class Character < ApplicationRecord
  has_many :victories, class_name: 'Fight', foreign_key: 'winner_id'
  has_many :defeats, class_name: 'Fight', foreign_key: 'loser_id'

  has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  validates :name, :toughness, :power, presence: true
  validates :toughness, :power, numericality: {
              only_integer: true,
              greater_than_or_equal_to: 0,
              less_than_or_equal_to: 10
            }
end
