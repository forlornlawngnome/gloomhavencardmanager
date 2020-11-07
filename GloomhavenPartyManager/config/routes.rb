Rails.application.routes.draw do
  resources :players_parties do
    put 'party_add', on: :collection
  end
  get 'welcome/index'
  resources :active_attack_cards
  resources :character_rounds do
    member do
      put 'choose_abilities'
      put 'ability_play'
      put 'recover_lost'
      put 'discard_actions'
      put 'avoid_damage_active'
      put 'items'
      put 'active_cards'
      put 'long_rest'
    end
  end
  resources :rounds
  resources :character_scenarios do
    member do
      delete 'remove_character'
      get 'scenario_setup'
      put 'setup_character'
      get 'play_round'
      put 'update_loot'
    end
  end
  resources :scenarios do
    member do
      get 'play'
      put 'reset_characters'
      get 'create_first_round'
      put 'finish_scenario'
      put 'next_round'
      put 'short_rest'
    end
  end

  resources :items do
    put 'unlock', on: :collection
  end
  resources :characters do
    member do
      get 'levelup'
      get 'play'
      get 'manage'
      put 'levelup_complete'
      get 'retire'
      get 'add_check'
      get 'add_perk'
      put 'apply_perk'
      put 'modify_gold'
      get 'shop'
      put 'buy_items'
      get 'sell_item'
      get 'donate_temple'
      get 'card_enhancements'
      put 'buy_enhancements'
      put 'edit_notes'
    end
    collection do
      get 'select_class'
      get 'setup'
    end
  end
  resources :players
  resources :attack_cards_perks
  resources :attack_cards
  resources :perks
  resources :ability_cards_enhancements
  resources :enhancements
  resources :ability_cards
  resources :character_classes do
    put 'unlock', on: :collection
  end
  resources :parties do
    member do
      get 'manage'
      get 'add_prosperity'
      get 'add_reputation'
      get 'remove_prosperity'
      get 'remove_reputation'
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get 'login', to: 'logins#new'
  get 'login/create', to: 'logins#create', as: :create_login
  get 'logout', to: 'logins#destroy', as: :logout

  get 'party_select', to: 'parties#party_select', as: :party_select
  post 'party_selected', to: 'parties#selected', as: :select_party

  post 'character_selected', to: 'characters#selected', as: :select_character
  get 'short_rest', to: 'character_rounds#short_rest', as: :short_rest

  root 'welcome#index'
end
