require "application_system_test_case"

class AttackCardsTest < ApplicationSystemTestCase
  setup do
    @attack_card = attack_cards(:one)
  end

  test "visiting the index" do
    visit attack_cards_url
    assert_selector "h1", text: "Attack Cards"
  end

  test "creating a Attack card" do
    visit attack_cards_url
    click_on "New Attack Card"

    fill_in "Character class", with: @attack_card.character_class_id
    fill_in "Image", with: @attack_card.image
    fill_in "Name", with: @attack_card.name
    check "Reshuffle" if @attack_card.reshuffle
    fill_in "Value", with: @attack_card.value
    click_on "Create Attack card"

    assert_text "Attack card was successfully created"
    click_on "Back"
  end

  test "updating a Attack card" do
    visit attack_cards_url
    click_on "Edit", match: :first

    fill_in "Character class", with: @attack_card.character_class_id
    fill_in "Image", with: @attack_card.image
    fill_in "Name", with: @attack_card.name
    check "Reshuffle" if @attack_card.reshuffle
    fill_in "Value", with: @attack_card.value
    click_on "Update Attack card"

    assert_text "Attack card was successfully updated"
    click_on "Back"
  end

  test "destroying a Attack card" do
    visit attack_cards_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Attack card was successfully destroyed"
  end
end
