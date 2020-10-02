require "application_system_test_case"

class AbilityCardsTest < ApplicationSystemTestCase
  setup do
    @ability_card = ability_cards(:one)
  end

  test "visiting the index" do
    visit ability_cards_url
    assert_selector "h1", text: "Ability Cards"
  end

  test "creating a Ability card" do
    visit ability_cards_url
    click_on "New Ability Card"

    check "Active" if @ability_card.active
    check "Available" if @ability_card.available
    fill_in "Character class", with: @ability_card.character_class_id
    check "Chosen" if @ability_card.chosen
    fill_in "Counter", with: @ability_card.counter
    fill_in "Image", with: @ability_card.image
    fill_in "Initiative", with: @ability_card.initiative
    fill_in "Level", with: @ability_card.level
    fill_in "Max counter", with: @ability_card.max_counter
    fill_in "Name", with: @ability_card.name
    fill_in "Status", with: @ability_card.status
    click_on "Create Ability card"

    assert_text "Ability card was successfully created"
    click_on "Back"
  end

  test "updating a Ability card" do
    visit ability_cards_url
    click_on "Edit", match: :first

    check "Active" if @ability_card.active
    check "Available" if @ability_card.available
    fill_in "Character class", with: @ability_card.character_class_id
    check "Chosen" if @ability_card.chosen
    fill_in "Counter", with: @ability_card.counter
    fill_in "Image", with: @ability_card.image
    fill_in "Initiative", with: @ability_card.initiative
    fill_in "Level", with: @ability_card.level
    fill_in "Max counter", with: @ability_card.max_counter
    fill_in "Name", with: @ability_card.name
    fill_in "Status", with: @ability_card.status
    click_on "Update Ability card"

    assert_text "Ability card was successfully updated"
    click_on "Back"
  end

  test "destroying a Ability card" do
    visit ability_cards_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Ability card was successfully destroyed"
  end
end
