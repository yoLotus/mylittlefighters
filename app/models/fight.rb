class Fight < ApplicationRecord
  belongs_to :winner, class_name: 'Character'
  belongs_to :loser, class_name: 'Character'

  # virtual attributes
  attr_accessor :pretendors


  def run
    self.winner = pretendors.first
    self.loser = pretendors.second
    save
    self
  end
end
