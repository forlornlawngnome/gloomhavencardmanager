json.extract! character_scenario, :id, :character_id, :scenario_id, :health, :experience, :gold, :is_poison, :is_stun, :is_invisible, :is_strengthen, :is_wound, :is_immobilize, :is_disarm, :is_muddle, :created_at, :updated_at
json.url character_scenario_url(character_scenario, format: :json)
