json.extract! character, :id, :name, :toughness, :power, :created_at, :updated_at
json.set! :avatar_thumb_url, character.avatar.url(:thumb)
json.url character_url(character, format: :json)
