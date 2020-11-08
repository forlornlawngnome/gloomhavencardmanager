require "application_system_test_case"

class CharacterRoundsTest < ApplicationSystemTestCase
  setup do
    @character_round = character_rounds(:one)
  end

  test "visiting the index" do
    visit character_rounds_url
    assert_selector "h1", text: "Character Rounds"
  end

  test "creating a Character round" do
    visit character_rounds_url
    click_on "New Character Round"

    fill_in "Card 1", with: @character_round.card_1_id
    fill_in "Card 2", with: @character_round.card_2_id
    fill_in "Character scenario", with: @character_round.character_scenario_id
    check "Long rest" if @character_round.long_rest
    fill_in "Round", with: @character_round.round_id
    check "Short rest" if @character_round.short_rest
    click_on "Create Character round"

    assert_text "Character round was successfully created"
    click_on "Back"
  end

  test "updating a Character round" do
    visit character_rounds_url
    click_on "Edit", match: :first

    fill_in "Card 1", with: @character_round.card_1_id
    fill_in "Card 2", with: @character_round.card_2_id
    fill_in "Character scenario", with: @character_round.character_scenario_id
    check "Long rest" if @character_round.long_rest
    fill_in "Round", with: @character_round.round_id
    check "Short rest" if @character_round.short_rest
    click_on "Update Character round"

    assert_text "Character round was successfully updated"
    click_on "Back"
  end

  test "destroying a Character round" do
    visit character_rounds_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Character round was successfully destroyed"
  end
end
