Rails.application.routes.draw do
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
end
