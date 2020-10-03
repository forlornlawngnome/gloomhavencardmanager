require "application_system_test_case"

class ActiveAttackCardsTest < ApplicationSystemTestCase
  setup do
    @active_attack_card = active_attack_cards(:one)
  end

  test "visiting the index" do
    visit active_attack_cards_url
    assert_selector "h1", text: "Active Attack Cards"
  end

  test "creating a Active attack card" do
    visit active_attack_cards_url
    click_on "New Active Attack Card"

    fill_in "Attack card", with: @active_attack_card.attack_card_id
    fill_in "Character", with: @active_attack_card.character_id
    check "Is drawn" if @active_attack_card.is_drawn
    click_on "Create Active attack card"

    assert_text "Active attack card was successfully created"
    click_on "Back"
  end

  test "updating a Active attack card" do
    visit active_attack_cards_url
    click_on "Edit", match: :first

    fill_in "Attack card", with: @active_attack_card.attack_card_id
    fill_in "Character", with: @active_attack_card.character_id
    check "Is drawn" if @active_attack_card.is_drawn
    click_on "Update Active attack card"

    assert_text "Active attack card was successfully updated"
    click_on "Back"
  end

  test "destroying a Active attack card" do
    visit active_attack_cards_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Active attack card was successfully destroyed"
  end
end
