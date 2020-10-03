require "application_system_test_case"

class AttackCardsPerksTest < ApplicationSystemTestCase
  setup do
    @attack_cards_perk = attack_cards_perks(:one)
  end

  test "visiting the index" do
    visit attack_cards_perks_url
    assert_selector "h1", text: "Attack Cards Perks"
  end

  test "creating a Attack cards perk" do
    visit attack_cards_perks_url
    click_on "New Attack Cards Perk"

    fill_in "Attack card", with: @attack_cards_perk.attack_card_id
    fill_in "Perk", with: @attack_cards_perk.perk_id
    click_on "Create Attack cards perk"

    assert_text "Attack cards perk was successfully created"
    click_on "Back"
  end

  test "updating a Attack cards perk" do
    visit attack_cards_perks_url
    click_on "Edit", match: :first

    fill_in "Attack card", with: @attack_cards_perk.attack_card_id
    fill_in "Perk", with: @attack_cards_perk.perk_id
    click_on "Update Attack cards perk"

    assert_text "Attack cards perk was successfully updated"
    click_on "Back"
  end

  test "destroying a Attack cards perk" do
    visit attack_cards_perks_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Attack cards perk was successfully destroyed"
  end
end
