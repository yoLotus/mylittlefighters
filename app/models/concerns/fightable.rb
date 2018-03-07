require 'active_support/concern'

# I wanted to isolate all fight hability logic out of character
# model. Now it should be easy to make a better world by adding new
# models able to fight each other.
module Fightable
  extend ActiveSupport::Concern

  # Fight model must define which method correspond to its total health
  # before starting to fight and which method define its power value.
  # See the definition of the Character model as an example use.
  class_methods do
    def start_health_method method_name
      @@start_health_method = method_name
    end

    def power_method method_name
      @@power_method = method_name
    end
  end

  # health getter: take the current health if declared, otherwise call
  # the method required
  def health
    @health ||= self.send(@@start_health_method)
  end

  # Set the health when the character cures itsself or being attacked
  def health= value
    @health = value
    @health = 0 if @health < 0
    @health
  end

  def standing?
    health > 0
  end

  def take_potion
    health
    @health += 10
  end

  # Attack one of its friend
  def attacks opponent
    @temp_fight_power ||= send(@@power_method)
    opponent.health -= @temp_fight_power
  end

  # Reduce the power attack of the fighter
  def add_tiredness
    @temp_fight_power ||= send(@@power_method)
    @temp_fight_power -= 5
    @tired = true
  end

  # Resume back the power attack of the fighter
  def remove_tiredness
    @tired = false
    @temp_fight_power = send(@@power_method)
  end

  def tired?
    # a fighter does not start its fight tired
    @tired ||= false
  end
end
