json.extract! card, :id, :name, :initiative, :level, :image, :character_class_id, :created_at, :updated_at
json.url card_url(card, format: :json)
