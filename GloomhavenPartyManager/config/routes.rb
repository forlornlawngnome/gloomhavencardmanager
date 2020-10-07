Rails.application.routes.draw do
  resources :players_parties
  get 'welcome/index'
  resources :active_attack_cards
  resources :character_rounds
  resources :rounds
  resources :character_scenarios
  resources :scenarios
  resources :items
  resources :characters
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

  root 'welcome#index'
end
