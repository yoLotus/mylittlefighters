json.extract! fight, :created_at
json.set! :winner, fight.winner.name
json.set! :loser, fight.loser.name
