require "application_system_test_case"

class PlayersPartiesTest < ApplicationSystemTestCase
  setup do
    @players_party = players_parties(:one)
  end

  test "visiting the index" do
    visit players_parties_url
    assert_selector "h1", text: "Players Parties"
  end

  test "creating a Players party" do
    visit players_parties_url
    click_on "New Players Party"

    fill_in "Party", with: @players_party.party_id
    fill_in "Player", with: @players_party.player_id
    click_on "Create Players party"

    assert_text "Players party was successfully created"
    click_on "Back"
  end

  test "updating a Players party" do
    visit players_parties_url
    click_on "Edit", match: :first

    fill_in "Party", with: @players_party.party_id
    fill_in "Player", with: @players_party.player_id
    click_on "Update Players party"

    assert_text "Players party was successfully updated"
    click_on "Back"
  end

  test "destroying a Players party" do
    visit players_parties_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Players party was successfully destroyed"
  end
end
