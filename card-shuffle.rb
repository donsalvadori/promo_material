require  'minitest/autorun'

#Note this code was written in Ruby 2.3.0 and the tests will only work on v2.0 and above

SUITS = %w(Spade Heart Club Diamond)

RANKS = { two: 2,
                three: 3,
                four: 4,
                five: 5,
                six: 6,
                seven: 7,
                eight: 8,
                nine: 9,
                ten: 10,
                J: 11,
                Q: 12,
                K: 13,
                A: 14}


class Card

  attr_accessor :rank, :suit

  def initialize(card_value, suit)
    @card_value = card_value
    @suit = suit
  end

  def to_s
    "#{@card_value} of #{@suit}"
  end

end



class Deck

  def initialize(deck=[])
    @deck = deck
  end

  def populate_deck
    RANKS.each do |key, val|
        SUITS.each do |suit|
            @deck << Card.new(key, suit).to_s
        end
    end
    return @deck
  end

end

#Note this has been implented in standard Ruby library since v1.9 but copied for showing purposes
class Array
  # knuth-fisher-yates shuffle algorithm
  def shuffle!
    n = length
    for i in 0...n
      r = rand(n-i)+i
      self[r], self[i] = self[i], self[r]
    end
    self
  end

  def shuffle
    dup.shuffle!
  end
end


d = Deck.new

ordered_deck = d.populate_deck
shuffled_deck = ordered_deck.shuffle

puts ordered_deck
puts "-------------------------------"
puts shuffled_deck

#low to high with A as the highest card (note I know in
#some games A can be both high and low but this is assuming linearity)


## Some Tests (not comprehensive but showing I can test, also use Rspec normally but wanted to show I know minitest)

class TestDeck < MiniTest::Unit::TestCase
    def setup
        @deck = Deck.new
    end

    def test_that_deck_can_populate
        assert_equal Deck.new.populate_deck , @deck.populate_deck
    end

    def test_that_deck_wont_populate
        refute_equals @deck, @deck.populate_deck
    end

    def test_that_deck_shuffles
        assert_equals Deck.new.shuffle, @deck.shuffle
    end

    def test_that_deck_wont_shuffle
        refute_equals Deck.new.populate_deck, @deck.shuffle
    end
end

