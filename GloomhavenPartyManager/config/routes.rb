Rails.application.routes.draw do
  resources :players_parties
  get 'welcome/index'
  resources :active_attack_cards
  resources :character_rounds
  resources :rounds do
    put 'scenario_new', on: :collection
  end
  resources :character_scenarios
  resources :scenarios do
    member do
      get 'play'
      put 'reset_characters'
    end
  end

  resources :items
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
      get 'bank'
      put 'modify_gold'
      get 'shop'
      put 'buy_items'
      get 'sell_item'
      get 'donate_temple'
      get 'card_enhancements'
      put 'buy_enhancements'
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
  resources :character_classes
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

  root 'welcome#index'
end
