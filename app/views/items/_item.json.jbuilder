json.extract! item, :id, :name, :number, :image, :character_id, :is_active, :counter, :counter_max, :usage_state, :used, :item_type, :negative_effects, :created_at, :updated_at
json.url item_url(item, format: :json)
