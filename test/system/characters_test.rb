require "application_system_test_case"

class CharactersTest < ApplicationSystemTestCase
  setup do
    @character = characters(:one)
  end

  test "visiting the index" do
    visit characters_url
    assert_selector "h1", text: "Characters"
  end

  test "creating a Character" do
    visit characters_url
    click_on "New Character"

    fill_in "Character class", with: @character.character_class_id
    fill_in "Check marks", with: @character.check_marks
    fill_in "Experience", with: @character.experience
    fill_in "Gold", with: @character.gold
    check "Is active" if @character.is_active
    fill_in "Level", with: @character.level
    fill_in "Name", with: @character.name
    fill_in "Notes", with: @character.notes
    fill_in "Party", with: @character.party_id
    fill_in "Personal quest", with: @character.personal_quest
    fill_in "Player", with: @character.player_id
    click_on "Create Character"

    assert_text "Character was successfully created"
    click_on "Back"
  end

  test "updating a Character" do
    visit characters_url
    click_on "Edit", match: :first

    fill_in "Character class", with: @character.character_class_id
    fill_in "Check marks", with: @character.check_marks
    fill_in "Experience", with: @character.experience
    fill_in "Gold", with: @character.gold
    check "Is active" if @character.is_active
    fill_in "Level", with: @character.level
    fill_in "Name", with: @character.name
    fill_in "Notes", with: @character.notes
    fill_in "Party", with: @character.party_id
    fill_in "Personal quest", with: @character.personal_quest
    fill_in "Player", with: @character.player_id
    click_on "Update Character"

    assert_text "Character was successfully updated"
    click_on "Back"
  end

  test "destroying a Character" do
    visit characters_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Character was successfully destroyed"
  end
end
