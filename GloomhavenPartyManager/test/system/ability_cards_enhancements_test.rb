require "application_system_test_case"

class AbilityCardsEnhancementsTest < ApplicationSystemTestCase
  setup do
    @ability_cards_enhancement = ability_cards_enhancements(:one)
  end

  test "visiting the index" do
    visit ability_cards_enhancements_url
    assert_selector "h1", text: "Ability Cards Enhancements"
  end

  test "creating a Ability cards enhancement" do
    visit ability_cards_enhancements_url
    click_on "New Ability Cards Enhancement"

    fill_in "Ability card", with: @ability_cards_enhancement.ability_card_id
    fill_in "Enhancement", with: @ability_cards_enhancement.enhancement_id
    check "Is top" if @ability_cards_enhancement.is_top
    click_on "Create Ability cards enhancement"

    assert_text "Ability cards enhancement was successfully created"
    click_on "Back"
  end

  test "updating a Ability cards enhancement" do
    visit ability_cards_enhancements_url
    click_on "Edit", match: :first

    fill_in "Ability card", with: @ability_cards_enhancement.ability_card_id
    fill_in "Enhancement", with: @ability_cards_enhancement.enhancement_id
    check "Is top" if @ability_cards_enhancement.is_top
    click_on "Update Ability cards enhancement"

    assert_text "Ability cards enhancement was successfully updated"
    click_on "Back"
  end

  test "destroying a Ability cards enhancement" do
    visit ability_cards_enhancements_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Ability cards enhancement was successfully destroyed"
  end
end
