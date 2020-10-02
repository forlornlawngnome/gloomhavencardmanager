json.extract! ability_card, :id, :name, :initiative, :level, :image, :character_class_id, :active, :counter, :max_counter, :status, :available, :chosen, :created_at, :updated_at
json.url ability_card_url(ability_card, format: :json)
