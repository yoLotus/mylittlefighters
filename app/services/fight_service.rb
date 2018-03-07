class FightService
  attr_accessor :character1, :character2
  def initialize(character_id_1, character_id_2)
    @character1 = Character.find(character_id_1)
    @character2 = Character.find(character_id_2)
    @fighters = [@character1, @character2]
  end

  # A fight keeps going on until one of the two characters has its
  # toughness points equal or lower than 0. While loop lets the 2
  # characters attack each other. If both of them have lose all they
  # toughness points, let the queen chose the winner.
  def run
    # Maybe the first time of my life I use while loop in ruby. Is
    # there a better way ?
    while show_must_go_on?
      prepare_for_round
      make_round
    end

    all_opponents_kos? ? make_the_queen_choose : set_verdict
    save_fight!
  end

  private

  def make_round
    @character1.attacks @character2
    @character2.attacks @character1
  end

  def show_must_go_on?
    @fighters.map(&:standing?).all?
  end

  def prepare_for_round
    try_to_get_potion
    handle_tiredness
  end

  def try_to_get_potion
    @fighters.each{ |f| f.take_potion if Random.rand(100) < 5 }
  end

  def handle_tiredness
    @fighters.each{ |f| f.add_tiredness if Random.rand(100) < 20 }
    @fighters.each{ |f| f.remove_tiredness if Random.rand(100) > 80 }
  end

  ###########
  # VERDICT #
  ###########

  def all_opponents_kos?
    [@character1, @character2].map(&:health).sum == 0
  end

  def make_the_queen_choose
    @winner, @loser = [@character1, @character2].shuffle
  end

  def set_verdict
    @loser, @winner = [@character1, @character2].sort{ |c1, c2| c1.health <=> c2.health }
  end

  def save_fight!
    Fight.create(winner: @winner, loser: @loser)
  end
end
