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
    end
    collection do 
      get 'setup'
      get 'choose'
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
  resources :parties
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get 'login', to: 'logins#new'
  get 'login/create', to: 'logins#create', as: :create_login
  get 'logout', to: 'logins#destroy', as: :logout

  get 'party_select', to: 'parties#party_select', as: :party_select
  post 'party_selected', to: 'parties#selected', as: :select_party

  post 'character_selected', to: 'characters#selected', as: :select_character

  root 'welcome#index'
end
