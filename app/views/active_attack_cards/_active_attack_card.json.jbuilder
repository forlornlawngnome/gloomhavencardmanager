json.extract! active_attack_card, :id, :attack_card_id, :character_id, :is_drawn, :created_at, :updated_at
json.url active_attack_card_url(active_attack_card, format: :json)
